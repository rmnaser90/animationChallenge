const body = document.getElementById("body");
const numberOfPages = document.getElementsByClassName("box").length;
const movingBox = document.getElementById("movingBox");

let currentPage = 0;
let previousY = 0;

const scrollToDiv = function (div) {
  $("html, body").animate(
    {
      scrollTop: div.offset().top,
    },
    500
  );
};

const scrollListener = () => {
  body.onscroll = () => {};
  if (window.scrollY > previousY) {
    currentPage =
      currentPage >= numberOfPages ? numberOfPages : currentPage + 1;
  } else {
    currentPage = currentPage <= 1 ? 1 : currentPage - 1;
  }

  
  
  movingBox.classList.remove(
      movingBox.classList[1]
  )
  movingBox.classList.add("page" + currentPage);
  scrollToDiv($("#box" + currentPage));
  setTimeout(() => {
    previousY = window.scrollY;
    body.onscroll = scrollListener;
  }, 550);
};

body.onscroll = scrollListener;
