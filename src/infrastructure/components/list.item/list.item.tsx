import { CharacterType } from '../../../data/data';

export function ListItem({ item }: { item: CharacterType }) {
    return (
        <li>
            <img src={item.img} alt={`portrait from ${item.name}`} />
            <h2>{item.name}</h2>
            <h2>{item.family}</h2>
            <h2>Age: {item.age}</h2>
        </li>
    );
}
