import styles from "../styles/Home.module.scss";
import ModalButtons from "../comp/ModalButtons";
import { useState } from "react";
import Image from "next/image";
import HomeSlider from "../comp/HomeSlider";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-text"></div>
      </div>
      <HomeSlider />
    </div>
  );
}
