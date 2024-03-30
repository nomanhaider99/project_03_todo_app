#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let Tasks: any[] = [];
let myFirstTodo = await inquirer.prompt([
    {
        type: "string",
        name: "todo",
        message: "Add a new todo: "
    }
])
console.log(myFirstTodo)
Tasks.push(myFirstTodo.todo)
while (true) {
    let addTodo = await inquirer.prompt([
        
        {
            type: "list",
            name: "operation",
            message: "What do you want to do?",
            choices: ["Add Todo", "Remove Todo", "Quit"]
        }
    ])
    console.log(addTodo);
    console.log(Tasks);
    if(addTodo.operation === "Add Todo"){
        let newTask = await inquirer.prompt([
            {
                type: "string",
                name: "newTodo",
                message: "Add a new todo: "
            }
        ])
        console.log(newTask)
        Tasks.push(newTask.newTodo)
        console.log(Tasks);
        
    }
    else if(addTodo.operation === "Remove Todo"){
        let removeTodo = await inquirer.prompt([
            {
                type: "list",
                name: "rTodo",
                message: "Select a todo index number which you want to remove: ",
                choices: Tasks.map((task, index) => `${index + 1} - ${task}`)
            }
        ])
        console.log(removeTodo);
        let indexToRemove = parseInt(removeTodo.rTodo.split(" - ")[0]) - 1;
        Tasks.splice(indexToRemove, 1);
    }
    else if(addTodo.operation === "Quit"){
        console.log(chalk.cyanBright("Thank You..."));
        console.log(chalk.yellowBright("You have these tasks left:"));
        console.log(Tasks)
        break;
    }
    
    let lastQuestion = await inquirer.prompt([
        {
            type: "list",
            name: "lastOperation",
            message: "What do you want to do?",
            choices: ["Add Todo", "Remove Todo", "Quit"]
        }
    ])
    if(lastQuestion.lastOperation === "Add Todo"){
        let newTask1 = await inquirer.prompt([
            {
                type: "string",
                name: "newTodo1",
                message: "Add a new todo: "
            }
        ])
        console.log(newTask1)
        Tasks.push(newTask1.newTodo1)
        console.log(Tasks);
        console.log(chalk.cyanBright("Thank You...."));
        
    }
    else if(lastQuestion.lastOperation === "Remove Todo"){
        let removeTodo1 = await inquirer.prompt([
            {
                type: "list",
                name: "rTodo1",
                message: "Select a todo index number which you want to remove: ",
                choices: Tasks.map((task1, index) => `${index + 1} - ${task1}`)
            }
        ])
        console.log(removeTodo1);
        let indexToRemove = parseInt(removeTodo1.rTodo1.split(" - ")[0]) - 1;
        Tasks.splice(indexToRemove, 1);
    }
    else if(lastQuestion.lastOperation === "Quit"){
        console.log(chalk.cyanBright("Thank You..."));
        console.log(chalk.yellowBright("You have these tasks left:"));
        console.log(Tasks)
        break;
    }
}
