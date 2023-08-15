import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { getAddressSuggestions } from "@/hooks/LoqateService";

interface Suggestion {
  Text: string;
  Id: string;
  Description: string;
}

type Props = {
  placeholder: string;
};

const InputWithSuggestions = ({ placeholder }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setAddressSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.target.value;
    setInputValue(searchTerm);

    if (searchTerm.length >= 2) {
      const suggestions = await getAddressSuggestions(searchTerm);
      setAddressSuggestions(suggestions ? suggestions : []);
    } else {
      setAddressSuggestions([]);
    }
    setShowSuggestions(true);
  };

  const handleSuggestionClick = async (suggestion: Suggestion) => {
    setInputValue(suggestion.Text);
    // setAddressSuggestions([]);
    const suggestions = await getAddressSuggestions(JSON.stringify(suggestion));
    setAddressSuggestions(suggestions ? suggestions : []);

    if (suggestions.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
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
          required
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
              {suggestion.Text} {suggestion.Description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputWithSuggestions;
