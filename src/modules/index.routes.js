import { globalError } from "../middleware/globalError.js";
import authRouter from "./auth/auth.routes.js";
import mediaRouter from "./Social Media/socialmedia.routes.js";
export const bootstrab = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/socialmedia', mediaRouter)
    app.use(globalError)
} 