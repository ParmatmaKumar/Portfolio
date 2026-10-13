const express = require('express');
const app = express();

const { connectDB } = require("./config/database");

const cors = require('cors');

const PORT = process.env.PORT ;

connectDB();

app.use(express.json());

// defult route
app.get('/', (req, res) => {
    res.send('Welcome to the Mega Project Backend API');
});

 
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});