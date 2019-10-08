const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const sendgrid = require('@sendgrid/mail');
// const Joi = require('@hapi/joi')

const sendgridSecret = functions.config().sendgrid.secret_key;
sendgrid.setApiKey(sendgridSecret);

// const formSchema = Joi.object({
//     firstName: Joi.string().required().min(2).max(50),
//     lastName: Joi.string().required().min(2).max(50),
//     //eslint-disable-next-line
//     email: Joi.string().required().pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
//     addressFirst: Joi.string().required().min(2).max(50),
//     addressSecond: Joi.string().max(50).allow('').optional(),
//     addressThird: Joi.string().max(50).allow('').optional(),
//     city: Joi.string().required().min(2).max(50),
//     county: Joi.string().required().min(2).max(50),
//     //eslint-disable-next-line
//     postcode: Joi.string().required().pattern(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i),
//     //eslint-disable-next-line
//     phoneNumber: Joi.string().required().pattern(/^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/i),
// });

exports.contact = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {

        // const validationError = formSchema.validate({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     addressFirst: req.body.addressFirst,
        //     addressSecond: req.body.addressSecond,
        //     addressThird: req.body.addressThird,
        //     city: req.body.city,
        //     county: req.body.county,
        //     postcode: req.body.postcode,
        //     phoneNumber: req.body.phoneNumber,
        // }).error

        try {
            // if (validationError) throw new Error(`form validation error: ${validationError}`);
            console.log('req.body', req.body);
            const roboRobEmail = {
                to: 'enquires@ludusdesign.co.uk',
                from: {
                    email: 'hello@ludus.com',
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