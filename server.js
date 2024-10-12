// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Hello, TurboTaxi!'); // This will be the response when accessing the root URL
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});