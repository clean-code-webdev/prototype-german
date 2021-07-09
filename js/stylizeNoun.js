export class StylizeNoun {
  getArticle = (word) => {
    return word.gender === "m" ? "der" : word.gender === "n" ? "das" : "die";
  };

  defineColor = (word) => {
    return word.gender === "m"
      ? "blue"
      : word.gender === "n"
      ? "green"
      : word.gender === "f"
      ? "red"
      : "purple";
  };

  capitalize = (word) => {
    return word.german[0].toUpperCase() + word.german.substring(1);
  };
}
