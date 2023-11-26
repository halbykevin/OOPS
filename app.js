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
