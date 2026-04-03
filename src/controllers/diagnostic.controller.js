import db from "../config/db.js";

export const getDiagnostics = (req, res) => {
  db.query("SELECT * FROM diagnostics", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

export const getTestsByDiagnostic = (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT * FROM diagnostic_tests WHERE diagnostic_id = ?
  `;

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};