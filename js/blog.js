// blog.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-widget input");
    const articles = document.querySelectorAll("article");
    const categories = document.querySelectorAll(".categories-widget a");
  
    // 검색 기능
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      articles.forEach((article) => {
        const title = article.querySelector("h2.title a").textContent.toLowerCase();
        if (title.includes(query)) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    });
  
    // 카테고리 필터링
    categories.forEach((categoryLink) => {
      categoryLink.addEventListener("click", function (e) {
        e.preventDefault();
        const category = this.textContent.trim().toLowerCase();
        articles.forEach((article) => {
          if (article.dataset.category === category || category === "all") {
            article.style.display = "block";
          } else {
            article.style.display = "none";
          }
        });
      });
    });
  });
  