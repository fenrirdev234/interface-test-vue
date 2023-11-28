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

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

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
