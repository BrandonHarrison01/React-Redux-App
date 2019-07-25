import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS } from '../actions'

const initialState = {
    error: '',
    fetching: false,
    characters: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                error: '',
                fetching: true,
                characters: []
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                error: '',
                fetching: false,
                characters: action.payload
            };
        default:
            return state;
    }
}