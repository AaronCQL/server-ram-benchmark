// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

// Declare a route
fastify.get("/", async (request, reply) => {
  await wait();
  return "node-fastify\n";
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
