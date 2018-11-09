import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';
import tildeImporter from 'node-sass-tilde-importer';

module.exports = [
  {
    input:  './src/Components/index.js',
    output: {
      file:      'dist/index.js',
      format:    'umd',
      name:      'reactComponents',
      sourcemap: true,
      globals:   {
        react:       'React',
        'react-dom': 'ReactDOM'
      },
      exports: 'named'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        include:   'node_modules/**',
        sourceMap: false
      }),
      copy({
        'src/styles/fonts/Courier10PitchBT-Bold.eot':   'dist/fonts/Courier10PitchBT-Bold.eot',
        'src/styles/fonts/Courier10PitchBT-Bold.svg':   'dist/fonts/Courier10PitchBT-Bold.svg',
        'src/styles/fonts/Courier10PitchBT-Bold.ttf':   'dist/fonts/Courier10PitchBT-Bold.ttf',
        'src/styles/fonts/Courier10PitchBT-Bold.woff':  'dist/fonts/Courier10PitchBT-Bold.woff',
        'src/styles/fonts/Courier10PitchBT-Roman.eot':  'dist/fonts/Courier10PitchBT-Roman.eot',
        'src/styles/fonts/Courier10PitchBT-Roman.ttf':  'dist/fonts/Courier10PitchBT-Roman.ttf',
        'src/styles/fonts/Courier10PitchBT-Roman.woff': 'dist/fonts/Courier10PitchBT-Roman.woff'
      })
    ],
    external: ['react', 'react-dom']
  },
  {
    input:  './src/utils/index.js',
    output: {
      file:    'dist/utils.js',
      format:  'umd',
      name:    'reactComponentsUtils',
      globals: {
        react:       'React',
        'react-dom': 'ReactDOM'
      },
      exports: 'named'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        include:   'node_modules/**',
        sourceMap: false
      }),
    ],
    external: ['react', 'react-dom']
  },
  {
    input:  './src/bindings/index.js',
    output: {
      file:    'dist/bindings.js',
      format:  'umd',
      name:    'reactComponentsBindings',
      globals: {
        react:       'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      commonjs({
        include:   'node_modules/**',
        sourceMap: false
      })
    ],
    external: ['react', 'react-dom']
  },
  {
    input:  './src/styles/main.scss',
    output: {
      file:   'dist/style.js',
      format: 'umd',
      name:   'reactComponentsStyle'
    },
    plugins: [
      sass({
        importer: tildeImporter,
        output:   'dist/main.css',
        options:  {
          data: '$dp-styles-font-path: \'./fonts/\';'
        }
      })
    ]
  }
];
