
let express = require('express');
let app = express();
app.use(express.json());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

let pTracker = [];

//Connect to the mongo DB
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

app.listen(5000, ()=> {
    console.log('listening at localhost:5000');
})