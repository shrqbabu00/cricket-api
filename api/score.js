export default async function handler(req, res) {
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

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
