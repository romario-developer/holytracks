import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET ?? "holytracks-demo-secret";

export const signToken = (payload: { userId: string }) =>
  jwt.sign(payload, secret, { expiresIn: "8h" });

export const verifyToken = (token: string) => jwt.verify(token, secret) as { userId: string };
