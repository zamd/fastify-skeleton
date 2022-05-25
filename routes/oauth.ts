import { FastifyInstance } from "fastify";
import {
  AuthorizeRequestSchema,
  TokenRequestSchema,
  TokenResponseSchema,
} from "../schemas";
import { startAuthorization } from "../services/authorization";
import { AuthorizeRequest, TokenRequest, TokenResponse } from "../types";

export default async function router(fastify: FastifyInstance): Promise<void> {
  fastify.get<{ Querystring: AuthorizeRequest }>(
    "/authorize",
    {
      schema: {
        querystring: AuthorizeRequestSchema,
      },
    },
    async (req, res) => {
      const code = await startAuthorization(req.query);
      const response = `${req.query.redirect_uri}?code=${code}&state=${req.query.state}`;
      res.code(302).header("Location", response).send();
    }
  );
  fastify.post<{
    Body: TokenRequest;
  }>(
    "/token",
    {
      schema: {
        body: TokenRequestSchema,
        response: {
          200: TokenResponseSchema,
        },
      },
    },
    async (req, res) => {
      const { scope } = req.body;
      const response: TokenResponse = {
        scope,
        access_token: "sasdfsafdsa",
        id_token: "dsdfsdfsd",
      };

      res.status(200).send(response);
    }
  );
}
