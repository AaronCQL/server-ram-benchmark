const express = require("express");
const app = express();
const port = 3000;

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

app.get("/", async (req, res) => {
  await wait();
  res.send("node-express\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
