'use strict';

/**
 * This module is used to load the base KSS builder class needed by this builder
 * and to define any custom CLI options or extend any base class methods.
 *
 * Note: this module is optional. If a builder does not export a KssBuilderBase
 * sub-class as a module, then kss-node will assume the builder wants to use
 * the KssBuilderBaseHandlebars class.
 *
 * This file's name should follow standard node.js require() conventions. It
 * should either be named index.js or have its name set in the "main" property
 * of the builder's package.json. See
 * http://nodejs.org/api/modules.html#modules_folders_as_modules
 *
 * @module kss/builder/handlebars
 */

// We want to extend kss-node's Handlebars builder so we can add options that
// are used in our templates.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KssBuilderBaseHandlebars = void 0;

try {
  // In order for a builder to be "kss clone"-able, it must use the
  // require('kss/builder/path') syntax.
  KssBuilderBaseHandlebars = require('kss/builder/base/handlebars');
} catch (e) {
  // The above require() line will always work.
  //
  // Unless you are one of the developers of kss-node and are using a git clone
  // of kss-node where this code will not be inside a "node_modules/kss" folder
  // which would allow node.js to find it with require('kss/anything'), forcing
  // you to write a long-winded comment and catch the error and try again using
  // a relative path.
  KssBuilderBaseHandlebars = require('../base/handlebars');
}

/**
 * A kss-node builder that takes input files and builds a style guide using
 * Handlebars templates.
 */

var KssBuilderHandlebars = function (_KssBuilderBaseHandle) {
  _inherits(KssBuilderHandlebars, _KssBuilderBaseHandle);

  /**
   * Create a builder object.
   */
  function KssBuilderHandlebars() {
    _classCallCheck(this, KssBuilderHandlebars);

    // Then tell kss which Yargs-like options this builder adds.
    var _this = _possibleConstructorReturn(this, (KssBuilderHandlebars.__proto__ || Object.getPrototypeOf(KssBuilderHandlebars)).call(this));
    // First call the constructor of KssBuilderBaseHandlebars.


    _this.addOptionDefinitions({
      title: {
        group: 'Style guide:',
        string: true,
        multiple: false,
        describe: 'Title of the style guide',
        default: 'KSS Style Guide'
      }
    });
    return _this;
  }

  /**
   * Allow the builder to preform pre-build tasks or modify the KssStyleGuide
   * object.
   *
   * The method can be set by any KssBuilderBase sub-class to do any custom
   * tasks after the KssStyleGuide object is created and before the HTML style
   * guide is built.
   *
   * The builder could also take this opportunity to do tasks like special
   * handling of "custom" properties or running Sass or Bower tasks.
   *
   * The parent class sets up access for this builder to an object containing
   * the options of the requested build (as `this.options`), and the global
   * Handlebars object (as `this.Handlebars`).
   *
   * @param {KssStyleGuide} styleGuide The KSS style guide in object format.
   * @returns {Promise.<KssStyleGuide>} A `Promise` object resolving to a
   *   `KssStyleGuide` object.
   */


  _createClass(KssBuilderHandlebars, [{
    key: 'prepare',
    value: function prepare(styleGuide) {
      var _this2 = this;

      // First call the prepare() of the parent KssBuilderBaseHandlebars class.
      // Since it returns a Promise, we do our prep work in a then().
      return _get(KssBuilderHandlebars.prototype.__proto__ || Object.getPrototypeOf(KssBuilderHandlebars.prototype), 'prepare', this).call(this, styleGuide).then(function (styleGuide) {
        // Load this builder's extra Handlebars helpers.

        // Allow a builder user to override the {{section [reference]}} helper
        // with the --extend setting. Since a user's handlebars helpers are
        // loaded first, we need to check if this helper already exists.
        if (!_this2.Handlebars.helpers['section']) {
          /**
           * Returns a single section, found by its reference
           * @param  {String} reference The reference to search for.
           */
          _this2.Handlebars.registerHelper('section', function (reference, options) {
            var section = options.data.root.styleGuide.sections(reference);

            return section.toJSON ? options.fn(section.toJSON()) : options.inverse('');
          });
        }

        // Allow a builder user to override the {{eachSection [query]}} helper
        // with the --extend setting.
        if (!_this2.Handlebars.helpers['eachSection']) {
          /**
           * Loop over a section query. If a number is supplied, will convert into
           * a query for all children and descendants of that reference.
           * @param  {Mixed} query The section query
           */
          _this2.Handlebars.registerHelper('eachSection', function (query, options) {
            var styleGuide = options.data.root.styleGuide;

            if (!query.match(/\bx\b|\*/g)) {
              query = query + '.*';
            }
            var sections = styleGuide.sections(query);
            if (!sections.length) {
              return options.inverse('');
            }

            var l = sections.length;
            var buffer = '';
            for (var i = 0; i < l; i += 1) {
              buffer += options.fn(sections[i].toJSON());
            }

            return buffer;
          });
        }

        return Promise.resolve(styleGuide);
      });
    }
  }]);

  return KssBuilderHandlebars;
}(KssBuilderBaseHandlebars);

module.exports = KssBuilderHandlebars;