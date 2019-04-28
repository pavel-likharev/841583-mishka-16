var buttonNav = document.querySelector(".header__button-call-nav");
var menu = document.querySelector(".navigation");

window.onload = function() {
  menu.classList.add("navigation--close");
  buttonNav.classList.add("header__button-call-nav--open");
};

buttonNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("navigation--open");
  buttonNav.classList.toggle("header__button-call-nav--close");
});
