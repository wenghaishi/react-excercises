import "./Searchbar.css";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useState } from "react";

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState<String>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      className="Searchbar-container"
    >
      <label htmlFor="search" className="search-label">
        Search for a product here
      </label>
      <input
        placeholder="Iphone 13 Pro"
        type="text"
        id="search"
        name="search"
        className="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      {searchQuery && <Autocomplete searchQuery={searchQuery} />}
    </form>
  );
};
