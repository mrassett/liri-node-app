const Student = require("./file.js"); 

function Class (professornm, rmnumber){
    this.studentArray = [];
    this.professornm = professornm;
    this.rmnumber = rmnumber; 
    this.addStudent = function (name, subject, gpa) {
        this.studentArray.push(new Student(name, subject, gpa));
      }
};
  // this method will tell you how many students are in the class
  this.studentCount = function() {
    return this.students.length;
    console.log(this.studentArray);
  }


module.exports = Class
Class()
