const yargs = require("yargs");

const addMovie = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj);
    console.log("Successfully added movie");
  } catch (error) {
    console.log(error);
  }
};

const findResult = async (collection, dataObj) => {
  try {
    const list = await collection.find(dataObj).toArray();
    console.log("Found documents =>", list);
  } catch (error) {
    console.log(error);
  }
};

const filterFindRating = async (collection, dataObj) => {
  try {
    const filteredDocs = await collection
      .find({ rating: dataObj.rating })
      .toArray();
    console.log(`Found films filtered by ${dataObj.rating} =>`, filteredDocs);
  } catch (error) {
    console.log(error);
  }
};

const updateActor = async (collection, dataObj) => {
  try {
    await collection.updateOne(
      { title: dataObj.title },
      { $set: { actor: dataObj.actor } }
    );
    console.log(
      `Successfully updated ${dataObj.title} actor to ${dataObj.actor}`
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteResult = async (collection, dataObj) => {
  try {
    const deleteData = await collection.deleteMany({ title: dataObj.title });
    console.log("Deleted documents =>", deleteData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  findResult,
  updateActor,
  deleteResult,
  filterFindRating,
};
