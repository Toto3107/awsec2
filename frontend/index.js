const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/process', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error sending data to backend');
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
