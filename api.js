const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Project_Management",
  password: "qwerty",
  port: 5432,
});

app.get("/background-image/:image_id", async (req, res) => {
  const imageId = req.params.image_id;
  try {
    const result = await pool.query(
      "SELECT cloudinary_url FROM images WHERE image_id = $1",
      [imageId]
    );
    const imageUrl = result.rows[0].cloudinary_url;
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error fetching background image:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
