const yargs = require("yargs");
const { addMovie, listMovies } = require("../src/utils");

const App = () => {
  if (process.argv[2] == "add") {
    // add funciton
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
  } else if (process.argv[2] == "list") {
    // list function
    listMovies();
  } else {
    console.log("Incorrect command");
  }
};

App();
