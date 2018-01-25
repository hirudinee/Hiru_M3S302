let AWS = require('aws-sdk');
const sns = new AWS.SNS();
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:upulie_topic_jan17'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}