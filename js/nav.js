export class Nav {
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
      if (window.innerWidth > 1050) return;

      topics.style.left = "-30rem";
    });
  };
}
