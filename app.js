const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello World'))

app.listen(9109, () => console.log('localhost:9109'))
