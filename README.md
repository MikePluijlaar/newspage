## Getting Started


First install the packages and run the development server:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Techstack

This example is built on a Next.js + React without Astro and uses Typescript


## Testing

The main menu and news-block has a jest test inside and for the news page as a whole I wrote a small test in Cypress. Next to that I made a component library in storybook.

To see the jest testing in action run:

```bash
npm run test 
```

To open cypress and see the e2e test:
```bash
npm run cy:open 
```

Or for a visual inspection of the components run:

```bash
npm run storybook 
```
Visit storybook on  [http://localhost:6006](http://localhost:6006) 

# Important notes

The footer is a copy from the curent live state of the website

The acions menu (login/search) is a simple mock-up of the current live state of the website