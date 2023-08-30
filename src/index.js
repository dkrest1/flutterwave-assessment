import express from "express";
import cors from "cors"
import accountRoutes from "./routes/account.route.js"

const app = express()

const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", accountRoutes);

// throw 404 error for unknown request
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Not found"
    })
})

app.listen(process.env.PORT || port ,() => {
    console.log(`app is live on port ${port}`)
})