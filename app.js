const express = require('express');
const app = express();
const cors = require("cors");
const fs = require('fs');


app.use(cors(), express.urlencoded({extended: true}));
//This lets the server use cors (It allows us to relax the security applied to an API)
//Using an object with the key 'origin:' we could indicate which sites can access the API. 
//Since we are not using it, all the sites can access our server
//res.header('Access-Control-Allow-Origin', '*') would have worked also, but we would had to put it in each one of the responses.

//.use() it's executed every time that the server gets a request
//If the server it's a static server I have to use "app.use(** directory to static files**)" so my web page can use the css files and scripts
//express.urlenconded() lets us use the information contained in a body that comes from a form

app.get('/', (req, res)=> res.send('Working'))

app.get("/cats/cat.json", (req, res)=>{
    const catsJSON = require(`${__dirname}/JSON/cat.json`);
    res.json(catsJSON);
    //.json() responds with .json file or object, it takes a file or an object as a parameter
})

app.get("/cats_products/:categoryID", (req, res)=>{
    const categoryJSON = `${__dirname}/JSON/cats_products/${req.params.categoryID}.json`;
    //__dirname returns a string containing the path to the current directory
    res.sendFile(categoryJSON);
    //.sendFile() responds with a file regardless of type, it takes a string as a parameter
})

app.get("/products/:productID", (req, res)=>{
    const productJSON = require(`${__dirname}/JSON/products/${req.params.productID}.json`)
    res.json(productJSON);
})

app.get("/products_comments/:productID", (req, res)=>{
    const prodCommentJSON = require(`${__dirname}/JSON/products_comments/${req.params.productID}.json`);
    res.json(prodCommentJSON);
})

app.get("/user_cart/:userID", (req, res)=>{
    const userCartJSON = require(`${__dirname}/JSON/userCarts/${req.params.userID}.json`);
    res.json(userCartJSON);
})

app.post("/user_cart/buy", (req, res)=>{
    //Validation is made in the front-end, but it could have place right here
    const newInfo = JSON.stringify(req.body);
    fs.writeFileSync(`${__dirname}/JSON/userCarts/userPurchaseInfo.json`, newInfo , 'utf-8')
    //.writeFileSync() replaces the specified file and content if it exists.
    //If the file does not exist, a new file, containing the specified content, will be created
    res.sendFile(`${__dirname}/JSON/buy.json`);
})

app.post("/sell", (req, res)=>{
    const newItem = JSON.stringify(req.body);
    fs.writeFileSync(`${__dirname}/JSON/userItem.json`, newItem , 'utf-8')
    res.sendFile(`${__dirname}/JSON/publish.json`)
})


app.listen(3000, ()=>{
    console.log("Server listening at http://localhost:3000");
})
