const menuBtn = window.document.querySelector(".menu__btn");
const menuList = window.document.querySelector(".menu__list");
const portfolio_btn = window.document.querySelector('.portfolio__btn')

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

function go_portfolio(){
    window.location.href="https://github.com/the-usrname"
}

portfolio_btn.addEventListener("click", go_portfolio)