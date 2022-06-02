const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

//ROUTES
const authRoutes = require('./routes/auth');
const poiRoutes = require('./routes/poi');
const routeRoutes = require('./routes/route');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/poi', poiRoutes);
app.use('/route', routeRoutes);

app.use(errorHandler);
app.listen(3000);
