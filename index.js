const express = require('express');
const app = express();
const fs = require('fs');

const ejs = require('ejs');
app.engine('html',ejs.renderFile);
app.set('view engine','html')
app.set('views','public')

app.use((req,res)=>{
  if(fs.readFileSync('./public'+req.url){}
});
