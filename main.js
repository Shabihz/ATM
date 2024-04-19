#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalence = 10000; //Doller
var myPin = 1234;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
console.log(pinAnswer.pin);
// 12345 === 1234 -false 
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!!");
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select type",
            type: "list",
            choices: ["withdraw", "checkbalence"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your  amount",
                type: "number"
            }
        ]);
        //=, -=,+=
        myBalence -= amountAns.amount;
        console.log("your remaining balence is :" + myBalence);
    }
    else if (operationAns.operation === "check balence") {
        console.log("your remaining balence is :" + myBalence);
    }
}
else {
    console.log("Incorrect pin number");
}
