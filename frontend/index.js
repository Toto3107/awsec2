const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.listen(3000, () => {
    console.log('Frontend running on port 3000');
});

app.use(cors());
app.use(bodyParser.json());  // Use JSON parser since frontend sends JSON
app.use(express.static('views')); // Serve static files from views folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/process', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error sending data to backend:', error.message);
        res.status(500).send('Error sending data to backend');
    }
});
