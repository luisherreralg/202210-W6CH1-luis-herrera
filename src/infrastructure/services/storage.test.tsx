import { getStore, setStore } from './storage';

describe('Given Storage Services', () => {
    describe('When we call a getStorage function', () => {
        test('Then if local storage have data and i use getStorage() function it should call localStorage.getItem and return the data', () => {
            Storage.prototype.getItem = jest.fn().mockReturnValue('["test"]');
            const result = getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual(['test']);
        });
        test(`Then if localStorage have not data  
            and I use  service.getStore() 
            it should call localStorage.getItem
            and return []`, () => {
            Storage.prototype.getItem = jest.fn();
            const result = getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });

    describe('When we call a setStore() function', () => {
        test('Then it should be called setItem()', () => {
            Storage.prototype.setItem = jest.fn();
            setStore([]);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});
