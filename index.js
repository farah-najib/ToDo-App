console.log('May Node be with you')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('css'));
app.use(express.static('js'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./routers/viewRoutes")(app);
require("./routers/taskrouter")(app);
app.post('/quotes', (req, res) => {
    console.log(req.body)
})


app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000')    
})