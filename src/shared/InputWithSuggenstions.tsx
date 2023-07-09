import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import jsonData from "@/data/cities.json";

interface Suggestion {
  postalCode: string;
  city: string;
  area: string;
}

type Props = {
  placeholder: string;
};

const InputWithSuggestions = ({ placeholder }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const fetchSuggestions = (inputValue: string): Suggestion[] => {
    // Placeholder logic for fetching suggestions
    // You can replace this with your own implementation

    const filteredSuggestions = jsonData.filter(
      (suggestion) =>
        suggestion.postalCode
          .toLowerCase()
          .includes(inputValue.toLowerCase()) ||
        suggestion.city.toLowerCase().includes(inputValue.toLowerCase())
    );

    return filteredSuggestions;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const fetchedSuggestions = fetchSuggestions(value);
    setSuggestions(fetchedSuggestions);

    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setInputValue(suggestion.postalCode);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target as Node)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="textbox-container mt-3 h-[48px] bg-white">
        <ArrowLongRightIcon className="h-6 w-6 text-black" />
        <input
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="textbox-input w-full border text-center focus:outline-none"
          ref={inputRef}
        />
      </div>
      {showSuggestions && (
        <ul
          className="absolute left-0 mt-1 max-h-40 w-full overflow-y-auto rounded border bg-white shadow"
          ref={suggestionsRef}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {suggestion.postalCode} - {suggestion.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithSuggestions;
