
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

const createServer = () => {
app.use(
cors({
origin: ""}))
}