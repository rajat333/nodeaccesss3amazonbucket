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

//for text file
//fs.readFile('demo.txt', function (err, data) {
//for Video file
//fs.readFile('demo.avi', function (err, data) {
//for image file				
fs.readFile('image.png', function (err, data) {
  if (err) { throw err; }
  

     params = {Bucket: myBucket, Key: myKey, Body: data };
   // putObject
//upload
     s3.upload(params, function(err, data) {

         if (err) {

             console.log(err)

         } else {

             console.log("Successfully uploaded data to myBucket/myKey",data);

         }

      });

});
                
	            

