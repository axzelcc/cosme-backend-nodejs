
const {v4} = require('uuid');
const AWS = require('aws-sdk');

const addUser = async(event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  
  const {name, email} = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  const addUser = {
    id,
    name,
    email,
    createdAt
  }

  await dynamodb.put({
    TableName: 'useresTable',
    Item: addUser
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(addUser),
  }

};

module.exports = {
  addUser,
};