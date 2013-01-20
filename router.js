function route(handle, pathname,response,request){
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function'){
        return handle[pathname](response,request); // if the request handler exists, call the function
    }  else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"Content-Type": "text/html"});
        response.write("Page Not Found. Error: 404");
        response.end();
        // if not 
    }
}
exports.route = route; 