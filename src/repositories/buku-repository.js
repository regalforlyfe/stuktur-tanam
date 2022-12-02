import BukuModel from "../screen/buku/models/buku-model";
import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API;

const getDataBuku = async ({ index }) => {
  const url = BASE_API + Endpoint.listUsers + "?page=" + index;
  const response = await CallApi({ url, method: "GET" });
  return response.data.data;
};

const getBuku = async () => {
  let buku = [
    new BukuModel({ id: "1", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
    new BukuModel({ id: "2", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
    new BukuModel({ id: "3", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
  ];
  console.log("repo", buku);
  return buku;
};

const BukuRepository = {
  getDataBuku,
  getBuku,
};

export default BukuRepository;
