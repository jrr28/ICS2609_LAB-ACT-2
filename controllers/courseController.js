import db from "../config/db.js";

// CREATE a new course
export const createCourse = (req, res) => {
  const { code, title, units } = req.body;
  if (!code || !title || !units) {
    return res.status(400).json({ error: "code, title, and units are required" });
  }

  const sql = "INSERT INTO courses (code, title, units, created_at) VALUES (?, ?, ?, NOW())";
  db.query(sql, [code, title, units], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "course code must be unique" });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      message: "Course created",
    });
  });
};

// READ all courses
export const getCourses = (req, res) => {
  db.query("SELECT * FROM courses", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// READ one course by ID
export const getCourseById = (req, res) => {
  const sql = "SELECT * FROM courses WHERE id = ?";
  db.query(sql, [req.params.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (rows.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(rows[0]);
  });
};

// UPDATE a course
export const updateCourse = (req, res) => {
  const { code, title, units } = req.body;
  if (!code || !title || !units) {
    return res.status(400).json({ error: "code, title, and units are required" });
  }

  const sql = "UPDATE courses SET code = ?, title = ?, units = ? WHERE id = ?";
  db.query(sql, [code, title, units, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course updated successfully" });
  });
};

// DELETE a course
export const deleteCourse = (req, res) => {
  const sql = "DELETE FROM courses WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  });
};
