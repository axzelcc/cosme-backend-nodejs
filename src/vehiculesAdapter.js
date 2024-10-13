const vehiculesAdapter = (params) => {
  return params.map(vehicle => ({
    nombre: vehicle.name,
    modelo: vehicle.model,
    fabricante: vehicle.manufacturer,
    costo_en_creditos: vehicle.cost_in_credits,
    longitud: vehicle.length,
    velocidad_atmosferica_maxima: vehicle.max_atmosphering_speed,
    tripulacion: vehicle.crew,
    pasajeros: vehicle.passengers,
    capacidad_de_carga: vehicle.cargo_capacity,
    consumibles: vehicle.consumables,
    clase_de_vehiculo: vehicle.vehicle_class,
    pilotos: vehicle.pilots,
    peliculas: vehicle.films,
    creado: vehicle.created,
    editado: vehicle.edited,
    url: vehicle.url,
  }));
}

module.exports = {
  vehiculesAdapter
};