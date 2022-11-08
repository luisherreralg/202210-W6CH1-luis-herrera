import { render, screen } from '@testing-library/react';
import { ListItem } from './list.item';

describe('Given list.item component', () => {
    describe('When is rendered', () => {
        test('It should display a li element with some data', () => {
            render(
                <ListItem
                    item={{ name: 'test', family: 'test', age: 0, img: 'test' }}
                ></ListItem>
            );

            expect(
                screen.getByAltText('portrait from test')
            ).toBeInTheDocument();
        });
    });
});
