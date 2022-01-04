const config = require('../config');
const nodemailer = require('nodemailer');
const { resWriteFail, resWriteSuccess } = require('./response');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.password
    }
});

transporter.verify( (err, success) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Mail server ready...')
});

const sendEmail = (emailContent) => {
    return new Promise( (resolve, reject) => {
        transporter.sendMail(emailContent, (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(result);
        });
    });
};

const createContactMentor = ({
    firstName,
    lastName,
    country,
    email,
    message,
    mentor_name,
    mentor_uuid
})=> {
    return {
        from: config.email,
        to: config.email,
        subject: `${firstName} Wants to contact ${mentor_name}`,
        html: `<h1>
            ${firstName} ${lastName} has requested to be
            mentored by ${mentor_name}
            with UUID ${mentor_uuid}
        </h1>
        <p>
            ${firstName} lives in ${country} and wishes to be contacted at
            the following email address: ${email}.
        </p>
        <h2>
            Here is ${firstName}'s message for ${mentor_name}
        </h2>
        <p>
            ${message}
        </p>
        `
    };
};

const contactMentor = async (req, res) => {
    const {
        firstName,
        lastName,
        country,
        email,
        message,
        mentor_name,
        mentor_uuid
    } = req.body;
    
    const data = {
        firstName,
        lastName,
        country,
        email,
        message: message.replace(/\n/g, '<br>'),
        mentor_name,
        mentor_uuid
    };
    if (Object.values(data).some( (it) => it === undefined || it.length === 0 )) {
        resWriteFail(res, 'Missing Parameters', 400);
        return;
    }
    
    const emailContent = createContactMentor(data);

    try {
        const result = await sendEmail(emailContent);
        // console.log(result);
        resWriteSuccess(res, `Message successfully sent to ${mentor_name}`);
    } catch (err) {
        console.error(err);
        resWriteFail(res, 'Internal Server Error', 502);
    }
};

const createGeneralContent = ({ name, email, message }) => {
    return {
        from: config.email,
        to: config.email,
        subject: `${name} Wants to Contact PreIB`,
        html: `
        <h1>
            ${name} wants to message PreIB.
        </h1>
        <p>
            ${name} wishes to be contacted at the following email ${email}
        </p>
        <h2>
            Here is ${name}'s message
        </h2>
        <p>
            ${message}
        </p>
        `
    };
};

const sendGeneralMessage = async (req, res) => {
    const {
        name,
        email,
        message
    } = req.body;

    const data = {
        name,
        email,
        message: message.replace(/\n/g, '<br>')
    };

    console.log(data);

    if (Object.values(data).some( (it) => it === undefined || it.length === 0 )) {
        resWriteFail(res, 'Missing Parameters', 400);
        return;
    }

    const emailContent = createGeneralContent(data);

    try {
        const result = await sendEmail(emailContent);
        resWriteSuccess(res, `Message successfully sent`);
    } catch (err) {
        console.error(err);
        resWriteFail(res, 'Internal Server Error');
    }
}

module.exports = {
    contactMentor,
    sendGeneralMessage
};
