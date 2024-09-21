
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ticketRoutes = require('./api/tickets');

const app = express();
const PORT =  3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ayannilofer99:FZaAhQq1S00egCxE@cluster0.wqls1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/tickets', ticketRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
