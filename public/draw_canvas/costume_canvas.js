function setup() {
    createCanvas(windowWidth*0.99, windowHeight*0.9);
    background(255);
  }



function mouseDragged() {
    noStroke();
    fill(20,20,20);
    ellipse(mouseX, mouseY, 20); 
}