require('dotenv').config();  // Load environment variables from .env file
console.log('Loaded BACKEND_URL:', process.env.BACKEND_URL);
console.log('ENV FILE LOADED: ', process.env);

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/process`, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error sending data to backend:', error.message);
        res.status(500).send('Error sending data to backend');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
