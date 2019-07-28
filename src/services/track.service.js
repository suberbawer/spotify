import axiosInstance from "./axios.service";

const path = "https://api.spotify.com/v1/";

export default class TrackService {
  static searchTracksByName = name => {
    return axiosInstance.get(
      `${path}search?q=${name.replace(" ", "%20")}&type=track`
    );
  };
}
