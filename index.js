
let express = require('express');
let app = express();
app.use(express.json());

let pTracker = [];



// let multer = require('multer');
// let upload = multer();

//DB - 1 - Connect to the mongo DB
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://project2:angelyvonne@cluster0.1wwbbtn.mongodb.net/?retryWrites=true&w=majority");
db.on("ready", () => {
    console.log("Connected to the database");
});
db.connect(); 


app.use('/', express.static('public'));

////////////////////////////
app.post('/Detail',(req,res)=>{
    console.log(req.body);

    let obj = {
        Img:req.body.img,
        Name: req.body.name,
        Title: req.body.title
    };
    db.push("pTracker",obj);
    res.json({task:"sucess"});
});

app.get('/CheckDetail',(req,res)=>{
    db.get("pTracker").then(pData =>{
        let obj = {data: pData};
        res.json(obj);
    })
    
});

////////////////////////////////










// 上传数据至 MongoDB 路由
// app.post('/uploadToMongoDB', upload.none(), (req, res) => {
//     let image = req.body.image; // 从请求中获取图像数据

//     // 将图像数据存储到 MongoDB
//     // 请使用适当的方法将数据保存到 MongoDB 中
//     // 例如，使用 Mongoose 或 MongoDB Node.js 驱动程序
//     // 示例：YourModel.create({ image: image }, (err, result) => { ... });
// });

app.listen(5000, ()=> {
    console.log('listening at localhost:5000');
})