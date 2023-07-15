import styles from "../styles/Home.module.css";
import { Card } from "antd";
import { message } from "antd";
import { getSession } from "next-auth/react";
import Moralis from "moralis";
import axios from "axios";
import { ethers, parseEther } from "ethers";

function members({ nft, expiry }) {
  // Get the message API and context holder from antd
  const [messageApi, contextHolder] = message.useMessage();

  // Function to handle adding an extra month to the membership
  async function addMonth() {
    // Create an ethers BrowserProvider instance
    const provider = new ethers.BrowserProvider(window.ethereum);
    // Request access to the user's Ethereum accounts
    await provider.send("eth_requestAccounts", []);
    // Get the connected wallet signer
    const connectedWallet = await provider.getSigner();

    // Send a transaction to add an extra month
    let tx = await connectedWallet.sendTransaction({
      to: "0x0D411733722ABD798579e5478503414BfC467907",
      value: parseEther("0.1"),
    });

    // Wait for the transaction to be confirmed and obtain the receipt
    tx.wait().then(async (r) => {
      // Send a GET request to extend the membership for an extra month
      const res = await axios.get(`http://localhost:3001/extraMonth`, {
        params: { id: nft.token_id, expiry: expiry },
      });

      // Display success message using the message API
      messageApi.success("Subscription Extended - Reloading Page in 4 seconds.");

      // Reload the page after 4 seconds
      setTimeout(() => {
        location.reload();
      }, 4000);
    });
  }

  return (
    <>
      {contextHolder}
      <img className={styles.bannerImg} alt="bannerImg" src="/pitch.jpg" />
      <div className={styles.exclusiveContent}>
        <div className={styles.creatorInfo}>
          <img
            src="/messi.png"
            alt="creator"
            className={styles.creatorProfileImg}
          />
          <div className={styles.creatorProfileName}>Lionel Messi</div>
          <div className={styles.creatorProfileOccupation}>Football Player</div>
          <img className={styles.socials} alt="socials" src="/socials.png" />
          <div className={styles.numOfMembers}>10M</div>
          <div className={styles.numOfMembersTitle}>Members</div>
        </div>
        <div className={styles.feed}>
          <div className={styles.feedTitle}>Exclusive Feed</div>
          <div className={styles.feedItems}>
            <h2 style={{ textAlign: "left", width: "100%" }}>
              World Cup 2022
            </h2>
            {/* Embed YouTube video */}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ZmKy_fnRM_E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.feedItems}>
            <h2 style={{ textAlign: "left", width: "100%" }}>
              All 32 Goals For PSG
            </h2>
            {/* Embed YouTube video */}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bth3AQSqd7I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={styles.subInfo}>
          <div className={styles.timeLeft}>Member Status</div>
          {/* Render membership card */}
          <Card title="Member" className={styles.yourMembership}>
            <div className={styles.cardTitle}>Number</div>
            <div>{nft.token_id}</div>
            <div className={styles.cardTitle}>Expiry</div>
            <div>{new Date(expiry).toLocaleString()}</div>
            <div className={styles.cardTitle}>Scope</div>
            <div>Full Access to Lionel Messi's exclusive content.</div>
            {/* Button to add 1 month to the membership */}
            <div className={styles.extend} onClick={addMonth}>
              Add 1 Month
            </div>
            {/* Button to view on Opensea */}
            <div
              className={styles.opensea}
              onClick={() => {
                window.open(
                  `https://testnets.opensea.io/assets/mumbai/0xbddbF0Fc68982C307030A0D0053CF398D51d4184/${nft.token_id}`
                );
              }}
            >
              View on Opensea
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Get the session using getSession
  const session = await getSession(context);

  // If session is not available, redirect to the homepage
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    // Initialize Moralis with the provided API key
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  } catch (e) {
    console.log("Moralis started already.");
  }

  // Fetch the NFT owners from Moralis EvmApi
  const response = await Moralis.EvmApi.nft.getNFTOwners({
    chain: "0x13881",
    format: "decimal",
    mediaItems: false,
    address: "0xbddbF0Fc68982C307030A0D0053CF398D51d4184",
  });

  // Find the NFT owned by the current user from the response
  const nft = response.raw.result.find(
    (e) => e.owner_of.toLowerCase() === session.user.address.toLowerCase()
  );

  // If a valid NFT is found, fetch its metadata and check for expiry
  if (nft) {
    const metadata = await axios.get(nft.token_uri);

    // If the membership is still valid, pass the expiry and NFT data as props
    if (metadata.data.attributes[0].value >= Date.now()) {
      return {
        props: {
          expiry: metadata.data.attributes[0].value,
          nft: nft,
        },
      };
    }
  } else {
    console.log("No valid subscription");
  }

  // If no valid subscription is found or user is not authenticated, redirect to the homepage
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

export default members;
