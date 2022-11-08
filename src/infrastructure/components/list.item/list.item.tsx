import { AnyAction, Dispatch } from 'redux';
import { CharacterType } from '../../../data/data';
import { setStore } from '../../services/storage';
import * as ac from '../reducer/action.creator';

export function ListItem({
    item,
    dispatcher,
    characters,
}: {
    item: CharacterType;
    dispatcher: Dispatch<AnyAction>;
    characters: CharacterType[];
}) {
    const handleDelete = () => {
        dispatcher(ac.deleteActionCreator(item));
        setStore(characters);
    };

    return (
        <li>
            <img src={item.img} alt={`portrait from ${item.name}`} />
            <h2>{item.name}</h2>
            <h2>{item.family}</h2>
            <h2>Age: {item.age}</h2>
            <button onClick={handleDelete}>🗑️</button>
        </li>
    );
}
