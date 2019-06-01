var hamburger_menu = document.getElementsByClassName("hamburger-menu")[0];

hamburger_menu.addEventListener("click", function() {
    var header_nav = document.getElementsByClassName("header__nav")[0];

    header_nav.classList.toggle("header__nav--open");
});
