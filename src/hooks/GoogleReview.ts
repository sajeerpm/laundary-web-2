import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyCto1sFbGWzEfePXaSFyjWDUT4zGs1f4yE";

export const getGoogleReviews = async (placeId: string) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,review&key=${GOOGLE_API_KEY}`
    );

    alert(response.data.result.reviews);
    if (response.data.status === "OK") {
      return response.data.result.reviews;
    } else {
      console.error("Error fetching Google Reviews:", response.data.status);
      return [];
    }
  } catch (error: any) {
    console.error("Error fetching Google Reviews:", error.message);
    return [];
  }
};
