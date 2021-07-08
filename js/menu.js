export class Menu {
  constructor(words) {
    this.words = words;
  }
  getTopics = () => {
    let topics = [];
    let words = this.words;

    words.forEach((word) => {
      if (topics.includes(word.class)) return;
      topics.push(word.class);
    });
    return topics.sort();
  };

  getUrl = () => {
    let url = window.location.href;

    url = url.split("/");
    url = url[url.length - 1];
    url = url.split(".")[0];
    return url;
  };

  styleSelectedUrl = () => {
    const url = this.getUrl();
    let topics = document.querySelectorAll("#topics a");

    topics.forEach((topic) => {
      if (topics.href === `./${url}.html`) {
        topic.style.color = "red";
      }
    });
  };

  makeMenu = () => {
    const topics = this.getTopics();
    let vocabularyTopics = document.querySelector("#topics");
    let url = this.getUrl();

    topics.forEach((topic) => {
      let baseFolder = "";

      if (url === "index") baseFolder = "/html";

      vocabularyTopics.innerHTML += `
      <a href=".${baseFolder}/${topic}.html"> <button class="topic">${topic}</button></a>`;
    });
  };
}
