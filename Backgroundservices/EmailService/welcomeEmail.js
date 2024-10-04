const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendmail");
const User = require("../models/User");
const Cryptojs = require("crypto-js");

dotenv.config();

const sendWelcomeEmail = async () => {
  const users = await User.find({ status: 0 });

  if (users.length > 0) {
    for (let user of users) {
      const hashedpassword = Cryptojs.AES.decrypt(
        user.password,
        process.env.PASS
      );
      const originalPassword = hashedpassword.toString(Cryptojs.enc.Utf8);

      ejs.renderFile(
        "templates/welcome.ejs",
        {
          fullname: user.fullname,
          password: originalPassword,
          email: user.email,
        },
        async (err, info) => {
          let messageOption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to SendIt",
            html: info,
          };

          try {
            sendMail(messageOption);
            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }
};

module.exports = { sendWelcomeEmail };
