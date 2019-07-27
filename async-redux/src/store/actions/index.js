import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const fetchCharacter = (count) => dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then(res => {
            dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results })
            // console.log(res.data.results)
        })
        .catch(err => console.log(err))
}

export const CHARACTER_STATS_START = 'FETCH_CHARACTER_START';
export const CHARACTER_STATS_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const CHARACTER_STATS_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacter = (charId) => dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });
    axios
        .get(`https://rickandmortyapi.com/api/character/${charId}`)
        .then(res => {
            dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}