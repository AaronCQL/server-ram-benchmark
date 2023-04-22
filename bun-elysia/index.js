const { Elysia } = require("elysia");

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

new Elysia()
  .get("/", async () => {
    await wait();
    return "bun-elysia\n";
  })
  .listen(3000);
