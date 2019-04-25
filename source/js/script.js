if(window.innerWidth < 768) {
  var buttonNav = document.querySelector(".header__button-main-nav");
  var menu = document.querySelector(".navigation");

  window.onload = function() {
    menu.classList.add("navigation--close");
    buttonNav.classList.add("header__button-main-nav--open");
  };

  buttonNav.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("navigation--open");
    buttonNav.classList.toggle("header__button-main-nav--close");
  });
}
