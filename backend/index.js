const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/fighters');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/fighters', fighterRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});