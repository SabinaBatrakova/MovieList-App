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
    listMovies.forEach((movie,index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie_item';

        const movieName = document.createElement('div');
        movieName.textContent = movie;

        const deleteButton = document.createElement('div');
        deleteButton.textContent = 'x';

        deleteButton.className = 'delete_movie';
        deleteButton.addEventListener('click', () => {
            deleteMovie(index);
        })
movieItem.appendChild(movieName);
movieItem.appendChild(deleteButton);
listNode.appendChild(movieItem);

    })
}



function deleteMovie(index) {
    listMovies.splice(index,1);
    render()
}












 



