"use client";

import Image from "next/image";
import Link from "next/link";
import InfoBox from "@components/InfoBox";
import styles from "./Thumbnails.module.css";
import thumbnails from "@data/thumbnails";

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
    
export default function Thumbnails() {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailsContainer}>
        {thumbnails.map((col, i) => (
          <div key={i} className={styles.thumbnailsColumn}>
            {col.map(({ src, painting, artist }, j) => (
              <Link
                key={`${painting}-${artist}`}
                href={`${painting.toLowerCase().split(" ").join("-")}`}
                className={`${styles.link}`}
              >
                <div className={styles["thumbnail-container"]}>
                  <div className={styles.gradient}></div>
                  <div className={styles.hoverGradient}></div>
                  <Image
                    src={src}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    alt={`${painting} by ${artist.name}`}
                    className={styles.thumbnail}
                  />
                  <InfoBox name={painting} artist={artist.name} />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
