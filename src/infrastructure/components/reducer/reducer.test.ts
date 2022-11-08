import { CharacterType } from '../../../data/data';
import { actionTypes } from './action.types';
import { CharacterReducer } from './reducer';

describe('when actionTypes is load', () => {
    const mockObj = [
        {
            name: 'test',
            family: 'test',
            age: 0,
            img: 'test',
        },
    ];
    test('then return payload as new state', () => {
        const action = { type: actionTypes.load, payload: [] };
        const result = CharacterReducer(mockObj, action);
        expect(result).toEqual([]);
    });
    test('Add', () => {
        const state: CharacterType[] = [];
        const action = { type: actionTypes.add, payload: mockObj };
        const result = CharacterReducer(state, action);
        expect(result).toEqual([mockObj]);
    });

    test('Delete', () => {
        const state: CharacterType[] = mockObj;
        const action = {
            type: actionTypes.delete,
            payload: mockObj,
        };
        const result = CharacterReducer(state, action);
        expect(result).toEqual(mockObj);
    });
    test('Update', () => {
        const state: CharacterType[] = mockObj;
        const action = {
            type: actionTypes.update,
            payload: mockObj,
        };
        const result = CharacterReducer(state, action);
        expect(result).toEqual(mockObj);
    });
    test('should return the state', () => {
        const result = CharacterReducer([], { type: '', payload: [] });
        expect(result).toEqual([]);
    });
});
