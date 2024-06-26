//init env file
require('dotenv').config()
const cors = require('cors');

//init express
const express = require('express')

//init mongoose
const mongoose = require('mongoose')

//import routes
const khodamRoutes = require('./routes/khodams')
const userRoutes = require('./routes/users')

//run the express
const app = express()

//use json for req and res
app.use(express.json())

// Enable CORS for specific routes
const corsConfig = {
    origin: ["http://localhost:3000","https://my-khodam.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
};

app.use('', cors(corsConfig));

app.get("/", (req, res) => {
    res.json({ hello: 'world' });
});

//middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//use the routes
app.use('/api/khodams', khodamRoutes)
app.use('/api/users', userRoutes)

//connect database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen to port
        app.listen(process.env.PORT, ()=>{
            console.log('connect to db and listening to the port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

