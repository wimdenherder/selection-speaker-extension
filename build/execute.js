/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/dompurify@2.4.3/node_modules/dompurify/dist/purify.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/dompurify@2.4.3/node_modules/dompurify/dist/purify.js ***!
  \**********************************************************************************/
/***/ (function(module) {

/*! @license DOMPurify 2.4.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.3/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.3';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                value = trustedTypesPolicy.createHTML(value);
                break;

              case 'TrustedScriptURL':
                value = trustedTypesPolicy.createScriptURL(value);
                break;
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/.pnpm/html-to-md@0.8.3/node_modules/html-to-md/dist/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/html-to-md@0.8.3/node_modules/html-to-md/dist/index.js ***!
  \***********************************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=45)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(9),i=r(12),a=r(6),c=r(2),u=function(){function t(t,e,r){var n=void 0===r?{}:r,o=n.keepSpace,i=void 0!==o&&o,a=n.prevTagName,c=void 0===a?"":a,u=n.nextTagName,s=void 0===u?"":u,l=n.prevTagStr,p=void 0===l?"":l,f=n.nextTagStr,h=void 0===f?"":f,d=n.parentTag,_=void 0===d?"":d,y=n.isFirstSubTag,v=void 0===y||y,g=n.calcLeading,b=void 0!==g&&g,m=n.leadingSpace,O=void 0===m?"":m,T=n.layer,S=void 0===T?1:T,x=n.noWrap,j=void 0!==x&&x,w=n.match,P=void 0===w?null:w,M=n.indentSpace,C=void 0===M?"":M,N=n.language,E=void 0===N?"":N,L=n.count,k=void 0===L?1:L,A=n.tableColumnCount,V=void 0===A?0:A,W=n.noExtraLine,R=void 0!==W&&W,I=n.inTable,H=void 0!==I&&I;if(this.tagName=e,this.rawStr=t,this.parentTag=_,this.prevTagName=c,this.nextTagName=s,this.prevTagStr=p,this.nextTagStr=h,this.isFirstSubTag=v,this.calcLeading=b,this.leadingSpace=O,this.layer=S,this.noWrap=j,this.match=P,this.indentSpace=C,this.language=E,this.count=k,this.inTable=H,this.tableColumnCount=V,this.noExtraLine=R,this.keepSpace=i,!this.__detectStr__(t,this.tagName))return this.attrs={},void(this.innerHTML="");var q=this.__fetchTagAttrAndInnerHTML__(t),F=q.attr,G=q.innerHTML;this.attrs=F,this.innerHTML=G}return t.prototype.__detectStr__=function(t,e){if("<"!==t[0])return console.error("Not a valid tag, current tag name: ".concat(this.tagName,", tag content: ").concat(t)),!1;for(var r="",n=!1,o=1;o<t.length&&">"!==t[o];o++)!n&&/(\s|\/)/.test(t[o])&&(n=!0),n||(r+=t[o]);return r===e||(console.warn("Tag is not match tagName, tagName in str is "+r+", which tagName passed from parent is "+e),!1)},t.prototype.__fetchTagAttrAndInnerHTML__=function(t){for(var e="",r=1;r<t.length&&">"!==t[r];r++)e+=t[r];for(var o=t.slice(r+1),i="",a=-1,c=o.length-1;c>=0;c--)if((i=o[c]+i).startsWith("</")){i.startsWith("</"+this.tagName+">")&&(a=c);break}-1===a&&(0,n.isSelfClosing)(this.tagName)&&console.warn("There detect a self close tag, which name is:",this.tagName);var u=(0,n.getTagAttributes)(e);return this.tagName&&delete u[this.tagName],{attr:u,innerHTML:o.slice(0,a)}},t.prototype.__onlyLeadingSpace__=function(t){t=t.trim();for(var e=0;e<t.length;e++)if(t[e]!==i.SINGLE)return!1;return!0},t.prototype.__isEmpty__=function(t){return!this.keepSpace&&(""===t&&"td"!==this.tagName||this.calcLeading&&this.__onlyLeadingSpace__(t))},t.prototype.getValidSubTagName=function(t){return t},t.prototype.beforeParse=function(){var t=c.default.get().tagListener;if(t){var e=t(this.tagName,{parentTag:this.parentTag,prevTagName:this.prevTagName,nextTagName:this.nextTagName,isFirstSubTag:this.isFirstSubTag,attrs:this.attrs,innerHTML:this.innerHTML,language:this.language,match:this.match,isSelfClosing:!1}),r=e.attrs,n=e.language,o=e.match;this.attrs=r,"string"===typeof n&&(this.language=n),"undefined"!==typeof o&&(this.match=o)}return""},t.prototype.parseValidSubTag=function(t,e,r){return new((0,n.getTagConstructor)(e))(t,e,r).exec()},t.prototype.parseOnlyString=function(t,e,r){return new o.default(t,e,r).exec()},t.prototype.afterParsed=function(t){return t},t.prototype.slim=function(t){return this.keepSpace?t:t.trim()},t.prototype.beforeMergeSpace=function(t){return t},t.prototype.mergeSpace=function(t,e,r){return this.keepSpace&&"pre"!==this.tagName?t.endsWith("\n")?t:t+r.replace(/\n+/g,"\n"):e+t+r},t.prototype.afterMergeSpace=function(t){return t},t.prototype.beforeReturn=function(t){return t},t.prototype.exec=function(t,e){void 0===t&&(t=""),void 0===e&&(e="");for(var r=this.beforeParse(),o=(0,n.generateGetNextValidTag)(this.innerHTML),i=o(),c=i[0],u=i[1],s=null;""!==u;){var l=o(),p=l[0],f=l[1],h={parentTag:this.tagName,nextTagName:p,nextTagStr:f,prevTagName:s,prevTagStr:r,leadingSpace:this.leadingSpace,layer:this.layer,keepSpace:this.keepSpace,inTable:this.inTable},d=void 0;d=null!=c?this.parseValidSubTag(u,c,h):this.parseOnlyString(u,c,h);var _=this.getValidSubTagName(c);c=p,u=f,null==_&&this.__isEmpty__(d)||(s=_,this.isFirstSubTag=!1,r+=d)}return r=this.afterParsed(r),r=this.slim(r),this.__isEmpty__(r)?"":(r=this.beforeMergeSpace(r),!this.noExtraLine&&(0,a.default)(this.tagName)&&this.prevTagName&&!r.startsWith("\n")&&!(0,a.default)(this.prevTagName)&&this.parentTag&&(t="\n\n"),r=this.mergeSpace(r,t,e),this.noWrap&&!this.keepSpace&&(r=r.replace(/\s+/g," ")),r=this.afterMergeSpace(r),r=this.beforeReturn(r))},t}();e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shouldRenderRawInside=e.isIndependentTag=e.clearComment=e.getLanguage=e.getTableAlign=e.getTagAttributes=e.isSelfClosing=e.generateGetNextValidTag=e.getTagConstructor=e.getRealTagName=e.unescapeStr=e.extraEscape=void 0;var n=r(46);Object.defineProperty(e,"extraEscape",{enumerable:!0,get:function(){return n.extraEscape}}),Object.defineProperty(e,"unescapeStr",{enumerable:!0,get:function(){return n.unescapeStr}});var o=r(47);e.generateGetNextValidTag=o.default;var i=r(48);e.getTagConstructor=i.default;var a=r(11);e.isSelfClosing=a.default;var c=r(51);e.getTagAttributes=c.default;var u=r(52);e.getLanguage=u.default;var s=r(53);e.clearComment=s.default;var l=r(17);e.getRealTagName=l.default;var p=r(6);e.isIndependentTag=p.default;var f=r(54);e.getTableAlign=f.default;var h=r(55);e.shouldRenderRawInside=h.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=void 0===t?{}:t,r=e.skipTags,n=void 0===r?[]:r,o=e.emptyTags,i=void 0===o?[]:o,a=e.ignoreTags,c=void 0===a?[]:a,u=e.aliasTags,s=void 0===u?{}:u,l=e.renderCustomTags,p=void 0===l||l,f=e.tagListener,h=void 0===f?function(t,e){return e}:f;this.options={skipTags:n,emptyTags:i,ignoreTags:c,aliasTags:s,renderCustomTags:p,tagListener:h}}return t.prototype.get=function(){return this.options},t.prototype.clear=function(){this.options={}},t.prototype.set=function(t,e){var r=this;t&&"[object Object]"===Object.prototype.toString.call(t)&&Object.keys(t).forEach(function(n){e?r.options[n]=t[n]:function(t,e,r){if(!(r in t))return void(t[r]=e[r]);var n=Array.isArray(t[r]),o="[object Object]"===Object.prototype.toString.call(t[r]);t[r]=n?t[r].concat(e[r]):o?Object.assign(t[r],e[r]):e[r]}(r.options,t,n)})},t.prototype.reset=function(){this.options=JSON.parse(JSON.stringify(o)),this.options.tagListener=function(t,e){return e}},t}();var o={ignoreTags:["","style","head","!doctype","form","svg","noscript","script","meta"],skipTags:["div","html","body","nav","section","footer","main","aside","article","header"],emptyTags:[],aliasTags:{figure:"p",dl:"p",dd:"p",dt:"p",figcaption:"p"},renderCustomTags:!0},i=new n;i.reset(),e.default=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h1");var n=t.call(this,e,r)||this;return n.match="#",n}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+" "+t},e.prototype.exec=function(e,r){return e||(e="\n"),r||(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(2),i=function(){function t(t,e,r){var n=void 0===r?{}:r,o=n.parentTag,i=void 0===o?"":o,a=n.leadingSpace,c=void 0===a?"":a,u=n.layer,s=void 0===u?1:u,l=n.isFirstSubTag,p=void 0!==l&&l,f=n.inTable,h=void 0!==f&&f,d=n.match,_=void 0===d?null:d,y=n.prevTagName,v=void 0===y?"":y,g=n.nextTagName,b=void 0===g?"":g;if(this.tagName=e,this.rawStr=t,this.parentTag=i,this.isFirstSubTag=p,this.prevTagName=v,this.nextTagName=b,this.leadingSpace=c,this.layer=s,this.innerHTML="",this.match=_,this.inTable=h,this.__detectStr__(t,this.tagName)){var m=this.__fetchTagAttr__(t).attr;this.attrs=m}else this.attrs={}}return t.prototype.__detectStr__=function(t,e){if("<"!==t[0])return console.error("Not a valid tag, current tag name: ".concat(this.tagName,", tag content: ").concat(t)),!1;for(var r="",n=!1,o=1;o<t.length&&">"!==t[o];o++)!n&&/(\s|\/)/.test(t[o])&&(n=!0),n||(r+=t[o]);return r===e||(console.warn("Tag is not match tagName, tagName in str is "+r+", which tagName passed from parent is "+e),!1)},t.prototype.__fetchTagAttr__=function(t){for(var e="",r=1;r<t.length&&">"!==t[r];r++)e+=t[r];return{attr:(0,n.getTagAttributes)(e)}},t.prototype.beforeParse=function(){var t=o.default.get().tagListener;if(t){var e=t(this.tagName,{parentTag:this.parentTag,prevTagName:this.prevTagName,nextTagName:this.nextTagName,isFirstSubTag:this.isFirstSubTag,attrs:this.attrs,innerHTML:this.innerHTML,match:this.match,isSelfClosing:!0}),r=e.attrs,n=e.match;this.attrs=r,this.match=n}return""},t.prototype.beforeMergeSpace=function(t){return t},t.prototype.afterMergeSpace=function(t){return t},t.prototype.beforeReturn=function(t){return t},t.prototype.exec=function(t,e){void 0===t&&(t=""),void 0===e&&(e="");var r=this.beforeParse();return r=t+(r=this.beforeMergeSpace(r))+e,r=this.afterMergeSpace(r),r=this.beforeReturn(r)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.exec=function(){return""},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(17),o={html:!0,body:!0,p:!0,div:!0,pre:!0,section:!0,blockquote:!0,aside:!0,li:!0,ul:!0,ol:!0,form:!0,hr:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,dl:!0,dd:!0,dt:!0,br:!0};e.default=function(t){if(!t)return!1;var e=(0,n.default)(t);return!!e&&!!o[e]}},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.__EmptySelfClose__=e.__Empty__=void 0;var i=r(0),a=r(4),c=function(t){function e(e,r,n){return void 0===r&&(r="__empty__"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.slim=function(t){return t},e.prototype.parseValidSubTag=function(t,r,n){return new e(t,r,o({},n)).exec()},e.prototype.parseOnlyString=function(t,e,r){return t},e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(i.default);e.__Empty__=c;var u=function(t){function e(e,r){void 0===r&&(r="__emptyselfclose__");var n=t.call(this,e,r)||this;return n.tagName=r,n}return n(e,t),e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(a.default);e.__EmptySelfClose__=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.__SkipSelfClose__=e.__Skip__=void 0;var o=r(0),i=r(4),a=r(1),c=function(t){function e(e,r,n){void 0===r&&(r="__skip__");var o=t.call(this,e,r,n)||this;return o.noNeedWrap=["td","th"],o}return n(e,t),e.prototype.exec=function(){var e=(0,a.isIndependentTag)((0,a.getRealTagName)(this.tagName))&&(!this.parentTag||!this.noNeedWrap.includes(this.parentTag)),r=e?"\n":"",n=e?"\n":"";return t.prototype.exec.call(this,r,n)},e}(o.default);e.__Skip__=c;var u=function(t){function e(e,r,n){return void 0===r&&(r="__skipselfclose__"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(){return""},e}(i.default);e.__SkipSelfClose__=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(6),i=function(){function t(t,e,r){void 0===e&&(e="__nomatch__");var n=void 0===r?{}:r,o=n.keepSpace,i=void 0!==o&&o,a=n.prevTagName,c=void 0===a?"":a,u=n.nextTagName,s=void 0===u?"":u,l=n.parentTag,p=void 0===l?"":l,f=n.calcLeading,h=void 0!==f&&f,d=n.layer,_=void 0===d?1:d,y=n.leadingSpace,v=void 0===y?"":y,g=n.inTable,b=void 0!==g&&g;this.tagName=e,this.nextTagName=s,this.prevTagName=c,this.parentTag=p,this.keepSpace=i,this.calcLeading=h,this.leadingSpace=v,this.layer=_,this.rawStr=t,this.inTable=b}return t.prototype.slim=function(t){if(this.keepSpace)return t;var e=t.replace(/\s+/g," ");return(0,o.default)(this.prevTagName)&&(e=e.trimLeft()),(0,o.default)(this.nextTagName)&&(e=e.trimRight()),e},t.prototype.beforeReturn=function(t){if(this.keepSpace)return t;if(this.calcLeading)return this.leadingSpace+(0,n.extraEscape)(t);var e=(0,n.extraEscape)(t);return this.inTable&&(e=e.replace(/\|/g,"\\|")),e},t.prototype.exec=function(){var t=this.rawStr;return t=this.slim(t),t=this.beforeReturn(t)},t}();e.default=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.__NoMatchSelfClose__=e.__NoMatch__=void 0;var o=r(0),i=r(4),a=function(t){function e(e,r){return void 0===r&&(r="__nomatch__"),t.call(this,e,r)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return"<".concat(this.tagName,">").concat(t,"</").concat(this.tagName,">")},e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(o.default);e.__NoMatch__=a;var c=function(t){function e(e,r){return void 0===r&&(r="__nomatchselfclose__"),t.call(this,e,r)||this}return n(e,t),e.prototype.exec=function(){return"<".concat(this.tagName," />")},e}(i.default);e.__NoMatchSelfClose__=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={img:!0,hr:!0,input:!0,br:!0,meta:!0,link:!0,"!doctype":!0,base:!0,col:!0,area:!0,param:!0,object:!0,embed:!0,keygen:!0,source:!0};e.default=function(t){return null!=t&&!!n[t.toLowerCase()]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TRIPLE=e.DOUBLE=e.SINGLE=void 0;e.SINGLE="\u2608";e.DOUBLE="\u2608\u2608";e.TRIPLE="\u2608\u2608\u2608"},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="strong");var o=t.call(this,e,r,n)||this;return o.layer=1,o.match=o.match||"**",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),null!=this.match&&this.prevTagStr&&!this.prevTagStr.endsWith("\\"+this.match[0])&&this.prevTagStr.endsWith(this.match[0])&&(e=" "),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="del");var n=t.call(this,e,r)||this;return n.match=n.match||"~~",n}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="em");var o=t.call(this,e,r,n)||this;return o.match=o.match||"*",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),"strong"===this.parentTag&&this.nextTagStr&&(r=" "),null!=this.match&&this.prevTagStr&&!this.prevTagStr.endsWith("\\"+this.match)&&this.prevTagStr.endsWith(this.match)&&(e=" "),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="th");var o=t.call(this,e,r,n)||this;return o.tagName=r,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return t+"|"},e.prototype.parseValidSubTag=function(e,r,n){return"ul"===r||"ol"===r||"table"===r||"pre"===r?e.replace(/([\n\r])/g,""):t.prototype.parseValidSubTag.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2);e.default=function(t){if(!t)return t;var e=n.default.get().aliasTags;return null!=(null===e||void 0===e?void 0:e[t])?e[t]:t}},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="a"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e=this.attrs,r=e.href,n=e.title,o=r||"";return n?"[".concat(t,"](").concat(o,' "').concat(n,'")'):"[".concat(t,"](").concat(o,")")},e.prototype.parseOnlyString=function(e,r,n){return"tbody"===this.parentTag||"thead"===this.parentTag?e:t.prototype.parseOnlyString.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="b"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(13).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(6),a=r(0),c=r(1),u=function(t){function e(e,r,n){void 0===r&&(r="blockquote");var o=t.call(this,e,r,n)||this;return o.match=o.match||">",o.fillPerLine=o.fillPerLine.bind(o),o}return n(e,t),e.prototype.beforeMergeSpace=function(t){if(""===t.trim())return"";var e=this.match+" "+t;return this.calcLeading?this.leadingSpace+e:e},e.prototype.afterMergeSpace=function(t){for(var e=this,r=t.split("\n"),n=r.length-1;n>=0;n--)n<r.length-1&&">"===r[n].trim()&&">"===r[n+1].trim()&&r.splice(n,1);return(r=r.map(function(t){return""===t?"":e.fillPerLine(t)})).join("\n")},e.prototype.beforeReturn=function(t){return t.replace("\n\n","\n")},e.prototype.fillPerLine=function(t){var e=">";if(this.calcLeading&&(e=this.leadingSpace+">"),!t.startsWith(e)){var r=this.match+" "+t;return this.calcLeading?this.leadingSpace+r:r}return t},e.prototype.parseValidSubTag=function(t,e,r){var n;"blockquote"===e?n=new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{calcLeading:this.calcLeading,match:this.match+">",noExtraLine:!0})):n=new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{noExtraLine:!0}));var a=n.exec(),u="";this.calcLeading&&(u=this.leadingSpace);var s=(0,i.default)(r.prevTagName)&&"br"!==r.prevTagName,l=(0,i.default)(r.nextTagName)&&"br"!==r.nextTagName,p=(0,i.default)(e)&&"br"!==e;return this.isFirstSubTag?a.trimLeft().replace(u,""):p?(a=u+this.match+a,s||(a="\n"+a),!l&&r.nextTagStr&&r.nextTagStr.trim()&&(a+=this.match+"\n"),a):s?u+this.match+"\n"+a:a},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(a.default);e.default=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="b"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(t,e){return void 0===e&&(e="\n"),this.inTable?"":"  "+e},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1),c=function(t){function e(e,r,n){void 0===r&&(r="code");var o=t.call(this,e,r,n)||this;return o.match=null==o.match?"`":o.match,o.noWrap="`"===o.match,o.layer=1,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e,r;return""!==this.match&&"`"!==this.match?(e=this.match+" ",r=" "+this.match):(e=this.match,r=this.match),e+t+r},e.prototype.parseValidSubTag=function(t,e,r){return"pre"===e?new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{language:"",match:""})).exec("","\n"):new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{keepSpace:this.keepSpace,noWrap:this.noWrap})).exec("","")},e.prototype.parseOnlyString=function(t){if(""!==this.match&&t){var e=1;(t.startsWith("`")||t.endsWith("`"))&&(e=2,(t.startsWith("``")||t.endsWith("``"))&&(e=3)),this.match="`".repeat(e)}return(0,a.unescapeStr)(t)},e.prototype.slim=function(t){return this.keepSpace?t:t.trim()},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=c},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h1");var n=t.call(this,e,r)||this;return n.match="#",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h2");var n=t.call(this,e,r)||this;return n.match="##",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h3");var n=t.call(this,e,r)||this;return n.match="###",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h4");var n=t.call(this,e,r)||this;return n.match="####",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h5");var n=t.call(this,e,r)||this;return n.match="#####",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h6");var n=t.call(this,e,r)||this;return n.match="######",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="hr");var o=t.call(this,e,r,n)||this;return o.match="---",o}return n(e,t),e.prototype.beforeMergeSpace=function(){return this.leadingSpace+this.match},e.prototype.beforeReturn=function(t){return t.replace(/^(?:\n\s*)/,"\n\n").replace(/(?:\n\s*)$/,"\n\n"),t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="i"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(15).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="img"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(){var t=this.attrs,e=t.src,r=t.alt;return r||(r=""),e||(e=""),"![".concat(r,"](").concat(e,")")},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="input"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(){var t=this.attrs,e=t.type,r=t.checked;return"li"===this.parentTag&&"checkbox"===e?null!=r?"[x] ":"[ ] ":""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1),c=r(6),u=r(12),s=function(t){function e(e,r,n){void 0===r&&(r="li");var o=t.call(this,e,r,n)||this;return o.match=o.match||"*",o.extraGap="",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.extraGap+this.leadingSpace+this.match+" "+t},e.prototype.__calcNextLeading__=function(){var t,e,r;return 1===(null===(t=this.match)||void 0===t?void 0:t.length)?u.DOUBLE:2===(null===(e=this.match)||void 0===e?void 0:e.length)?u.TRIPLE:3===(null===(r=this.match)||void 0===r?void 0:r.length)?u.DOUBLE:u.TRIPLE+u.DOUBLE},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,a.getTagConstructor)(e),i=this.__calcNextLeading__(),c=new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace+i,layer:this.layer+1})).exec();return"p"===e&&(this.extraGap="\n"),this.isFirstSubTag?c.trimLeft().replace(this.leadingSpace+i,""):c},e.prototype.parseOnlyString=function(e,r,n){var i=!1;(0,c.default)(n.prevTagName)&&(i=!0);var a=this.__calcNextLeading__(),u=t.prototype.parseOnlyString.call(this,e,r,o(o({},n),{calcLeading:i,leadingSpace:this.leadingSpace+a,layer:this.layer+1}));return this.isFirstSubTag?u.replace(this.leadingSpace+a,""):u},e.prototype.beforeReturn=function(e){return t.prototype.beforeReturn.call(this,e)},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(5),c=r(1),u=r(2),s=function(t){function e(e,r,n){void 0===r&&(r="ol");var o,i=this;i=t.call(this,e,r,n)||this;var a=parseInt(null===(o=null===i||void 0===i?void 0:i.attrs)||void 0===o?void 0:o.start,10);return i.count=isNaN(a)?1:a,i}return n(e,t),e.prototype.__isValidSubTag__=function(t){if(!t)return!1;var e=u.default.get().aliasTags,r=(0,c.getTagConstructor)(t);return"li"===t||"li"==(null===e||void 0===e?void 0:e[t])||r===a.default},e.prototype.getValidSubTagName=function(t){return t&&this.__isValidSubTag__(t)?t:null},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,c.getTagConstructor)(e);if(this.__isValidSubTag__(e)){var i=this.count+".",a=new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace,layer:this.layer,match:i}));return this.count++,a.exec("","\n")}return console.error("Should not have tags except <li> inside ol, current tag is "+e+", current tagStr is"+t),""},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="p"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.calcLeading?this.leadingSpace+t:t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),this.prevTagName||!this.prevTagStr||this.prevTagStr.endsWith("\n")||(e="\n\n"),this.nextTagName||!this.nextTagStr||this.nextTagStr.startsWith("\n")||(r="\n\n"),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(7),c=r(1),u=r(12),s=function(t){function e(e,r,n){void 0===r&&(r="pre");var o=t.call(this,e,r,n)||this;return o.indentSpace=u.DOUBLE+u.DOUBLE,o.isIndent=o.innerHTML.includes("```"),o.match=o.isIndent?"":"```",o.language=o.language||(0,c.getLanguage)(e),o.keepSpace=!0,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e=this.isIndent||"code"===this.parentTag?"":this.match+this.language+"\n",r="";return t.endsWith("\n")||(r="\n"),e+t+(this.isIndent||"code"===this.parentTag?"":r+this.match)},e.prototype.fillPerLine=function(t){var e="";return this.calcLeading&&(e=this.leadingSpace),this.isIndent?e+this.indentSpace+t:e+t},e.prototype.afterMergeSpace=function(t){var e=this,r=t.split("\n");return(r=r.map(function(t){return""===t?"":e.fillPerLine(t)})).join("\n")},e.prototype.parseValidSubTag=function(t,e,r){if("code"===e)return new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{match:"",language:this.language,keepSpace:!0})).exec("","");return((0,c.isSelfClosing)(e)?new a.__EmptySelfClose__(t,e):new a.__Empty__(t,e,o(o({},r),{keepSpace:!0}))).exec()},e.prototype.parseOnlyString=function(t){return t},e.prototype.slim=function(t){return t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){return void 0===r&&(r="s"),t.call(this,e,r)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(14).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="span"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1);var c=function(t){function e(e,r,n){void 0===r&&(r="table");var o=t.call(this,e,r,n)||this;return o.exist_thead=!1,o.exist_tbody=!1,o.empty_tbody=!0,o.tableColumnCount=function(t){for(var e="",r=0;r<t.length&&!e.endsWith("</tr>");r++)e+=t[r];return Math.max(e.split("</td>").length-1,e.split("</th>").length-1)}(o.innerHTML),o}return n(e,t),e.prototype.parseValidSubTag=function(t,e,r){return"thead"===e&&(this.exist_thead=!0),"tbody"===e&&(this.exist_tbody=!0,this.empty_tbody=!1),"tr"===e&&(this.empty_tbody=!1),new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{tableColumnCount:this.tableColumnCount,inTable:!0})).exec("","\n")},e.prototype.parseOnlyString=function(){return""},e.prototype.beforeReturn=function(t){if(!this.exist_thead&&!this.exist_tbody&&this.empty_tbody)return"";if(0===this.tableColumnCount)return"";if(!this.exist_tbody){for(var e=(0,a.getTableAlign)(this.innerHTML,this.tableColumnCount),r="|",n=0;n<e.length;n++)r+=e[n];t=this.empty_tbody?t+r+"\n":r+""+t}return this.exist_thead||(t="\n"+"|".repeat(this.tableColumnCount+1)+(t.startsWith("\n")?"":"\n")+t),t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=c},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(1),a=function(t){function e(e,r,n){return void 0===r&&(r="tbody"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){for(var e=(0,i.getTableAlign)(this.innerHTML,this.tableColumnCount),r="|",n=0;n<e.length;n++)r+=e[n];return r+"\n"+t},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(o.default);e.default=a},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="td"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.parseValidSubTag=function(e,r,n){return"ul"===r||"ol"===r||"table"===r||"pre"===r?e.replace(/([\n\r])/g,""):t.prototype.parseValidSubTag.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(16).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="thead"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(5),a=r(1),c=r(2),u=function(t){function e(e,r,n){return void 0===r&&(r="tr"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return"|"+t},e.prototype.parseValidSubTag=function(t,e,r){var n=c.default.get().aliasTags,o=(0,a.getTagConstructor)(e);return"td"!==e&&"th"!==e&&"td"!==(null===n||void 0===n?void 0:n[e])&&"th"!==(null===n||void 0===n?void 0:n[e])&&o!==i.default?(console.error("Should not have tags except <td> or <th> inside <tr>, current tag is ".concat(e," have been ignore.")),""):new o(t,e,r).exec("","")},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(o.default);e.default=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(5),c=r(1),u=r(2).default.get().aliasTags,s=function(t){function e(e,r,n){return void 0===r&&(r="ul"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.__isValidSubTag__=function(t){if(!t)return!1;var e=(0,c.getTagConstructor)(t);return"li"===t||"li"==(null===u||void 0===u?void 0:u[t])||e===a.default},e.prototype.getValidSubTagName=function(t){return t&&this.__isValidSubTag__(t)?t:null},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,c.getTagConstructor)(e);return this.__isValidSubTag__(e)?new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace,layer:this.layer,match:"*"})).exec("","\n"):(console.error("Should not have tags except <li> inside ul, current tag is "+e+", current tagStr is"+t),"")},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(9);e.default=function(t,e,r){void 0===r&&(r=!1),o.default.reset(),o.default.set(e,r),t=(t=(t=(0,n.clearComment)(t)).trim()).replace(/(\r\n)/g,"").replace(/&nbsp;/g," ");for(var a=(0,n.generateGetNextValidTag)(t),c="",u=null,s=a(),l=s[0],p=s[1];""!==p;){if(null!=l){var f=new((0,n.getTagConstructor)(l))(p,l,{parentTag:null,prevTagName:u,prevTagStr:c}).exec(),h=(0,n.isIndependentTag)(u);!(0,n.isIndependentTag)(l)||h||c.endsWith("\n")?c+=f:c+="\n"+f}else c=(c+=new i.default(p,l).exec()).replace(/(?:\n\s*)$/,"\n");u=l;var d=a();l=d[0],p=d[1]}return function(t){return t=(t=(t=t.replace(/^\s+/,"")).replace(/\s+$/,"")).replace(/\u2608/g," ")}((0,n.unescapeStr)(c))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unescapeStr=e.extraEscape=void 0;var n={},o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;","\u201c":"&ldquo;","\u201d":"&rdquo;"};for(var i in o)n[o[i]]=i;var a=/&(?:amp|lt|gt|quot|#39|#x60|ldquo|rdquo);/g,c=RegExp(a.source),u=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];e.unescapeStr=function(t){return t=t&&c.test(t)?t.replace(a,function(t){return n[t]}):t},e.extraEscape=function(t){return u.reduce(function(t,e){return t.replace(e[0],e[1])},t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11);function o(t,e){for(var r="";e<t.length&&/[a-zA-Z0-9!-]/.test(t[e]);)r+=t[e++];return r.toLowerCase()}e.default=function(t){var e=0;return function(){var r="",i=null,a=0,c=null,u=!1;if(e>=t.length)return[i,r];for(var s=e;s<t.length;s++){if("<"===t[s]&&"/"!==t[s+1]){if(""!==r&&null==i&&!u)return e=s,[i,r];var l=o(t,s+1);null==i&&(i=l),i===l&&a++,(0,n.default)(i)&&(0===--a&&(u=!0),a<0&&console.warn("Tag ".concat(i," is abnormal")))}else if("<"===t[s]&&"/"===t[s+1]){if(null==i){console.warn("Tag is not integrity, current tagStr is ".concat(t.slice(e)));for(var p=s;p<t.length&&">"!==t[p];)p++;s=p;continue}i===(c=o(t,s+2))&&a--,a<=0&&(u=!0)}if(r+=t[s],">"===t[s]&&u)return e=s+1,[i,r];s===t.length-1&&i!==c&&(null!=c&&null!=i&&(r=r.replace("<".concat(i,">"),"").replace("</".concat(c,">"),"")),i=null)}return e=t.length,[i,r]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),o=r(11),i=r(49);e.default=function t(e){var a,c=n.default.get(),u=c.skipTags,s=c.emptyTags,l=c.ignoreTags,p=c.aliasTags,f=c.renderCustomTags,h=(0,o.default)(e);if(null===u||void 0===u?void 0:u.includes(e)){var d=r(8);return h?d.__SkipSelfClose__:d.__Skip__}if(null===s||void 0===s?void 0:s.includes(e)){var _=r(7);return h?_.__EmptySelfClose__:_.__Empty__}if(null===l||void 0===l?void 0:l.includes(e))return r(5).default;if(null!=(null===p||void 0===p?void 0:p[e]))return t(p[e]);var y=e.toLowerCase();if(!0!==f&&!(0,i.default)(y)){if(!1===f||"SKIP"===f)return d=r(8),h?d.__SkipSelfClose__:d.__Skip__;if("EMPTY"===f)return _=r(7),h?_.__EmptySelfClose__:_.__Empty__;if("IGNORE"===f)return r(5).default}try{a=r(50)("./".concat(e)).default}catch(v){a=h?r(10).__NoMatchSelfClose__:r(10).__NoMatch__}return a}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["!doctype","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","circle","cite","clipPath","code","col","colgroup","command","content","data","datalist","dd","defs","del","details","dfn","dialog","dir","div","dl","dt","element","ellipse","em","embed","fieldset","figcaption","figure","font","footer","foreignObject","form","frame","frameset","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","line","linearGradient","link","listing","main","map","mark","marquee","mask","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","path","pattern","picture","plaintext","polygon","polyline","pre","progress","q","radialGradient","rb","rbc","rect","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","stop","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tspan","tt","u","ul","var","video","wbr","xmp"];e.default=function(t){return"string"===typeof t&&n.includes(t.toLowerCase())}},function(t,e,r){var n={"./__Heading__":3,"./__Heading__.ts":3,"./__empty__":7,"./__empty__.ts":7,"./__ignore__":5,"./__ignore__.ts":5,"./__nomatch__":10,"./__nomatch__.ts":10,"./__rawString__":9,"./__rawString__.ts":9,"./__skip__":8,"./__skip__.ts":8,"./a":18,"./a.ts":18,"./b":19,"./b.ts":19,"./blockquote":20,"./blockquote.ts":20,"./br":21,"./br.ts":21,"./code":22,"./code.ts":22,"./del":14,"./del.ts":14,"./em":15,"./em.ts":15,"./h1":23,"./h1.ts":23,"./h2":24,"./h2.ts":24,"./h3":25,"./h3.ts":25,"./h4":26,"./h4.ts":26,"./h5":27,"./h5.ts":27,"./h6":28,"./h6.ts":28,"./hr":29,"./hr.ts":29,"./i":30,"./i.ts":30,"./img":31,"./img.ts":31,"./input":32,"./input.ts":32,"./li":33,"./li.ts":33,"./ol":34,"./ol.ts":34,"./p":35,"./p.ts":35,"./pre":36,"./pre.ts":36,"./s":37,"./s.ts":37,"./span":38,"./span.ts":38,"./strong":13,"./strong.ts":13,"./table":39,"./table.ts":39,"./tbody":40,"./tbody.ts":40,"./td":41,"./td.ts":41,"./th":16,"./th.ts":16,"./thead":42,"./thead.ts":42,"./tr":43,"./tr.ts":43,"./ul":44,"./ul.ts":44};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=50},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e={},r=!1,n="",o="",i=null,a=0;a<=t.length;a++){if(a===t.length||/\s/.test(t[a])){if(a===t.length||!r){var c=n.trim();"/"===c[c.length-1]&&(c=c.slice(0,c.length-1)),c&&(e[c]=o.trim()),n="",o=""}}else{if(/['"]/.test(t[a])&&(!i||t[a]===i)){(r=!r)&&(i=t[a]);continue}if("="===t[a]&&!r)continue}if(a===t.length)break;r?o+=t[a]:n+=t[a]}return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="javascript";e.default=function(t){var e=t.match(/<.*?class=".*?language-([^\s"]*)?.*".*>/);return e?e[1]||"":t.match(/<span.*?hljs-(comment|keyword|number|string|literal|built_in|function|title|bullet).*?<\/span>/)?n:""}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/<!--(?:[\s\S]*?)-->/g,"")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r={_default_:"---|",center:":---:|",left:":---|",right:"---:|",start:":---|",end:"---:|"},n=Array(e).fill(r._default_),o=t.match(/<(td|th)(.*?)>/g);return o?n=(n=o.slice(0,e)).map(function(t){var e=t.match(/align\s*=\s*['"]\s*(center|left|right|start|end)/),n=t.match(/text-align\s*:\s*(center|left|right|start|end)/);return e||n?e&&!n?r[e[1]]||r._default_:n?r[n[1]]||r._default_:void 0:r._default_}):n}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["th","td"]}]).default});

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

async function translate(text, source, target) {
  text = text.replace(/%/g,'procent');
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&hl=en-US&dt=qca&dt=t&dt=bd&dj=1&source=icon&sl=${source}&tl=${target}&q=${text}`);
  const json = await response.json();
  return json.sentences.map(x => x.trans).join(" ");
}


async function detectLanguage(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=nl&hl=nl&dt=t&dt=bd&dj=1&source=bubble&tk=200215.200215&q=${text}`;
  const response = await (await fetch(url)).json();
  return response.ld_result?.srclangs?.[0];
}

exports.translate = translate;
// exports.speak = speak;
exports.detectLanguage = detectLanguage;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/execute.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/.pnpm/dompurify@2.4.3/node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_to_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-to-md */ "./node_modules/.pnpm/html-to-md@0.8.3/node_modules/html-to-md/dist/index.js");
/* harmony import */ var html_to_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_to_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ "./src/language.js");




// Check given item against blacklist, return null if in blacklist
const blacklist = ["comment"];
function checkAgainstBlacklist(elem, level) {
  if (elem && elem != null) {
    const className = elem.className,
      id = elem.id;

    const isBlackListed = blacklist.map(item => {
      if ((typeof className === "string" && className.indexOf(item) >= 0)
        || (typeof id === "string" && id.indexOf(item) >= 0)
      ) {
        return true;
      }
    }).filter(item => item)[0];

    if (isBlackListed) {
      return null;
    }

    const parent = elem.parentElement;
    if (level > 0 && parent && !parent.isSameNode(document.body)) {
      return checkAgainstBlacklist(parent, --level);
    }
  }

  return elem;
}

let contentSelector;
function getContainer() {
  let selectedContainer;

  if (contentSelector && document.querySelector(contentSelector)) {
    selectedContainer = document.querySelector(contentSelector);
  } else if (document.head.querySelector("meta[name='articleBody'")) {
    selectedContainer = document.createElement("div");
    selectedContainer.innerHTML = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(document.head.querySelector("meta[name='articleBody'").getAttribute("content"));
  } else {
    const numWordsOnPage = document.body.innerText.match(/\S+/g).length;
    let ps = document.body.querySelectorAll("p");

    // Find the paragraphs with the most words in it
    let pWithMostWords = document.body,
      highestWordCount = 0;

    if (ps.length === 0) {
      ps = document.body.querySelectorAll("div");
    }

    ps.forEach(p => {
      if (checkAgainstBlacklist(p, 3) // Make sure it's not in our blacklist
        && p.offsetHeight !== 0) { //  Make sure it's visible on the regular page
        const myInnerText = p.innerText.match(/\S+/g);
        if (myInnerText) {
          const wordCount = myInnerText.length;
          if (wordCount > highestWordCount) {
            highestWordCount = wordCount;
            pWithMostWords = p;
          }
        }
      }

      // Remove elements in JR that were hidden on the original page
      if (p.offsetHeight === 0) {
        p.dataset.simpleDelete = true;
      }
    });

    // Keep selecting more generally until over 2/5th of the words on the page have been selected
    selectedContainer = pWithMostWords;
    let wordCountSelected = highestWordCount;

    while (wordCountSelected / numWordsOnPage < 0.4
      && selectedContainer != document.body
      && selectedContainer.parentElement.innerText) {
      selectedContainer = selectedContainer.parentElement;
      wordCountSelected = selectedContainer.innerText.match(/\S+/g).length;
    }

    // Make sure a single p tag is not selected
    if (selectedContainer.tagName === "P") {
      selectedContainer = selectedContainer.parentElement;
    }
  }

  return selectedContainer;
}

function getContentOfArticle() {
  let pageSelectedContainer = getContainer();

  const pattern1 = /<a\b[^>]*>(.*?)<\/a>/gi;
  pageSelectedContainer.innerHTML = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(pageSelectedContainer.innerHTML.replace(pattern1, ""));
  const pattern2 = new RegExp("<br/?>[ \r\n\s]*<br/?>", "g");
  pageSelectedContainer.innerHTML = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(pageSelectedContainer.innerHTML.replace(pattern2, "</p><p>"));

  let content = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(pageSelectedContainer.innerHTML);
  content = html_to_md__WEBPACK_IMPORTED_MODULE_1___default()(content);
  return content
    .replace(/\!\[.*?\n/g,'')
    .replace(/\<.*?\>/g,'')
    .replace(/\#+\s+/g,'')
}

function getSelectionText() {
  var text = "";
  var activeEl = document.activeElement;
  var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    (activeElTagName == "textarea") || (activeElTagName == "input" &&
    /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
    (typeof activeEl.selectionStart == "number")
  ) {
      text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
  } else if (window.getSelection) {
      text = window.getSelection().toString();
  }
  return text;
}

async function translateBiggerTexts(text, source, target) {
  const maxSize = 2000;
  const result = [];
  for(let i=0;i<text.length;i+=maxSize) {
    const translation = await (0,_language__WEBPACK_IMPORTED_MODULE_2__.translate)(text.slice(i, i+maxSize), source, target);
    console.log('index ' + i + ' translation: ' + translation);
    result.push(translation);
  }
  return result.join(" ");
}


// synth is loaded in content-script to make it globally available in order to be able to cancel speech
function speak(text, language) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices().find(voice => voice.lang.split('-')[0].toLowerCase() === language.split('-')[0].toLowerCase());
  synth.speak(utterance);
}

async function speakSelection() {
  if(synth?.speaking)
    synth.cancel();
  let text = getSelectionText() || getContentOfArticle();
  if(!text) return window.alert('Please select some text first.');

  const detectedLanguage = await (0,_language__WEBPACK_IMPORTED_MODULE_2__.detectLanguage)(text);
  const lang = window.prompt("Enter language code (e.g. nl = netherlands, en = english). It will be translated automatically. ", detectedLanguage);
  if(!lang) return console.log('No language code entered.');

  if(lang !== detectedLanguage)
    text = await translateBiggerTexts(text, 'auto', lang);
  
  await speak(text, lang);
}

speakSelection();
})();

/******/ })()
;
//# sourceMappingURL=execute.js.map