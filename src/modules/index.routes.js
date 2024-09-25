import { globalError } from "../middleware/globalError.js";
import userRouter from "./user/user.routes.js";
export const bootstrab = (app) => {
    app.use('/api/v1/user', userRouter)
    app.use(globalError)
} 