# Titan - APM's React Base Component Library

This is a collection of React components that are frequently needed in American Public Media's website. It will work with any website set up with Next.js.

## How to use

Simply download from npm with `npm i apm-titan` or `yarn add apm-titan`, if you're using yarn. Import the components with ES6 import statements in the usual way. For example, if a page you are working on needs Content, Event, and Button components, you'd put the line `import { Content, Event, Button } from 'apm-titan'` at the top of your file.

## How to edit

If you need to make a change to a component, you may do so in the usual way. You can test your components with Jest by running `npm run test`, you can see each of the components in action in `npm run storybook`. If you want to ensure that the components are working in another application, run `npm link` here and `npm link apm-titan` in the directory of your choice. Uninstall the original `apm-titan` first if the application you're testing was already relying on it.

## Available components

We have split up our components into "atoms" which are very tiny components used everywhere, and "molecules" which are larger, more specific components that will likely only be useful for templating out APM sites. Our image component, Mimas, is a separate library that can be found [here](https://www.npmjs.com/package/apm-mimas).

## Publishing

To publish this component with the proper name, you'll need to run the usuall command with the `--access public` command:

`npm publish --access public`

## FAQ

### What's with the name?

Our internal website generator will be called "Saturn". Therefore, each of the component libraries that it will be able to use will be named after Saturn's moons. This is the largest library we think we're going to have, so it got its name from Saturn's largest moon.
