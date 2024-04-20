const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./models/conn')
const cors = require('cors');
db()
app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }

))

const port = process.env.PORT

app.use('/', require('./routes/route'))




app.listen(port, () => console.log(`server connected ${port}`))