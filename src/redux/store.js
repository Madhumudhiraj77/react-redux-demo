import { createStore } from "redux";
import reducer from "./cake/CakeReducer"

const store=createStore(reducer)

export default store