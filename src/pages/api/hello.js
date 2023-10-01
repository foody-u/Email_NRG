const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const GMAIL = "semen.shorin@gmail.com"
const YANDEX = "s3menchyk@Yandex.ru"
const msg = {
  to: "semen.shorin@gmail.com", // Change to your recipient
  from: 'david@damirov.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun or is it?',
  text: 'and easy to do anywhere, even with Node.js',
}


export default function handler(req, res) {
  msg["html"] = req.body;
  console.log(req.body)

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      res.status(200).json({ detail: "success" })
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ detail: "failed" })
    })

  res.status(500);
}
