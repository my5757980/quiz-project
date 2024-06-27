#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`welcome to my adventure quiz game`);
console.log(`you are required to gain maximum 4 points for this window`);
let points = 0;
// question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        type: "list",
        message: "typescript is a superset off",
        choices: ["phython", "c++", "java", "javascript"],
    }
]);
if (question1.one === "javascript") {
    console.log(`your answer is correct`);
    points++;
}
else {
    console.log(`incorrect answer`);
}
// question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        type: "list",
        message: "what is the founder of microsoft",
        choices: ["elon", "musk", "bill gates", "mark"],
    }
]);
if (question2.two === "bill gates") {
    console.log(`your answer is correct`);
    points++;
}
else {
    console.log(`incorrect answer`);
}
// question 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        type: "list",
        message: "capital of pakistan",
        choices: ["karachi", "punjab", "islamabad", "kpk"],
    }
]);
if (question3.three === "islamabad") {
    console.log(`your answer is correct`);
    points++;
}
else {
    console.log(`incorrect answer`);
}
// question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        type: "list",
        message: "who is the current governor of sindh",
        choices: ["ali", "bilal", "wajahat", "kamran tessori"],
    }
]);
if (question4.four === "kamran tessori") {
    console.log(`your answer is correct`);
    points++;
}
else {
    console.log(`incorrect answer`);
}
// question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        type: "list",
        message: "how can you compile typescript code into javascript",
        choices: ["tsc main.ts", "compile main.ts", "node main.ts", "typescript main .js"],
    }
]);
if (question5.five === "tsc main.ts") {
    console.log(`your answer is correct`);
    points++;
}
else {
    console.log(`incorrect answer`);
}
if (points >= 4) {
    console.log(`congratulation`);
    console.log(`your points: ${points}`);
}
else {
    console.log(`you loss try next time`);
    console.log(`your points: ${points}`);
}
