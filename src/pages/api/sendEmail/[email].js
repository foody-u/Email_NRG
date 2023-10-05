const sgMail = require('@sendgrid/mail')

const msg = {
}


export default async function handler(req, res) {
    console.log(process.env.SENDGRID_API_KEY, " API");
    console.log(process.env.SENDER_EMAIL, " SENDER EMAIL");
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
    console.log(data);

    if (!data?.settingsData?.password || data?.settingsData?.password !== process.env.PASSWORD) {
        const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
        console.info(`Attempt to send email with invalid password. From ip ${ip}`)

        try {
            await sgMail.send({
                to: process.env.ERROR_EMAIL_TO ? process.env.ERROR_EMAIL_TO : "ddd-dav@yandex.ru",
                from: process.env.SENDER_EMAIL,
                subject: `Invalid attempt to signup has been recorded`,
                html: `<html lang="en">
                <p>Attempt to send email with invalid password from ${ip}</p>
            </html>`
            });

            await sgMail.send({
                to: "s3menchyk@yandex.ru",
                from: process.env.SENDER_EMAIL,
                subject: `Invalid attempt to signup has been recorded`,
                html: `<html lang="en">
                <p>Attempt to send email with invalid password from ${ip}</p>
            </html>`
            });
        } catch (_) {

        }

        console.log("Returning 403 at the end of no password block");
        res.status(403).json({
            detail: "Invalid password"
        })
    } else {
        console.info(data, " PARSED DATA")

        msg["to"] = email;
        msg["from"] = process.env.SENDER_EMAIL
        msg["html"] = data.html;
        msg["subject"] = data?.settingsData?.subject ? data.settingsData.subject : "David Damirov, personal fitness instructor."
        msg["text"] = data?.settingsData?.text ? data.settingsData.text : "Please view requested data of my pricing inside of the email."

        console.log(msg, " MESSAGE");

        try {
            await sgMail.send(msg)
            res.status(200).json({ detail: "success" })
        } catch (e) {
            console.error(e, " SENDGRID-ERROR")
            res.status(500).json({ detail: `Sendgrid errored during email delivery. Check logs on vercel.` })
        }
    }
}
