fetch('nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

function toggleMenu() {
    var wrapperMenu = document.querySelector('.menu-icon');
    var menuDiv = document.getElementById('menu-div');
    menuDiv.classList.toggle('menu-visible');
    wrapperMenu.classList.toggle('open');   

}

// Get the button element
const backToTopButton = document.getElementById("top");
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}




