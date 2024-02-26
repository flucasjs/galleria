import starryNight from "./images/starry-night/thumbnail.jpg";
import girlWithAPearlEarring from "./images/girl-with-pearl-earring/thumbnail.jpg";
import guernica from "./images/guernica/thumbnail.jpg";
import penitentMagdalene from "./images/penitent-magdalene/thumbnail.jpg";
import theStormOnTheSeaOfGalilee from "./images/the-storm-on-the-sea-of-galilee/thumbnail.jpg";
import theGreateWaveOffKangawa from "./images/the-great-wave-off-kanagawa/thumbnail.jpg";
import vanGoghSelfPortrait from "./images/van-gogh-self-portrait/thumbnail.jpg";
import theSleepingGypsy from "./images/the-sleeping-gypsy/thumbnail.jpg";
import ladyWithAnErmin from "./images/lady-with-an-ermine/thumbnail.jpg";
import theNightCafe from "./images/the-night-cafe/thumbnail.jpg";
import theBasketOfApples from "./images/the-basket-of-apples/thumbnail.jpg";
import theBoyInTheRedVest from "./images/the-boy-in-the-red-vest/thumbnail.jpg";
import arnolfiniPortrait from "./images/arnolfini-portrait/thumbnail.jpg";
import monaLisa from "./images/mona-lisa/thumbnail.jpg";
import theSwing from "./images/the-swing/thumbnail.jpg";

import data from "./data";

const thumbnails = [
  starryNight,
  theStormOnTheSeaOfGalilee,
  ladyWithAnErmin,
  theBoyInTheRedVest,
  girlWithAPearlEarring,
  theGreateWaveOffKangawa,
  theNightCafe,
  arnolfiniPortrait,
  guernica,
  vanGoghSelfPortrait,
  monaLisa,
  penitentMagdalene,
  theSleepingGypsy,
  theBasketOfApples,
  theSwing,
].reduce((cols, current, i) => {
  if (Math.floor(i / 4) === 2 && i % 4 === 3) {
    cols[3].push({
      src: current,
      painting: data[i].name,
      artist: data[i].artist,
    });
  } else {
    cols[Math.floor(i / 4)].push({
      src: current,
      painting: data[i].name,
      artist: data[i].artist,
    });
  }
  return cols;
}, Array(4).fill(null).map(() => []));

export default thumbnails;
