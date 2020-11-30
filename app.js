var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const { count } = require("console");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var array = [{
    id: 1,
    name: "Phong",
    password: "1",
    address: "HN"
}, {
    id: 2,
    name: "Sang",
    password: "2",
    address: "HP"
},
{
    id: 3,
    name: "Tan",
    password: "3",
    address: "Bắc Ninh"
},
{
    id: 4,
    name: "Dũng",
    password: "4",
    address: "TQ"
}
];
app.get("/", function (req, res) {
    res.json(array)
});
app.get("/:id", function (req, res) {
    let checkArray = array.filter((arrayItem) => {
        return arrayItem.id == req.params.id
    })
    res.json(checkArray)
});

app.post("/add", function (req, res) {
    array.push({
        id: 5,
        name: "Mạnh",
        password: "1",
        address: "Mỹ"
    })
    res.json(array)
});
app.put("/update/:id", function (req, res) {
    for(let i = 0; i < array.length; i++){
        let count = 0;
        if(array[i].id == req.params.id){
            array[i].id = 2;
            array[i].name = "Vinh";
            array[i].password = 1;
            array[i].address = "My";
            return res.json(array)
        }else{
            count++
        }
    }
    if(count){
        res.json("nhập lại id")
    }
});
app.delete("/delete/:id", function(req,res){
    for(let i = 0; i < array.length; i++){
        let count = 0;
        if(array[i].id == req.params.id){
            let pos = array.indexOf(array[i])
            array.splice(pos,1)
            return res.json(array)
        }else{
            count++
        }
    }
    if(count){
        res.json("nhập lại id")
    }
})

app.listen(3000, function () {
    console.log('tạo server thành công');
})