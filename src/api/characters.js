async function GetPageCharacter({ page = 1 }) {
  const url = `https://api.jikan.moe/v4/characters?page=${page}`;

  try {
    const response = await fetch(url);
    const { data, pagination } = await response.json();

    return { data, pagination };
  } catch (error) {
    console.error(error);
  }
}

//
async function GetSearchCharacter({ query = "", id = 1 }) {
  console.log(query, id);
  const url = `https://api.jikan.moe/v4/characters?q=${query}&page=${id}`;

  try {
    const response = await fetch(url);
    const { data, pagination } = await response.json();
    return { data, pagination };
  } catch (error) {
    console.error(error);
  }
}

//
async function GetCharacter({ id }) {
  const url = `https://api.jikan.moe/v4/characters/${id}/full`;

  try {
    const response = await fetch(url);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export {
  GetCharacter,
  GetPageCharacter,
  GetSearchCharacter,
};
