class Shape {
    constructor(color, opacity, type) {
        this.color = color;
        this.opacity = opacity;
        this.type = type;
    }

    generate() {
        switch (this.type) {
            case ("circle"):
                return `<circle cx="150" cy="100" r="50" fill="${this.color}" opacity="${this.opacity}"/>`;
            case ("triangle"):
                return `<polygon points="150,50 50,150 250,150" fill="${this.color}" opacity="${this.opacity}"/>`;
            case ("square"):
                return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" opacity="${this.opacity}"/>`;
        }
    }
}


class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    generate() {
        return `<text x="50%" y="50%" font-family="Arial" font-size="12" text-anchor="middle" fill="${this.textColor}" dy=".3em">${this.text}</text>`;
    }
}

module.exports.Shape = Shape
module.exports.Text = Text