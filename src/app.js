/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The crow", "My cat", "The pig", "The fish"];

  let action = ["crushed", "ate", "broke", "kick"];

  let what = ["the car", "my phone", "my book"];

  let when = [
    "when i was sleeping",
    "while I was exercising",
    "before the class",
    "during my lunch",
    "while I was praying"
  ];

  let word1 = Math.floor(Math.random() * who.length);
  let word2 = Math.floor(Math.random() * action.length);
  let word3 = Math.floor(Math.random() * what.length);
  let word4 = Math.floor(Math.random() * when.length);
  //write your code here

  document.getElementById("excuse").innerHTML =
    who[word1] + " " + action[word2] + " " + what[word3] + " " + when[word4];

  console.log("Hello Rigo from the console!");
};
