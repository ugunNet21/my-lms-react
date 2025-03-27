## About

## Struktur code project

- backend
- src ; controllers, midlewares, migrations, models, routes, utils, services, index.js, seeder, repository
- frontend
- html

### How To

## Make Models
## Make Controller
## Make Service
## Make Repository
## Make Route
## Make Migration
## Make Seeder
## Make Test
## Make Factory

### Install Lib
- `npm install express`
- `npm install mongoose`
- `npm install bcrypt`
- `npm install jsonwebtoken`
- `npm install nodemon`
- `npm install cors`
- `npm install dotenv`
- `npm install helmet`
- `npm install swagger-ui-express`
- `npm install swagger-jsdoc`
- `npm install mongoose-unique-validator`
- `npm install mongoose-autopopulate`
- `npm install migrate-mongo@latest --save-dev`

````
"scripts": {
  "migrate": "migrate-mongo",
  "migrate:up": "migrate-mongo up",
  "migrate:create": "migrate-mongo create"
}

````

````
npx migrate-mongo up -f ./migrate-mongo-config.cjs

````

- periksa database mongodb : 

````
mongosh mongodb://admin:password@127.0.0.1:27017/lms?authSource=admin
lms> show collections

````

- buat migratsion baru 

````
npx migrate-mongo create create-collections -f ./migrate-mongo-config.cjs

````