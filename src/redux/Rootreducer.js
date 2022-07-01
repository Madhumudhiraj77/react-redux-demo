import { combineReducers } from "redux";

import reducer from "./cake/CakeReducer"
import reducericecream from "./IceCreams/IcecreamReducer"

const rootReducer=combineReducers({Cake:reducer,Icecream:reducericecream})

export default rootReducer