// import { Request, Response, NextFunction } from "express";
import * as Interfaces from "../interfaces";
import * as Utils from "../utils";

import prisma from "../../prisma/prismaClient";

const getAnalytics: Interfaces.Middlewares.Async = async (_req, res, next) => {
  try {
    // Fetch analytics data from the database
    const analyticsData = await prisma.url.findMany({
      select: {
        id: true,
        originalUrl: true,
        shortUrl: true,
        clickedCount: true,
        lastClicked: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Return analytics data as response
    return res.json(analyticsData);
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error fetching analytics data"));
  }
};

export { getAnalytics };
