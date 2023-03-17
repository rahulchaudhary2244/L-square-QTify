import axios from 'axios';

const BACKEND_URL = 'https://qtify-backend-labs.crio.do/';

export const fetchTopSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/albums/top`);
        return await response.data;
    } catch (error) {
        console.log({ error }, 'in fetchTopSongs()');
        return [];
    }
};

export const fetchNewSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/albums/new`);
        return await response.data;
    } catch (error) {
        console.log({ error }, 'in fetchNewSongs()');
        return [];
    }
};

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/songs`);
        return await response.data;
    } catch (error) {
        console.log({ error }, 'in fetchSongs()');
        return [];
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/genres`);
        return await response.data;
    } catch (error) {
        console.log({ error }, 'in fetchGenres()');
        return [];
    }
};

fetchGenres();
