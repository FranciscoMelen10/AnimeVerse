
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

async function GetSearchAnime(query) {
    const url = `https://api.jikan.moe/v4/anime?q=${query}`

    try {
        const response = await fetch(url)
        const { data, pagination } = await response.json();
        //const {data, pagination} = await response.json();

        return {data, pagination}
    } catch (error) {
        console.error(error);
    }

}

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