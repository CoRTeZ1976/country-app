import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from '../config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(
	applyMiddleware(
		thunk.withExtraArgument({
			client: axios,
			api,
		})
	)
));

export {store};