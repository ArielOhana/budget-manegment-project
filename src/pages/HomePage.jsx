import React, { useState } from "react";
import "../style/HomePage.css";

//Home Page Components
import NavBar from "../components/NavBar";
import HomePageFirst from "../components/HomePage/HomePageFirst";
import HomePageSecond from "../components/HomePage/HomePageSecond";
import HomePageThird from "../components/HomePage/HomePageThird";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HomePageFirst />
      <HomePageSecond />
      <HomePageThird />
      <Footer />
    </div>
  );
}
