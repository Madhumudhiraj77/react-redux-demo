import {BUYICECREAM} from "./IcecreamType"

const initialIcecreamState = {
    noofIcecreams : 70
}

const reducericecream = (state=initialIcecreamState,action)=>{
    switch(action.type){
        case BUYICECREAM:
            return{
                ...state,
                noofIcecreams:state.noofIcecreams-1
            }
        default: return state
    }
}

export default reducericecream