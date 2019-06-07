document
  .querySelector(".search-icon")
  .addEventListener("click", function(event) {
    document
      .querySelector(".search-input")
      .classList.add("search-input-visible");
  });

$(document).ready(function() {
  $(".projects-slider").slick({
    centerMode: true,
    "setting-name": "setting-value"
  });
});
