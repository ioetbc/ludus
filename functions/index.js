const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const sendgrid = require('@sendgrid/mail');
const admin = require('firebase-admin');
const Joi = require('@hapi/joi')

const sendgridSecret = functions.config().sendgrid.secret_key;
sendgrid.setApiKey(sendgridSecret);

const formSchema = Joi.object({
    firstName: Joi.string().required().min(2).max(50),
    businessName: Joi.string().required().min(2).max(50),
    //eslint-disable-next-line
    email: Joi.string().required().pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
    //eslint-disable-next-line
    message: Joi.string().min(2).max(300).required()
});

admin.initializeApp({
    apiKey: functions.config().db.api_key,
    authDomain: functions.config().db.auth_domain,
    databaseURL: functions.config().db.url,
    projectId: functions.config().db.project_id,
    messagingSenderId: functions.config().db.message_sender_id,
    appId: functions.config().db.app_id,
    storageBucket: functions.config().db.storage_bucket,
});

exports.contact = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {

        const validationError = formSchema.validate({
            firstName: req.body.firstName,
            businessName: req.body.businessName,
            email: req.body.email,
            message: req.body.message,
        }).error;

        try {
            if (validationError) throw new Error(`form validation error: ${validationError}`);
            console.log('req.body', req.body);
            const roboRobEmail = {
                to: 'ioetbc@gmail.com',
                from: {
                    email: 'ioetbc@gmail.com',
                    name: 'robo rob email',
                },
                templateId: 'd-cb062348fcb34b1ebbbfe950674c14a5',
                dynamic_template_data: {
                    firstName: req.body.firstName,
                    businessName: req.body.businessName,
                    email: req.body.email,
                    message: req.body.message,
                }
            }

            console.log('sending robo rob email');
            await sendgrid.send(roboRobEmail)

            .catch((error) => {
                throw new Error(`email error.`, error);
            })

            res.send('/done');
            
        } catch (error) {
            console.log('an error occured', error)
            res.send('/sorry');
        }
    });
});