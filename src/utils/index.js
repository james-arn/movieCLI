const fs = require("fs");

const addMovie = (movieObj) => {
  try {
    const stringyObj = JSON.stringify(movieObj); //converts obj to string
    fs.writeFileSync("./storage.json", stringyObj); // creates file if doesn't exist
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    const jsonList = fs.readFileSync("./storage.json"); //creates list and reads the list.
    const list = JSON.parse(jsonList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, listMovies };
