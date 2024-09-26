import getPostMetadata from "@/utils/getPostMetadata";

export default function sitemap() {
  const posts = getPostMetadata("posts");

  const dynamicPages = posts.map((post) => ({
    url: `https://www.gigglesnshit.me/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: "https://www.gigglesnshit.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.gigglesnshit.me",
      lastModified: "2024-09-21",
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://www.gigglesnshit.me/family.jpg"],
    },
  ];

  return [...staticPages, ...dynamicPages];
}
