import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initilaState = {
    items: [],
    item: {}
}

export default function(state = initilaState, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, items: action.payloads }
        case NEW_POST:
            return { ...state, item: action.payload }     
        default:
            return state;
    }
}