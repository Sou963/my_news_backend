import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ message: "API key missing" });
    }

    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: "bangladesh",
          language: "en",
          apiKey: apiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: "News fetch failed" });
  }
});

export default app;
