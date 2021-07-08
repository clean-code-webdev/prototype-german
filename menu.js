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
    return topics;
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
    console.log(url);
    let topics = document.querySelectorAll("#topics a");

    topics.forEach((topic) => {
      console.log(topic);

      if (topics.href === `./${url}.html`) {
        topic.style.color = "red";

        console.log(url);
      }
    });
  };

  makeMenu = () => {
    const topics = this.getTopics();
    let vocabularyTopics = document.querySelector("#topics");

    topics.forEach((topic) => {
      vocabularyTopics.innerHTML += `
            <a href="./${topic}.html"> <button class="topic">${topic}</button></a>`;
    });
    console.log(topics);
  };
}
