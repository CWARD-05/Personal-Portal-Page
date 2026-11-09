const ApostlePreview = document.getElementById("ApostlePreview");

const FavoriteDevo = document.getElementById('FavoriteDevo');

const gridFlag = document.getElementById('gridFlag');

const prophetCard = document.getElementById('prophetCard');

const positioningPractice = document.getElementById('positioningPractice');

const galleryPractice = document.getElementById('galleryPractice');

ApostlePreview.addEventListener("click", () => {
    window.location.href = "apostles.html";
});
FavoriteDevo.addEventListener("click", () => {
    window.location.href = "favdevo.html";
});
gridFlag.addEventListener("click", () => {
    window.location.href = "flags.html";
});
prophetCard.addEventListener("click", () => {
    window.location.href = "oaks.html";
});
positioningPractice.addEventListener("click", () => {
    window.location.href = "positioning.html";
});
galleryPractice.addEventListener("click", () => {
    window.location.href = "gallery.html";
});
