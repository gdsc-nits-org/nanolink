import * as crypto from "crypto";

export const hashPassword = (password: string, salt: string): string => {
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hashedPassword;
};
