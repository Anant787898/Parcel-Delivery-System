const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cron = require("node-cron");
const mongoose = require("mongoose");
const { sendWelcomeEmail } = require("./EmailService/welcomeEmail");
const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
const { sendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");

dotenv.config();

//DB CONNECTION
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((e) => {
    console.log(e);
  });

//TASK SCHEDULER

const run = () => {
  cron.schedule("* * * * * *", () => {
    sendWelcomeEmail()
    SendParcelPendingEmail()
    sendParcelDeliveredEmail()
  });
};

run();

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Background services is ruuning on port ${PORT}`);
});
