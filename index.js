
var express = require("express");
var app = express();

const port = process.env.PORT || 3000;


app.get('/api/GenerateSasToken', function(req, res) {
  res.json({
    storageUri:"https://cuenta69.blob.core.windows.net/",
	  storageAccessToken:"sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-12-09T09:00:36Z&st=2020-12-09T01:00:36Z&spr=https,http&sig=2lTT0lzkGN%2BUgKaDcNN9O%2FmrwrY1qc%2BDilRYBhO1PDM%3D"
  });
});
 


  
app.listen(port, function () {
    console.log('Server is running in port: ', port); 
});
