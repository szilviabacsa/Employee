import express from 'express'
import cors from "cors"
import employeeRoutes from "./routes/employees.js"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.use("/employees", employeeRoutes)

app.listen(PORT, () =>{
    console.log(`Server runs on http://localhost:${PORT}`)
})