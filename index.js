const express = require("express");

const app = express();

app.get("/score", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.cricbuzz.com/api/mcenter/livescore/155398",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Referer": "https://www.cricbuzz.com/"
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
