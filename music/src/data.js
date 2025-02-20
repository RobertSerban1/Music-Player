import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Way Home",
      cover: "/images/1.jpg",
      artist: "Afroham, No Spirit, BAKERMAN",
      audio: "https://stream.chillhop.com/mp3/77526",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Guitar Shop",
      cover: "/images/2.jpg",
      artist: "mommy, Sleepy Fish",
      audio: "https://stream.chillhop.com/mp3/77527",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cirrus",
      cover: "/images/3.jpg",
      artist: "Kupla, QMTZ",
      audio: "https://stream.chillhop.com/mp3/77530",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Breathe In",
      cover: "/images/4.jpg",
      artist: "Psalm Trees, less.people",
      audio: "https://stream.chillhop.com/mp3/77531",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Snowhere",
      cover: "/images/5.jpg",
      artist: "invention_",
      audio: "https://stream.chillhop.com/mp3/77535",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Irresistible",
      cover: "/images/6.jpg",
      artist: "dryhope",
      audio: "https://stream.chillhop.com/mp3/77558",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "S Class",
      artist: "Kreatev, 88JAY",
      cover: "/images/7.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://stream.chillhop.com/mp3/77561",
    },
  ];
}

export default chillHop;
