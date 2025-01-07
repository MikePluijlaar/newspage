import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { NewsBlock } from './news-block';

const testData = {
    id: 5476030,
    titel: "Test article no paragraphs",
    urlAlias: "https://redactie.rtl.nl/tv/artikel/5476030/test-article-no-paragraphs",
    labelValue: "Test article no paragraphs",
    labelType: "chapeau",
   
    seoTitel: "Test article no paragraphs",
    korteTitel: "Test article no paragraphs",
    afbeelding: {
        afbeelding: "https://redactie.rtl.nl/sites/default/files/ANP211024089-1.jpg",
    },
    type: "Artikel"
}

// Test if the block is rendered correctly
test('render large news block', () => {
    render(<NewsBlock variant='large' news={testData}/>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://redactie.rtl.nl/tv/artikel/5476030/test-article-no-paragraphs')
}); 

// Test if the block is rendered correctly
test('render medium news block', () => {
    render(<NewsBlock variant='medium' news={testData}/>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://redactie.rtl.nl/tv/artikel/5476030/test-article-no-paragraphs')
}); 

// Test if the block is rendered correctly
test('render small news block', () => {
    render(<NewsBlock variant='small' news={testData}/>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://redactie.rtl.nl/tv/artikel/5476030/test-article-no-paragraphs')
}); 

