
const getSWAPI = async (event) => {
          
      const response = await fetch('https://swapi.py4e.com/api/vehicles/');
      
      if (!response.ok) {
          throw new Error(`Error en la red: ${response.statusText}`);
      }
      
      const data = await response.json();

      return data.results;
};

module.exports = {
  getSWAPI,
};
