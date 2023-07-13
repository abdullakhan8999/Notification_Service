const cron = require('node-cron')
const TicketNotificationModel = require('../Models/Notification_Service.model')
const EmailTransporter = require('../Notifier/emailService')
let count = 0;
cron.schedule(
   '*/30 * * * * *',
   async () => {
      console.log("Email Sender Reload Count:", ++count);
      //Query all the notification documents which are in status "NOT_SENT"

      const notifications = await TicketNotificationModel.find({
         status: "NOT_SENT"
      })

      if (notifications && notifications.length > 0) {
         notifications.forEach(notification => {
            const mailData = {
               from: "manaecommercecom@gmail.com",
               to: notification.recipientEmails,
               subject: notification.subject,
               text: notification.content
            }

            //Send the email
            EmailTransporter
               .sendMail(
                  mailData,
                  async function (err, info) {
                     if (err) {
                        console.log("Error:", err.message);
                     } else {
                        console.log("info:", info);
                        //Update the notification document status
                        notification.status = "SENT";
                        await notification.save();
                     }
                  }
               )
         })
      }
   }
)