const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express();


dotenv.load()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());


app.listen(5000, () => console.log('Server started on port 5000'));