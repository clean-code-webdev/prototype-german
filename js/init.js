import { Nav } from "../js/nav.js";
import { Menu } from "../js/menu.js";
import { StylizeNoun } from "../js/stylizeNoun.js";

export class Init {
  constructor(topic) {
    this.topic = topic;
  }
  init = () => {
    fetch("../json/data.json")
      .then((response) => response.json())
      .then((data) => {
        let words = data;
        let vocabulary = document.querySelector("#vocabulary");
        let counterElement = document.querySelector("#counter");
        let counter = 0;

        const menu = new Menu(words);
        menu.makeMenu();
        menu.styleSelectedUrl();

        words.forEach((word) => {
          if (word.topic !== this.topic) return;

          counter++;

          if (word.class === "verb") {
            let newWord = `<p><span><span style="color: transparent">●</span> <span></span> <span>${word.german}</span></span> <span>${word.english}</span></p>`;
            vocabulary.innerHTML += newWord;
          } else {
            const nounStyle = new StylizeNoun();
            let article = nounStyle.getArticle(word);
            let color = nounStyle.defineColor(word);
            let german = nounStyle.capitalize(word);

            let newWord = `<p><span><span style="color:${color}">●</span> <span>${article}</span> <span>${german}</span></span> <span>${word.english}</span></p>`;
            vocabulary.innerHTML += newWord;
          }
        });

        counterElement.innerHTML = `${this.topic} ( ${counter} )`;

        const nav = new Nav();
        nav.open();
        nav.close();
      });
  };
}
