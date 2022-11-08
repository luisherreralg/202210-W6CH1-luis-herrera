import { createAction } from '@reduxjs/toolkit';
import { CharacterType } from '../../../data/data';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<CharacterType[]>(
    actionTypes.load
);

export const updateActionCreator = createAction<CharacterType>(
    actionTypes.update
);

export const deleteActionCreator = createAction<CharacterType>(
    actionTypes.delete
);

export const addActionCreator = createAction<CharacterType>(actionTypes.add);
