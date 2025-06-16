const db = require('../db');

exports.getNextEvents = (req, res) => {
  db.query('SELECT * FROM next_events', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(results);
  });
};