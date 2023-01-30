function activateMenu() {
    let hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('is-active-hamburger');
}

const navigation = document.getElementById('header'),
    aboutBlock = document.getElementById('aboutBlock'),
    petProjectsBlock = document.getElementById('petProjectsBlock'),
    contactsBlock = document.getElementById('contactsBlock'),
    blocks = [aboutBlock, petProjectsBlock, contactsBlock]

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
}, 200);

const mail = document.getElementById('mail');

mail.addEventListener('click', () => {
    let currentMail = mail.innerHTML;

    navigator.clipboard.writeText(mail.innerHTML)
        .then(() => {
            mail.innerHTML = 'Successfully copied.';
        })
        .catch(() => {
            mail.innerHTML = 'Oops... Something gone wrong.';
        })
        .finally(() => {
            setTimeout(() => {
                mail.innerHTML = currentMail;
            }, 1500);
        })
})
