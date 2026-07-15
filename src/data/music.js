import intro from "../assets/music/96.mp3";
import paroo from "../assets/music/paroo.mp3";
import letter from "../assets/music/cheli.mp3";
import gallery from "../assets/music/found you.mp3";
import final from "../assets/music/remo.mp3";
import photo from "../assets/music/thousand.mp3";
import timeline from "../assets/music/naa cheli rojave.mp3";
import ending from "../assets/music/padi padi leche manasu.mp3";

export const songs = {

  login:{
    files:[intro],
    names:["96"]
  },

  welcome:{
    files:[intro],
    names:["96"]
  },

  letter:{
    files:[
      letter,
      paroo
    ],
    names:[
      "Cheli",
      "Paroo"
    ]
  },

  gallery:{
    files:[gallery],
    names:["Found You"]
  },

  final:{
    files:[final],
    names:["Remo"]
  },

  photo:{
    files:[photo],
    names:["Thousand Years"]
  },

  timeline:{
    files:[timeline],
    names:["Naa Cheli Rojave"]
  },

  forever:{
    files:[ending],
    names:["Padi Padi Leche Manasu"]
  }

};