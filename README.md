# Titan - APM's React Base Component Library

This is a collection of React components that are frequently needed in American Public Media's website. It will work with any website set up with Next.js.

Note as of version 1.0.15 we have swapped date-fns out and replaced it with dayjs. 
Dayjs formatting strings are similar too but not the same as date-fns. See https://day.js.org/docs/en/display/format vs. https://date-fns.org/v2.28.0/docs/format. You may have to make some adjustments. Additionally the Time compondent now needs to take timezone into account as the dateTime prop needs to be timezone aware. If you pass in for example '08-26-2021' as the dateTime prop it will assume 8/26/2021 UTC time so id you want Central time it will actually display 8/25/2021 at 6 or 7 pm depending on daylights savings time. 

## How to use

Simply download from npm with `npm i @apmg/titan` or `yarn add @apmg/titan`, if you're using yarn. Import the components with ES6 import statements in the usual way. For example, if a page you are working on needs Content, Event, and Button components, you'd put the line `import { Content, Event, Button } from '@apmg/titan` at the top of your file.

## How to edit

If you need to make a change to a component, you may do so in the usual way. You can test your components with Jest by running `yarn test`, you can see each of the components in action in `yarn storybook`. If you want to ensure that the components are working in another application, run `npm link` here and `npm link @apmg/titan` in the directory of your choice. Uninstall the original `@apmg/titan` first if the application you're testing was already relying on it.

## Available components

We have split up our components into "atoms" which are very tiny components used everywhere, and "molecules" which are larger, more specific components that will likely only be useful for templating out APM sites. For an in-depth explanation of what these are and what they look like, check out our [Storybook documentation site](https://apmg.github.io/apm-titan/) (WIP). Our image component, Mimas, is a separate library that can be found [here](https://www.npmjs.com/package/apm-mimas).

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

See a demo with all of these components in action, with default APM styling.

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## FAQ

### What's with the name?

Our internal website generator will be called "Saturn". Therefore, each of the component libraries that it will be able to use will be named after Saturn's moons. This is the largest library we think we're going to have, so it got its name from Saturn's largest moon.
