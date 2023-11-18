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


