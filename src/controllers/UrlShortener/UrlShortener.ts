// import * as Success from "../../globals/success";
import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";
import { nanoid } from "nanoid";
import prisma from "../../../prisma/prismaClient";
import moment from "moment";

const UrlShortener: Interfaces.Controllers.Auth = async (req, res, next) => {
  // const data = await prisma.url.findMany();
  try {
    moment.locale("en");
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return next(Utils.Response.error("Please provide a url", 404));
    } else if (
      !originalUrl.startsWith("http") ||
      !originalUrl.startsWith("https")
    ) {
      return next(
        Utils.Response.error(
          "Your URL should start with 'http' or 'https' ",
          403
        )
      );
    }
    const existingUrl = await prisma.url.findFirst({
      where: {
        originalUrl,
        userId: req.user.id,
      },
    });
    if (existingUrl) {
      return next(Utils.Response.error("Url already shortened", 403));
    }
    const shortId = nanoid(6);
    const shortUrl = `${req.hostname}/${shortId}`;
    const result = await prisma.url.create({
      data: {
        originalUrl,
        shortUrl,
        createdAt: time,
        lastClicked: "Never",
        updatedAt: time,
        user: {
          connect: {
            id: req.user.id,
          },
        },
      },
    });
    if (!result) {
      return next(Utils.Response.error("Error in shortening the url"));
    }
    const { msg, status } = Utils.Response.success(
      "Url shortened successfully"
    );
    return res.json({ msg, status, result });
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Internal server error"));
  }
};

export { UrlShortener };
