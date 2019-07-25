import axiosInstance from "./axios.service";

const path = "https://api.spotify.com/v1/";

export default class ArtistService {
  static searchArtistsByName = name => {
    return axiosInstance.get(`${path}search?q=${name}&type=artist`);
  };
}
