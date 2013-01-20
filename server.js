//server module
var http = require('http');
var url = require('url');  
var querystring = require('querystring');
var formidable = require('formidable');


function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("I've got your request for " + pathname +"!");
        route(handle,pathname,response,request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started. Bravo!");
}

exports.start = start; 
