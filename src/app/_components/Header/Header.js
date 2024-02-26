import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ linkText, linkDestination }) {
  return (
    <div className={styles.container}>
      <div className={styles.header_outer}>
        <div className={styles.header}>
          <Image className={styles.logo} src={"/svg/logo.svg"} width={327} height={250} alt="" />
          <Link href={linkDestination} className={styles.link}>
            <h1 className={styles.slideshow_button}>{linkText.toUpperCase()}</h1>
          </Link>
        </div>
      </div>
      <div className={styles.hr}></div>
    </div>
  );
}
