import { configureStore } from '@reduxjs/toolkit';
import { CharacterReducer } from '../components/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        characters: CharacterReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
