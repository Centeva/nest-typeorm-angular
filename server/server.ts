import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from 'nest.js';
import { ApplicationModule } from './app.module';

// database connection
import {createConnection} from 'typeorm';
import {Photo} from './models/Photo';
createConnection({
    driver: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: "typeorm",
        password: "",
        database: "typeorm"
    },
    entities: [
        Photo
    ],
    autoSchemaSync: true
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000, () => ('Application is listening on port 3000'));