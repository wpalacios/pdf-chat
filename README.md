# General information about the project

This is a TypeScript React project, it follows [Atomic Design UI principles](https://atomicdesign.bradfrost.com/chapter-2/) for structuring components.

## How to run your project

- yarn (to install all packages and dependencies)
- yarn dev (to start in dev mode) or `yarn start` otherwise

## Choices made

- React Reducer and Context was used for clean state management. [More info](https://react.dev/learn/scaling-up-with-reducer-and-context)
- TailwindCSS was used for rapid component styling and templates creation. [More Info](https://tailwindcss.com/)
- React-pdf-viewer library was used for rendering pdf content. [More Info](https://react-pdf-viewer.dev/)

## Difficulties faced

- Time, making enough time during the week to complete the assessment was challenging
- React-pdf-viewer's documentation is not very good
- The Back-end API was unstable, which increased the development time and made manual testing difficult

## Things that I would change if I had more time

- Implement adapter patter to comply with JS/TS naming conventions for objects coming from the back-end
- Implement auto-resize so the text input in chat area grows automatically based on its content
- Implement automatic scroll, so that the app scrolls to the latest generated response
- Add more robust routing system
- Add more polished home page template and content
- Implement error handling and notifications to let user know when something goes wrong
- Implement AuthN/AuthZ
- Include loading:boolean variable as part of the application state (for now it's a local state in ChatPage)
