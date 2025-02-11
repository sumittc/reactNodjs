const express = require("express");
const syncDatabase = require("./sync/syncDatabase");

const app = express();
const port = 5000;

app.use(express.json());

// Available routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));


// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  syncDatabase();
});