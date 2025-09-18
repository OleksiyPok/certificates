const menuItems = document.querySelectorAll(".menu-item");
const submenuItems = document.querySelectorAll(".submenu-item");
const viewer = document.getElementById("viewer");

let selectedSrc = "./assets/certificates/Cpp/Certificate_Cpp_Pro.png";
let scale = 1;

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

submenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectedSrc = item.getAttribute("data-src");
    scale = 1;
    showImage();
  });
});

function showImage() {
  viewer.innerHTML = `<img src="${selectedSrc}" alt="Certificate" style="transform: scale(${scale})">`;
}

viewer.addEventListener("wheel", (e) => {
  const img = viewer.querySelector("img");
  if (!img) return;
  e.preventDefault();
  scale *= e.deltaY < 0 ? 1.1 : 0.9;
  scale = Math.min(Math.max(0.1, scale), 5);
  img.style.transform = `scale(${scale})`;
});

document.addEventListener("DOMContentLoaded", () => {
  showImage();
});
