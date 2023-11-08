/////////////////////////////////////////////Code for P5/////////////////////////////////////////////
let colorSelector;
let erasemode;
let canvas;

function setup() {
  //Create a canvas
  const render = createCanvas(windowWidth*0.75, windowHeight);
  canvas = render.canvas;
  background(255);

  // Set the willReadFrequently attribute to true
  canvas.willReadFrequently = true;

  // Create a colorPicker (initial color & position)
  colorPicker = createColorPicker('#A449EE');
  colorPicker.position(30, height-90);

  // Listen to the event of color input to the colorPicker
  colorPicker.input(changeColor);

  // Create a selectedColor, set the color value of colorPicker to it
  selectedColor = colorPicker.color();

  //Create a button to clear the canvas
  let erasetool = select("#erasetool"); 
  erasetool.mousePressed(eraseCanvas); 
}

function mouseDragged() {
  //Create a paintbrush
    noStroke();
    fill(selectedColor);
    ellipse(mouseX, mouseY, 15); 
}

function changeColor() {
  //Change the paintbrush color when the colorPicker change
  selectedColor = colorPicker.color();
}


function eraseCanvas(){
  //Change the paintbrush color to white to erase
  selectedColor = (255)
}


function saveDrawing(){
  //Automatically download the drawing as a jpeg file when click 'SUBMIT'
  let fileName = 'MYDRAW_' + Date() + '.jpeg';
  saveCanvas(fileName, 'jpeg');

  //Captures the content of the canvas element as a JPEG image in base64-encoded format (which will return a string).
  const base64ImageData = canvas.toDataURL('image/jpeg');
  return base64ImageData;//...then save the string into mongoDB
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////Code for the events of SUBMIT button//////////////////////////////////

window.addEventListener('load',()=>{

  //<<<<<<<<<<<<Get user input and save into mongodb>>>>>>>>>>>
  document.getElementById('SUBMIT').addEventListener('click',()=>{

    //Get the user input content (name & title)
    let name = document.getElementById('creator_name_input').value;
    let title = document.getElementById('creator_title_input').value;

    //Create an object to save the canvas content & user input 
    let obj = {
      //call the function saveDrawing to get the return of the canvas content as string data 
      "img":saveDrawing(),
      "name":name,
      "title":title
    };

    //Post the object to the database
    let jsonData = JSON.stringify(obj);
    fetch('/Detail',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data=>{console.log(data)})

  });


  //<<<<<<<<<<<<Fetch a random prompt from local json file, show it on the page>>>>>>>>>>>
  fetch('prompt.json')
  .then(response => response.json())
  .then(data => {
    let promptArray = data.prompts;
    let randomprompt = Math.floor(Math.random()*promptArray.length);
    let promptElement = document.getElementById('prompt-name');
    promptElement.innerHTML = promptArray[randomprompt];
  })

  //Return the error
  .catch(error => {
   console.log("Error!!! : " + error);
  })

})

/////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////Code for popup windows////////////////////////////////////////

//<<<<<<<<<<<<Create a Popup window for 'X' button>>>>>>>>>>>

let entryPopup = document.getElementById('entryPopup');
let close = document.getElementById('close');
let CANCEL = document.getElementById('CANCEL');
let YES = document.getElementById('YES');

//<<<<<<<<<<<<Create a Popup window for 'SUBMIT' button>>>>>>>>>>>
let submitentryPopup = document.getElementById('submitentryPopup');
let SUBMIT = document.getElementById('SUBMIT');


//Show and hide of the popup windows:

// Hide the popup window when the page is loaded
window.load = function() {
    entryPopup.style.display = 'none';
    submitentryPopup.style.display = 'none';
};

// Show the popup window when click 'X'
close.addEventListener('click', function() {
  entryPopup.style.display = 'block'
});

// Hide the popup window click 'Cancel'
CANCEL.addEventListener('click', function() {
  entryPopup.style.display = 'none'
});

// Show the popup window when click 'SUBMIT'
SUBMIT.addEventListener('click',function(){
  submitentryPopup.style.display = 'block'
});

/////////////////////////////////////////////////////////////////////////////////////////////////////


