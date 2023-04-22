const Bun = require("bun");

export default {
  port: 3000,
  async fetch(request) {
    await Bun.sleep(1000);
    return new Response("bun-vanilla\n");
  },
};
