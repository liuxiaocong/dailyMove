import express from 'express';
import compression from 'compression';
import { renderToString } from "react-dom/server";

require('@babel/register')();

require('@babel/polyfill')
require.extensions['.less'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};

const renderReact = require('./renderReact.js');

const router = express.Router();
import path from 'path';

const app = express();
app.use(compression());
renderReact(app);
app.use(express.static(path.resolve(__dirname, '../build/')))


const port = process.env.PORT || 4000;

app.listen(port, function listenHandler() {
  console.info(`Running on ${ port }`);
});