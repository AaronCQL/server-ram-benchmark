const http = require("http");

const host = "localhost";
const port = 3000;

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const requestListener = async (req, res) => {
  await wait();
  res.writeHead(200).end("node-vanilla\n");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
