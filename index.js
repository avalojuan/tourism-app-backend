const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

//ROUTES
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/auth', authRoutes);

app.use(errorHandler);
app.listen(3000);
