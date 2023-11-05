//Submitted!弹窗

let entryPopup = document.getElementById('entryPopup');
let close = document.getElementById('close');
let BACK = document.getElementById('BACK');
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

BACK.addEventListener('click', function() {
  entryPopup.style.display = 'none'
});

YES.addEventListener('click', function() {
  //导航到相应的gallery
});

SUBMIT.addEventListener('click',function saveCanvasToMongoDB(){

});


////////////////////////
function saveCanvasToMongoDB() {
  let canvas = document.querySelector('canvas');
  let imgData = canvas.toDataURL('image/png');

  // 发送图像数据到服务器
  fetch('/uploadToMongoDB', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: imgData })
  })
  .then(response => {
      // 处理响应
  })
  .catch(error => {
      // 处理错误
  });
}

//////////////////////////

//p5 code
function setup() {
    createCanvas(windowWidth*0.99, windowHeight*0.9);
    background(255);
  }



function mouseDragged() {
    noStroke();
    fill(20,20,20);
    ellipse(mouseX, mouseY, 20); 
}