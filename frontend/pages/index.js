import styles from "../styles/Home.module.css";
import { message } from "antd";
import { useRouter } from "next/router";
import { ethers, parseEther } from "ethers";
import axios from "axios";
import { useSession } from "next-auth/react";

function App() {
  // Get the message API and context holder from antd
  const [messageApi, contextHolder] = message.useMessage();
  // Get the router object from Next.js
  const { push } = useRouter();
  // Get the session status using the useSession hook from next-auth/react
  const { status } = useSession();

  // Function to handle NFT purchase
  async function purchaseNFT() {
    // Check if the user is authenticated
    if (status === "authenticated") {
      // Create an ethers BrowserProvider instance
      const provider = new ethers.BrowserProvider(window.ethereum);
      // Request access to the user's Ethereum accounts
      await provider.send("eth_requestAccounts", []);
      // Get the connected wallet signer
      const connectedWallet = await provider.getSigner();

      // Create a contract instance of DeBlogContract
      const DeBlogContract = new ethers.Contract(
        "0xbddbF0Fc68982C307030A0D0053CF398D51d4184",
        ["function safeMint(address to, string memory uri) public payable"],
        connectedWallet
      );

      // Call the safeMint function to purchase the NFT
      const purchase = await DeBlogContract.safeMint(
        connectedWallet.address,
        "",
        { value: parseEther("0.1") }
      );

      // Wait for the purchase transaction to be confirmed and obtain the receipt
      purchase.wait().then(async (receipt) => {
        console.log(receipt);
        console.log(receipt.logs[2].topics[3]);

        // Extract the ID of the NFT from the receipt
        const id = parseInt(receipt.logs[2].topics[3]);

        // Send a GET request to extend the membership for an extra month
        const res = await axios.get(`http://localhost:3001/extraMonth`, {
          params: { id: id },
        });

        // Display success message using the message API
        messageApi.success("NFT Purchased");
      });
    } else {
      // Display warning message if the user is not authenticated
      messageApi.warning("Please connect wallet first");
    }
  }

  return (
    <>
      {contextHolder}
      <main className={styles.main}>
        <div className={styles.firstRow}>
          <div className={styles.slogan}>
            <div className={styles.line} />
            <div className={styles.sloganText}>
              <div>Messi</div>
              <div>Exclusive</div>
              <div>Content</div>
            </div>
          </div>
          <div className={styles.creatorFrame}>
            <img
              src="/messi.png"
              alt="creator"
              className={styles.creatorImg}
            />
            <div className={styles.creatorName}>Messi</div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <p className={styles.infoPara}>
            Become a member and gain access to my exclusive content.
          </p>
          <button
            className={styles.infoButton}
            style={{ backgroundColor: "#EB5254" }}
            onClick={purchaseNFT}
          >
            Become A Member
          </button>
          <button
            className={styles.infoButton}
            style={{ backgroundColor: "black" }}
            onClick={() => push("/members")}
          >
            Already A Member?
          </button>
        </div>
        <div className={styles.thirdRow}>
          <div className={styles.bottomStyling} />
        </div>
      </main>
    </>
  );
}

export default App;
