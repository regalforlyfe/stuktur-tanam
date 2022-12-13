import BukuModel from "../pages/buku/models/BukuModel";
import Endpoint from "../services/endpoint";
import CallApi from "../services/request-helper";

const BASE_API = process.env.REACT_APP_BASE_API;

const getDataBuku = async ({ index }) => {
  const url = BASE_API + Endpoint.listUsers + "?page=" + index;
  const response = await CallApi({ url, method: "GET" });
  return response.data.data;
};

const getBuku = async () => {
  const url = BASE_API + Endpoint.listUsers + "?page=" + 1;
  const response = await CallApi({ url, method: "GET" });
  const data = typeof response != "undefined" ? response.data : null;
  const data2 = typeof data != "undefined" && data != null ? data.data : [];
  let buku2 = [];
  data2.forEach((element) => {
    var buku = new BukuModel({
      id: element.id,
      avatar: element.avatar,
      email: element.email,
      namaDepan: element.first_name,
      namaBelakang: element.last_name,
    });
    buku2.push(buku);
  });

  // let buku = [
  //   new BukuModel({ id: "1", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
  //   new BukuModel({ id: "2", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
  //   new BukuModel({ id: "3", avatar: "https://reqres.in/img/faces/1-image.jpg", email: "user1@gmail.com", namaDepan: "user", namaBelakang: "1" }),
  // ];
  // console.log("repo", buku);
  return buku2;
};

const BukuRepository = {
  getDataBuku,
  getBuku,
};

export default BukuRepository;
