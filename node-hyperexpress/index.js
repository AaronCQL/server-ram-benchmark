const HyperExpress = require("hyper-express");
const webserver = new HyperExpress.Server();

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

webserver.get("/", async (request, response) => {
  await wait();
  response.send("node-hyperexpress\n");
});

webserver.listen(3000);
