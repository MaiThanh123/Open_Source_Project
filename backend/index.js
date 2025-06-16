const express = require('express');
const cors = require('cors');
const fighterRoutes = require('./routes/fighters');
const nextEventsRoutes = require('./routes/nextEvent');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/fighters', fighterRoutes);
app.use('/api/nextEvents', nextEventsRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});