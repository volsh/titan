import express, { Request, Response } from "express";
import { getNUrls } from "../utils/photos";
import { getCache } from "../cache";
import { photosResponse } from "src/@types/photos";

const router = express.Router();

const API_KEY = "47773571-1bbe4f7f58551289a81d57b02";

const cache = getCache();

router.get("/", (req: Request, res: Response) => {
  const { n } = req.query;

  if (isNaN(n as unknown as number)) {
    res.status(400).send(new Error("bad request"));
  }

  // Check if the data exists in the cache
  const cachedData = cache.get("allPhotos") as photosResponse;

  if (cachedData) {
    // Serve the data from cache
    res.json(getNUrls(cachedData.hits, n as unknown as number));
  } else {
    const url = "https://pixabay.com/api/?key=" + API_KEY;
    fetch(url)
      .then((data) => data.json())
      .then((photos: photosResponse) => {
        cache.set("allPhotos", photos);

        res.json(getNUrls(photos.hits, n as unknown as number));
      })
      .catch((err) => res.status(err.status).send(err.message));
  }
});

export default router;
