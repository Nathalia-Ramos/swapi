import { App } from '../src/app.js';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 4000;

new App().startServer(PORT);
