const express = require('express');
require('./db/conn.js');
const router = require('./routers/men.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);


// app.get('/', async(req, res)=>{
//     res.send("<h1>Hello From Rahul</h1>");
// })






app.listen(port, () => {
    console.log(`Server is running on port number : ${port}`);
})