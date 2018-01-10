'use strict';

// Requirements
const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

function compileSass(options = {}) {
  // set default options
  const sassOptions = Object.assign({
    style: 'expanded'
  }, options);

  // render the result
  const result = sass.renderSync({
    file:         sassOptions.src,
    outputStyle:  sassOptions.style,
    includePaths: ['node_modules', '.']
  });

  // write the result to file
  mkdirp(getDirName(options.dest), (err) => {
    if (!err) {
      fs.writeFile(sassOptions.dest, result.css, (writeErr) => {
        if (writeErr) throw writeErr;
      });
    }
  });

  // log successful compilation to terminal
  console.log(`${sassOptions.src} -> ${sassOptions.dest}`); // eslint-disable-line no-console
}

// Expanded
compileSass({
  src:  'src/styles/main.scss',
  dest: 'lib/css/deskpro_react-components.css'
});

compileSass({
  src:  'src/styles/main.scss',
  dest: 'lib/css/deskpro_react-components_no_apps.css'
});

// Minified
compileSass({
  src:   'src/styles/main.scss',
  dest:  'lib/css/deskpro_react-components.min.css',
  style: 'compressed'
});

compileSass({
  src:   'src/styles/main.scss',
  dest:  'lib/css/deskpro_react-components_no_apps.min.css',
  style: 'compressed'
});
