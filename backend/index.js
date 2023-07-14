const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
});

const storageRef = admin.storage().bucket("gs://deblog-7c1e4.appspot.com");

function uploadFile(tokenId, startDate) {
    const fileRef = storageRef.file(`metadata/${tokenId}.json`);

    const data = {
        attributes: [
            {
                trait_type: "expiry",
                value: (Number(startDate) + 2592000000),
            },
        ],
        description: 
            "Full access to Messi's exclusive content.",
        image: 
            "https://firebasestorage.googleapis.com/v0/b/deblog-7c1e4.appspot.com/o/image%2Fmessi.jpeg?alt=media",
    };

    const dataString = JSON.stringify(data);

    const stream = fileRef.createWriteStream();
    stream.write(dataString);
    stream.end();

    stream.on("error", (error) => {
        console.error("Error updating patreon metadata: ", error);
    });

    stream.on("finish", () => {
        console.log("Patreon metadata updated succesfully");
    });
}


app.get("/extraMonth", async (req, res) => {

    const {query} = req;

    let startDate = Date.now();

    if(query.expiry){
        startDate = query.expiry;
    }

    uploadFile(query.id, startDate);
    return res.status(200).json({});
  });



app.listen(port, () => {
  console.log(`Listening for API Calls`);
});