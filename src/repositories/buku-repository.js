import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";
import { BukuModel } from "../screen/buku/models/buku-model";

const BASE_API = process.env.REACT_APP_BASE_API;

const getDataBuku = async ({ index }) => {
  const url = BASE_API + Endpoint.listUsers + "?page=" + index;
  const response = await CallApi({ url, method: "GET" });
  return response.data.data;
};

const getBuku = async () => {
    let buku = [
    new BukuModel(
      1,
      "https://reqres.in/img/faces/1-image.jpg",
      "user1@gmail.com",
      "user",
      "1"
    ),
    new BukuModel(
      2,
      "https://reqres.in/img/faces/1-image.jpg",
      "user1@gmail.com",
      "user",
      "1"
    ),
    new BukuModel(
      3,
      "https://reqres.in/img/faces/1-image.jpg",
      "user1@gmail.com",
      "user",
      "1"
    ),
  ];
  console.log("repo", buku);
  return buku;
};

const BukuRepository = {
  getDataBuku,
  getBuku,
};

export default BukuRepository;
