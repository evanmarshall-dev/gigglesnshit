"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";

export default function SearchView(props) {
  const { postMetadata } = props;
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-7">
        {postMetadata
          .filter((val) => {
            return val.title.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((post, postIndex) => {
            return <PostCard key={postIndex} post={post} />;
          })}
      </div>
    </>
  );
}
