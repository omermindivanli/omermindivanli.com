'use strict';
const express = require('express');
const nodemon = require('nodemon');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
