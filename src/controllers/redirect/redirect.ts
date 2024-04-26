import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";
import prisma from "prisma/prismaClient";
import moment from "moment";

const redirect: Interfaces.Middlewares.Async = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const shortUrl = `${req.hostname}/${shortId}`;
    const url = await prisma.url.findUnique({
      where: {
        shortUrl: shortUrl,
      },
    });

    if (!url) {
      return next(Utils.Response.error("Url not found"));
    }
    const updatedUrl = await prisma.url.update({
      where: {
        shortUrl: shortUrl,
      },
      data: {
        lastClicked: moment().format("MMMM Do YYYY, h:mm:ss a"),
        clickedCount: url.clickedCount + 1,
      },
    });
    return res.redirect(updatedUrl?.originalUrl || "https://www.google.com");
  } catch (error) {
    return next(Utils.Response.error("Error in redirecting"));
  }
};

export { redirect };
