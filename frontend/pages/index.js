import styles from "../styles/Home.module.css";
import { message } from "antd";
import { useRouter } from "next/router";
import { ethers, parseEther } from "ethers";
import axios from "axios";
import { useSession } from "next-auth/react";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const { push } = useRouter();
  const { status } = useSession();

  async function purchaseNFT() {

    if(status === "authenticated"){

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const connectedWallet = await provider.getSigner();

      const PatronContract = new ethers.Contract(
        "0xbddbF0Fc68982C307030A0D0053CF398D51d4184",
        ["function safeMint(address to, string memory uri) public payable"],
        connectedWallet
      ); 

      const purchase = await PatronContract.safeMint(
        connectedWallet.address, "", {value: parseEther("0.1")}
      )

      purchase.wait().then(async (receipt) => {
        console.log(receipt);
        console.log(receipt.logs[2].topics[3]);

        const id = parseInt(receipt.logs[2].topics[3]);

        const res = await axios.get(`http://localhost:3001/extraMonth`, {
          params: { id: id },
        });

        messageApi.success("NFT Purchased")
      })

    } else {
      messageApi.warning("please connect wallet first");
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