import { render, screen } from '@testing-library/react';
import { loadActionCreator } from '../reducer/action.creator';
import { ListItem } from './list.item';

describe('Given list.item component', () => {
    describe('When is rendered', () => {
        test('It should display a li element with some data', () => {
            render(
                <ListItem
                    item={{ name: 'test', family: 'test', age: 0, img: 'test' }}
                    dispatcher={loadActionCreator as unknown as jest.Mock}
                    characters={[]}
                ></ListItem>
            );

            expect(
                screen.getByAltText('portrait from test')
            ).toBeInTheDocument();
        });
    });
});
