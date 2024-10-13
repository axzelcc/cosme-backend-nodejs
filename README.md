
## RETO TÉCNICO BACKEND NODEJS - AXZEL JHUNIOR COSME CELMI

### En este documento explicare lo que realice para la siguiente prueba: 

Primero instale el aws-cli y configure mi usuario AIM de AWS.
```bash
  aws configure
```

Luego abri un CMD para instalar el framework serverless.
```bash
  npm i serverless -g
```
Despues cambie a una ruta donde se va a crear la aplicacion (desktop).

```bash
  serverless
```
Cuando ejecute este codigo seleccione la siguiente plantilla.
```bash
 > AWS - Node.js - HTTP API
```

Por ultimo configure mi serverless.yml, si van a este archivo encontraran las "functions" y "resources" que cree para hacer un serverless deploy.

Para el resource que es la conexion con DynamoDB de AWS utilice la siguiente dependencia:
```bash
 npm i aws-sdk
```

Con esto al ejecutar serverless deploy se creara nuestro proyecto y esta listo para consumir las funciones lambda por medio de Amazon API Gateway.

## EL PROYECTO ESTA DEPLOYED

Rutas activas actualemente:

```bash
  GET https://15x8jguaoe.execute-api.us-east-1.amazonaws.com/vehicules
```

```bash
  POST https://15x8jguaoe.execute-api.us-east-1.amazonaws.com/vehicule
```
## DOCUMENTACION SWAGGER

Para probar las APIS desplegadas podemos ejecutar el siguiente comando:

```bash
  node server.js
```
Luego para visualizar la WEB donde estan las APIs documentadas vamos al enalce 

```bash
  http://localhost:3000/api-docs/
```

Cuando entremos a la ruta podremos ver como esta documentado y hacer el consumo de las 2 Apis que documente para realizar un POST y un GET  de vehiculos.


## PRUEBAS UNITARIAS CON JEST Y SUPERTTEST

Instalacion de dependencias

```bash
  npm i -D jest supertest
```

En nuestro package.json configuramos el script para el test
```bash
  "scripts": {
    "test" : "set NODE_OPTIONS=--experimental-vm-modules && jest"
  }
```
Ahora para ejecutar o ver las respuestas de los test ejecutamos el siguiente comando

```bash
  npm test
```

Respuesta del test

```bash
  $ npm test

  > test
  > set NODE_OPTIONS=--experimental-vm-modules && jest

  PASS  tests/server.spec.js
    API-TEST
      √ GET /vehicules (561 ms)
      √ POST /vehicule (551 ms)

  Test Suites: 1 passed, 1 total
  Tests:       2 passed, 2 total
  Snapshots:   0 total
  Time:        2.583 s, estimated 4 s
  Ran all test suites.
````
