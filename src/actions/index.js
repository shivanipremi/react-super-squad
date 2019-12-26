export const ADD_CHARACTER = 'ADD_CHARACTER'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'
export const DELETE_ALL_HEROES = 'DELETE_ALL_HEROES'



export function addcharacterById(id) {
    return {
        type: ADD_CHARACTER,
        id
    }
}
///

export function deleteHeroes() {
    return {
        type: DELETE_ALL_HEROES
    }
}
export function removeCharacterById(id) {
    return {
        type: REMOVE_CHARACTER,
        id
    }
}
// export function addheroBycharacterById(id) {
//     return {
//         type: ADD_CHARACTER,
//         id
//     }
// }