import axios from "axios";

// Your Loqate API key
const apiKey = "CX97-DY21-WM96-KJ34";

// Loqate API base URL
const apiUrl = "https://services.postcodeanywhere.co.uk/Capture/Interactive/";

// Function to get address suggestions from Loqate
export const getAddressSuggestions = async (searchTerm: string) => {
  try {
    const data = isJson(searchTerm) ? JSON.parse(searchTerm) : searchTerm;
    var url = "";
    var params = {};
    var isFinal = false;
    if (!isJson(searchTerm) || (isJson(searchTerm) && data.Description != "")) {
      url = apiUrl + "Find/v1.10/json3.ws";
      params = {
        Key: apiKey,
        Text: isJson(searchTerm) ? data.Text : searchTerm,
        Container: isJson(searchTerm) ? data.Id : "",
        Countries: "GB", // Replace with the desired country code (e.g., 'USA' for the United States)
      };
    } else {
      url = apiUrl + "Retrieve/v1.20/json3.ws";
      params = {
        Key: apiKey,
        Id: data.Id,
      };
      isFinal = true;
    }
    const response = await axios.get(url, {
      params: params,
    });
    return isFinal ? [] : response.data.Items;
  } catch (error) {
    console.error("Error fetching address suggestions:", error);
    return [];
  }
};

function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
