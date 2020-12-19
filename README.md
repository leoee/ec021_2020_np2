# NP2 EC021 - Core Server

## Team

- [Flávio Brusamolin](https://github.com/flavio-brusamolin)
- [Leonardo Eufrazio](https://github.com/leoee)
## Prerequisites

- Docker Engine

## Technologies

- [Node](http://nodejs.org)
- [Restify](https://www.npmjs.com/package/restify)
- [Restify Router](https://www.npmjs.com/package/restify-router)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Axios](https://www.npmjs.com/package/axios)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Ts Node Dev](https://www.npmjs.com/package/ts-node-dev)
- [Rimraf](https://www.npmjs.com/package/rimraf)


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
