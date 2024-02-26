import React from "react";
import styles from "./InfoBox.module.css";

export default function InfoBox({ name, artist }) {
  return (
    <div className={styles.info}>
      <span className={styles.name}>{name}</span>
      <span className={styles.artist}>{artist}</span>
    </div>
  );
}
