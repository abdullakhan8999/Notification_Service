const dotenv = require('dotenv');
const app = require('./app.js');
const { connectDB } = require('./Configs/Config.db.js');

// use dotenv file
dotenv.config({ path: "./Configs/.env" });


const init = async () => {
   await connectDB();
   app.listen(process.env.PORT, () => {
      console.log(`Server is up and running! Access it at http://localhost:${process.env.PORT}/api/v1`);
   })
}
init();