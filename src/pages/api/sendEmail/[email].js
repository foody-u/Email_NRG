const sgMail = require('@sendgrid/mail')

const msg = {
}


export default function handler(req, res) {
    console.log(process.env.SENDGRID_API_KEY, " API");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const {
        email
    } = req.query;


    if (!email) {
        console.error(`Invalid email ${email}!`)
        res.status(403).json({
            detail: `Invalid email ${email}!`
        });
    }


    const data = JSON.parse(req.body);

    console.info(data, " PARSED DATA")

    msg["html"] = data.html;
    msg["to"] = email;
    msg["subject"] = data?.settingsData?.subject ? data.settingsData.subject : "David Damirov, personal fitness instructor."
    msg["text"] = data?.settingsData?.text ? data.settingsData.text : "Please view requested data of my pricing inside of the email."

    console.log(msg, " MESSAGE");

    sgMail
        .send(msg)
        .then((response) => {
            res.status(200).json({ detail: "success" })
        })
        .catch((error) => {
            console.error(error, " ERROR")
            res.status(500).json({ detail: "failed" })
        })
}
