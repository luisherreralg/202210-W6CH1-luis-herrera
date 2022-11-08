import { createReducer } from '@reduxjs/toolkit';
import { CharactersData, CharacterType } from '../../../data/data';
import * as ac from './action.creator';

const initialState: CharacterType[] = CharactersData;

export const taskReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);

    builder.addCase(ac.addActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.name === action.payload.name ? action.payload : item
        )
    );

    builder.addCase(ac.deleteActionCreator, (state, action) =>
        state.filter((item) => item.name !== action.payload.name)
    );

    builder.addDefaultCase((state) => state);
});
