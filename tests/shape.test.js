const Shape = require("../lib/shapes.js").Shape
const TextTagWithinSvg = require("../lib/shapes.js").TextTagWithinSvg

describe("Shapes.js", ()=> {
    describe('Shape class', ()=> {
        it("Should create a string of html that is a blue triangle at .5 opacity", ()=>{
            const shape = new Shape("blue", ".5");
            var triangle = shape.renderTriangle()
            console.log(triangle)
            expect(triangle).toEqual(`<polygon points="150,50 50,150 250,150" fill="blue" opacity=".5"/>`)
        })
    })

    describe('TextTagWithinSvg class', ()=> {
        it(`Should create a string of html that is text that says "Test" and is red`, ()=>{
            const textTagWithinSvg = new TextTagWithinSvg("Test", "red");
            var text = textTagWithinSvg.generate()
            console.log(text)
            expect(text).toEqual(`<text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" fill="red" dy=".3em">Test</text>`)
        })
    })
})