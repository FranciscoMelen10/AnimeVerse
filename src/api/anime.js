//Get all the data of each anime and automatic navigation
async function GetPageAnime(page) {
    const url = `https://api.jikan.moe/v4/anime?page=${page}`

    try {
        const response = await fetch(url)
        const { data, pagination } = await response.json();
        //const {data, pagination} = await response.json();

        return {data, pagination}
    } catch (error) {
        console.error(error);
    }

}

//Filter all animes that user want to search it
async function GetSearchAnime(query, id = 1) {
    const url = `https://api.jikan.moe/v4/anime?q=${query}&page=${id}`

    try {
        const response = await fetch(url)
        const { data, pagination } = await response.json();
        //const {data, pagination} = await response.json();


        return {data, pagination}
    } catch (error) {
        console.error(error);
    }

}

// Get all data of anime that user selected
async function GetAnime(id) {
    const url = `https://api.jikan.moe/v4/anime/${id}/full`

    try {
        const response = await fetch(url)
        const { data } = await response.json();
        //const {data, pagination} = await response.json();

        return data
    } catch (error) {
        console.error(error);
    }

}

// Photo gallery according to the anime that the user selected
async function GetGalleryAnime(id) {
    const url = `https://api.jikan.moe/v4/anime/${id}/pictures`

    try {
        const response = await fetch(url)
        const { data } = await response.json();
        //const {data, pagination} = await response.json();

        return data
    } catch (error) {
        console.error(error);
    }

}


export { GetPageAnime, GetSearchAnime, GetAnime, GetGalleryAnime }