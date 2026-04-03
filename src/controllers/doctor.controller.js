import db from "../config/db.js";

export const getDoctors = (req, res) => {
  db.query("SELECT * FROM doctors", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

export const addDoctor = (req, res) => {
  const { name, specialization, fees, contact, website, location } = req.body;

  const query = `
    INSERT INTO doctors (name, specialization, fees, contact, website, location)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, specialization, fees, contact, website, location],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Doctor added successfully" });
    }
  );
};