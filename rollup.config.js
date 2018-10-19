import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
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
    input:  './src/utils/index.js',
    output: {
      file:    'dist/utils.js',
      format:  'umd',
      name:    'reactComponentsUtils',
      globals: {
        react:       'React',
        'react-dom': 'ReactDOM'
      }
    },
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
      scss({
        importer: tildeImporter,
        output:   'dist/main.css'
      })
    ]
  }
];
