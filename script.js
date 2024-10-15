// script.js

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn việc tải lại trang khi submit

    // Lấy giá trị từ input
    const searchQuery = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const sections = document.querySelectorAll("section h2, section p"); // Lấy tất cả các phần tiêu đề và đoạn văn

    let found = false;

    // Lặp qua các phần tiêu đề và đoạn văn
    sections.forEach(function (section) {
      if (section.innerText.toLowerCase().includes(searchQuery)) {
        section.scrollIntoView({ behavior: "smooth" }); // Di chuyển đến phần tìm thấy
        found = true;
      }
    });

    if (!found) {
      alert("Không tìm thấy kết quả!");
    }
  });

// script.js
let currentIndex = 0;

function showSlide(index) {
  const items = document.querySelectorAll(".carousel-item");
  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }

  const carouselImages = document.querySelector(".carousel-images");
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

// Hiển thị slide đầu tiên
showSlide(currentIndex);
