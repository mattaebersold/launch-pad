require("dotenv").config();

const express = require("express");
// const routes = require("./routes/routes");
const app = express();

app.use(express.json());

// app.use("/api/main", routes);


app.listen(process.env.PORT, () => {
  console.log("Launch Pad Server Online");
});
