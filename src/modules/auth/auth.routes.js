import express from 'express'
import { validation } from './../../../src/middleware/validation.js'
import { checkEmail } from '../../middleware/checkEmail.js'
import { signInValidation, signUpValidation } from './auth.validation.js'
import { signIn, signUp } from './controller/auth.js'
const authRouter = express.Router()

authRouter.post('/signUp', validation(signUpValidation), checkEmail, signUp)
authRouter.post('/signIn', validation(signInValidation), signIn)

export default authRouter