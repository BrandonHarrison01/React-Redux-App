import { FETCH_CHARACTER_START } from '../actions'

const initialState = {
    error: '',
    fetching: false,
    characters: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                error: '',
                fetching: true,
                characters: null
            };
        default:
            return state;
    }
}