import * as Interfaces from "../../interfaces";
import prisma from "prisma/prismaClient";

const manage: Interfaces.Middlewares.Async = async (req, res) => {
  try {
    const { data, id } = req.body;
    const longUrl = data.originalUrl;
    const shortUrl = data.shortUrl;

    const existingShortUrl = await prisma.url.findFirst({
      where: {
        shortUrl: shortUrl,
      },
    });

    if (existingShortUrl) {
      return res
        .status(403)
        .json({
          message:
            "Shortid already exists in our database. Sorry, Choose something else",
        });
    }

    const existingUrl = await prisma.url.findFirst({
      where: {
        originalUrl: longUrl,
        userId: id,
      },
    });

    if (existingUrl && existingUrl.userId === id) {
      const updatedUrl = await prisma.url.update({
        where: {
          id: existingUrl.id,
        },
        data: {
          shortUrl: shortUrl,
        },
      });

      return res.status(202).json({ message: "success", data: updatedUrl });
    }
    return res.status(404).json({ message: "URL does not exist" });
  } catch (error) {
    console.error("Error managing URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default manage;
