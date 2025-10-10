document.addEventListener('DOMContentLoaded', () => {
    /* hambutton */
    const mainnav = document.querySelector('.navbar');
    const hambutton = document.getElementById('menu')

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');

        hambutton.animate(
            [
                {transform: 'rotate(0deg)'},
                {transform: 'rotate(180deg)'}
            ],
            {
                duration: 500,
                iterations: 1,
                easing: 'ease-out'
            }
        );
    });

    /* Movie Recommendations */
    let movies = JSON.parse(localStorage.getItem('movies')) || [
        {
            name: "Oceans Eleven",
            src: "images/oceanseleven_rec.webp",
            description: "Danny Ocean, a gangster, rounds up a gang of associates to stage a sophisticated and elaborate casino heist which involves robbing three Las Vegas casinos simultaneously during a popular boxing event."
        },
        {
            name: "Inception",
            src: "images/inception_rec.webp",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
        },
        {
            name: "Interstellar",
            src: "images/interstellar_rec.webp",
            description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
        },
        {
            name: "The Life Of Chuck",
            src: "images/thelifeofchuck_rec.webp",
            description: "A life-affirming, genre-bending story about three chapters in the life of an ordinary man named Charles Krantz."
        },
        {
            name: "John Wick",
            src: "images/johnwick_rec.webp",
            description: "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge."
        },
        {
            name: "The Departed",
            src: "images/thedeparted_rec.webp",
            description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
        },
        {
            name: "Back To The Future",
            src: "images/backtothefuture_rec.webp",
            description: "After visiting 2015, Marty McFly returns to 1955 to prevent the disastrous changes of 1985... without interfering with his first trip."
        },
        {
            name: "The Goonies",
            src: "images/thegoonies_rec.webp",
            description: "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure."
        }
    ];

    const today = new Date();
    const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    const index = Math.floor(dayNumber / 2) % movies.length;

    const imgElement = document.querySelector("#movies");
    if (imgElement) {
        imgElement.src = movies[index].src;
        imgElement.alt = movies[index].name;
    }

    const descElemnt = document.getElementById("movie_desc")
    if (descElemnt) descElemnt.textContent = movies[index].description || "Not available Description";

    // Reviews

    if (window.location.pathname.endsWith('rate_movie.html')) {
        let totalReviews = Number(localStorage.getItem('totalReviews') || 0);
        totalReviews++;
        localStorage.setItem('totalReviews', totalReviews);
    }

    let totalReviews = Number(localStorage.getItem('totalReviews') || 0);
    const reviewCountElem = document.getElementById('review_count');
    if (reviewCountElem) reviewCountElem.textContent = totalReviews;

    const reviewsContainer = document.querySelector('#recommendations .reviews_count');
    if (reviewsContainer) reviewsContainer.textContent = `${totalReviews} reviews so far.`;

    /* button to rate */
    const rateBtn = document.querySelector('.rate_btn')
    if (rateBtn) {
        rateBtn.addEventListener('click', () => {
            window.location.href = 'rate_movie.html';
        });
    }

    /* Review form */
    const moviesSelect = document.querySelector('#movie');
    if (moviesSelect) {
        movies.forEach(movie => {
            const option = document.createElement('option');
            option.value = movie.name;
            option.textContent = movie.name;
            moviesSelect.appendChild(option);
        });
    }

    /* Add New Movie */
    const addMovieBtn = document.querySelector("#add_movie_btn");
    if (addMovieBtn) {
        addMovieBtn.addEventListener("click", () => {
            window.location.href = "reviews.html"
        });
    }

    const form = document.querySelector('#add_movie_form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const name = document.getElementById('movie_name').value
            const description = document.getElementById('movie_description').value
            const release = document.getElementById('release_date').value
            const src = document.getElementById('movie_src').value

            const movie = {name, src, description, release}

            movies.push(movie)
            localStorage.setItem('movies', JSON.stringify(movies));

            form.reset()

            createMovieCards(movies)
        })
    }

    /* Movie Cards */
    function createMovieCards(movies) {
        const container = document.querySelector('#movie_cards');
        if(!container) return;
        container.innerHTML = '';
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie_card');

            const name = document.createElement('h3');
            name.textContent = movie.name;

            const imgWrap = document.createElement('div');
            imgWrap.classList.add('img_wrap');
            imgWrap.style.position = 'relative';

            const description = document.createElement('p');
            description.textContent = movie.description;

            const img = document.createElement('img');
            img.src = movie.src;
            img.alt = movie.name;
            img.loading = 'lazy';
            img.width = 250;
            img.height = 140;

            // Create card

            imgWrap.appendChild(img);
            imgWrap.appendChild(description);

            const addBtn = document.createElement('button');
            addBtn.textContent = 'Pick';
            addBtn.addEventListener('click', () => addToMyList(movie));
            card.appendChild(name);
            card.appendChild(imgWrap);
            card.appendChild(addBtn);
            container.append(card);
        });
    }

    createMovieCards(movies)

    function addToMyList(movie) {
        let myList = JSON.parse(localStorage.getItem('myList')) || [];
        const exists = myList.some(item => item.name === movie.name);
        if(!exists) {
            myList.push(movie);
            localStorage.setItem('myList', JSON.stringify(myList));
        }
        else{
            alert(`${movie.name} It's already on your list.`)
        }
        displayMyList();
    }

    function displayMyList() {
        const container = document.querySelector('#my_list');
        if(!container) return;

        const myList = JSON.parse(localStorage.getItem('myList')) || []
        container.innerHTML = '';
        if (myList.length === 0) {
            container.textContent = 'Your list is empty.';
            return;
        }
        myList.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie_card');
            const img = document.createElement('img');
            img.src = movie.src;
            img.alt = movie.name
            img.width = 200;

            const name = document.createElement('h3');
            name.textContent = movie.name;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = '-';
            removeBtn.addEventListener('click', () => removeFromMyList(movie.name));

            card.appendChild(name);
            card.appendChild(img);
            card.appendChild(removeBtn);
            container.appendChild(card);
        });
    } 

    function removeFromMyList(name) {
        let myList = JSON.parse(localStorage.getItem('myList')) || [];
        myList = myList.filter(movie => movie.name !== name);
        localStorage.setItem('myList', JSON.stringify(myList));
        displayMyList();
    }

    if(window.location.pathname.endsWith('my_list.html')) {
        displayMyList();
    }

    /* Footer */
    const currentYear = new Date().getFullYear();
    const currentYearElem = document.getElementById("currentyear");
    if (currentYearElem) currentYearElem.textContent = currentYear;

    const lastModifiedElem = document.getElementById("last-modified");
    if (lastModifiedElem) lastModifiedElem.textContent = `Last modified: ${document.lastModified}`;
});