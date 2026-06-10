"use strict";

const imageGallery = document.querySelector(".galleryFlex");
const imgaeGalleryCounter = document.querySelector(".imgaeGalleryCounter");
const galleryLightBox = document.querySelector(".galleryLightBox");
const lightBoxImg = document.querySelector("#lightBoxImg");
const lightBoxTitle = document.querySelector(".lightBoxTitle");
const lightBoxCount = document.querySelector(".lightBoxCount");
const lightBoxStrip = document.querySelector(".lightBoxStrip");
const galleryEmptyText = document.querySelector(".galleryEmptyText");
const filterButtons = document.querySelectorAll(".filterBtn");

const galleryImages = [
  {
    id: 1,
    src: "./assests/images/moon-image 1.jpg",
    title: "Moon Image 1",
    cat: "lunar",
  },
  {
    id: 2,
    src: "./assests/images/moon-image 2.jpg",
    title: "Moon Image 2",
    cat: "lunar",
  },
  {
    id: 3,
    src: "./assests/images/moon-image 3.jpg",
    title: "Moon Image 3",
    cat: "lunar",
  },
  {
    id: 4,
    src: "./assests/images/moon-image 4.jpg",
    title: "Moon Image 4",
    cat: "lunar",
  },
  {
    id: 5,
    src: "./assests/images/moon-image 5.jpg",
    title: "Moon Image 5",
    cat: "lunar",
  },
  {
    id: 6,
    src: "./assests/images/space-image 1.avif",
    title: "Space Image 1",
    cat: "deep-space",
  },
  {
    id: 7,
    src: "./assests/images/space-image 2.avif",
    title: "Space Image 2",
    cat: "deep-space",
  },
  {
    id: 8,
    src: "./assests/images/space-image 3.jpg",
    title: "Space Image 3",
    cat: "deep-space",
  },
  {
    id: 9,
    src: "./assests/images/space-image 4.jpg",
    title: "Space Image 4",
    cat: "deep-space",
  },
  {
    id: 10,
    src: "./assests/images/space-image 5.jpg",
    title: "Space Image 5",
    cat: "deep-space",
  },
  {
    id: 11,
    src: "./assests/images/space-image 6.jpg",
    title: "Space Image 6",
    cat: "deep-space",
  },
  {
    id: 12,
    src: "./assests/images/space-image 7.jpg",
    title: "Space Image 7",
    cat: "deep-space",
  },
];

let currentFilter = "all";
let curInd = 0;
let visibleItems = [];

const createImageGallery = () => {
  visibleItems = [];
  imageGallery.innerHTML = "";
  lightBoxStrip.innerHTML = "";

  for (let i = 0; i < galleryImages.length; i++) {
    let img = galleryImages[i];

    if (currentFilter === "all" || img.cat === currentFilter) {
      visibleItems.push(img);
    }
  }

  if (visibleItems.length === 0) {
    galleryEmptyText.style.display = "block";
    imgaeGalleryCounter.textContent = "— 0 images";
    return;
  }

  galleryEmptyText.style.display = "none";
  imgaeGalleryCounter.textContent = `— ${visibleItems.length} image${visibleItems.length !== 1 ? "s" : ""}`; // ← gallery counter
  lightBoxCount.textContent = "";

  for (let i = 0; i < visibleItems.length; i++) {
    const img = visibleItems[i];
    const ind = i;
    const imageItem = document.createElement("div");

    imageItem.className = "imageGalleryItem";
    imageItem.innerHTML = `
    <img src="${img.src}" alt="${img.title}" loading="lazy">
    <div class="imageItemOverlay">
      <div class="imageTitle">${img.title}</div>
      <div class="imageItemCategory">${img.cat}</div>
    </div>
  `;

    imageItem.addEventListener("click", () => openLightbox(ind));
    imageGallery.appendChild(imageItem);
    const ImageGallerythumb = document.createElement("img");
    ImageGallerythumb.className = "lb-thumb";
    ImageGallerythumb.src = img.src;
    ImageGallerythumb.alt = img.title;
    ImageGallerythumb.dataset.index = ind;
    ImageGallerythumb.addEventListener("click", () => {
      curInd = ind;
      updateLightbox();
    });
    lightBoxStrip.appendChild(ImageGallerythumb);
  }
};

const openLightbox = (ind) => {
  curInd = ind;
  galleryLightBox.classList.add("open");
  document.body.style.overflow = "hidden";
  updateLightbox(false);
};

const closeLightbox = () => {
  galleryLightBox.classList.remove("open");
  document.body.style.overflow = "";
};

const updateLightbox = (animate = true) => {
  const img = visibleItems[curInd];
  if (!img) return;

  if (animate) {
    lightBoxImg.classList.add("switching");
    setTimeout(() => {
      lightBoxImg.src = img.src;
      lightBoxImg.alt = img.title;
      lightBoxTitle.textContent = img.title;
      lightBoxCount.textContent = `${String(curInd + 1).padStart(2, "0")} / ${String(visibleItems.length).padStart(2, "0")}`;
      lightBoxImg.classList.remove("switching");
    }, 220);
  } else {
    lightBoxImg.src = img.src;
    lightBoxImg.alt = img.title;
    lightBoxTitle.textContent = img.title;
    lightBoxCount.textContent = `${String(curInd + 1).padStart(2, "0")} / ${String(visibleItems.length).padStart(2, "0")}`;
  }

  const thumbs = lightBoxStrip.querySelectorAll(".lb-thumb");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.toggle("active", i === curInd);
  }

  const activeThumb = lightBoxStrip.children[curInd];
  if (activeThumb)
    activeThumb.scrollIntoView({ inline: "nearest", behavior: "smooth" });
};

const navigate = (dir) => {
  curInd = (curInd + dir + visibleItems.length) % visibleItems.length;
  updateLightbox();
};

document
  .querySelector(".backward")
  .addEventListener("click", () => navigate(-1));
document.querySelector(".forward").addEventListener("click", () => navigate(1));
document.querySelector(".close").addEventListener("click", closeLightbox);

galleryLightBox.addEventListener("click", (e) => {
  if (e.target === galleryLightBox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!galleryLightBox.classList.contains("open")) return;
  if (e.key === "ArrowLeft") navigate(-1);
  if (e.key === "ArrowRight") navigate(1);
  if (e.key === "Escape") closeLightbox();
});

let touchStartX = 0;
galleryLightBox.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);
galleryLightBox.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
});

for (let i = 0; i < filterButtons.length; i++) {
  const btn = filterButtons[i];

  btn.addEventListener("click", () => {
    for (let j = 0; j < filterButtons.length; j++) {
      const b = filterButtons[j];
      b.classList.remove("active");
    }

    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    createImageGallery();
  });

  console.log("selectAll");
}

createImageGallery();
