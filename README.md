# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Prerequisite

This project contains frameworks and libraries as followings:

- [Reactjs](https://react.dev/) for client-side framework
- [Vitejs](https://vitejs.dev/) for local development, building and bundling
- [Vitest](https://vitest.dev/) for unit testing framework
- [React-hooks-testing-library](https://react-hooks-testing-library.com/) for unit testing React custom hook
- [Testing-library](https://testing-library.com/docs/react-testing-library/intro) for unit testing React component
- [Formik](https://formik.org/) for form state and event handlings
- [HeadlessUI](https://headlessui.com/) for instant UI components
- [TailwindCSS](https://tailwindcss.com/) for CSS framework

## Development

1. Install dependencies

```sh
$ yarn install
```

2. Start project in dev mode

```sh
$ yarn dev
```

3. Start testing in watch mode

```sh
$ yarn test
```

4. Build project to static assets

```sh
$ yarn build
```

## More TODOs

- Add github action CI to build, unit test, linting and other verification before merging MRs.
- Add Playwright as UI testing framework and run UI test with github action CI.
- Add `.devcontainer` to make development experience better.
- Optimise bundle splitting to extract vendor and app modules for better load time.
- Add lighthouse to validate performance.
