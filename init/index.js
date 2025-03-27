const mongoose = require("mongoose")

const initData = require("./data.js");
const Listing = require("../models/listing.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 13000,
        location: "Calangute,Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("succesfull testing");

});

main()
    .then(() => {
        console.log("connected to DB");
    })

    .catch((err) => {
        console.log(err);

    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();