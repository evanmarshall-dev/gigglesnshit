export default function sitemap() {
  return [
    {
      url: "https://www.gigglesnshit.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: "https://www.gigglesnshit.me/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    {
      url: "https://www.gigglesnshit.me",
      lastModified: "2024-09-21",
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.gigglesnshit.me/family.jpg"],
    },
  ];
}
