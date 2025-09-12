const mainnav = document.querySelector('#links');
const hambutton = document.getElementById('menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modified: ${lastModified}`;