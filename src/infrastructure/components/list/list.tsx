import { CharacterType } from '../../../data/data';
import { ListItem } from '../list.item/list.item';

export function List({ data }: { data: CharacterType[] }) {
    return (
        <section>
            <ul>
                {data.map((item, index) => (
                    <ListItem key={index} item={item}></ListItem>
                ))}
            </ul>
        </section>
    );
}
