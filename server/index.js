const express = require ('express');
const app = express ();
require('dotenv').config();
const cors = require ('cors');
const{PORT}=process.env


//parse any form data
app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT} `)
})