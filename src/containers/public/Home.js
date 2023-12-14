import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full h-full m-auto">
      <Header></Header>
      <Navigation></Navigation>
      <div className="w-1100 flex flex-col items-center justify-start m-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
