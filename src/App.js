const connection = require("./db/connection"); // importing it in
const yargs = require("yargs");
const {
  addMovie,
  findResult,
  filterFindRating,
  updateActor,
  deleteResult,
} = require("../src/utils");

const App = () => {
  try {
    switch (process.argv[2]) {
      case "add":
        connection(addMovie, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
          rating: yargs.argv.rating,
        });
        break;
      case "find":
        connection(findResult);
        break;
      case "filter find":
        connection(filterFindRating, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
          rating: yargs.argv.rating,
        });
        break;
      case "update actor":
        connection(updateActor, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
          rating: yargs.argv.rating,
        });
        break;
      case "delete":
        connection(deleteResult, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
          rating: yargs.argv.rating,
        });
        break;
      default:
        console.log("incorrect command");
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

App();

//using the command line for CRUD:
// CREATE: $ node src/app.js "add" --title="spiderman" --actor="toby" --rating="5"
// READ: $ node src/app.js "find"
// UPDATE: $ node src/app.js "update actor" --title="spiderman" --actor="bob"
// DELETE: $ node src/app.js "delete" --title="shrek2"

// FILTERED SEARCH: $ node src/app.js "filter find" --rating="5"
