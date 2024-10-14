import Joi from 'joi'
const signUpValidation = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(30).required(),
    rePassword: Joi.valid(Joi.ref('password')).required(),
})
const signInValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})


export {
    signUpValidation,
    signInValidation,
}