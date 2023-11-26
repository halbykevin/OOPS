function toggleSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var menuButton = document.getElementsByClassName("side-menu-button")[0];

  if (sideMenu.style.width === "250px") {
    sideMenu.style.width = "0";
    menuButton.style.display = "block";
  } else {
    sideMenu.style.width = "250px";
    menuButton.style.display = "none";
  }
}

function closeSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var menuButton = document.getElementsByClassName("side-menu-button")[0];
  sideMenu.style.width = "0";
  menuButton.style.display = "block";
}

// Close side menu when clicking outside of it
window.onclick = function (event) {
  var sideMenu = document.getElementById("sideMenu");
  if (event.target === sideMenu) {
    closeSideMenu();
  }
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("showSlide");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("showSlide");

  setTimeout(showSlides, 1500); // Change image every 4 seconds, adjust as needed
}
