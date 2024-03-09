# Necessary steps to run the development server for frontend
\
If you do not have NodeJS (npm - node package manager) installed,
instructions can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Once Node has been installed, in the terminal:
1. cd into EngBot/frontend
2. run `npm install` or `npm i`
3. (optional) run `npm run dev`, and search `localhost:3000/` in a browser\
to see what Vite serves up for you, if nothing breaks then your build is good to go\
\

## How to name files
\
- .js (and .cjs, .mjs) file extensions are default JavaScript files
- Convention is to use `CamelCase/camelCase` with the first letter capitalized for naming components\
(the things that will be displayed on screen), and everything else has the first letter lowercase\
- .tsx/.ts file extensions are TypeScript-React/TypeScript files
- .tsx is used for components, .ts is used for everything else (functions, classes, etc.)
\


## Important files/directories to know about
\
Within EngBot/frontend,
- /public contains static files (files that won't be compiled/executed, such as images or css files).
- /src contains files that will be compiled by Node and transformed into our website.
- package.json contains vital information about the project, including scripts to run/test our code\
the default package.json contains four scripts: `dev`, `build`, `lint`, and `preview`\
run `npm run [script]` to see what they do\
- /src/main.tsx is the file that gets executed and loaded to your browser display.
\

# === OFFIFCIAL VITE README STARTS HERE ===
\

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
