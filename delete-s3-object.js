var AWS = require('aws-sdk');
var fs =  require('fs');

var s3 = new AWS.S3({

"accessKeyId": "AKI",
"secretAccessKey":"Wdi",
"Bucket":"fil"

});

// Bucket names must be unique across all S3 users

var myBucket = 'fileuploadtos3';

var myKey = 'image.png';



var params = {  Bucket: myBucket , Key: "image.png" };

s3.deleteObject(params, function(err, data) {
  if (err) console.log(err, err.stack);  // error
  else     console.log("deleted",data);                 // deleted
});
