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

## Build:

For build the app to a specific platform from CLI:

```
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
```

This will:

- Find or download the correct release of Electron
- Use that version of Electron to create a app in `<out>/<appname>-<platform>-<arch>` *(this can be customized via an optional flag)*

`--platform` and `--arch` can be omitted, in two cases:

* If you specify `--all` instead, bundles for all valid combinations of target
  platforms/architectures will be created.
* Otherwise, a single bundle for the host platform/architecture will be created.

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
