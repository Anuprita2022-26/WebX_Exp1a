"use strict";
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getTotalMarks() {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }
    getAverageMarks() {
        return this.getTotalMarks() / this.marks.length;
    }
    getResult() {
        return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
    }
    displayResult() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Average Marks: ${this.getAverageMarks().toFixed(2)}`);
        console.log(`Result: ${this.getResult()}`);
    }
}
// Example usage
const student1 = new Student("Anuprita Mhapankar", [28, 48, 50]);
student1.displayResult();
