import { Type } from "@sinclair/typebox";

export const AuthorizeRequestSchema = Type.Object({
  grant_type: Type.String(),
  redirect_uri: Type.String({ format: "uri" }),
  state: Type.String({ maxLength: 256 }),
  nonce: Type.Optional(Type.String()),
});

export const TokenResponseSchema = Type.Object({
  access_token: Type.String(),
  id_token: Type.String(),
  scope: Type.Optional(Type.String()),
});

export const TokenRequestSchema = Type.Object({
  code: Type.String(),
  state: Type.String(),
  redirect_uri: Type.String({ format: "uri" }),
  scope: Type.Optional(Type.String()),
});
