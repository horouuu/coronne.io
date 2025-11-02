const sections = document.querySelectorAll("section");
const backBtn = document.getElementById("backButton");
const nextBtn = document.getElementById("nextButton");

function getCurrentPage() {
  return isNaN(parseInt(sessionStorage.getItem("currentPage")))
    ? 0
    : parseInt(sessionStorage.getItem("currentPage"));
}

const fixWindowScroll = () => {
  const currentPage = getCurrentPage();
  const width = sections[currentPage].getBoundingClientRect().width;
  window.scrollTo(width * currentPage, 0);
};

window.addEventListener("beforeunload", () => {
  fixWindowScroll();
});

window.addEventListener("resize", fixWindowScroll);

window.addEventListener("DOMContentLoaded", () => {
  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = nav.type === "reload";

  if (!isReload) {
    sessionStorage.removeItem("currentPage");
  }

  updateButtons();
});

function updateButtons() {
  const currentPage = getCurrentPage();
  backBtn.classList.toggle("edge", currentPage === 0);
  nextBtn.classList.toggle("edge", currentPage === sections.length - 1);
}

function getPage(diff) {
  let currentPage = getCurrentPage();
  currentPage =
    diff > 0
      ? Math.min(currentPage + diff, sections.length - 1)
      : Math.max(currentPage + diff, 0);

  sessionStorage.setItem("currentPage", currentPage);
  sections[currentPage].scrollIntoView({ behavior: "smooth" });
  updateButtons();
}

backBtn.addEventListener("click", () => getPage(-1));
nextBtn.addEventListener("click", () => getPage(1));
