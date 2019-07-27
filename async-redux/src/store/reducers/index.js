import { 
    FETCH_CHARACTER_START, 
    FETCH_CHARACTER_SUCCESS, 
    FETCH_CHARACTER_FAILURE, 
    CHARACTER_STATS_START,
    CHARACTER_STATS_SUCCESS,
    CHARACTER_STATS_FAILURE
} from '../actions'

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
                characters: [],
                characterInfo: null
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                error: '',
                fetching: false,
                characters: action.payload
            };
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                characters: []
            };
        case CHARACTER_STATS_START:
            return {
                ...state,
                error: '',
                fetching: true,
                characterInfo: null
            };
        case CHARACTER_STATS_SUCCESS:
            return {
                ...state,
                error: '',
                fetching: false,
                characterInfo: action.payload
            };
        case CHARACTER_STATS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                characterInfo: null
            };
        default:
            return state;
    }
}