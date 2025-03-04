const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productsRouter = require('./app/routes/productRoutes');
const { MONGO_URI } = require('./config/database');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use('/products', productsRouter);

app.listen(3000, () => console.log('Server Started'));