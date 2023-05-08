const Shape = require("../lib/shapes.js").Shape
const Text = require("../lib/shapes.js").Text

describe("Shapes.js", ()=> {
    describe('Shape class', ()=> {
        it("Should create a string of html that is a blue triangle at .5 opacity", ()=>{
            const shape = new Shape("blue", ".5", "triangle");
            var triangle = shape.generate()
            console.log(triangle)
            expect(triangle).toEqual(`<polygon points="150,50 50,150 250,150" fill="blue" opacity=".5"/>`)
        })
    })

    describe('Text class', ()=> {
        it(`Should create a string of html that is text that says "Test" and is red`, ()=>{
            const textObj = new Text("Test", "red");
            var text = textObj.generate()
            console.log(text)
            expect(text).toEqual(`<text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" fill="red" dy=".3em">Test</text>`)
        })
    })
})