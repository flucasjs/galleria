import React from "react";
import SlideModal from "@components/SlideModal";
import SlideMedia from "@components/SlideMedia";
import SlideBody from "@components/SlideBody";
import SlideFooter from "@components/SlideFooter";
import styles from "./styles/Slide.module.css";

export default function Slide({ slideData, slides }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  function toggleModal(e) {
    if (e.currentTarget !== e.target) return;
    e.stopPropagation();
    setModalVisible((v) => !v);
  }

  return (
    <>
      {modalVisible && <SlideModal galleryImage={slideData.gallery} modalVisible={modalVisible} handleClick={toggleModal}/>}
      <div className={styles.container}>
        <SlideMedia
          heroImage={slideData.hero}
          artistImage={slideData.artist}
          paintingName={slideData.paintingName}
          artistName={slideData.artistName}
          handleClick={toggleModal}
        />
        <SlideBody
          year={slideData.year}
          description={slideData.description}
          wikiSource={slideData.wikiSource}
        />
      </div>
      <SlideFooter
        id={slideData.id}
        paintingName={slideData.paintingName}
        artistName={slideData.artistName}
        slides={slides}
      />
    </>
  );
}
