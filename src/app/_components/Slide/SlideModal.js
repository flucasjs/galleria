import React from "react";
import Image from "next/image";
import styles from "./styles/SlideModal.module.css";

export default function SlideModal({ galleryImage, modalVisible, handleClick }) {
  return (
    <div
      className={styles.modal}
      style={{ visibility: modalVisible ? "visible" : "hidden" }}
      onClick={handleClick}
    >
      <div className={styles["modal__inner-container"]}>
        <button className={styles["modal__close-button"]} onClick={handleClick}>
          <span className={styles["modal__close-button-text"]}>CLOSE</span>
        </button>
        <div className={styles["modal__gallery-container"]}>
          <Image
            src={galleryImage}
            alt=""
            width={galleryImage.width}
            height={galleryImage.height}
            sizes="(max-width: 768px) 327px, 100%"
            className={styles["modal__gallery-image"]}
          />
        </div>
      </div>
    </div>
  );
}
