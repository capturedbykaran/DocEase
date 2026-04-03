import db from "../config/db.js";

export const getDoctors = (req, res) => {
  const { specialization } = req.query;

  let query = "SELECT * FROM doctors";

  if (specialization) {
    query += " WHERE specialization = ?";
    db.query(query, [specialization], (err, result) => {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
  } else {
    db.query(query, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
};

export const getDoctorById = (req, res) => {
  console.log("ID API HIT"); // 👈 add this

  const { id } = req.params;

  db.query("SELECT * FROM doctors WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};