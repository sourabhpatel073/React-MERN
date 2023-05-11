import reducer from "./rerducer";
import {legacy_createStore} from "redux"

export const store = legacy_createStore(reducer);