
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import {
    Action,
    MetaAction,
    PayloadAction,
    TypeConstant
} from "typesafe-actions";
// import { postReducer } from "./post/reducers";
// import postSaga from "./post/sagas";
import { IPostState } from "./post/types";

interface IMeta {
    method: string;
    route: string;
}

export interface IApplicationState {
    post: IPostState;
}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}