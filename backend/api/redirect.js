import dynamoDb from "../libs/dynamodb-lib";

export const main = async (event, context, callback) => {
    const params = {
        TableName: process.env.tableName,
        Key: {
            id: event.pathParameters.id
        }
    };

    const result = await dynamoDb.get(params);
    console.log(result);
    if ( ! result.Item) {
        return callback(null, {
            statusCode: 404,
            body: "URL not found"
        });
    }

    const response = {
        statusCode: 302,
        headers: {
          'Location': result.Item.url,
          'Content-Type': 'text/plain'
        },
        body: result.Item.url
    };
    return callback(null, response);
};