function initCarousel() {
  const carousel = document.getElementById("carousel");
  const inner = carousel.querySelector(".carousel-inner");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const dots = Array.from(document.querySelectorAll("#dots .dot"));
  let startX,
    currentTranslateX,
    isDragging = false;
  let index = 0;
  let autoSlideInterval;

  function updateCarousel() {
    const totalItems = inner.children.length;
    const newIndex = (index + totalItems) % totalItems;
    inner.style.transform = `translateX(-${newIndex * 100}%)`;
    inner.style.transition = "transform 0.5s ease-in-out"; // Add transition effect

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

  // Mouse drag events
  function handleDragStart(e) {
    e.preventDefault(); // Prevent default browser drag behavior
    startX = e.clientX || e.touches[0].clientX;
    currentTranslateX = -index * carousel.offsetWidth;
    isDragging = true;
    inner.style.transition = "none"; // Disable transition during drag
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - startX;
    inner.style.transform = `translateX(${currentTranslateX + deltaX}px)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    inner.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition after drag
    const totalItems = inner.children.length;
    const moveAmount = (e.clientX || e.changedTouches[0].clientX) - startX;
    const moveThreshold = carousel.offsetWidth / 20; // Adjust the threshold as needed

    if (Math.abs(moveAmount) > moveThreshold) {
      if (moveAmount < 0) {
        // Dragged left
        index = (index + 1) % totalItems;
      } else {
        // Dragged right
        index = (index - 1 + totalItems) % totalItems;
      }
    }

    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  }

  carousel.addEventListener("mousedown", handleDragStart);
  carousel.addEventListener("mousemove", handleDragMove);
  carousel.addEventListener("mouseup", handleDragEnd);
  carousel.addEventListener("touchstart", handleDragStart);
  carousel.addEventListener("touchmove", handleDragMove);
  carousel.addEventListener("touchend", handleDragEnd);

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
  let startX,
    currentTranslateX,
    isDragging = false;
  let index = 0;
  let autoSlideInterval;

  function updateCarousel() {
    const totalItems = inner.children.length;
    const newIndex = (index + totalItems) % totalItems;
    inner.style.transform = `translateX(-${newIndex * 100}%)`;
    inner.style.transition = "transform 0.5s ease-in-out"; // Add transition effect

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

  // Mouse drag events
  function handleDragStart(e) {
    e.preventDefault(); // Prevent default browser drag behavior
    startX = e.clientX || e.touches[0].clientX;
    currentTranslateX = -index * carousel.offsetWidth;
    isDragging = true;
    inner.style.transition = "none"; // Disable transition during drag
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - startX;
    inner.style.transform = `translateX(${currentTranslateX + deltaX}px)`;
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    inner.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition after drag
    const totalItems = inner.children.length;
    const moveAmount = (e.clientX || e.changedTouches[0].clientX) - startX;
    const moveThreshold = carousel.offsetWidth / 20; // Adjust the threshold as needed

    if (Math.abs(moveAmount) > moveThreshold) {
      if (moveAmount < 0) {
        // Dragged left
        index = (index + 1) % totalItems;
      } else {
        // Dragged right
        index = (index - 1 + totalItems) % totalItems;
      }
    }

    updateCarousel();
    stopAutoSlide();
    startAutoSlide();
  }

  carousel.addEventListener("mousedown", handleDragStart);
  carousel.addEventListener("mousemove", handleDragMove);
  carousel.addEventListener("mouseup", handleDragEnd);
  carousel.addEventListener("touchstart", handleDragStart);
  carousel.addEventListener("touchmove", handleDragMove);
  carousel.addEventListener("touchend", handleDragEnd);

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

window.addEventListener("scroll", function () {
  const blackDiv = document.getElementById("black-div");
  const offset = blackDiv.offsetHeight;

  if (window.scrollY > offset) {
    blackDiv.classList.add("fixed", "top-0");
  } else {
    blackDiv.classList.remove("fixed", "top-0");
  }
});

function handleButtonClick(id) {
  const element = document.getElementById(id);
  const isMobile = window.innerWidth < 768; // Adjust based on your responsive breakpoints

  if (isMobile) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}

// Optional: Add event listener to handle resizing if needed
window.addEventListener("resize", () => {
  const isMobile = window.innerWidth < 768; // Adjust based on your responsive breakpoints

  if (!isMobile) {
    // Reset any changes made on mobile
    document.querySelectorAll("ul").forEach((ul) => {
      ul.classList.remove("hidden");
    });
  }
});
