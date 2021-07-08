class Init {
  constructor(words) {
    this.words = words;
    this.isTranslationDisplayed = false;
    this.currentWord = "";
  }

  getWord = () => {
    let index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  };

  enableButtons = () => {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
      btn.style.background = "white";

      btn.disabled = false;
    });
  };

  defineArticle = () => {
    let wordGender = this.currentWord.gender;

    if (wordGender === "m") return "der";
    else if (wordGender === "n") return "das";
    else return "die";
  };

  displayWord = (word) => {
    let display = document.querySelector("#word");
    let article = this.defineArticle();
    display.innerHTML = `${article} ${word.german}`;

    let translation = document.querySelector("#translation");
    if (this.isTranslationDisplayed) translation.innerText = word.english;
    else translation.innerText = "";
  };

  setAnswer = (word) => {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
      let buttonGender = btn.getAttribute("gender");
      let workGender = word.gender;
      let correctAnswer = buttonGender.includes(workGender);

      btn.className = "btn";

      if (correctAnswer) btn.className += " right";
      else btn.className += " wrong";
    });
  };

  checkAnswer = (btn) => {
    const classes = btn.className.split(" ").includes("right");

    if (classes) {
      return true;
    } else {
      btn.disabled = true;
      return false;
    }
  };

  updateScore = (res) => {
    let rightScore = document.querySelector("#right");
    let wrongScore = document.querySelector("#wrong");

    if (res === true) {
      rightScore.innerText = parseInt(rightScore.innerText) + 1;
      return;
    }

    wrongScore.innerText = parseInt(wrongScore.innerText) + 1;
  };

  reset = () => {
    setTimeout(() => {
      this.tryAnswer();
    }, 500);
  };

  updateTranslation = () => {
    let translationBtn = document.querySelector("#translation-btn");
    let translation = document.querySelector("#translation");

    translationBtn.addEventListener("click", () => {
      if (this.isTranslationDisplayed) {
        translation.innerText = this.currentWord.english;
      } else translation.innerText = "";
    });
  };

  toggleTranslationDisplayOption = () => {
    let translationBtn = document.querySelector("#translation-btn");

    translationBtn.addEventListener("click", () => {
      let option = translationBtn.innerText;

      if (option.toLowerCase() === "show english") {
        translationBtn.innerText = "hide English";
        this.isTranslationDisplayed = true;
      } else {
        translationBtn.innerText = "show English";
        this.isTranslationDisplayed = false;
      }
    });
  };

  tryAnswer = () => {
    this.currentWord = this.getWord();

    while (this.currentWord.class !== "noun") {
      this.currentWord = this.getWord();
    }

    this.enableButtons();
    this.displayWord(this.currentWord);
    this.setAnswer(this.currentWord);
  };

  init = () => {
    this.tryAnswer();
    this.toggleTranslationDisplayOption();
    this.updateTranslation();

    let buttons = document.querySelectorAll(".btn");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (e) => {
        let btn = e.target;
        let res = this.checkAnswer(btn);

        if (res) {
          buttons[i].style.background = "#08e013";
          this.reset();
          this.updateScore(true);
        } else {
          btn.style.background = "#e00808";

          this.updateScore(false);
        }
      });
    }
  };
}
class Menu {
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

    topics.forEach((topic) => {
      vocabularyTopics.innerHTML += `
      <a href="./${topic}.html"> <button class="topic">${topic}</button></a>`;
    });
  };
}
class Nav {
  open = () => {
    let icon = document.querySelector("#nav-icon");
    let topics = document.querySelector("#topics");

    icon.addEventListener("click", () => {
      topics.style.left = "0";
    });
  };

  close = () => {
    let icon = document.querySelector("#wrapper");

    icon.addEventListener("click", () => {
      topics.style.left = "-30rem";
    });
  };
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    let words = data;

    const menu = new Menu(words);
    menu.makeMenu();
    menu.styleSelectedUrl();

    const nav = new Nav();
    nav.open();
    nav.close();

    const init = new Init(words);
    init.init();
  });
