const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

//ROUTES
const authRoutes = require('./routes/auth');
const poiRoutes = require('./routes/poi');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/poi', poiRoutes);

app.use(errorHandler);
app.listen(3000);
