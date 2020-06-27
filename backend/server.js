const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// MongoDB connection settings
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Connect to database
const connection = mongoose.connection
connection.once("open", () => {
    console.log("MongoDB database connected successfully!")
})

// Require the exercise and user files
const usersRouter = require("./routes/users")
const exercisesRouter = require("./routes/exercises")

// Use the routes
app.use("/users", usersRouter)
app.use("/exercises", exercisesRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})