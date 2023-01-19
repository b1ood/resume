function activateMenu() {
    let hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('is-active-hamburger');
}

let navigation = document.getElementById('header');
let aboutBlock = document.getElementById('aboutBlock');
let petProjectsBlock = document.getElementById('petProjectsBlock');
let contactsBlock = document.getElementById('contactsBlock');
let blocks = [aboutBlock, petProjectsBlock, contactsBlock]

navigation.addEventListener('click', () => {
    let target = event.target;
    if (target.tagName !== 'BUTTON') return

    scrollInto(blocks[target.dataset.index - 1]);
})

function scrollInto(nodes) {
    nodes.scrollIntoView(true);
}

let copySign = document.getElementById('copy');

setInterval(() => {
    copySign.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 200)
