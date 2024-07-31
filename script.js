function initCarousel() {
  const carousel = document.getElementById("carousel");
  const inner = carousel.querySelector(".carousel-inner");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const dots = Array.from(document.querySelectorAll("#dots .dot"));
  let startX, endX;
  const carouselInner = document.querySelector(".carousel-inner");

  let index = 0;
  let autoSlideInterval;

  function updateCarousel() {
    const totalItems = inner.children.length;
    const newIndex = (index + totalItems) % totalItems;
    inner.style.transform = `translateX(-${newIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-black", i === newIndex);
      dot.classList.toggle("bg-gray-300", i !== newIndex);
    });
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      index = (index + 1) % inner.children.length;
      updateCarousel();
    }, 3000); // Change the interval time as needed
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  carouselInner.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carouselInner.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
      // Swipe left
      document.getElementById("next").click();
    } else if (startX < endX - 50) {
      // Swipe right
      document.getElementById("prev").click();
    }
  });

  prevButton.addEventListener("click", () => {
    index = (index - 1 + inner.children.length) % inner.children.length;
    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    index = (index + 1) % inner.children.length;
    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Initialize carousel
  updateCarousel();
  startAutoSlide();
}

function initQuestionsCarousel() {
  const carousel = document.getElementById("carousel-questions");
  const inner = carousel.querySelector(".carousel-inner-questions");
  const prevButton = document.getElementById("prev-questions");
  const nextButton = document.getElementById("next-questions");
  const dots = Array.from(
    document.querySelectorAll("#dots-questions .dot-questions")
  );

  let index = 0;

  function updateCarousel() {
    const totalItems = inner.children.length;
    const newIndex = (index + totalItems) % totalItems;
    inner.style.transform = `translateX(-${newIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-black", i === newIndex);
      dot.classList.toggle("bg-gray-300", i !== newIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    index = (index - 1 + inner.children.length) % inner.children.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    index = (index + 1) % inner.children.length;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });
  updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  initQuestionsCarousel();
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("scale-y-0")) {
    mobileMenu.classList.remove("scale-y-0");
    mobileMenu.classList.add("scale-y-100");
  } else {
    mobileMenu.classList.remove("scale-y-100");
    mobileMenu.classList.add("scale-y-0");
  }
});
