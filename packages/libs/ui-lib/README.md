# react-vite-component-template

Template for building a **React component library**, with **Vite**, **TypeScript** and **Storybook**.

Check my post about this repository [here](https://victorlillo.dev/blog/react-typescript-vite-component-library).

## Features

- ⚛️ **React** component library with **TypeScript**.

- 🏗️ **Vite** as development environment.

- 🌳 **Tree shaking**, for not distributing dead-code.

- 📚 **Storybook** for live viewing the components.

- 🖌️ **CSS Modules** in development, compiled CSS for production builds.

- 🧪 Testing with **Vitest** and **React Testing Library**.

- ✅ Code quality tools with **ESLint** and **Stylelint**.

## 🤖 Scripts

|      Script       | Function                                                                           |
| :---------------: | ---------------------------------------------------------------------------------- |
|      `build`      | Build the `dist`, with types declarations, after checking types with TypeScript.   |
|      `lint`       | Lint the project with **Eslint**.                                                  |
|    `lint:fix`     | Lint and fix the project with **Eslint**.                                          |
|    `storybook`    | Start a Storybook development server.                                              |
| `build-storybook` | Build the Storybook `dist`.                                                        |
|      `test`       | Run the tests with **Vitest** using `jsdom` and starts a **Vitest UI** dev server. |
|    `coverage`     | Generate a coverage report, with **v8**.                                           |
