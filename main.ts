#! /usr/bin/env node
import inquirer from "inquirer";
let myBalence = 10000;//Doller
let myPin = 1234;
let pinAnswer = await inquirer.prompt( 
   [
   {
    name:"pin",
    message:"enter your pin",
    type: "number"
}
]
);
console.log(pinAnswer.pin);
// 12345 === 1234 -false 
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!!");
   let operationAns = await inquirer.prompt(
    [
        {
           name : "operation",
           message : "please select type",
           type : "list",
           choices: ["withdraw","checkbalence"]

}
]

);
    console.log(operationAns);
if (operationAns.operation === "withdraw"){
    
        let amountAns = await inquirer.prompt(
      [
        {
           name:"amount",
           message :"enter your  amount",
           type : "number"
        }
       ]
    );
    //=, -=,+=
    myBalence -= amountAns.amount;
    console.log("your remaining balence is :" +myBalence)

} 
else if 
    (operationAns.operation ===  "check balence"){
    console.log("your remaining balence is :" +myBalence)
}
}
else{
    console.log("Incorrect pin number");
}

        
        

        

    
    

        

