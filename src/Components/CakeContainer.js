import React from "react"
import {connect} from "react-redux"
import {buyCake} from "../redux"

function CakeContainer(props){
    return(
        <div>
            <h2>Number of Cakes : {props.no_of_cakes}</h2>
            <button onClick={props.buyCake}>BuyCake</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return{
        no_of_cakes:state.no_of_cakes
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)