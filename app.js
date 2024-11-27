const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

// Proxy to fetch Rick and Morty characters
app.get("/api/characters", async (req, res) => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
