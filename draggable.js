// Adapted code from: Click and Drag an object 
// Daniel Shiffman <http://www.shiffman.net>
// for the purpose of this game

class Draggable {
    constructor(x, y, w, h, canvasWidth, canvasHeight) {
        this.dragging = false; // Is the object being dragged?
        this.rollover = false; // Is the mouse over the ellipse?
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    over() {
        // Is mouse over object
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }

    update() {
        // Adjust location if being dragged
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    show() {
        noStroke();
        // Different fill based on state
        if (this.dragging) {
            stroke(0);
            strokeWeight(1);
            fill(50, 100);
        } else if (this.rollover) {
            stroke(0);
            strokeWeight(2);
            noFill();
        } else {
            noFill();
        }
        this.x = constrain(this.x, 0, this.canvasWidth - this.w);
        this.y = constrain(this.y, 0, this.canvasHeight - this.h);
        rect(this.x, this.y, this.w, this.h);
    }

    pressed() {
        // Did I click on the rectangle?
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    released() {
        // Quit dragging
        this.dragging = false;
    }
}