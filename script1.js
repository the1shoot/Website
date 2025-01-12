const zuGal = document.getElementById('zu')
const uber = document.getElementById('ich')
const fach = document.getElementById('fach')
const galerie = document.getElementById('gal')

function color1(){document.body.classList.add("change1")}
function color2(){document.body.classList.add("change2")} 
function color3(){document.body.classList.add("change3")}          


uber.addEventListener('click', function(){window.location.href = "index.html"}); 
fach.addEventListener('click', function(){window.location.href = "faehigkeiten.html"})
zuGal.addEventListener('click', function(){window.location.href = "Galerie.html"})

galerie.addEventListener('click', function(){window.location.href = "Galerie.html"})


// Video

document.addEventListener("DOMContentLoaded", () => {
  const previewVideo = document.getElementById("preview-video");
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const fullscreenVideo = document.getElementById("fullscreen-video");
  const closeBtn = document.getElementById("close-btn");

// Fullscreen
  previewVideo.addEventListener("click", () => {
    fullscreenContainer.classList.remove("hidden");
    fullscreenVideo.currentTime = previewVideo.currentTime; 
    fullscreenVideo.play();
  });

// Close
  closeBtn.addEventListener("click", () => {
    fullscreenContainer.classList.add("hidden");
    previewVideo.currentTime = fullscreenVideo.currentTime; 
    fullscreenVideo.pause();
  });
});
