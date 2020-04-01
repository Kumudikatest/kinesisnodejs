let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

exports.handler = async (event) => {
    try {
        let data = await kinesis.describeStream({
            StreamName: "K2"
        }).promise();
console.log(data);
    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};