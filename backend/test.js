const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");

const uri =
"mongodb+srv://giftora_user:giftora123@cluster0.ghejcwf.mongodb.net/giftora?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
    try {
        await mongoose.connect(uri);
        console.log("✅ Connected Successfully");
    } catch (err) {
        console.log(err);
    }
}

run();