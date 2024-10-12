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
