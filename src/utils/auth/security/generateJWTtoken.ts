// utils/auth/secret/generateToken.ts
import jwt from "jsonwebtoken";
import env from "config"; // Assuming your environment variables are stored in config.ts

export const generateToken = (payload: any): string => {
  const secretKey = env.JWT_SECRET_KEY; // Retrieve the JWT secret key from environment variables
  if (!secretKey) {
    throw new Error("JWT secret key is not provided in environment variables");
  }

  // Generate JWT token
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour

  return token;
};
