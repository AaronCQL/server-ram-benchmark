async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default {
  port: 3000,
  async fetch(request) {
    await wait();
    return new Response("bun-vanilla\n");
  },
};
