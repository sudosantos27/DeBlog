// Import necessary dependencies
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// Initialize Firebase Admin SDK with the provided service account credentials
const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

// Create a storage reference to the Firebase Storage bucket
const storageRef = admin.storage().bucket("gs://deblog-7c1e4.appspot.com");

// Function to upload metadata file to Firebase Storage
function uploadFile(tokenId, startDate) {
    // Define the file reference with the appropriate path in the bucket
    const fileRef = storageRef.file(`metadata/${tokenId}.json`);

    // Prepare the metadata JSON object
    const data = {
        attributes: [
            {
                trait_type: "expiry",
                value: Number(startDate) + 2592000000, // Add an extra month (30 days) to the start date
            },
        ],
        description: "Full access to Messi's exclusive content.",
        image: "https://firebasestorage.googleapis.com/v0/b/deblog-7c1e4.appspot.com/o/image%2Fmessi.jpeg?alt=media",
    };

    // Convert the metadata JSON object to a string
    const dataString = JSON.stringify(data);

    // Create a write stream to the file reference and write the metadata data
    const stream = fileRef.createWriteStream();
    stream.write(dataString);
    stream.end();

    // Handle error and finish events of the write stream
    stream.on("error", (error) => {
        console.error("Error updating patreon metadata: ", error);
    });

    stream.on("finish", () => {
        console.log("Patreon metadata updated successfully");
    });
}

// Handle GET request at /extraMonth endpoint
app.get("/extraMonth", async (req, res) => {
    const { query } = req;

    let startDate = Date.now();

    // If an expiry query parameter is provided, use it as the start date
    if (query.expiry) {
        startDate = query.expiry;
    }

    // Call the uploadFile function to upload the metadata file with the provided ID and start date
    uploadFile(query.id, startDate);

    // Send a success response
    return res.status(200).json({});
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening for API Calls");
});
