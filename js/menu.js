export class Menu {
  constructor(words) {
    this.words = words;
  }
  getTopics = () => {
    let topics = [];
    let words = this.words;

    words.forEach((word) => {
      const includesClass = topics.includes(word.class);
      const includesTopic = topics.includes(word.topic);
      const topic = word.topic;

      if (!includesClass) topics.push(word.class);
      else if (!includesTopic && topic !== "") topics.push(word.topic);
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

  createExerciseLinks = (url) => {
    let htmlFolder = "";
    // mode one folder up
    let location = "..";

    if (url === "index") {
      htmlFolder = "/html";
      location = ".";
    }

    let links = `
    <a href="${location}/index.html"> <button class="topic">home</button></a>
    <h2 class='nav-divider'>exercises</h2>
    <a href=".${htmlFolder}/article.html">
      <button class="topic">article</button></a
    >
    <a href=".${htmlFolder}/kein.html">
      <button class="topic">kein / keine</button></a
    >
    <h2 class='nav-divider'>vocabulary</h2>`;

    return links;
  };

  makeMenu = () => {
    const topics = this.getTopics();
    let vocabularyTopics = document.querySelector("#topics");
    let url = this.getUrl();
    let topLinks = this.createExerciseLinks(url);

    vocabularyTopics.innerHTML += topLinks;

    topics.forEach((topic) => {
      let baseFolder = "";

      if (url === "index") baseFolder = "/html";

      vocabularyTopics.innerHTML += `
      <a href=".${baseFolder}/${topic}.html"> <button class="topic">${topic}</button></a>`;
    });
  };
}
