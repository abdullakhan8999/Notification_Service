const Router = require('express').Router();
const notificationController = require('../Controllers/ticketNotificationController.js')


Router.route(`/notification`).post(notificationController.acceptNotificationRequest);
Router.route(`/notification/id`).get(notificationController.getNotification);

module.exports = Router;