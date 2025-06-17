const db = require("../db");

exports.getNextEvents = (req, res) => {
  const query = `
    SELECT 
      ne.*,
      f1.image_url AS fighter1_image_url,
      f2.image_url AS fighter2_image_url
    FROM next_events ne
    LEFT JOIN fighter_stats f1 ON ne.fighter1_name = f1.name
    LEFT JOIN fighter_stats f2 ON ne.fighter2_name = f2.name
  `;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(results);
  });
};
