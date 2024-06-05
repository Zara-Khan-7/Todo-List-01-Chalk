#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let todoList = [];
let conditions = true;

console.log(chalk.magentaBright.bold("\n\tWelcome to Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name:"Task",
            type:"input",
            message:chalk.blue("Enter your New Task:")
        }
    ]);
    todoList.push(addTask.Task);
    console.log(chalk.yellow(`${addTask.Task} Task added in Todo-List Successfully`));

    let addMoreTask = await inquirer.prompt([
        {
           name:"Addmore",
           type:"confirm",
           message:"Do you want to add more Task ?", 
           default: "False",
        }
    ]);
    conditions = addMoreTask.Addmore
}
console.log(chalk.green("Your updated Todo-List:" ,todoList));
