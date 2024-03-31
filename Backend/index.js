const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 4001

const userRoute = require('./Route/routes_config');
const adminRoute = require('./Route/admin_routes');

//mongoose connection
mongoose
    .connect(process.env.MONGO_URI)
    .then((x) => {
        console.log(`Connected to the database successfully! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error(`Error connecting to the database: ${err}`)
    });

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/admin', adminRoute);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Driving School API" });
});

app.listen(port, () => {
    console.log(`Server is currently running at ${port} Welcome`)
});

//Error 404
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});