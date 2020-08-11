var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
  { type: "input",
    name: "title",
    message: "What is your name?"
}


  ])
  .then(function(data) {

    

   fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err)

     {
  
      if (err) {
        return console.log(ERROR);
      }
  
      console.log("Success!");
  
    });

  });



// SOMETHING LIKE THIS MAY BE NEEDED TO WRITE THE README  
// var fs = require("fs");

// fs.writeFile("log.txt", process.argv[2], function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });
