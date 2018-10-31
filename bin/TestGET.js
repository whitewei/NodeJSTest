var http = require('http');
var url = require('url');
var util = require('util');

var express = require('express');
var app = express();
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//
//     // 解析 url 参数
//     var params = url.parse(req.url, true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
//
// }).listen(3000);
app.get("index.html",function(request,response){
        response.sendFile(__dirname + "/index.html");
});

app.get("/create",function(req,res){
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response)
   res.end(Json.stringify(response))
});

app.listen(8080,function(){
    server.address
})