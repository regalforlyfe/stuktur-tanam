import React from "react";
import { useParams } from "react-router-dom";
import EncryptDecrypt from "../../../services/encrypt-decrypt";

const Detail = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default Detail;
