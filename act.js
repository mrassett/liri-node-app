let inquirer = require("inquirer");
let Programmer = require("./act2.js");

let allProgrammers = [];
let count = 0;



var askQuestion = function() {
    if (count < 2) {

inquirer.prompt([
    {
      name: "name",
      message: "What is your name?"
    }, {
      name: "position",
      message: "What is your current position?"
    }, {
      name: "age",
      message: "How old are you?"
    }, {
      name: "language",
      message: "What is your favorite programming language?"
    }
  ]).then(function(answers) {
    
    let newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
    
    //programmer.info();
    allProgrammers.push(newProgrammer.name);

    count++;
    // run the askquestion function again so as to either end the loop or ask the questions again
    askQuestion();
  }).catch(err => {
    console.log(err);
  })
  // else statement which prints "all questions asked" to the console
  // when the code has been run five times
}
else {
  console.log(allProgrammers);
}
};


// call askquestion to run our code
askQuestion();

  