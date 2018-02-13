const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get("/sample_route", (req, res) => {
  res.sendFile(path.join(__dirname, "sample_pages", "sample_page.html"));
})
app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => console.log("Example app listening on port ", port));
