import { FastifyInstance } from "fastify";

export default async function router(fastify: FastifyInstance): Promise<void> {
  fastify.post("/start", async (req) => {
    return req.body;
  });
}
