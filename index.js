const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team =[];

const manQuestions = () => {
    return inquirer.prompt
([
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'name',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("please enter value to continue")
        }
        
         {
        type: 'input',
        message: "Enter Id Number ,
        name: 'idNum',
        validate: (idNum)=> { 
            if(idNum !=='') {
                return true;
            } else { 
                console.log('Please input at least one NUMBER..');
                return false;
            }
        }
    },
