deskpro-components
==================
A react-based set of components for building DeskPRO apps.

* [Overview](#overview)
* [Components](#components)
  * [Common](#common)
  * [Forms](#forms)
  * [Columns](#columns)
* [Utilities](#utilities)
  * [Props](#props)
  * [Numbers](#numbers)
  * [Strings](#strings)
  * [Regexp](#regexp)
  * [Objects](#objects)
* [License](#license)


## Overview

A Storybook demo is available online at https://deskpro.github.io/deskpro-components.


## Components

* [Icon](docs/components/icon.md)  
  Renders an icon using the Font Awesome library.
* [Avatar](docs/components/avatar.md)  
  Renders an avatar image.
* [Urgency](docs/components/urgency.md)  
  Renders a message in a box which is colored to match an urgency level between 1 and 10.

### Common
* [Common/Heading](docs/components/common/heading.md)  
  A generic header element.
* [Common/Count](docs/components/common/count.md)  
  Renders a number with thousandths formatting.
* [Common/Subheading](docs/components/common/subheading.md)  
  Represents a sub heading element.
* [Common/Popper](docs/components/common/popper.md)  
  Uses absolute positioning to place elements relative to other elements.
* [Common/Portal](docs/components/common/portal.md)  
  Mounts its children in the document body.
* [Common/ToggleableList](docs/components/common/toggleable_list.md)  
  Changes prop values on its children by responding to events triggered by the children.
* [Common/QueryableList](docs/components/common/queryable_list.md)  
  An unordered list which can be filtered and reduced by query values.
* [Common/Scrollbar](docs/components/common/scrollbar.md)  
  Wraps children with styled scrollbars.

### Forms
* [Forms/HiddenFields](docs/components/forms/hidden_fields.md)  
  Wraps optional form fields which may be shown or hidden.
* [Forms/SearchInline](docs/components/forms/search_inline.md)  
  Renders an inline search input.
* [Forms/SearchSubmit](docs/components/forms/search_submit.md)  
  Renders a search input with submit button, where search results are displayed in a popper below the input.
* [Forms/SearchButton](docs/components/forms/search_button.md)  
  Renders a button which opens a search form.

### Columns
* [Columns/Column](docs/components/columns/column.md)  
  A navigation column containing expandable drawers.
* [Columns/Drawer](docs/components/columns/drawer.md)  
  An expandable drawer within a navigation column.
* [Columns/Item](docs/components/columns/item.md)  
  Standard drawer item which may contain an icon and number.


## Utilities

* [newid](docs/utils/newid.md)  
  Generates a unique id value.
* [noop](docs/utils/noop.md)  
  Provides an empty function to use as a default callback.

### Props
* [props/childrenComponentType](docs/utils/props/children_component_type.md)  
  Returns a function used in propTypes to validate that children are of a specific component type.

### Numbers
* [numbers/numberFormat](docs/utils/numbers/number_format.md)  
  Formats a number to include commas (or any separator) in the thousandths place.

### Strings
* [strings/toUpperFirst](docs/utils/strings/to_upper_first.md)  
  Upper cases the first letter in a string.
* [strings/htmlEscape](docs/utils/strings/html_escape.md)  
  Converts HTML special characters into entities.
* [strings/highlightWord](docs/utils/strings/highlight_word.md)  
  Wraps the given word in HTML tags where found in the given string.
* [strings/stringInterpolate](docs/utils/strings/string_interpolate.md)  
  Interpolate placeholder values found in the given string.

### Regexp
* [regexp/regexpEscape](docs/utils/regexp/regexp_escape.md)  
  Escapes the given string of any special regexp characters.

### Objects
* [objects/objectKeyFilter](docs/utils/objects/object_key_filter.md)  
  Performs a key comparison between two objects, deleting from the first where the keys exist in the second.


### License
The library is released under the BSD License. See [LICENSE](LICENSE) for more information.