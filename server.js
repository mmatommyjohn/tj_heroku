const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));
app.get("/sample_route", (req, res) => {
  res.sendFile(path.join(__dirname, "sample_pages", "sample_page.html"));
})

app.listen(port, () => console.log("Example app listening on port ", port));
