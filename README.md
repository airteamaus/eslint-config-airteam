# Airteam ESLint Config

Airteam configuration file for [ESLint](https://eslint.org).

# Installation

```shell
yarn add @airteam/eslint-config
```

The following packages must also be installed in your project:

* [eslint](https://github.com/eslint/eslint)
* [prettier](https://github.com/prettier/prettier)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

```shell
yarn add -D eslint prettier eslint-plugin-import eslint-plugin-prettier eslint-config-prettier
```

To enable React & JSX support the following packages must also be installed in your project:

* [react](https://github.com/facebook/react)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

```shell
yarn add react
yarn add -D eslint-plugin-react eslint-plugin-jsx-a11y
```

# Usage

Add a `.eslintrc.js` file to the root of your project with contents:

```javascript
module.exports = {
  root: true,
  extends: '@airteam',
};
```

Then run eslint on your source code, eg: `eslint src`
