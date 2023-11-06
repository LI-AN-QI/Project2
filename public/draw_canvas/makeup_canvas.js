//p5 code
let colorSelector;
let erasemode;
let canvas;
function setup() {
  const render = createCanvas(windowWidth*0.75, windowHeight);
  canvas = render.canvas;
    background(255);

    // 创建颜色选择器
  colorPicker = createColorPicker('#A449EE');
  
  colorPicker.position(30, height-90);

  // 监听颜色选择器的变化事件
  colorPicker.input(changeColor);

  // 初始化选定的颜色
  selectedColor = colorPicker.color();

  //A button to clear the canvas
  let erasetool = select("#erasetool"); 
  erasetool.mousePressed(eraseCanvas); 
  }



function mouseDragged() {
    noStroke();
    fill(selectedColor);
    ellipse(mouseX, mouseY, 15); 
}

function changeColor() {
  // 当颜色选择器的颜色发生变化时，更新选定的颜色
  selectedColor = colorPicker.color();
}


function eraseCanvas(){
  selectedColor = (255)
}


function saveDrawing(){
  // let fileName = 'MYDRAW_' + Date() + '.png';
  // saveCanvas(fileName, 'png');


  const base64ImageData = canvas.toDataURL('image/jpeg');
                         
  
  // use `base64ImageData`, it's a string
  console.log(base64ImageData);
  // send it to backend,
  // i.e. save to mongodb
  
}

///////////////////////////p5 code end//////


window.addEventListener('load',()=>{

  document.getElementById('SUBMIT').addEventListener('click',()=>{

    let name = document.getElementById('creator_name_input').value;
    let title = document.getElementById('creator_title_input').value;
    


    let obj = {
      "img":base64ImageData,
      "name":name,
      "title":title
    };


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








})









//Submitted!弹窗

let entryPopup = document.getElementById('entryPopup');
let close = document.getElementById('close');
let CANCEL = document.getElementById('CANCEL');
let YES = document.getElementById('YES');
let SUBMIT = document.getElementById('SUBMIT');


// 当用户点击 "X" 按钮时
close.addEventListener('click', function() {
    entryPopup.style.display = 'block'
});

// 在页面加载时隐藏
window.onload = function() {
    entryPopup.style.display = 'none';
};

CANCEL.addEventListener('click', function() {
  entryPopup.style.display = 'none'
});

YES.addEventListener('click', function() {
  //导航到相应的gallery
});

SUBMIT.addEventListener('click',function saveCanvasToMongoDB(){

});





//////////////////////// 
// function saveCanvasToMongoDB() {
//   let canvas = document.querySelector('canvas');
//   let imgData = canvas.toDataURL('image/png');

//   // 发送图像数据到服务器
//   fetch('/uploadToMongoDB', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ image: imgData })
//   })
//   .then(response => {
//       // 处理响应
//   })
//   .catch(error => {
//       // 处理错误
//   });
// }

//////////////////////////////////////////////////////////////////////////////

