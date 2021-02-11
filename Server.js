var express = require("express");
var bodyParser = require("body-parser");
const sharp = require('sharp');

var app = express();
app.use(bodyParser.json());


app.get('/upload',async function(req,response){
  sharp('Snake_River_(5mb).jpg')
    .webp({compressionLevel: 9, adaptiveFiltering: true, force: true,quality:5 })
    .withMetadata()
    .toFile('output.webp', function(err) {
        console.log(err);
     response.send('transform')
    });
 })

app.listen(3000, function () {
  console.log("Working on port 3000");
});
