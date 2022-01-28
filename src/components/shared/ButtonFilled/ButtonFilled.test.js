import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonFilled from './ButtonFilled';

describe.only('Button filled tests', () => {
    describe('ButtonFilled markup tests (passed props)', () => {
        beforeEach(() =>
            render(
                <BrowserRouter>
                    <ButtonFilled
                        text={'button_props_passed'}
                        width={'150px'}
                        height={'50px'}
                        url={'/test-link'}
                        onClick={() => {}}
                        color={'#000000'}
                        fontSize={'30px'}
                        border={'1px solid #000000'}
                        disabled={true}
                    />
                </BrowserRouter>
            )
        );

        it('Should render the passed text as button label', async () => {
            const aTag = await screen.findByText('button_props_passed');
            expect(aTag).not.toBeNull();
        });

        it("Should have the passed Url as 'href' on the <a> tag", async () => {
            const aTag = await screen.findByText('button_props_passed');
            expect(aTag).toHaveAttribute('href', '/test-link');
        });

        it('Should have the correct styles when passed via props', () => {
            const buttonTag = screen.getByRole('button');
            const styles = getComputedStyle(buttonTag); // document function

            expect(styles.color).toBe('rgb(0, 0, 0)');
            expect(styles.border).toBe('1px solid #000000');
            expect(styles.fontSize).toBe('30px');
        });

        it('Should be disabled when passed via props', () => {
            const buttonTag = screen.getByRole('button');
            expect(buttonTag).toHaveAttribute('disabled');
        });

        it('Should be enabled when passed via props', () => {
            render(
                <BrowserRouter>
                    <ButtonFilled
                        text={'disabled_button_test'}
                        width={'150px'}
                        height={'50px'}
                        url={'/test-link'}
                        onClick={() => {}}
                        color={'#000000'}
                        fontSize={'30px'}
                        border={'1px solid #000000'}
                        disabled={false}
                    />
                </BrowserRouter>
            );

            const aTag = screen.getByText('disabled_button_test');
            expect(aTag.parentElement).not.toHaveAttribute('disabled');
        });
    });

    describe('ButtonFilled markup tests (NO passed props)', () => {
        beforeEach(() =>
            render(
                <BrowserRouter>
                    <div style={{ width: '100px', height: '20px' }}>
                        <ButtonFilled />
                    </div>
                </BrowserRouter>
            )
        );

        it('Should render the DEFAULT button label', async () => {
            const aTag = await screen.findByText('Default Label');
            expect(aTag).not.toBeNull();
        });

        it("Should have the DEFAULT Url as 'href' on the <a> tag", async () => {
            const aTag = await screen.findByText('Default Label');
            expect(aTag).toHaveAttribute('href', '/no-url-passed');
        });

        it('Should have the correct DEFAULT styles', () => {
            const button = screen.getByRole('button');
            const styles = getComputedStyle(button);

            expect(styles.color).toBe('rgb(255, 255, 255)');

            expect(styles.fontSize).toBe('22px');
        });

        it('Should be enabled by DEFAULT', () => {
            const aTag = screen.getByText('Default Label');
            expect(aTag.parentElement).not.toHaveAttribute('disabled');
        });
    });

    describe('ButtonTransparent passed onClick function functionality tests', () => {
        it('Should handle onClick properly', () => {
            const testFunction = jest.fn();

            render(
                <BrowserRouter>
                    <ButtonFilled
                        text={'TEST'}
                        url={'test-link'}
                        onClick={testFunction}
                    />
                    ,
                </BrowserRouter>
            );

            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(testFunction).toBeCalledTimes(1);
        });

        it('Should not execute onClick when disabled (via props)', () => {
            const testFunction = jest.fn();

            render(
                <BrowserRouter>
                    <ButtonFilled
                        text={'TEST'}
                        url={'test-link'}
                        onClick={testFunction}
                        disabled={true}
                    />
                    ,
                </BrowserRouter>
            );

            const button = screen.getByRole('button');
            fireEvent.click(button);

            expect(testFunction).toBeCalledTimes(0);
        });
    });
});

// url,
//     color,
//     fillColor,
//     text,
//     fontSize,
//     fontWeight,
//     disabled,
//     border,
//     width,
//     height,
//     onClick,
