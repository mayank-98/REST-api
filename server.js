const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter')
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/products', productRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server running on port", port);
});

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => {
    if (err) throw err;
    console.log("Connected to MongoDB");
});