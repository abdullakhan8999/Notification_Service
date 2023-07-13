const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Router = require('./Routes/notificationRouter.js');

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//email sender
require('./Cron/emailSenderHelper.js')

//Router
app.use("/api/v1", Router);

module.exports = app;