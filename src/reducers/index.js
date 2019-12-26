import characters from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER, DELETE_ALL_HEROES } from "../actions"
import { combineReducers } from 'redux';


function charactersReducer(state = characters, action) {
    console.log("characters", state)
    switch (action.type) {
        case ADD_CHARACTER:
            let list = state.filter((element) => element.id !== action.id);
            return list;
        case DELETE_ALL_HEROES:
            return characters;
        case REMOVE_CHARACTER:
            let data = characters.find((element) => element.id == action.id);
            console.log("remove character here==>>", data)
            return [...state, data];
        default:
            return state;
    }

}
function heroReducer(state = [], action) {
    console.log("HERO REDUCERS", state, action)
    switch (action.type) {
        case ADD_CHARACTER:
            let list = characters.find((element) => element.id === action.id);
            console.log("list here==", list)
            return [...state, list];
        case REMOVE_CHARACTER:
            let data = state.filter((element) => element.id !== action.id);
            console.log("list here==", data)
            return data;
        case DELETE_ALL_HEROES:
            return [];
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    charactersReducer,
    heroReducer
})

export default rootReducer;