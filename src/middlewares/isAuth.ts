import * as Interfaces from ".././interfaces";
import * as Utils from ".././utils";
import { verifyJWT } from "../utils/auth/security/verifyJWT";
import prisma from "../.././prisma/prismaClient";

// import * as Errors from ".././globals/errors";
import jwt from "jsonwebtoken";

export const isAuth: Interfaces.Middlewares.Async = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decoded: any = verifyJWT(token);
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });
      if (!user) {
        // User not found based on decoded user ID
        return res.status(401).json({ message: "Unauthorized - Invalid user" });
      }
      next();
    } catch (error) {
      console.log(error);
      if (error instanceof jwt.JsonWebTokenError) {
        return next(Utils.Response.error("Error in Middleware", 500));
      }
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
    //  return res.redirect('/login');
  }
};
