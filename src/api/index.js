const API_KEY = '36412898-76dbe54ab8c1bf3329c5d24c8';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages({
    queryString = '',
    page = 1,
    orientation = 'all',
    image_type = 'all',
    min_width = 0,
    min_height = 0,
    pretty = true,
}) {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${queryString}&page=${page}&orientation=${orientation}&image_type=${image_type}&min_width=${min_width}&min_height=${min_height}&pretty=${pretty}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}