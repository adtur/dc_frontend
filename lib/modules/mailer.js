var sendMail = function(nodemailer, name, address, content)
{
  var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
      user: "angelos.kapsimanis@atonsolar.gr",
      pass: "PMH-7613"
    }
  });

  var mailOptions = {
    from: address,
    to: "angelos.kapsimanis@gmail.com",
    subject: "reto.io contact form, message from: " + name,
    text: content
  };

  smtpTransport.sendMail(mailOptions, function(error, res) {
    if(error) {
      console.log(error);
    } else {
      console.log("message from " + name + "has been send");
    }
  });
};

exports.sendMail = sendMail;
