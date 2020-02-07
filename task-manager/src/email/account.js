const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'crystalhanguyen@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail
}