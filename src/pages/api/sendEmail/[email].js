const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

const GMAIL = "semen.shorin@gmail.com"
const YANDEX = "s3menchyk@Yandex.ru"

const msg = {
    from: 'david@damirov.com',
    subject: 'Sending with SendGrid is Fun or is it?',
    text: 'and easy to do anywhere, even with Node.js',
}


export default function handler(req, res) {
    const {
        email
    } = req.query;

    if (!email) {
        console.error(`Invalid email ${email}!`)
        res.status(403).json({
            detail: `Invalid email ${email}!`
        })
    }

    msg["html"] = req.body;
    msg["to"] = email;

    console.log(`Sending email to ${email}.`);

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
