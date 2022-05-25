import { AuthorizeRequest } from "../types";
import { randomBytes } from "crypto";

export async function startAuthorization(request: AuthorizeRequest) {
  console.log(`${request.grant_type}, ${request.redirect_uri}`);
  return randomBytes(24).toString("base64url");
}
