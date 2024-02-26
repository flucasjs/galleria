import React from "react";
import Image from "next/image";
import styles from "./styles/SlideMedia.module.css";

export default function SlideMedia({ heroImage, artistImage, paintingName, artistName, handleClick }) {
  return (
    <div className={styles.media}>
      <div className={styles.media__hero}>
        <button className={styles["hero__view-button"]} onClick={handleClick}>
          <div className={styles["view-button__expand-icon"]}>
            <Image
              className={styles["expand-icon__image"]}
              src="/svg/icon-view-image.svg"
              fill={true}
              alt=""
            />
          </div>
          <span className={styles["view-button__text"]}>VIEW IMAGE</span>
        </button>
        <Image
          className={styles.hero__image}
          src={heroImage}
          sizes="(max-width: 768px) 327px, 475px"
          alt=""
        />
      </div>
      <div className={styles["media__info-box"]}>
        <div className={styles["info-box__info-container"]}>
          <span className={styles["info-box__painting-name"]}>
            {paintingName.replace("-", "\u2011")}
          </span>
          <span className={styles["info-box__artist-name"]}>
            {artistName}
          </span>
        </div>
        <div className={styles["info-box__artist-portrait-container"]}>
          <Image
            className={styles["info-box__artist-portrait-image"]}
            sizes="(max-width: 768px) 64px, 128px"
            src={artistImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
