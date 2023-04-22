const Bun = require("bun");
const { Elysia } = require("elysia");

new Elysia()
  .get("/", async () => {
    await Bun.sleep(1000);
    return "bun-elysia\n";
  })
  .listen(3000);
