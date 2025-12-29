import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bangladesh&language=en&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "News fetch failed" });
  }
});

export default app;
