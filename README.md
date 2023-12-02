# interface-test-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Build the Docker Container on your local machine

```sh
docker-compose up --build --no-recreate -d
```

```sh
docker-compose up -d
```

```sh
docker-compose ps
```

## Build and start the Application

```sh
docker exec -it vite_docker sh
```

```sh
npm i && npm run dev
```

## Or

To install and run the dev server, we can have this

```sh
make first
// make is the utility
// first is command from the Makefile
```

And next time, we can always use

```sh
make start
```

## Documentation

```sh
npm run storybook
```

## Tech Stack

- [Vue.js](https://vuejs.org/) - [🛠️](https://stackshare.io/vue-js) - [🐙](https://github.com/vuejs/vue) - An approachable core library that focuses on the view layer only.
- [TypeScript](https://www.typescriptlang.org/) - [🛠️](https://stackshare.io/typescript) - [🐙](https://github.com/Microsoft/TypeScript) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Pinia](https://pinia.vuejs.org/) - [🐙](https://github.com/vuejs/pinia) - Intuitive, type safe, light and flexible Store for Vue using the composition api with DevTools support.

- [Vue Router](https://router.vuejs.org/) - [🐙](https://github.com/vuejs/vue-router) - Vue Router is the official router for Vue.js.
- [Sass](https://sass-lang.com/) - [🛠️](https://stackshare.io/sass) - [🐙](https://github.com/sass/sass) - Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation.
- [Storybook](https://storybook.js.org/) - [🛠️](https://stackshare.io/storybook) - [🐙](https://github.com/storybookjs/storybook) - Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.
- [Prettier](https://prettier.io/) - [🛠️](https://stackshare.io/prettier) - [🐙](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- [Eslint](https://eslint.org/) - [🛠️](https://stackshare.io/eslint) - [🐙](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

- [Vite](https://vitejs.dev/) - [🛠️](https://stackshare.io/vite) - [🐙](https://github.com/vitejs/vite) - Vite is a new breed of frontend build tooling that significantly improves the frontend development experience.

- [Vitest](https://vitest.dev/) - [🛠️](https://stackshare.io/vitest) - [🐙](https://github.com/vitest-dev/vitest) - Next generation testing framework powered by Vite.

- [Cypress](https://www.cypress.io/) - [🛠️](https://stackshare.io/cypress) - [🐙](https://github.com/cypress-io/cypress) - Fast, easy and reliable testing for anything that runs in a browser.

## Roadmap

- Additional browser support

- Add more integrations

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Authors

- [@CoffeeCirodev](https://github.com/fenrirdev234)

## License

[MIT](https://choosealicense.com/licenses/mit/)
