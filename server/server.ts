import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from 'nest.js';
import { ApplicationModule } from './app.module';
import { createConnection, ConnectionOptions } from 'typeorm';

let connectionObject: ConnectionOptions = require('./ormconfig.json')[0];
connectionObject = { ...connectionObject, entities: ['models/*.ts'] }; 

// database connection
createConnection(connectionObject).then(async connection => {
    const instance = express();
    instance.use(bodyParser.json());

    const app = NestFactory.create(ApplicationModule, instance);
    app.listen(3000, () => ('Application is listening on port 3000'));
}).catch(error => console.log(error));
