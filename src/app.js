import express from "express"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// using all the routes
app.use("/api/auth", authRouter)

export default app