import { CharactersData } from '../../../data/data';
import { List } from '../list/list';
import './app.css';

export function App() {
    const data = CharactersData;
    return (
        <div className="app">
            202210-w6ch1-luis-herrera
            <List data={data}></List>
        </div>
    );
}
