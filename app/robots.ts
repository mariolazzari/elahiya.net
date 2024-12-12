import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      "https://elahiya.net/en/sitemap.xml",
      "https://elahiya.net/fa/sitemap.xml",
    ],
  };
};

export default robots;
