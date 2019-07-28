import axiosInstance from "./axios.service";

const path = "https://api.spotify.com/v1/";

export default class AlbumService {
  static getAlbum = albumId => {
    return axiosInstance.get(`${path}albums/${albumId}`);
  };
}
