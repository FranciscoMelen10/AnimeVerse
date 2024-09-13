async function GetPageManga({ page = 1 }) {
  const url = `https://api.jikan.moe/v4/manga?page=${page}`;

  try {
    const response = await fetch(url);
    const { data, pagination } = await response.json();

    return { data, pagination };
  } catch (error) {
    console.error(error);
  }
}

//
async function GetSearchManga({ query = "", id = 1 }) {
  const url = `https://api.jikan.moe/v4/manga?q=${query}&page=${id}`;

  try {
    const response = await fetch(url);
    const { data, pagination } = await response.json();

    return { data, pagination };
  } catch (error) {
    console.error(error);
  }
}

//
async function GetManga({ id }) {
  const url = `https://api.jikan.moe/v4/manga/${id}/full`;

  try {
    const response = await fetch(url);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

//
async function GetGalleryManga({ id = 1 }) {
  const url = `https://api.jikan.moe/v4/manga/${id}/pictures`;

  try {
    const response = await fetch(url);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

//
async function GetMainCharactersManga({ id = 1 }) {
  const url = `https://api.jikan.moe/v4/manga/${id}/characters`;

  try {
    const response = await fetch(url);
    const { data } = await response.json();
    const characters = data.filter((data) => data.role === "Main");

    return characters;
  } catch (error) {
    console.error(error);
  }
}

export {
  GetGalleryManga,
  GetManga,
  GetMainCharactersManga,
  GetPageManga,
  GetSearchManga,
};
