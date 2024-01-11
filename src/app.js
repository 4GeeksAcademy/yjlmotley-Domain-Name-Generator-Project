/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articles = ["my", "some", "this"];
  let adjectives = ["hilarious", "rib-tickling", "goofy", "wacky"];
  let nouns = [
    "racoon",
    "shenanigans",
    "snort",
    "slapstick",
    "wisecrack",
    "gag"
  ];
  let tlds = [".lol", ".snicker", ".giggle", ".haha", ".comedy"];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${article}-${adjective}-${noun}${tld}`);
        }
      }
    }
  }
};
