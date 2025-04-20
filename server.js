import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js"
import contactRouter from "./Routes/contact.js"
import { config } from "dotenv"

const app = express();

app.use(bodyParser.json())

//.env setup
config({ path: '.env' })

// user routes

app.use("/api/user", userRouter)

// contact routes
app.use("/api/contact", contactRouter)

//Home route

app.get("/", (req, res) => {
    res.json({ message: "this is a home route working" })
})




mongoose.connect(process.env.MONGO_URI, { dbName: "Nodejs_Mastery_Course" }).then(() => { console.log("MongoDB is connected ....!") }).catch((err) => { console.log(err) })


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on port = ${port}`)
})