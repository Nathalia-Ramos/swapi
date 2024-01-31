import { App } from '../src/app.js';

const PORT = process.env.PORT || 3000;

new App().startServer(PORT);
