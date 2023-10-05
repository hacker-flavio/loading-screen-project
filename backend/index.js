const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const port = process.env.PORT || 7050;
app.use(express.json());

// Serve static files from the "build" directory
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// Handle requests for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.get("/testing", async (req, res) => {
  res.send("Hello World!");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
