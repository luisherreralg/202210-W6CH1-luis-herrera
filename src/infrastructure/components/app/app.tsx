import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CharactersData } from '../../../data/data';
import { rootState } from '../../store/store';
import * as ac from '../reducer/action.creator';
import { List } from '../list/list';
import './app.css';
import { getStore, setStore } from '../../services/storage';

export function App() {
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();

    // Cada vez que pasa por aquí, se pierde la persistencia
    useEffect(() => {
        dispatcher(
            ac.loadActionCreator(
                getStore().length === 0 ? CharactersData : getStore()
            )
        );
    }, [dispatcher]);

    useEffect(() => {
        setStore(characters);
    }, [characters]);

    // ------------------------------------------------------
    const initialForm = {
        name: '',
        family: '',
        age: 0,
        img: '',
    };

    const [form, setForm] = useState(initialForm);

    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (form.img === '' || form.name === '') {
            return;
        }
        dispatcher(ac.addActionCreator(form));
        setForm(initialForm);
    };

    const handleForm = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };
    return (
        <div className="app">
            <h1>Game of MOCKS</h1>
            <List data={characters} dispatcher={dispatcher}></List>
            <form>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    value={form.name}
                    onInput={handleForm}
                />
                <input
                    type="text"
                    name="family"
                    id="family"
                    placeholder="family"
                    value={form.family}
                    onInput={handleForm}
                />
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="age"
                    value={form.age}
                    onInput={handleForm}
                />
                <input
                    type="text"
                    name="img"
                    id="img"
                    placeholder="image URL"
                    value={form.img}
                    onInput={handleForm}
                />
                <button type="submit" onClick={handleClick}>
                    SEND
                </button>
            </form>
        </div>
    );
}
