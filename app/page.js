import Hero from "@/app/ui/Hero";
import getPostMetadata from "@/utils/getPostMetadata";
import SearchView from "./ui/SearchView";

export default function Home() {
  const postMetadata = getPostMetadata("posts");

  return (
    <>
      <Hero />
      <SearchView postMetadata={postMetadata} />
    </>
  );
}
