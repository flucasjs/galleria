import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/SlideFooter.module.css";

export default function SlideFooter({ id, paintingName, artistName, slides }) {
  return (
    <div>
      <div className={styles["progress-bar"]}>
        <div
          className={styles["progress-bar__fill"]}
          style={{
            width: `${Math.ceil(((id + 1) / slides.length) * 100)}%`,
          }}
        ></div>
      </div>
      <div className={styles.footer__container}>
        <div className={styles.footer}>
          <div className={styles["footer__info"]}>
            <span className={styles["info__painting-name--small"]}>
              {paintingName}
            </span>
            <span className={styles["info__artist-name--small"]}>
              {artistName}
            </span>
          </div>
          <div className={styles["footer__slide-controls"]}>
            <Link
              className={styles["slide-controls__previous-link"]}
              href={
                id - 1 >= 0
                  ? slides[id - 1].paintingName
                      .split(" ")
                      .join("-")
                      .toLowerCase()
                  : "/"
              }
              style={{
                pointerEvents: id === 0 ? "none" : "auto",
              }}
            >
              <Image
                className={styles["previous-link__image"]}
                src="/svg/icon-back-button.svg"
                fill={true}
                alt=""
                style={{
                  opacity: id === 0 ? 0.2 : 1,
                }}
              />
            </Link>
            <Link
              className={styles["slide-controls__next-link"]}
              href={
                id + 1 < slides.length
                  ? slides[id + 1].paintingName
                      .split(" ")
                      .join("-")
                      .toLowerCase()
                  : "/"
              }
              style={{
                pointerEvents:
                  id === slides.length - 1 ? "none" : "auto",
              }}
            >
              <Image
                className={styles["next-link__image"]}
                src="/svg/icon-next-button.svg"
                fill={true}
                alt=""
                style={{
                  opacity: id === slides.length - 1 ? 0.2 : 1,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
