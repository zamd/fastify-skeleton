import fastify from "fastify";
import routes from "./routes";

async function main() {
  const app = fastify();
  app.register(routes.oauth, { prefix: "/oauth/v2" });
  app.register(routes.passwordless, { prefix: "/passwordless/v1" });

  app.route({
    method: "GET",
    url: "/test",
    handler: async (req, res) => {
      res.status(200).send({ ok: true });
    },
  });
  const listenAddress = await app.listen(9330);
  console.log(`Listening on ${listenAddress}`);
}

main();
