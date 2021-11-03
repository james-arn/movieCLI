const { MongoClient } = require("mongodb");
require("dotenv").config();

const connection = async (crudFunc, dataObj) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    console.log("successfully connected");
    const db = client.db("Movies");
    const collection = db.collection("Movies");
    await crudFunc(collection, dataObj); // only line that can manipulate and finish try block. between defining connection and closing client.in order to do dynaic code, need crudFunc, and dataobj that goes with in in here.
    client.close();
    console.log("Client Closed");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connection;
