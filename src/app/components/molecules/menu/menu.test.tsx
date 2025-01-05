import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Menu } from './menu';

const testData = [
        {
            id: 1,
            name: "Nieuws",
            url: "/category1"
        },
        {
            id: 2,
            name: "Boulevard",
            url: "/category2"
        },
        {
            id: 3,
            name: "TV",
            url: "/category3"
        }
    ]


// Test if the menu is rendered correctly
test('renders menu', () => {
    render(<Menu items={testData}/>);
    const firstElement = screen.getByText("Nieuws");
    const secondElement = screen.getByText("Boulevard");
    const thirdElement = screen.getByText("TV");
    expect(firstElement).toBeInTheDocument();
    expect(secondElement).toBeInTheDocument();
    expect(thirdElement).toBeInTheDocument();
    
    // This element should not be there so when activated we have 1 failing test
    // const fourthElement = screen.getByText("Weather");
    // expect(fourthElement).toBeInTheDocument();
}); 

// Test if the menu has the right links
test('menu links', () => {
    render(<Menu items={testData}/>);
    const firstElement = screen.getByText("Nieuws");
    const secondElement = screen.getByText("Boulevard");
    const thirdElement = screen.getByText("TV");
    expect(firstElement).toHaveAttribute('href', '/category1');
    expect(secondElement).toHaveAttribute('href', '/category2');
    expect(thirdElement).toHaveAttribute('href', '/category3');
});
