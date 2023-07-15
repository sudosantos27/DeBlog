import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Header() {
  // Get the router object from Next.js
  const { push } = useRouter();
  // Get the session status using the useSession hook from next-auth/react
  const { status } = useSession();

  // Function to handle wallet connection
  async function connectwalletHandler() {
    // Create an ethers BrowserProvider instance
    const provider = new ethers.BrowserProvider(window.ethereum);

    // Request access to the user's Ethereum accounts
    await provider.send("eth_requestAccounts", []);

    // Get the signer object from the provider
    const signer = await provider.getSigner();

    // Prepare the user data to be sent to the server
    const userData = { address: signer.address, chain: 80001 };

    // Send a POST request to the server to request a message
    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    // Retrieve the message from the server's response
    const message = data.message;

    // Sign the message using the signer
    let signature = await signer.signMessage(message);

    // Authenticate the user and obtain the callback URL using next-auth signIn
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/",
    });

    // Navigate back to the homepage using the router push function
    push("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftH}></div>
      <div className={styles.rightH}>
        {/* Render Connect/Disconnect button based on the session status */}
        {status === "authenticated" ? (
          <div className={styles.connectButton} onClick={() => signOut()}>
            Disconnect
          </div>
        ) : (
          <div className={styles.connectButton} onClick={connectwalletHandler}>
            Connect
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
