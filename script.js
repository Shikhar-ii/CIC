// Active nav highlight
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.style.background = "";
    link.style.color = "black";

    if (link.getAttribute("href") === "#" + current) {
      link.style.background = "black";
      link.style.color = "gold";
    }
  });
});
