// 1 Новые фильмы добавляются в специальной строке при нажатии на кнопки со стрелкой
// 2 при нажатии на крест справа фильм удаляется из списка
// 3 сам список фильмов может скроллится
// 4 Серая подложка остается фиксированной

const inputNode = document.querySelector('.js-add_movies-name');
const btnInputNode = document.querySelector ('.js-btn_add-movies');
const listNode = document.querySelector('.js-movie_list');


//объявление основной переменной, при запуске содержит пустой массив, добавляем в список нажатием на кнопку добваить

let listMovies = [];

btnInputNode.addEventListener('click', function () {
    const movie = getMovieFromUser();

    if(!movie) {
        return;
    }
    trackList(movie);
    render()
    
})

function trackList(movie) {
    listMovies.push(movie);  
}

function getMovieFromUser() {
    if (!inputNode.value) {
        alert('Введите название фильма');
        return null;
    }
    const movie = inputNode.value.trim();
    clearInput(); 
    return movie;
}

function clearInput() {
    inputNode.value = '';
}

function render() {
    listNode.innerHTML = '';

    listMovies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie_item';
        
        const iconMovie = document.createElement('div');
        iconMovie.className = 'icon_Movie';
        
        iconMovie.addEventListener('click', () => {
            crossOutMovie(movieItem, iconMovie);
        })
        const movieName = document.createElement('div');
        movieName.textContent = movie;

        const deleteButton = document.createElement('div');
        deleteButton.className = 'delete_movie';
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'close.png';
       
        deleteButton.addEventListener('click', () => {
            deleteMovie(index);
        })

    deleteButton.appendChild(deleteIcon);
    movieItem.appendChild(iconMovie);
    movieItem.appendChild(movieName);
    movieItem.appendChild(deleteButton);  
    listNode.appendChild(movieItem);

    })
}

function crossOutMovie(movieItem, iconMovie) {
movieItem.classList.toggle('cross_out_movie');
iconMovie.classList.toggle('cross_out_type');
}

function deleteMovie(index) {
    listMovies.splice(index,1);
    render()
}












 



