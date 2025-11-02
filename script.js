const sections = document.querySelectorAll("section");
const backBtn = document.getElementById("backButton");
const nextBtn = document.getElementById("nextButton");

function updateButtons() {
  backBtn.classList.toggle("edge", currentPage === 0);
  nextBtn.classList.toggle("edge", currentPage === sections.length - 1);
}

let currentPage = isNaN(parseInt(localStorage.getItem("currentPage")))
  ? 0
  : parseInt(localStorage.getItem("currentPage"));

function getPage(diff) {
  console.log(currentPage, currentPage + diff);
  currentPage =
    diff > 0
      ? Math.min(currentPage + diff, sections.length - 1)
      : Math.max(currentPage + diff, 0);
  console.log(diff, currentPage);
  localStorage.setItem("currentPage", currentPage);
  sections[currentPage].scrollIntoView({ behavior: "smooth" });
  updateButtons();
}

backBtn.onclick = () => getPage(-1);

nextBtn.onclick = () => getPage(1);

updateButtons();
