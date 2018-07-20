import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import withPropsCombinations, { setDefaults } from 'react-storybook-addon-props-combinations'

setAddon(infoAddon);
setAddon(withPropsCombinations)
setDefaults({
  // overwrite global defaults here
});

function loadStories() {
  require('../tests/storybook/index.js');
}

configure(loadStories, module);
