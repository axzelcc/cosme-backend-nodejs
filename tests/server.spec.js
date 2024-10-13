const request = require('supertest');

describe('API-TEST', () => {
  const api = 'https://15x8jguaoe.execute-api.us-east-1.amazonaws.com';

  test('GET /vehicules', async () => {
    const response = await request(api).get('/vehicules');

    // Verificamos que el estado sea 200
    expect(response.status).toBe(200);

    // Verificamos que la respuesta sea un arreglo
    expect(Array.isArray(response.body)).toBe(true); 

    // Verificamos que tenga al menos un objeto
    expect(response.body.length).toBeGreaterThan(0); 

    // Verifica que cada objeto tenga las propiedades esperadas
    response.body.forEach(vehiculo => {
      expect(vehiculo).toHaveProperty('nombre');
      expect(vehiculo).toHaveProperty('url');
      expect(vehiculo).toHaveProperty('capacidad_de_carga');
      expect(vehiculo).toHaveProperty('tripulacion');
      expect(vehiculo).toHaveProperty('consumibles');
      expect(vehiculo).toHaveProperty('peliculas');
      expect(vehiculo).toHaveProperty('velocidad_atmosferica_maxima');
      expect(vehiculo).toHaveProperty('pilotos');
      expect(vehiculo).toHaveProperty('costo_en_creditos');
      expect(vehiculo).toHaveProperty('modelo');
      expect(vehiculo).toHaveProperty('editado');
      expect(vehiculo).toHaveProperty('fabricante');
      expect(vehiculo).toHaveProperty('creado');
      expect(vehiculo).toHaveProperty('longitud');
      expect(vehiculo).toHaveProperty('pasajeros');
      expect(vehiculo).toHaveProperty('clase_de_vehiculo');
    });
  });

  test('POST /vehicule', async () => {
    const newVehicule = {
      "nombre": "X-2000 cosme-test-1",
      "modelo": "X-2000 cosme",
      "fabricante": "Cosme Corporation",
      "costo_en_creditos": "10550",
      "longitud": "3.4",
      "velocidad_atmosferica_maxima": "250",
      "tripulacion": "1",
      "pasajeros": "1",
      "capacidad_de_carga": "5",
      "consumibles": "desconocido",
      "clase_de_vehiculo": "vehiculo de repulsion",
      "pilotos": [],
      "peliculas": [
          "https://swapi.py4e.com/api/films/1/"
      ],    
      "editado": "",
      "url": "https://swapi.py4e.com/api/vehicles/7/"
    };

    const response = await request(api)
      .post('/vehicule') 
      .send(newVehicule) 
      .set('Accept', 'application/json');

    // Verificamos que el estado sea 200
    expect(response.status).toBe(200);

    // Verificamos que la respuesta sea un objeto
    expect(typeof response.body).toBe('object');

  });
});
