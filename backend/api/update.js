import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key: {
            id: event.pathParameters.id
        },
        UpdateExpression: "SET #u = :new_url",
        ExpressionAttributeValues: {
            ":new_url": data.url || null
        },
        ExpressionAttributeNames: {
            "#u": "url"
        },
        ReturnValues: "ALL_NEW"
    };

    await dynamoDb.update(params);

    return {status:true};
});