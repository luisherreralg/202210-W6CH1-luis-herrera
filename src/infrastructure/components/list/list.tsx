import { AnyAction, Dispatch } from 'redux';
import { CharacterType } from '../../../data/data';
import { ListItem } from '../list.item/list.item';

export function List({
    data,
    dispatcher,
}: {
    data: CharacterType[];
    dispatcher: Dispatch<AnyAction>;
}) {
    return (
        <section>
            <ul>
                {data.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                        dispatcher={dispatcher}
                        characters={data}
                    ></ListItem>
                ))}
            </ul>
        </section>
    );
}
