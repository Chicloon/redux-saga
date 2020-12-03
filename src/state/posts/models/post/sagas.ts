import {MetaAction, TypeConstant } from 'typesafe-actions'

interface IMeta {
    method: string;
    route: string;
}

export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}