import axios from "axios";

// Your Loqate API key
const apiKey = `h0Or6WEnQFlHCXmp_C4swi**`;

// Loqate API base URL
const apiUrl = "https://expressentry.melissadata.net/web/GlobalExpressFreeForm";

// Function to get address suggestions from Loqate
export const getAddressSuggestions = async (searchTerm: string) => {
  try {
    //?ff=22382+Avenida&format=xml&id=&maxrecords=10&country=US
    const params = {
      ff: searchTerm,
      format: "json",
      id: apiKey,
      maxrecords: 100,
      country: "UK",
    };
    const response = await axios.get(apiUrl, {
      params: params,
    });
    return response.data.Results;
  } catch (error) {
    console.error("Error fetching address suggestions:", error);
    return [];
  }
};
