const INIT_STATE = {
    langue: 'fr'
}

function langueReducer(state = INIT_STATE, action) {

    switch(action.type) {
        case 'UPDATE_LANGUE':
            return { langue: action.value }
        default: return state;
    }

}

export default langueReducer;
