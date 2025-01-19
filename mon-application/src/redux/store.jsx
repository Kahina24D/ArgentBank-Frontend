import { createStore } from "redux";
import {authReducer} from "./reducer/auth.reducer"

//creer  le store.jsx

const store=createStore(authReducer);
export default store;
