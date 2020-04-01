let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

exports.handler = async (event) => {
    try {
        let data = await kinesis.putRecord({
            StreamName: "K2",
            Data: "kupdate",
            PartitionKey: "m"
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};