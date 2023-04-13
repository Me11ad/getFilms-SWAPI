async function getFilms() {
    try {
        const filmResponse = await fetch(`https://swapi.dev/api/films/`);
        const film = await filmResponse.json();

        const movieUrl = film.films;
        const movieResponse = await fetch(`https://${movieUrl}`);
        return movieResponse.json();
    } catch (err) {
        console.error('Произошла ошибка!', err);
    }
}

getFilms(1).then((profile) => {console.log(profile)});