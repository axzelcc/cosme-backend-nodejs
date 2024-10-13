const AWS = require('aws-sdk');
const { getSWAPI } = require('./getSWAPI');
const { vehiculesAdapter } = require('./vehiculesAdapter');

const getVehicules = async(event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const vehicleSWAPI = await getSWAPI();  

  const result = await dynamodb.scan({
    TableName: 'vehiclesTable'
  }).promise();

  const vehicules = result.Items;

  return [...vehicules,...vehiculesAdapter(vehicleSWAPI)]

};

module.exports = {
  getVehicules
};