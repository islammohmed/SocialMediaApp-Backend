
import { userModel } from '../../../../db/models/user.model.js'
import { AppError } from '../../../utils/AppError.js'
import { catchError } from './../../../middleware/catchError.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signUp = catchError(async (req, res, next) => {
    let user = new userModel(req.body)
    await user.save()
    let token = jwt.sign({ userId: user._id }, process.env.SECERET_KEY)
    !user && next(new AppError('invalid data', 404))
    user && res.send({ msg: 'success', token, user: { email: user.email, name: user.name } })

})

const signIn = catchError(async (req, res, next) => {
    let { email, password } = req.body
    let checkEmail = await userModel.findOne({ email })
    if (!checkEmail) return next(new AppError('emial Not Founded', 404))
    else {
        let checkPassword = bcrypt.compareSync(password, checkEmail.password)
        if (!checkPassword) return next(new AppError('passwor incorrect', 401))
        let token = jwt.sign({ userId: checkEmail._id, role: checkEmail.role }, process.env.SECERET_KEY)
        res.send({ msg: "success", token, user: { email: checkEmail.email, name: checkEmail.name } })
    }
})
const protectedRouter = catchError(async (req, res, next) => {
    const { token } = req.headers
    if (!token) return next(new AppError('invalid Token', 401))
    let decoded = jwt.verify(token, process.env.SECERET_KEY)
    if (!decoded) return next(new AppError('invalid decoded', 401))
    let user = await userModel.findById(decoded.userId)
    if (!user) return next(new AppError('user not founded login again', 404))
    req.user = user
    next()
})




export {
    signUp,
    protectedRouter,
    signIn,
}