# VUTD (Virtually Up-To-Date) Desktop App
## Built in Electron
**By Daniel Vega** *@danivegamx <ingdanivega@gmail.com>*

## Instructions for development and code changes:

*Automatic build will be triggered from scratch. Babel, will transpile JSX*

```
git clone git@bitbucket.org:vutd/vutd-electron-desktop.git
npm install
npm run start
```

## Testing app:

*TBD testing mode*

```
npm run test
```

## Dependencies

### electron

The binary tool for native packaging.

### react, react-dom

The library for UI Development.

### babel

Transpiling tool for ES6 -> JSX -> JS.

### stylus & nib

CSS pre-processing engine and mixin set to handle styles across browsers, solving compatibility issues.

=====

## App´s filesystem structure:

```
/
---- build
	---- css
		---- master.css
	---- img
		---- Images (.png, .svg, .jpg)
	---- js
		---- index.js
	---- fonts
		---- /roboto
---- src
	---- js
		---- actions
		---- components
		---- constants
		---- dispatchers
		---- stores
		---- home.js
		---- index.js
	---- stylus
		---- components
---- index.html
---- bootstrapper.js
---- main.js
---- renderer.js
---- package.json
---- README.md
---- LICENSE.md
---- TODO.md

```

## Changelog

### v1.0.1beta (Current)

Implemented ES6 syntax and Router.

### v1.0.0beta (Deprecated)

Created Initial React.js components.
