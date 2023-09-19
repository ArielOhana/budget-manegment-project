import React from "react";
import NavBar from "../components/NavBar";
import "../style/HomePage.css";

//Home Page Components
import HomePageFirst from "../components/HomePage/HomePageFirst";
import HomePageSecond from "../components/HomePage/HomePageSecond";
import HomePageThird from "../components/HomePage/HomePageThird";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HomePageFirst />
      <HomePageSecond />
      <HomePageThird />
    </div>
  );
}
