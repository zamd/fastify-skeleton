import { Static } from "@sinclair/typebox";

import {
  AuthorizeRequestSchema,
  TokenRequestSchema,
  TokenResponseSchema,
} from "../schemas";

export type AuthorizeRequest = Static<typeof AuthorizeRequestSchema>;
export type TokenRequest = Static<typeof TokenRequestSchema>;
export type TokenResponse = Static<typeof TokenResponseSchema>;
