import React from "react";
import ListBuku from "../buku/list-buku";
import Dashboard from "../dashboard/dashboard";
import Product from "../product/product";

const Section = ({activeSection}) => {
  console.log("section", activeSection);
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
