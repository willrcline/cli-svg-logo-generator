//import inquirer and run inquirer promise prompt
//switch case for prompt that chooses a shape class
//function that incorporates html from shape class into the <svg> tags (createSvgString(shapeTag))
//write result of createSvgString to a new file using a file name specified to inquirer prompt
const inquirer = require("inquirer")

const questions = [
    {
      type: 'list',
      name: 'shape',
      message: `Let's build a logo! What type of shape do you want as the base?`,
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'list',
      name: 'color',
      message: 'What color do you want the shape to be?',
      choices: ['Red', 'Green', 'Blue', 'Yellow'],
    },
    {
      type: 'input',
      name: 'Text',
      message: 'What words do you want within the shape? (Just press enter if none.)',
      validate: (input) => {
        const maxLength = 15
        if (input.length > maxLength) {
          return `Text must be ${maxLength} characters or less (so it can easily fit within the shape).`;
        }
        return true;
      },
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'What color do you want the text to be?',
        choices: ['Red', 'Green', 'Blue', 'Yellow', 'White', 'Black'],
      },
  ];

async function init() {
    var userDefinedLogoParams = await inquirer.prompt(questions)
    
}