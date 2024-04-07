import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";

import prisma from "../../../prisma/prismaClient";

const DeleteUrl: Interfaces.Controllers.Auth = async (req, res, next) => {
  try {
    const { id } = req.params;
    const url = await prisma.url.findUnique({
      where: {
        id: id,
      },
    });
    // console.log(url);
    if (!url) {
      return next(Utils.Response.error("Url not found"));
    }
    // if (url.userId !== req.user.userId) {
    //   return next(
    //     Utils.Response.error("You are not authorized to delete this url")
    //   );
    // }
    const result = await prisma.url.delete({
      where: {
        id: id,
      },
    });
    console.log(result, id);
    if (!result) {
      return next(Utils.Response.error("Error in deleting the url"));
    }
    const { msg, status } = Utils.Response.success("Url deleted successfully");
    return res.json({ msg, status, result });
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error in deleting the url"));
  }
};

export { DeleteUrl };
