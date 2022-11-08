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

    useEffect(() => {
        dispatcher(
            ac.loadActionCreator(
                getStore().length === 0 ? CharactersData : getStore()
            )
        );
    }, [dispatcher]);

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
        setStore(characters);
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
            202210-w6ch1-luis-herrera
            <List data={characters}></List>
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
