async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

require("uWebSockets.js")
  .App({})
  .get("/", async (res, req) => {
    res.onAborted(() => {});
    await wait();
    res.writeStatus("200").end("node-uwebsocketjs\n");
  })
  .listen(3000, (listenSocket) => {
    if (listenSocket) {
      console.log("Server started on port 3000");
    }
  });
