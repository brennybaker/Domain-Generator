/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(generateDomain) {};

let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "awesome"];
let noun = ["jogger", "racoon", "puppy"];
let ext = [".com", ".edu", ".org"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${ext[l]}`);
      }
    }
  }
}
