const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/register', cors(), async (req, res) => {
    let {email} = req.body
    let {password} = req.body
    console.log(email);
    console.log(password);
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})