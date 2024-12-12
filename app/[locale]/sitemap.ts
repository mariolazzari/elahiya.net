import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const routes: MetadataRoute.Sitemap = ["/", "/about", "/map"].map(url => ({
    url: `https://elahiya.net${url}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return routes;
};

export default sitemap;
