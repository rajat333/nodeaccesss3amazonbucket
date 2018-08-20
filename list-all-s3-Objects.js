var AWS = require('aws-sdk');
var fs =  require('fs');

var s3 = new AWS.S3({

"accessKeyId": "AKI",
"secretAccessKey":"Wdik",
"Bucket":"fileus3"

});

// Bucket names must be unique across all S3 users

var myBucket = 'fileuploadtos3';

var myKey = 'image.png';



var params = {  Bucket: myBucket ,
		MaxKeys: 20,
     		Delimiter: '/',
	     };

s3.listObjects(params, function(err, data) {
  if (err) console.log(err, err.stack);  // error
  else     console.log("deleted",data);                 // deleted
});




