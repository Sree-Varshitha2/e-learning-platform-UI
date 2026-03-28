// CHANGE VIDEO
function changeVideo(id) {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/" + id;
}

// SAVE PROGRESS
function saveProgress() {
  localStorage.setItem("progress", "100%");
  document.getElementById("progress").style.width = "100%";
}

// LOAD PROGRESS
window.onload = function () {
  let saved = localStorage.getItem("progress");
  if (saved) {
    document.getElementById("progress").style.width = saved;
  }
};

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}