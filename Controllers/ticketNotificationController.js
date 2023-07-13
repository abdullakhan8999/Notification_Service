const Notification_ServiceModel = require("../Models/Notification_Service.model");

const acceptNotificationRequest = async (req, res) => {

   if (!req.body.ticketId ||
      !req.body.subject ||
      !req.body.content ||
      !req.body.recipientEmails ||
      !req.body.requester) {
      return res.status(500).json({
         message: "Some error with notification request body!"
      })
   }

   // Email validation function
   function validateEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return emailRegex.test(email);
   }

   for (const email of req.body.recipientEmails) {
      if (!validateEmail(email)) return res.status(500).json({
         message: "Please enter a valid email address."
      })
   }



   // Notification ReqBody 
   const notificationObject = {
      ticketId: req.body.ticketId,
      subject: req.body.subject,
      content: req.body.content,
      recipientEmails: req.body.recipientEmails,
      requester: req.body.requester
   }

   // Create a new Notification  
   try {
      const notification = await Notification_ServiceModel.create(notificationObject)

      // if the notification has been created
      if (notification) {
         return res.status(201).json({
            requestId: notification._id,
            message: "Request has been accepted. Check status later by using the provided requestId"
         })
      }
   } catch (err) {
      // If any error is returned
      return res.status(500).json({
         message: "Some internal server error occurred: " + err
      })
   }
};
const getNotification = async (req, res) => {
   // if the request id is not provided
   if (!req.body.id) return res.status(500).json({
      status: "failed",
      message: "Some error in request body"
   });

   try {
      // finding ticket by id.
      let ticket = await Notification_ServiceModel.findById(req.body.id);
      if (ticket) {
         return res.status(200).json(ticket);
      } else {
         return res.status(200).json("ticket not found");
      }
   } catch (err) {
      return res.status(500).json("Internal Error");
   }
};


module.exports = {
   acceptNotificationRequest,
   getNotification
}


