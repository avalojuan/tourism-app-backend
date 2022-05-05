const express = require('express');
const app = express();

//ROUTES
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/auth', authRoutes);
app.listen(3000);
