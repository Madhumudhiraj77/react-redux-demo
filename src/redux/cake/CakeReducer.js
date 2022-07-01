import {BUYCAKE} from "./CakeType"

const initialstate={
    no_of_cakes:50
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUYCAKE:
            return{
                ...state,
                no_of_cakes:state.no_of_cakes-1
            }
            default:
        return state
    }
}

export default reducer