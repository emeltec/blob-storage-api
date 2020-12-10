
var express = require("express");
var app = express();

const port = process.env.PORT || 3000;


app.get('/api/GenerateSasToken', function(req, res) {
  res.json({
    storageUri:"https://cuenta69.blob.core.windows.net/",
	  storageAccessToken:"sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-12-12T12:16:17Z&st=2020-12-10T04:16:17Z&spr=https,http&sig=oxHlDI8a1B0LShDC9liveTxWu%2B2oPWRFIbhWuCyFodk%3D"
  });
});
 


  
app.listen(port, function () {
    console.log('Server is running in port: ', port); 
});
