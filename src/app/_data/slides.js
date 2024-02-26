import heroes from "./heroes";
import artists from "./artists";
import gallery from "./gallery";
import data from "./data";

const slides = data.map((item, i) => ({
  id: i,
  year: item.year,
  wikiSource: item.source,
  paintingName: item.name,
  artistName: item.artist.name,
  description: item.description,
  hero: heroes[i],
  artist: artists[i],
  gallery: gallery[i],
}));

export default slides;