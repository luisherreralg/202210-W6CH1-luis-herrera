import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given App component', () => {
    describe('When we render it', () => {
        test('Then it should render a form button', () => {
            render(
                <Provider store={appStore}>
                    <App></App>
                </Provider>
            );
            expect(
                screen.getByRole('button', { name: 'SEND' })
            ).toBeInTheDocument();
        });

        test('Then it should render a list item', () => {
            render(
                <Provider store={appStore}>
                    <App></App>
                </Provider>
            );
            expect(
                screen.getByRole('heading', { name: 'Daenerys' })
            ).toBeInTheDocument();
        });

        test('Then it should render lanister', () => {
            render(
                <Provider store={appStore}>
                    <App />{' '}
                </Provider>
            );
            const linkElement = screen.getByText(/lanister/i);
            expect(linkElement).toBeInTheDocument();
        });
    });
});
