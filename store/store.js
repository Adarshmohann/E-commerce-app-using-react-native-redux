import { createStore } from "redux";
import {Reducers} from '../src/reducers/productReducer';

export const mystore = createStore(Reducers);