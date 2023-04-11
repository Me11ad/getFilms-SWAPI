async function getFilms(id) {
    try {
        const filmResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
        const film = await filmResponse.json();
    } catch (err) {
        console.error('Произошла ошибка!', err);
    }
}

getFilms(1).then((profile) => {console.log(profile)}) 