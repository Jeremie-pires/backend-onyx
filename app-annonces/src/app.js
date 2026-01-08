const express = require('express');
const app = express();
const initRoutes = require('./routes');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());

initRoutes(app);

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
