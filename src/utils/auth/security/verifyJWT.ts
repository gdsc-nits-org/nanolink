// utils/auth/security/verifyjwt.ts

import jwt from "jsonwebtoken";
import env from "config"; // Import environmental variables

export const verifyJWT = (token: string): any => {
  try {
    return jwt.verify(token, env.JWT_SECRET_KEY);
  } catch (error) {
    throw new jwt.JsonWebTokenError("Invalid JWT token");
  }
};
