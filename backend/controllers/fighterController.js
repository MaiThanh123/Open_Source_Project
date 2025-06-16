const db = require('../db');


exports.getFighterByName = (req, res) => {
  const { name } = req.params;

  const query = 'SELECT * FROM fighter_stats WHERE name = ?';
  db.query(query, [name], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Fighter not found' });
    }

    res.json(results[0]); // 1명만 검색되므로 첫 번째 객체 반환
  });
};

exports.getFightersByWeightClass = (req, res) => {
  const { weight_class } = req.params;

  const query = 'SELECT * FROM fighter_stats WHERE weight_class = ?';
  db.query(query, [weight_class], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No fighters found in this weight class' });
    }

    res.json(results); // 여러 명이므로 배열로 반환
  });
};
