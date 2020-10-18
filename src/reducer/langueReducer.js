const INIT_STATE = {
    langue: 'fr'
}

function langueReducer(state = INIT_STATE, action) {

    switch(action.type) {
        case 'UPDATE_LANGUE':
            //console.log(action.value)
            return { langue: action.value }
        default: return state;
    }

}

export default langueReducer;
