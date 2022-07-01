import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {buyCake} from "../index"

function HookCakeCointainer(){

    const numOfCakes= useSelector(state=>state.Cake.no_of_cakes)
    const dispatch=useDispatch()

    return(
        <div>
            <h2>Num of cakes : {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake </button>
        </div>
    )
}

export default HookCakeCointainer