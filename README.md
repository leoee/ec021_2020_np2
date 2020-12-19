# NP2 EC021 - Core Server

## Team

- [Flávio Brusamolin](https://github.com/flavio-brusamolin)
- [Leonardo Eufrazio](https://github.com/leoee)
## Prerequisites

- Docker Engine

## Technologies

- [Node](http://nodejs.org): JavaScript runtime
- [Restify](https://www.npmjs.com/package/restify): Framework to build REST APIs.
- [Restify Router](https://www.npmjs.com/package/restify-router): Allows users to define your routes using a Router interface that is identical to how routes are registered on a restify server.
- [Mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment.
- [Axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and Node.js.
- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [Typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript.
- [Ts Node Dev](https://www.npmjs.com/package/ts-node-dev): Tweaked version of node-dev that uses ts-node under the hood.
- [Rimraf](https://www.npmjs.com/package/rimraf): It's an executable that is used to clean the installed node packages in a node based project.


## Installation

```
docker build -t core-server .
docker run -p 8080:8080 core-server
```

## Configuring Project
Before running, it's necessary to configure the file .env on the root folder.

- PORT: Port where server will run. In case different from 8080, also change EXPOSE on Dockerfile.
- DB_URL: Database URL
- DB_NAME: Database NAME
- AUTH_URL: Server URL where is located the routes login and validateToken

## Creating Docker Image

```
docker build -t {image_name} 
```

## License

[MIT](https://choosealicense.com/licenses/mit)
