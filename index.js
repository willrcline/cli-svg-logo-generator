//import inquirer and run inquirer promise prompt
//switch case for prompt that chooses a shape class
//function that incorporates html from shape class into the <svg> tags (createSvgString(shapeTag))
//write result of createSvgString to a new file using a file name specified to inquirer prompt
const inquirer = require("inquirer");
const { Shape } = require("./lib/shapes");
// const Shape = require("../lib/shapes.js")
const Text = require("./lib/shapes.js").Text
const fs = require("fs")

const questions = [
    {
      type: 'list',
      name: 'shapeType',
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
      type: 'list',
      name: 'opacity',
      message: 'How transparent do you want the shape? The lower the number, the more transparent. (1 is not at all transparent.)',
      choices: [.1, .25, .5, .75, .9, 1],
    },
    {
      type: 'input',
      name: 'text',
      message: 'What words do you want within the shape? (Just press enter if none.)',
      validate: (input) => {
        const maxLength = 14
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
    {
      type: 'input',
      name: 'fileName',
      message: `Give your file a name (ie. "smith-marketing"):`,
      validate: (input) => {
        const maxLength = 25
        if (input.includes(" ")) {
          return `File name must not contain spaces.`;
        } else if (input.length > maxLength) {
          return `File name must be ${maxLength} characters or less.`;
        } else {
        return true;
        }
      }
    }
  ]
  
function generateSvgTag(shapeHtml, textHtml) {
  var svg = 
  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeHtml}
    ${textHtml}
 </svg>`
  return svg
}

async function init() {
  var userDefinedLogoParams = await inquirer.prompt(questions)

  var shape = new Shape(userDefinedLogoParams.color, userDefinedLogoParams.opacity, userDefinedLogoParams.shapeType.toLowerCase())
  var shapeHtml = shape.generate()
  console.log(shape, shapeHtml)
  var text = new Text(userDefinedLogoParams.text, userDefinedLogoParams.textColor)
  var textHtml = text.generate()

  var svgHtml = generateSvgTag(shapeHtml, textHtml)
  console.log(svgHtml)

  fs.writeFile(`dist/${userDefinedLogoParams.fileName}.svg`, svgHtml, (err) => 
  err ? console.error('Error writing to the file:', err) : console.log('File written successfully'))
}

init()