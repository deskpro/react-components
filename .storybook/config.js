import { configure } from '@kadira/storybook';

function loadStories() {
  require('../tests/storybook');
}

configure(loadStories, module);
