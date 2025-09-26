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


// Temples images

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Hermosillo Sonora",
    location: "Hermosillo Sonora, Mexico",
    dedicated: "2000, February, 27",
    area: 10769,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hermosillo-sonora-mexico-temple/hermosillo-sonora-mexico-temple-20644-main.jpg"
  },
  {
    templeName: "Tijuana Mexico",
    location: "Tijuana, Mexico",
    dedicated: "2015, December, 13",
    area: 33367,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
  },
  {
    templeName: "Puebla Mexico",
    location: "Puebla, Mexico",
    dedicated: "2024, May, 19",
    area: 35865,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
  },
];

createTempleCard(temples);
filteredTemples()

function filteredTemples() {

  const allTemples = document.querySelector("#allTemples");

  allTemples.addEventListener('click', () => {
    createTempleCard(temples);
  })

  const oldTemples = document.querySelector('#oldTemples');
  oldTemples.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.dedicated < '1900'));
  })

  const newTemples = document.querySelector('#newTemples');
  newTemples.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.dedicated > '2000'));
  })

  const largeTemples = document.querySelector('#largeTemples');
  largeTemples.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > '90000'));
  })

  const smallTemples = document.querySelector('#smallTemples');
  smallTemples.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < '10000'));
  })
};

function createTempleCard(filteredTemples) {
  const container = document.querySelector("#templeCards");
  container.innerHTML = '';
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p")
    location.textContent = `Location: ${temple.location}`

    const dedicated = document.createElement("p")
    dedicated.textContent = `Dedicated: ${temple.dedicated}`

    const area = document.createElement("p")
    area.textContent = `Area: ${temple.area}`

    const img = document.createElement('img')
    img.src = temple.imageUrl
    img.alt = temple.templeName
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.append(card);
})}