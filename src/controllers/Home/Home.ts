import * as Success from "../../globals/success";
import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";

const home: Interfaces.Controllers.Async = async (_req, res, next) => {
  // const data = await prisma.url.findMany();
  try {
    const { msg, status } = Success.System.api;
    const response = {
      msg,
      status,
    };
    return res.json(response);
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error in sending the mail"));
  }
};

export { home };
