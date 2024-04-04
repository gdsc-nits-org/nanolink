import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";
import prisma from "prisma/prismaClient";

const home: Interfaces.Controllers.Async = async (_req, res, next) => {
  // const data = await prisma.url.findMany();
  try {
    // const { msg, status } = Success.System.api;
    // const response = {
    //   msg,
    //   status,
    // };
    const data = await prisma.url.findMany();
    return res.json(data);
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error in sending the mail"));
  }
};

export { home };
