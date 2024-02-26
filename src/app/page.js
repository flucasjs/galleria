import Header from "@components/Header/Header";
import Thumbnails from "@components/Thumbnails/Thumbnails";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header linkDestination="/starry-night" linkText="Start Slideshow" />
      <Thumbnails />
    </main>
  );
}