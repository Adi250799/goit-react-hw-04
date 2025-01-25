import axios from "axios";

const APIKEY = "SPJbekjuZIcUi4EtwkE7gaqKyCgOYfEyzx_gzszcD_s4";

axios.defaults.baseURL = `https://api.unsplash.com/search`;

export const fetchPhotos = async (query, page = 1) => {
  const response = await axios.get(
    `/photos/?client_id=${APIKEY}&page=${page}&query=${query}`
  );
  return response.data.results;
};