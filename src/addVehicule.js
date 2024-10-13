
const AWS = require('aws-sdk');

const addVehicule = async(event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  
  const {
    nombre,
    modelo, 
    fabricante, 
    costo_en_creditos, 
    longitud, 
    velocidad_atmosferica_maxima, 
    tripulacion, 
    pasajeros, 
    capacidad_de_carga, 
    consumibles, 
    clase_de_vehiculo, 
    pilotos, 
    peliculas,  
    editado, 
    url
  } = JSON.parse(event.body);

  const creado = new Date().toISOString();
  
  const addVehicule = {
    nombre,
    modelo, 
    fabricante, 
    costo_en_creditos, 
    longitud, 
    velocidad_atmosferica_maxima, 
    tripulacion, 
    pasajeros, 
    capacidad_de_carga, 
    consumibles, 
    clase_de_vehiculo, 
    pilotos, 
    peliculas,  
    creado,
    editado, 
    url,
  }

  await dynamodb.put({
    TableName: 'vehiclesTable',
    Item: addVehicule
  }).promise()

  return addVehicule;

};

module.exports = {
  addVehicule,
};