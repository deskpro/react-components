## v1.4.4 - 2018-11-29

* [FIX] - Fix DatePicker style
* [FIX] - Fix FontAwesome 5 icons
* [FIX] - Fix style broken on Toggle
* [FIX] - Move moment to peerDependencies

## v1.4.3 - 2018-11-29

* [FEATURE] - Improve caret position in columns
* [FEATURE] - Update react-select to v2

## v1.4.2 - 2018-11-16

* [FEATURE] - Add forwarded ref to List and ListElement

## v1.4.1 - 2018-11-09

* [FIX] - Fix utils compilation

## v1.4.0 - 2018-11-08

* [FEATURE] - Use rollup for publishing
* [FEATURE] - Remove font-awesome 4.7

## v1.3.35 - 2018-09-15

* [FIX] - Fix styling on Colorpicker

## v1.3.34 - 2018-09-14

* [FIX] - Fix case on Colorpicker

## v1.3.33 - 2018-09-14

* [FEATURE] - Add Colorpicker

## v1.3.32 - 2018-09-10

* [FIX] - Fix textarea props

## v1.3.31 - 2018-09-10

* [FIX] - Fix missing export

## v1.3.30 - 2018-09-10

* [FEATURE] - Add Toggle

## v1.3.29 - 2018-07-20

* [FEATURE] - Add FixedWidth to icons

## v1.3.28 - 2018-07-13

* [FEATURE] - Allow unselect on tabs

## v1.3.27 - 2018-07-10

* [FEATURE] - Added missing "editable" attribute in TagSet binding.

## v1.3.26 - 2018-06-13

* Update dependencies

## v1.3.25 - 2018-05-28

* [FEATURE] - Textareas now could use "autosize" if they are set to.

## v1.3.24 - 2018-05-17

* [FIX] - Disallow empty tags in TagSet

## v1.3.23 - 2018-04-27

* [FEATURE] - Update Column heading design

## v1.3.22 - 2018-04-19

* [FEATURE] - Allow controlled ToggleableList

## v1.3.20 - 2018-04-10

* [FIX] Fix DatePicker months

## v1.3.19 - 2018-04-03

* Prevent error on missing locale

## v1.3.18 - 2018-03-21

* Adds prepublish script

## v1.3.17 - 2018-03-21

* Fix click on SelectableList

## v1.3.16 - 2018-03-15

* Fix click on Items

## v1.3.15 - 2018-03-15

* Fix click on Drawer heading

## v1.3.14 - 2018-03-12

* Republish after missing compilation

## v1.3.13 - 2018-03-12

* Fix unrecognized attributes to Item
* Allow intermediate Element is DrawerList 

## v1.3.12 - 2018-03-05

* Fix to cssMatchComputedWidth

## v1.3.11 - 2018-03-05

* Deprecate redux-form bindings

## v1.3.10 - 2018-02-28

* Adds empty onBlur to Select binding
* Adds externals to webpack

## v1.3.9 - 2018-02-26

* Update dev dependencies

## v1.3.8 - 2018-02-26

* Update dependencies

## v1.3.7 - 2018-02-23

* [FIX] Relative import of node_modules style files

## v1.3.6 - 2018-02-23

* [FIX] Fix noop export

## v1.3.5 - 2018-02-21

* [FIX] Fix TagSet not loading

## v1.3.4 - 2018-02-19

* [FIX] Fix newid export

## v1.3.3 - 2018-02-14

* [FIX] Fix Webpack output 

## v1.3.2 - 2018-02-14

* [FIX] Fix exports

## v1.3.1 - 2018-02-14

* [FIX] Export react-forms bindings and utils

## v1.3.0 - 2018-02-14

* [BREAKING CHANGE] Change distribution mode.
  
  Please now import classes from the root of the package :
  
  use `import { Button } from '@despro/react-components` instead of `import Button from '@deskpro/react-components/lib/Components/Forms'`

## v1.2.18 - 2018-02-14

* [FIX] Fix TagInput not loading

## v1.2.17 - 2018-02-14

* [FIX] Remove on click outside on `TagInput`

## v1.2.16 - 2018-02-05

* [FIX] Update peerDependencies

## v1.2.14 - 2018-01-30

* [FIX] Prevent form submission when adding tag in TagSet

## v1.2.13 - 2018-01-30

* [FIX] Fixed another TagSet options prop bug

## v1.2.12 - 2018-01-30

* [FIX] Fix TagSet options prop bug

## v1.2.11 - 2018-01-25

* Specify react at a peer dependency

## v1.2.10 - 2018-01-10

* Fix relative import in _select.scss

## v1.2.8 - 2018-01-04

* Try to get rid of react in dependencies

## v1.2.7 - 2018-01-04

* [FIX] Prevent react from being added in npm package

## v1.2.6 - 2018-01-04

* [FIX] Fix bug on DatePicker not closing
* [IMPROVEMENT] DatePicker is matching locale

## v1.2.5 - 2017-12-18

* [FIX] Fix Calendar days
* Update npm dev packages

## v1.2.4 - 2017-12-13

* [FIX] Remove hardcoded column widths
* [FIX] Force 100% width on headings inside column drawers

## v1.2.3 - 2017-11-13

* [FIX] Fixes missing onChange on dayclick in Datepicker

## v1.2.2 - 2017-11-13

* [FEATURE] Adds a Datetimepicker

## v1.2.1 - 2017-11-08

* Write npm-shrinkwrap with npm 3 for wider compatibility

## v1.2.0 - 2017-11-08

* Move react and react-dom to dev dependencies

## v1.1.2 - 2017-11-03

* Remove semantic dependency and _apps.scss

## v1.1.1 - 2017-10-23

* Rename repository to react-components

## v1.1.0 - 2017-10-23

* Rename npm package to @deskpro/react-components

## v1.0.5 - 2017-10-23

* [MINOR] Highlight first occurrence when typing into TagInput
* [FIX] Fixes onChange callback in redux form bindings
* [FIX] Adds margin to Loader component
* [FEATURE] Adds form bindings for TagSet
* [MINOR] Makes icon sizes !important

## v1.0.4 - 2017-10-18

* [FIX] Fix error in TagInput

## v1.0.3 - 2017-10-11

* [FIX] Fixes typo, from .up-container to .dp-container
* [MINOR] Makes optional the 'name' prop on the redux Form component
* [FEATURE] Adds style compilation

## v1.0.2 - 2017-10-05

* [TESTS] Increases test coverage
* [MINOR] Fixes margins on lists

## v1.0.1 - 2017-10-03

* [FIX] Removes missing styleguide import 

## v1.0.0 - 2017-10-03

* [TESTS] Adds travis CI
* [TESTS] Adds npm run test with watcher or -- --coverage option
* [TESTS] Adds Snapshots on Components
* [MINOR] Allows nodes in Select option to allow jsx
* [FEATURE] Adds redux-forms integration
* [MINOR] Removes kss styleguide
* [FIX] Removes deprecated e.keyCode in favor of e.key

## v0.5.19 - 2017-09-27

* [MINOR] Improves DatePicker by using moment, parse previous value
* [MINOR] Opens calendar on focus on DatePicker

## v0.5.18 - 2017-09-26

* [MINOR] Improves DatePicker, adds focus() fix lowercase months / days
* [FIX] Fixes missing properties passed to Input

## v0.5.17 - 2017-09-25

* [FIX] Fixes checked checkboxes
* [MINOR] Fixes minor styling issues

## v0.5.16 - 2017-09-18

* [MINOR] Fixes missing disabled property on ConfirmButton
* [MINOR] Fixes value type on Select

## v0.5.15 - 2017-09-15

* [MINOR] Update style on Modal

## v0.5.14 - 2017-09-14

* [FEATURE] Adds Loader component
* [FEATURE] Adds Container component
* [FEATURE] Adds Section component
* [FEATURE] Adds Forms/Group component
* [FEATURE] Adds Forms/Textarea component
* [MINOR] Adds "controls" and "underline" props to Common/Heading component
* [MINOR] Adds "name" prop to Forms/TagSet component
* [MINOR] Adds "onClose" prop to Alert component

## v0.5.13 - 2017-09-08

* [MINOR] Adds main without apps style for DeskPRO main app
* [MINOR] Improves Modal

## v0.5.12 - 2017-09-07

* [MINOR] Adds semantic-ui css required by deskproapp-boilerplate-react

## v0.5.11 - 2017-09-07

* [MINOR] Adds deskproapp-boilerplate-react styles

## v0.5.10 - 2017-08-03

* [FEATURE] Adds existing status for Checkboxes

## v0.5.9 - 2017-08-02

* [FEATURE] Adds button loading state

## v0.5.8 - 2017-08-01

* [FIX] Fix extra onChange in Tabs

## v0.5.7 - 2017-07-31

* [FIX] Missing dependency

## v0.5.6 - 2017-07-31

* [FEATURE] Adds AutoSuggest to TagInput

## v0.5.5 - 2017-07-24

* [MINOR] Fixes stories List Toggleable
* [MINOR] Adds Open/Close to CustomSelect
* [MINOR] Adds readOnly to Checkbox

## v0.5.4 - 2017-07-21

* [FEATURE] Adds Alert component
* [FEATURE] Adds Badges/TextBadge component
* [FEATURE] Adds Badges/CircleBadge component
* [FEATURE] Adds Badges/IconBadge component
* [FEATURE] Adds Cards/Card component
* [FEATURE] Adds Stars component
* [FEATURE] Adds Forms/Form component
* [MINOR] Updates the readme
* [MINOR] Adds lint:fix npm script
* [MINOR] Adds round button type
* [MINOR] Adds Button "shape" prop
* [MINOR] Adds Avatar "size" prop
* [MINOR] Remove useless parts from npm-package
* [FIX] Fixes error in Progress story

## v0.5.3 - 2017-07-20

* [FEATURE] Adds DateBadge component
* [MINOR] Adds docs for dateToMonth() util
* [MINOR] Uses Scrollbar component in CustomSelect component
* [MINOR] Improves Progress story
* [FIX] Fix TagSet PropTypes
* [FIX] Fix add tag on enter

## v0.5.2 - 2017-07-19

* [MINOR] Adds css and dom utilities
* [FIX] Fix design issue and waring on CustomSelect

## v0.5.1 - 2017-07-19

* [FEATURE] Adds DropdownButton component
* [FEATURE] Adds Progress component
* [FEATURE] Adds ProgressButton component
* [FEATURE] Adds TranslateButton component and numberRandom() util
* [FEATURE] Adds Tabs component
* [FEATURE] Adds CustomSelect Component
* [MINOR] Adds z-index to popper
* [MINOR] Adds "square" button type prop value
* [MINOR] Moves tests for search components into "Search" story
* [MINOR] Update dependencies
* [FIX] Fixes button with icon test
* [FIX] Fix warning on ConfirmButton
* [FIX] Fix eslint errors on generator templates

## v0.5.0 - 2017-07-18

* [FEATURE] Adds component code generator
* [FEATURE] Adds SelectableList component
* [FEATURE] Adds arrow key functionality to SearchButton
* [FEATURE] Adds the Highlighter component
* [FEATURE] Adds SplitButton component
* [MINOR] Renames string utility functions
* [MINOR] Adds util functions objectForEach() and objectMap()
* [MINOR] Fixes linting errors
* [MINOR] Updates SearchButton docs with complete example
* [MINOR] Adds story for button with icon
* [MINOR] Adds util props/propsHasChildType()
* [MINOR] Adds Button props "size" and "type"
* [MINOR] Switch Label and Tag to PureComponents
* [BREAKING CHANGE] Adds Components/Buttons namespace
* [BREAKING CHANGE] Update dependency to React 15.6

## v0.4.6 - 2017-07-14

* [MINOR] Adds utility functions
* [MINOR] Adds Input iconRight
* [MINOR] Adds Input getValue & setValue
* [FEATURE] Adds TagSet Component
* [FEATURE] Adds Datepicker component

## v0.4.5 - 2017-07-13

* [MINOR] Adds stopPropagation to Radio and Checkbox

## v0.4.4 - 2017-07-13

* [FEATURE] Adds SearchButton component
* [FEATURE] Adds SearchSelect component
* [MINOR] Move utils to /src
* [MINOR] Adds docs for utility functions

## v0.4.3 - 2017-07-13

* [MINOR] Adds radio to storybook
* [MINOR] Adds link to github repository to npm package
* [MINOR] Adds _zindex.scss

## v0.4.2 - 2017-07-12

* [MINOR] Tweeks Popper performance
* [MINOR] Improve storybook hierarchy
* [MINOR] Updates Column styles
* [MINOR] Restructures the src/styles directory
* [FEATURE] Adds Urgency component
* [FEATURE] Adds Forms/HiddenFields component
* [FEATURE] Adds Forms/SearchInline component
* [FEATURE] Adds Popper arrow prop
* [FEATURE] Adds .dp-button--icon
* [FEATURE] Adds SearchSubmit component
* [FEATURE] Adds Forms/Radio component

## v0.4.1 - 2017-07-11

* [MINOR] Rename story fixture scripts
* [MINOR] Cleanup column story code
* [FEATURE] Adds PopperIcon
* [FEATURE] Adds Count component
* [MINOR] Minor tweak to Count component
* [MINOR] Removes Count value attribute
* [MINOR] Adds positions to drawer item
* [MINOR] Handling Count components in Columns/Item component
* [MINOR] Improves Column story
* [MINOR] Adds missing doc image

## v0.4.0 - 2017-07-10

* [IMPROVEMENT] Rename Label to Tag to avoid confusion
* [MINOR] Update Popper styles
* [MINOR] Adds Popper close on click outside
* [FEATURE] Adds Scrollbar component
* [FEATURE] Adds FilterPopper
* [INTERNAL] Adds objectKeyFilter
* [INTERNAL] Adds pre-commit hook on lint:js
* [MINOR] Doc updates
* [MINOR] Drawer works without Heading

## v0.3.5 - 2017-07-06

* [FEATURE] Adds QueryableList whereName @none value
* [FEATURE] Adds ToggleableList whenType prop
* [MINOR] Fix padding in select input

## v0.3.4 - 2017-07-06

* [FEATURE] QueryableList and ListElementGroup components
* [MINOR] Rename ListToggleable to ToggleableList
* [MINOR] Fix padding in select dropdown

## v0.3.3 - 2017-07-04

* [MINOR] Pass all props to LabelInput

## v0.3.2 - 2017-07-04

* [MINOR] Adds style to heading count
* [FEATURE] Allow to force editable on LabelInput

## v0.3.1 - 2017-07-04

* [FIX] Fix error on Labels

## v0.3.0 - 2017-07-04

* [FEATURE] Adds ListToggleable
* [FEATURE] Adds Icons
* [FEATURE] Adds documentation
* [FEATURE] Adds Avatar
* [FEATURE] Adds Heading

## v0.2.9 - 2017-06-30

* [FIX] Rename storybook scripts

## v0.2.8 - 2017-06-30

* [FIX] Fix package-lock

## v0.2.7 - 2017-06-30

* [FEATURE] Adds publication of storybook to GitHub pages

## v0.2.6 - 2017-06-30

* [FIX] Remove missing LabelSet, adds package-lock.json

## v0.2.5 - 2017-06-30

* [FIX] Adds missing .npmignore

## v0.2.4 - 2017-06-30

* [FIX] Publish to npm

## v0.2.3 - 2017-06-30

* [FIX] Use jsx extension on files containing JSX code

## v0.2.2 - 2017-06-30

* [FEATURE] Adds Popper and Portal

## v0.2.1 - 2017-06-30

* [FIX] Remove compiled assets from repository

## v0.2.0 - 2017-06-29

* [FEATURE] Namespace components

## v0.1.8 - 2017-06-28

* [FEATURE] Adds confirm buttons

## v0.1.7 - 2017-06-22

* [FEATURE] Adds checkbox and multiple select

## v0.1.6 - 2017-06-20

* [FIX] Fix Select onChange
* [MINOR] Fix design on Label Input when empty
* [MINOR] Fix select design when style overridden

## v0.1.5 - 2017-06-15

* [FEATURE] Adds label input to update a set of labels

## v0.1.4 - 2017-06-14

* [FIX] Use border-box box-sizing on all elements

## v0.1.3 - 2017-06-14

* [FEATURE] Adds prefix / suffix to inputs

## v0.1.2 - 2017-06-13

* [FEATURE] Adds icon to inputs
* [FIX] Fix eventListener on Modal
* use border-box on modal buttons

## v0.1.1 - 2017-06-13

* [FEATURE] Adds Modal dialog

## v0.1.0 - 2017-06-11

* Initial public release
