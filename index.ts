#! /urs/bin/env node

import { log } from "console";
import inquirer from "inquirer";

//   user se input kese lenge wo kam kia he yaha induirer ki madad se

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter Second number", type: "number", name: "Secondnumber" },
  {
    message: "Select one of the operators to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },
]);
    //   user se input kese lenge wo kam kia he yaha induirer ki madad se  end

    // ab hum condition statments per kam krenge

    if(answer.operator === "Addition"){
        console.log(answer.firstnumber + answer.Secondnumber)
    }

    else if(answer.operator === "subtraction"){

        console.log(answer.firstnumber - answer.Secondnumber)

    }
    else if(answer.operator === "multiplication"){

        console.log(answer.firstnumber * answer.Secondnumber)

    }
    else if(answer.operator === "division"){

        console.log(answer.firstnumber / answer.Secondnumber)

    }

    else{
        console.log("invalid operator")
    }


    // condition statement work done

                    // Simple CLI Calculator Ready
                    // with Typescript, node js and inquirer