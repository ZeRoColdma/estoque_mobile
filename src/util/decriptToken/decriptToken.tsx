import jwt_decode from "jwt-decode";

export function decriptToken(token: string) {
  const decoded = jwt_decode(token);
  return decoded;
}
