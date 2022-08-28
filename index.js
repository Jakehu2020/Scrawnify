const express = require('express');
const app = express();
const fs = require('fs');

const ejs = require('ejs');
app.engine('html',ejs.renderFile);
app.set('view engine','html')
app.set('views','public')

app.use((req,res)=>{
  if(req.url=='/'){ return res.render('index') };
  if(fs.readFileSync('./public'+req.url){
     res.render('.'+req.url);
  } else { res.status(404); res.render('404');
});

app.listen(8080)
