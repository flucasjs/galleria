import React from "react";
import Link from "next/link";
import styles from "./styles/SlideBody.module.css";

export default function SlideBody({ year, description, wikiSource }) {
  return (
    <div className={styles.body}>
      <span className={styles["body__painting-year"]}>{year}</span>
      <div className={styles["body__description-container"]}>
        <p className={styles["body__painting-description"]}>
          {description.replace("-", "\u2011")}
        </p>
        <Link
          className={styles["body__description-source"]}
          href={wikiSource}
        >
          GO TO SOURCE
        </Link>
      </div>
    </div>
  );
}
