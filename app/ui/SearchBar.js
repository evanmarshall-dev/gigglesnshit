"use client";

export default function SearchBar(props) {
  const { searchValue, setSearchValue } = props;

  return (
    <input
      className="mx-auto mt-8 p-2 w-5/6 border border-gray-500 rounded-lg"
      placeholder="Search blog posts..."
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
