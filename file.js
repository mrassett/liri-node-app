function Student (name, subject, gpa) {
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;
  }
  module.exports = Student
const newStudent = new Student ("Maggie", "Art", 3);
