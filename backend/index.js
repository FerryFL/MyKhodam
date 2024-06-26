// Initialize environment variables
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

// Import routes
const khodamRoutes = require('./routes/khodams');
const userRoutes = require('./routes/users');

// Initialize Express
const app = express();

// Use JSON for requests and responses
app.use(express.json());

// Enable CORS for specific origins
const corsConfig = {
    origin: ["http://localhost:3000", "https://my-khodam.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
};

app.use(cors(corsConfig));

// Test route to verify server is running
app.get("/", (req, res) => {
    res.json({ hello: 'world' });
});

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Use the routes
app.use('/api/khodams', khodamRoutes);
app.use('/api/users', userRoutes);

// Connect to the database
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

    //testing