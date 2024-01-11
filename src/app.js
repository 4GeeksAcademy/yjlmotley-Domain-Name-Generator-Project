/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];
// let domain = ['.com', '.org', '.net', '.us', '.kr'];

// articles
// adjectives
// nouns
// tld (top level domains): .cat, .dog, .lol

window.onload = function() {
  let articles = ["the", "a"];
  let adjectives = ["big"];
  let nouns = ["racoon"];
  let tlds = ["rocks"];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }
};

// example of what should show:
// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com

// Hints:
// You'll need to use nested for loops in order to mix the different values together.
// Your tools: For loop, string concatenation.

// 😎 Feeling confident?
// Add domain hacks, for example: instead of lastOfUs.com you can use the .us domain like this: lastOf.us
