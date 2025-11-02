const sections = document.querySelectorAll("section");
const backBtn = document.getElementById("backButton");
const nextBtn = document.getElementById("nextButton");

const fixWindowScroll = () => {
  const width = sections[currentPage].getBoundingClientRect().width;
  window.scrollTo(width * currentPage, 0);
};

window.addEventListener("beforeunload", fixWindowScroll);

window.addEventListener("scrollend", (e) => {
  console.log(e);
  console.log(sections[currentPage].getBoundingClientRect());
});

window.addEventListener("resize", fixWindowScroll);

function updateButtons() {
  backBtn.classList.toggle("edge", currentPage === 0);
  nextBtn.classList.toggle("edge", currentPage === sections.length - 1);
}

let currentPage = isNaN(parseInt(localStorage.getItem("currentPage")))
  ? 0
  : parseInt(localStorage.getItem("currentPage"));

function getPage(diff) {
  currentPage =
    diff > 0
      ? Math.min(currentPage + diff, sections.length - 1)
      : Math.max(currentPage + diff, 0);

  localStorage.setItem("currentPage", currentPage);
  sections[currentPage].scrollIntoView({ behavior: "smooth" });
  updateButtons();
}

backBtn.addEventListener("click", () => getPage(-1));
nextBtn.addEventListener("click", () => getPage(1));

updateButtons();
