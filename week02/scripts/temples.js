const mainnav = document.querySelector('#links');
const hambutton = document.getElementById('menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});