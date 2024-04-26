import * as Interfaces from "../../interfaces";
import * as Utils from "../../utils";
import prisma from "../../../prisma/prismaClient";

const getAnalytics: Interfaces.Middlewares.Auth = async (req, res, next) => {
  try {
    const userId = req.user?.id; // Extract user ID from the request object

    // Check if user ID is available
    if (!userId) {
      return next(Utils.Response.error("User ID not provided"));
    }

    const urlId = req.params.urlId; // Extract URL ID from the request parameters
    if (!urlId) {
      return next(Utils.Response.error("URL ID not provided"));
    }
    // Fetch the URL based on the URL ID and the associated user ID
    const url = await prisma.url.findFirst({
      where: {
        id: urlId,
        userId: userId, // Filter by both URL ID and user ID
      },
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

    // Check if the URL belongs to the logged-in user
    if (!url) {
      return next(Utils.Response.error("URL not found"));
    }

    // Return analytics data as response
    return res.json(url);
  } catch (error) {
    console.log(error);
    return next(Utils.Response.error("Error fetching analytics data"));
  }
};

// Export the getAnalytics middleware function
export { getAnalytics };
