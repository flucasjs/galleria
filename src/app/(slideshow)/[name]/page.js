"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@components/Header";
import Slide from "@components/Slide";
import slides from "@data/slides";
import styles from "./Slideshow.module.css"

export default function Slideshow() {
  const params = useParams();

  const slideData = slides.filter(
    (item) =>
      item.paintingName.replaceAll("-", " ").toLowerCase() ===
      decodeURIComponent(params.name).replaceAll("-", " ").toLowerCase()
  )[0];

  return (
    <div className={styles.page}>
      <Header linkDestination="/" linkText="Stop Slideshow" />
      <Slide slideData={slideData} slides={slides} />
    </div>
  );
}
