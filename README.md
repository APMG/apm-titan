# Titan - APM's React Base Component Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and followed [Aakash N S's article](APM's React Base Component Library) on how to create a library of React components.

## How to use

Simply download from npm with `npm i apm-titan` or `yarn add apm-titan`, if you're using yarn. Import the components with ES6 import statements in the usual way. For example, if a page you are working on needs Content, Event, and Button components, you'd put the line `import { Content, Event, Button } from 'apm-titan'` at the top of your file.

## How to edit

If you need to make a change to a component, you may do so in the usual way. You can test your components with Jest by running `npm run test`, you can see each of the components in action in `npm run storybook`. If you want to ensure that the components are working in another application, run `npm link` here and `npm link apm-titan` in the directory of your choice. Uninstall the original `apm-titan` first if the application you're testing was already relying on it.

## Available components

We have split up our components into "atoms" which are very tiny components used everywhere, and "molecules" which are larger, more specific components that usually only appear on specifically templated pages. Our image component, Mimas, is a separate library that can be found [here](https://www.npmjs.com/package/apm-mimas).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run storybook`

See a demo with all of these components in action, with default APM styling.

## FAQ

### What's with the name

Our internal website generator will be called "Saturn". Therefore, each of the component libraries that it will be able to use will be named after Saturn's moons. This is the largest library we think we're going to have, so it got its name from Saturn's largest moon.

