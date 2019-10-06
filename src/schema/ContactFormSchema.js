import Joi from '@hapi/joi';

export const generic = Joi.object({
    generic: Joi.string().required().min(2).max(50)
});

export const email = Joi.object({
    email: Joi.string().required().pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
});

export const genericNotRequired = Joi.object({
    genericNotRequired: Joi.string().max(50).allow('').optional()
})

export const message = Joi.object({
    message: Joi.string().min(2).max(300).required()
})