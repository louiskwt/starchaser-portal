import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (req, res) => {
  res.send("Hello Starchaser");
});

const start = async () => {
  try {
    await fastify.listen({port: 3000, logger: true});
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
