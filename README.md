
# Salesforce Lightning Design System for React – Integration with UXPin Merge

![alt text](https://i.imgur.com/IDYX1hv.png "Salesforce Lightning in UXPin Merge")

## About Salesforce Lightning Design System for React and this repository.

Salesforce Lightning Design System for React is the [React](https://facebook.github.io/react/) implementation of the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/).

This repository represents a test implementation of Salesforce Lightning components with UXPin Merge Technology. To make this implementation few changes were introduced to Salesforce Lighting:
* Every component is now stored in an individual directory – e.g. `./components/accordion/accordion-panel`.
* In order to preserve all the component imports – `index.js` files were introduced. Index files are only importing and exporting a component in a given directory.
* Preset directories were introduced. Preset files tell UXPin Merge how to initially render every component. E.g. `.componnets/accordion/presets/0-default.jsx` (both name of the directory – `presets` and name of the file `0-default.jsx` are UXPin Merge conventions)

## About UXPin Merge

Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. 
The imported components are 100% identical to components used by developers during the development process. 
It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users. 

[UXPin](http://uxpin.com) is a leading code–based design platform.

## How to use Merge integration with Salesforce Lightning?

Merge is currently only available for selected beta users.

1. Fork this repository and clone it to your computer.
2. Install dependencies with `npm install`
3. Log in to your UXPin beta account (approved for alpha and beta tests by UXPin Inc.)
4. Start Merge dev environment with `npm run uxpin:experiment`

If you wish to push Salesforce Lightning React components to your UXPin account or set-up a continues integration with a CI server - contact UXPin on Merge alpha Slack community.

## Supported components

| Component     |SF DS React Link | Components Status in Merge |
| ------------- |:----------------|:-------------------|
| Accordion | [Accordion](https://react.lightningdesignsystem.com/components/accordions/) | ✅ Full Support |
| Alerts | [Alerts](https://react.lightningdesignsystem.com/components/alerts/)| ✅ Full Support |
| Avatars | [Avatars](https://react.lightningdesignsystem.com/components/avatars/)| ✅ Full Support |
| BrandBand | [Brand Band](https://react.lightningdesignsystem.com/components/brand-band/)| ✅ Full Support |
| Breadcrumbs |[Breadcrumbs](https://react.lightningdesignsystem.com/components/breadcrumbs/)| ✅ Full Support |
| ButtonGroup |[Breadcrumbs](https://react.lightningdesignsystem.com/components/button-groups/)| ✅ Full Support |
| Button |[Buttons](https://react.lightningdesignsystem.com/components/buttons/)| ✅ Full Support |
| Card | [Cards](https://react.lightningdesignsystem.com/components/cards/)| ✅ Full Support |
| Checkbox | [Checkboxes](https://react.lightningdesignsystem.com/components/checkboxes/)| ✅ Full Support |
| ColorPicker | [Color Pickers](https://react.lightningdesignsystem.com/components/color-picker/)| ✅ Full Support |
| Combobox | [Comboboxes](https://react.lightningdesignsystem.com/components/comboboxes/)| ✅ Full Support. Additional interactivity added in CombovoxInteractive component. |
| DataTable | [DataTables](https://react.lightningdesignsystem.com/components/data-table/)| Not supported yet |
| Datepicker | [Datepickers](https://react.lightningdesignsystem.com/components/date-pickers/)| ✅ Full Support |
| DropdownMenu | [Dropdown Menus](https://react.lightningdesignsystem.com/components/date-pickers/)| ✅ Full Support |
| Icon | [Icons](https://react.lightningdesignsystem.com/components/icons/)| ✅ Full Support |
| Illustration | [Illustrations](https://react.lightningdesignsystem.com/components/illustrations/)| ✅ Full Support |
| Input | [Inputs](https://react.lightningdesignsystem.com/components/inputs/)| ✅ Full Support |
| MediaObject | [Media Objects](https://react.lightningdesignsystem.com/components/media-objects/)| ✅ Full Support |
| Modals | [Modals](https://react.lightningdesignsystem.com/components/modals/)| 🔻 Not Supported. Issues with absolutely positioned elements. |
| PageHeader | [Page Headers](https://react.lightningdesignsystem.com/components/page-headers/)| 🔻 Not Supported. Issues with absolutely positioned elements. |
| PillContainer | [Pill Container](https://react.lightningdesignsystem.com/components/pill-container/)| ✅ Full Support |
| Pill | [Pills](https://react.lightningdesignsystem.com/components/pills/)| ✅ Full Support |
| Popover | [Popovers](https://react.lightningdesignsystem.com/components/popovers/)| ✅ Full Support |
| ProgressIndicator | [Progress Indicators](https://react.lightningdesignsystem.com/components/progress-indicators/)| ✅ Full Support. Additional interactivity added in CombovoxInteractive component. |
| ProgressRring | [Progress Rings](https://react.lightningdesignsystem.com/components/progress-rings/)| ✅ Full Support |
| RadioButtonGroup | [Radio Button Groups](https://react.lightningdesignsystem.com/components/radio-button-groups/)| ✅ Full Support |
| RadioGroup | [Radio Groups](https://react.lightningdesignsystem.com/components/radio-groups/)| ✅ Full Support |
| Radio | [Radios](https://react.lightningdesignsystem.com/components/radios/)| ✅ Full Support |
| Slider | [Slider](https://react.lightningdesignsystem.com/components/sliders/)| ✅ Full Support |
| Spinner | [Spinners](https://react.lightningdesignsystem.com/components/spinners/)| ✅ Full Support |
| Spinner | [Spinners](https://react.lightningdesignsystem.com/components/spinners/)| ✅ Full Support |
| SplitView | [Split Views](https://react.lightningdesignsystem.com/components/split-views/) | Not supported yet |
| StatefulButton | [Stateful Buttons](https://react.lightningdesignsystem.com/components/stateful-buttons/) | ✅ Full Support | 
| Tabs | [Tabs](https://react.lightningdesignsystem.com/components/tabs/) | ✅ Full Support | 
| Textarea | [Textareas](https://react.lightningdesignsystem.com/components/textareas/) | ✅ Full Support | 
| Timepicker | [Timepickers](https://react.lightningdesignsystem.com/components/time-pickers/) | ✅ Full Support | 
| Toast | [Toasts](https://react.lightningdesignsystem.com/components/toasts/) | ✅ Full Support | 
| Tooltip | [Tooltips](https://react.lightningdesignsystem.com/components/tooltips/) | ✅ Full Support | 
| Tree | [Trees](https://react.lightningdesignsystem.com/components/trees/) | ✅ Full Support | 
| VerticalNavigation [Vertical Navigation](https://react.lightningdesignsystem.com/components/vertical-navigation/) | Not supported yet. |
| AppLauncher | [App Launcher](https://react.lightningdesignsystem.com/components/app-launchers) | ✅ Full Support | 
| GlobalHeader | [Global Header](https://react.lightningdesignsystem.com/components/global-headers) | 🔻 Not Supported. Issues with automatically rendered <IconSettings /> – not compatible with Merge |

# Examples

![alt text](https://i.imgur.com/ISSVXKx.gif "SF Lightning Color Picker in UXPin Merge")
![alt text](https://i.imgur.com/Z3aDrNP.gif "SF Lightning Date Picker in UXPin Merge")

## CI Server Integration (available only for *beta users*)

The recommended approach to integrating React.js components with UXPin is via Continues Integration server (Circle CI, Travis...). 
This approach provides an opportunity to establish a real single source of truth for design and development. 

After the integration with a CI server every commit to master can (if this is how your CI is configured) automatically update library in UXPin. 

This repository consits of [an example of integration with Circle CI](https://github.com/uxpin-merge/material-ui-merge/blob/master/.circleci/config.yml). 
If you wish to reuse it follow these steps:
1. Make sure that you forked this repository.
2. Go to https://circleci.com and sign-up for an account with your Github credentials.
3. Start a new project and track your fork of this repository.
4. Go into your [UXPin](http://uxpin.com) account, enter UXPin editor (in any project).
5. While inside of UXPin editor open Design Systems Libraries panel and create a new library. Copy the library token (keep it secure it provides access to your library!)

![alt text](https://github.com/uxpin-merge/material-ui-merge/blob/master/img/merge_ci.gif "UXPin Design System Library")

If you're not seeing the screen above – contact your account manager. You're not in Merge Beta group yet.

6. Go into settings of your project in Circle CI. Enter section `Environment Variables` and click on `Add new variable`.
7. Name the new variable `UXPIN_AUTH_TOKEN` and pass your token copied from the UXPin library (#5) as its value.

That's it! The next change in the master branch of your fork will automatically trigger Circle CI and send the newest version of your components to UXPin.

Integration with CI server leads to a powerful workflow, with that however comes couple of dangers, so please be aware of them!
* ⚠️ Don't share your UXPin authorization token with anyone. It leads straight to your design system library in UXPin. Keep the token safe in the CI app!
* ⚠️ Don't keep your UXPin authorization token in any file checked into your git repository.
* ⚠️ Treat contributing to Master branch just like deploying production code. *Any* change will be automatically reflected in the UXPin library and projects. 
If you want to experiment with components – start a new branch and use Merge dev environment – experiment mode (in this repository launched via `npm start`)

---------------------------------------------------------------------
# Design System for React

### Accessible, localization-friendly, presentational React components

[![Build Status](https://api.travis-ci.org/salesforce/design-system-react.svg?branch=master)](https://travis-ci.org/salesforce/design-system-react) [![DeepScan Grade](https://deepscan.io/api/projects/1475/branches/4666/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1475&bid=4666)
[![Known Vulnerabilities](https://snyk.io/test/github/salesforce/design-system-react/badge.svg?targetFile=package.json)](https://snyk.io/test/github/salesforce/design-system-react?targetFile=package.json)

## Install

```
$ npm install @salesforce-ux/design-system @salesforce/design-system-react
```

## Getting Started

Welcome to the project! :wave: This library is the [React](https://facebook.github.io/react/) implementation of the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/). This library has a peer dependency on `@salesforce-ux/design-system`, `react`, and `react-dom`. It is tested with React 16 and has a stable API despite its version number. Please [polyfill](https://github.com/salesforce/design-system-react/blob/master/docs/browser-compatibility.md) this library in order to meet your target environment needs.

* [Usage](#usage)
* [Getting started](https://react.lightningdesignsystem.com/getting-started/)
* [Documentation and interactive examples](https://react.lightningdesignsystem.com)
* [Contributing](CONTRIBUTING.md)
* [Codebase overview](docs/codebase-overview.md)
* [Create React App setup](docs/create-react-app.md)
* [Browser compatibility and polyfills](docs/browser-compatibility.md)
* [Usage with Webpack](docs/webpack.md)
* [Open Sourcing Design System React](https://engineering.salesforce.com/open-sourcing-design-system-react-9be45b8bb127) - Medium article

## Usage

### Quick Setup (CommonJS)

For a no hassle setup and compatibility with Create React App v1, a CommonJS version has been included within the NPM package. If using this setup, please re-write the `import` statement in the documentation site examples. Use the following named `import` syntax to access CommonJS components from `/lib/index.js`:

```
import { Button } from '@salesforce/design-system-react';

<Button label="Hello Button" />
```

Please view [Create React App Setup](docs/create-react-app.md) for more information on using this library with Create React App.

### Advanced (Source code)

Advanced usage requires that your babel presets are set up correctly. `create-react-app` and environments that do not transpile code within `node_modules` are not compatible with the component import below. All the examples on the [documentation site](https://react.lightningdesignsystem.com/) use this syntax. You can use the Babel preset, `@salesforce/babel-preset-design-system-react`, to get started. [This preset](https://npmjs.com/package/@salesforce/babel-preset-design-system-react) will keep Babel compatible with Design System React and allow ES6 module benefits such as tree-shaking. This library is not browser-ready and should be polyfilled to your target environment.

```
import Button from '@salesforce/design-system-react/components/button';

<Button label="Hello Button" />
```

#### Transpile with `.babelrc` settings

```json
{
	"presets": ["@salesforce/babel-preset-design-system-react"]
}
```

### Styling

This library does not contain any Cascading Style Sheets (CSS). You will need to add `<link rel="stylesheet" type="text/css" href="/node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css" />` to your page and serve that file from a publicly available folder.

#### Serve icons publicly

Typically, scripts should be downloaded in the background without blocking the DOM. With React, this works best with [server side rendering](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup). SLDS recommends placeholder stencils while scripts are initializing if the HTML cannot be served immediately. If you can serve the HTML, then icon SVGs should not be bundled and served like any other file. Set a path `context` for all child components with `<IconSettings>` at the top of your render tree:

```
import IconSettings from '@salesforce/design-system-react/components/icon-settings';

ReactDOM.render(
  <IconSettings iconPath="/assets/icons">
    <MyApp />
  </IconSettings>,
  document.getElementById('app')
)

// `/assets/icons` will be prepended to `/standard-sprite/svg/symbols.svg#account` within the SVG path
<svg aria-hidden="true" class="slds-icon">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
</svg>
```

```
// ExpressJS example
app.use('/assets/icons', express.static('node_modules/@salesforce-ux/design-system/assets/icons/'));
```

#### Bundle icons

If you use a module bundler, like Webpack, you can let your module bundler manage SVG sprite file paths and send that path into `<IconSettings>`. This requires configuring your module bundler to manage your public assets.

```
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import standardSprite from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
...
...

ReactDOM.render(
  <IconSettings standardSprite={standardSprite}>
    <MyApp />
  </IconSettings>,
  document.getElementById('app')
)
```

### Icon Usage

Prior to v0.7.0, SLDS icons were bundled with the JavaScript. The 400KB+ icons bundle from [SLDS](https://www.lightningdesignsystem.com/) is no longer included. You will need to download the SLDS CSS and icons separately.

Bundled script files are provided _only_ for convenience. Do not use in production.

* `design-system-react.min.js` (700KB+) - includes icons in the JavaScript
* `design-system-react-components.min.js` (~400KB) - no icons.

## Contributing to the code base

#### Clone and develop locally with Storybook and in-browser tests

```
git clone git@github.com:salesforce/design-system-react.git
npm install
npm start
open http://localhost:9001 http://localhost:8001
```

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) and [Test README](/tests/README.md) first. Then, create an issue to tell others you are working on a bug. If you would like to contribute a new component, create an issue with a list of proposed props to discuss with maintainers. Issues not addressed with pull requests may be closed eventually. Check out [who's contributing](https://github.com/salesforce/design-system-react/graphs/contributors) to the project.

## Got feedback?

If you have support questions, please post a question to [StackOverflow](https://stackoverflow.com/questions/tagged/design-system-react) and tag with `design-system-react`. If you find any bugs, create a [GitHub Issue](https://github.com/salesforce/design-system-react/issues).

## Security
Please report any security issue to [security@salesforce.com](mailto:security@salesforce.com) as soon as it is discovered. This library limits its runtime dependencies in order to reduce the total cost of ownership as much as can be, but all consumers should remain vigilant and have their security stakeholders review all third-party dependencies.

## Contributors
Thank you to all the contributors to this one of [many open source projects at Salesforce](https://opensource.salesforce.com/), but special thanks to the following:

### Active Key Contributors
* [@davidlygagnon](https://github.com/davidlygagnon) David Ly-Gagnon
* [@futuremint](https://github.com/futuremint) David Woodward
* [@garygong](https://github.com/garygong) Gary Gong
* [@interactivellama](https://github.com/interactivellama) Stephen James

### Former Key Contributors
* [@donnieberg](https://github.com/donnieberg) Donielle Berg
* [@tweettypography](https://github.com/tweettypography) David Brainer
* [@ivanbogdanov](https://github.com/ivanbogdanov) Ivan Bogdanov

## Licenses

* Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](https://github.com/salesforce/licenses/blob/master/LICENSE-icons-images.txt)
* The Salesforce Sans font is licensed under our [font license](https://github.com/salesforce/licenses/blob/master/LICENSE-font.txt)
