# Notification Service

![GitHub](https://img.shields.io/github/license/abdullakhan8999/notification_service)

## Description

The Notification Service is a service that handles notification requests and sends emails. It provides functionality to send notifications to users via email. This service can be integrated into other applications or systems that require email notification capabilities.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/abdullakhan8999/notification_service.git
   ```
2. Navigate to the project directory:
   ```
   cd notification_service
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- body-parser
- cors
- dotenv
- mongoose
- node-cron
- node-rest-client
- nodemailer
- nodemon

## Usage

To use the Notification Service, follow these steps:

1. Set up the necessary configuration in the `.env` file.
2. Make requests to the provided endpoints to send notifications.
3. Customize the email templates and settings as needed.

## Configuration

The following environment variables need to be set in the `.env` file:

- `PORT`: The port number on which the server will run.
- `MONGODB_URI`: The URI for connecting to the MongoDB database.
- `SMTP_HOST`: The SMTP server host for sending emails.
- `SMTP_PORT`: The SMTP server port.
- `SMTP_USER`: The username for the SMTP server.
- `SMTP_PASS`: The password for the SMTP server.
- `FROM_EMAIL`: The email address from which the notifications will be sent.
- `CRON_SCHEDULE`: The cron schedule for sending periodic notifications (e.g., '0 0 * * *' for daily notifications).

## Endpoints

The following endpoints are available for sending notifications:

- **POST /api/notifications**: Send a notification.

The request body should include the following fields:

- `to`: The email address of the recipient.
- `subject`: The subject of the email.
- `text`: The plain text content of the email.
- `html`: The HTML content of the email.


## Contributing

Contributions to this project are welcome. To contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

## Issues

If you encounter any issues or bugs, please report them [here](https://github.com/abdullakhan8999/notification_service/issues).

## Contact

For any inquiries or support, please contact the author:

- Name: Patan Abdulla Khan
- Email: abdullakhan8999@gmail.com
- GitHub: [abdullakhan8999](https://github.com/abdullakhan8999)
