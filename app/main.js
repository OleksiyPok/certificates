const menuItems = document.querySelectorAll(".menu-item");
const submenuItems = document.querySelectorAll(".submenu-item");
const viewer = document.getElementById("viewer");

let selectedSrc = "./assets/certificates/Cpp/Certificate_Cpp_Pro.jpg";
let scale = 1;

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

submenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    submenuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    selectedSrc = item.getAttribute("data-src");
    scale = 1;
    showImage();
  });
});

function showImage() {
  viewer.innerHTML = `<img src="${selectedSrc}" alt="Certificate" style="transform: scale(${scale}); max-width: 100%; max-height: 100%; object-fit: contain;">`;
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
  const certificatesMenu = Array.from(menuItems).find((item) => item.textContent.trim() === "Certificates");

  if (certificatesMenu) {
    certificatesMenu.classList.add("active");
    const firstCert = certificatesMenu.nextElementSibling?.querySelector(".submenu-item");
    if (firstCert) {
      submenuItems.forEach((i) => i.classList.remove("active"));
      firstCert.classList.add("active");
      selectedSrc = firstCert.getAttribute("data-src");
    }
  }

  showImage();
});
