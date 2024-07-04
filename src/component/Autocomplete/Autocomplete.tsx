import "./Autocomplete.css";
import { useState, useEffect } from "react";

interface searchQueryProps {
  searchQuery: string;
}

const Autocomplete = ({ searchQuery }: searchQueryProps) => {
  const [suggestions, setSuggestions] = useState<Todo[]>([]);

  const getSuggestions = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      const firstFiveTodos = data.slice(0, 5);
      setSuggestions(firstFiveTodos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const debounce = () => {};

    getSuggestions();
  }, [searchQuery]);

  return (
    <ul className="autocomplete-container">
      {suggestions &&
        suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion.title}</li>
        ))}
    </ul>
  );
};

export default Autocomplete;
