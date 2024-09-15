var http=require('http')
var fs=require('fs')
var path=require('path')
http.createServer(function (req,res)
{
    fs.readFile(path.join(__dirname,'hello.html'), function(err,data)
    {
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
    
    
}).listen(1000)
