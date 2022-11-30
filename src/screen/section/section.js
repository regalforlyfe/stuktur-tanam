import React from "react";
import { useSelector } from "react-redux";
import ListBuku from "../buku/list-buku";
import Dashboard from "../dashboard/dashboard";
import Product from "../product/product";

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
      return <ListBuku />;
    }
  };
  return <MainComponent />;
};

export default Section;
