import React from "react";
import { useSelector } from "react-redux";
import ListBuku from "../buku/ListBuku";
import Dashboard from "../dashboard/Dashboard";
import Product from "../product/Product";
import UserData from "../userdata/UserData"

const Section = () => {
  // activeSection bs langsung di panggil di sini tanpa lewat parameter, karena Section itu di wrap dalam 1 Provider dengan parent nya.
  // jadi bs langsung di consume
  const activeSection = useSelector((state) => state.reducer.activeSection);
  const MainComponent = () => {
    if (activeSection === "dashboard") {
      return <Dashboard />;
    } else if (activeSection === "product") {
      return <Product />;
    } else {
      return <UserData />;
    }
  };
  return <MainComponent />;
};

export default Section;
