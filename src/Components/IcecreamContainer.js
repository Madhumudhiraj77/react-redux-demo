import React from "react"
import {connect} from "react-redux"

import {buyIceCream} from "../redux/IceCreams/IcecreamAction"

function IcecreamCointainer(props){
    console.log(props)
    return(
        <div>
            <h2>Number of Icecreams : {props.noofIcecreams}</h2>
            <button onClick={props.buyIceCream}>BuyIcecream</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        noofIcecreams:state.Icecream.noofIcecreams
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IcecreamCointainer)