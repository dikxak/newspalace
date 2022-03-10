// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// For Transpiling & Polyfilling
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _generalJs = require("./general.js");
var _configJs = require("./config.js");
var _modelJs = require("../js/model.js");
var _newsShareViewJs = require("./views/newsShareView.js"); // Needed for news sharing(only constructor is used)
var _newsShareViewJsDefault = parcelHelpers.interopDefault(_newsShareViewJs);
var _newsSearchViewJs = require("./views/newsSearchView.js");
var _newsSearchViewJsDefault = parcelHelpers.interopDefault(_newsSearchViewJs);
var _newsCategoryViewJs = require("./views/newsCategoryView.js");
var _newsCategoryViewJsDefault = parcelHelpers.interopDefault(_newsCategoryViewJs);
var _topHeadlinesViewJs = require("./views/topHeadlinesView.js");
var _topHeadlinesViewJsDefault = parcelHelpers.interopDefault(_topHeadlinesViewJs);
var _searchHistoryView = require("./views/searchHistoryView");
var _searchHistoryViewDefault = parcelHelpers.interopDefault(_searchHistoryView);
var _localNewsView = require("./views/localNewsView");
var _localNewsViewDefault = parcelHelpers.interopDefault(_localNewsView);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _viewJs = require("./views/view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const controlNewsResults = async function() {
    _generalJs.removeActiveLinkClass();
    // render-spinner before results arrive
    _viewJsDefault.default.renderSpinner();
    try {
        const query = _newsSearchViewJsDefault.default.getQuery();
        if (!query) return;
        _modelJs.saveHistory(query);
        // await until the data is loaded.
        await _modelJs.loadNewsResults(query);
        // render the data to the view
        _viewJsDefault.default.renderHandler(_modelJs.getSearchResultsData());
    } catch (err) {
        console.error(err);
        _viewJsDefault.default.renderError();
    }
};
const controlSearchHistory = async function(element) {
    _searchHistoryViewDefault.default.renderSpinner();
    await _generalJs.simulateLoading(0.25);
    if (element && !_modelJs.appData.search.queries.length) _searchHistoryViewDefault.default.renderError();
    if (element && _modelJs.appData.search.queries.length) _searchHistoryViewDefault.default.renderHandler(_modelJs.appData.search.queries, element.dataset.title, element.dataset.iconName);
};
const controlClearHistory = function(element) {
    _modelJs.clearSearchQueries();
    _searchHistoryViewDefault.default.update(_modelJs.appData.search.queries, element.dataset.title, element.dataset.iconName);
};
let controlNewsScroll = async function(element) {
    if (!element) return;
    if (_modelJs.appData.search.initialPageNum >= _configJs.RESULTS_PER_PAGE) return;
    let { scrollHeight  } = document.body;
    if (window.innerHeight >= scrollHeight) return;
    if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
        // Display loading spinner for 0.5 second
        element.classList.add('page-load');
        await _generalJs.simulateLoading(0.5);
        // Render other results
        _viewJsDefault.default.appendNewsResults(_modelJs.getSearchResultsData());
        // Hide the spinner
        element.classList.remove('page-load');
    }
};
const controlCategoryResults = async function(targetElement) {
    try {
        _viewJsDefault.default.renderSpinner();
        await _modelJs.loadCategoryResults(targetElement.dataset.category, targetElement.dataset.iconName);
        _viewJsDefault.default.renderHandler(_modelJs.getSearchResultsData(), _modelJs.appData.category.title, _modelJs.appData.category.iconName);
    } catch (err) {
        _viewJsDefault.default.renderError();
    }
};
const controlLocalNewsResults = async function(targetElement) {
    // render-spinner before results arrive
    _viewJsDefault.default.renderSpinner();
    const country = await _generalJs.getLatLng();
    _generalJs.removeActiveLinkClass();
    try {
        if (!country) return;
        // "await" until the data is loaded.
        await _modelJs.loadNewsResults(country, targetElement.dataset.title, targetElement.dataset.icon);
        // "render" the data to the view
        _viewJsDefault.default.renderHandler(_modelJs.getSearchResultsData(), targetElement.dataset.title, targetElement.dataset.icon);
    } catch (err) {
        console.error(err);
        _viewJsDefault.default.renderError();
    }
};
const controlBtnBookmark = function(element) {
    const id = element.closest('.news-content').querySelector('.news-title').textContent.trim();
    // Handling bookmark(save) button from saved news view / results view
    if (element.closest('.saved-searches-container')) {
        _modelJs.handleBookmarked(id);
        // Updating saved search view
        _bookmarksViewJsDefault.default.update(_modelJs.appData.bookmarks, 'saved searches', 'icon-search');
    } else {
        _modelJs.handleBookmark(id);
        const data = _modelJs.getSearchResultsDataBookmark();
        // Updating news results view (view === resultsView)
        _viewJsDefault.default.update(data, _modelJs.appData.category.title, _modelJs.appData.category.iconName);
    }
};
// Function to handle saved-search button
const controlBookmarks = async function(element) {
    _bookmarksViewJsDefault.default.renderSpinner();
    await _generalJs.simulateLoading(0.25);
    if (_modelJs.appData.bookmarks.length) _bookmarksViewJsDefault.default.renderHandler(_modelJs.appData.bookmarks, element.dataset.title, element.dataset.iconName);
    else _bookmarksViewJsDefault.default.renderError();
};
const controlPageLoad = function() {
    window.location.hash = '';
};
const initController = function() {
    _viewJsDefault.default.newsResultsScrollHandler(controlNewsScroll);
    _viewJsDefault.default.bookmarkClickHandler(controlBtnBookmark);
    _viewJsDefault.default.pageLoadHandler(controlPageLoad);
    _newsSearchViewJsDefault.default.submitHandler(controlNewsResults);
    _newsCategoryViewJsDefault.default.categoryClickHandler(controlCategoryResults);
    _topHeadlinesViewJsDefault.default.topHeadlinesClickHandler(controlCategoryResults);
    _searchHistoryViewDefault.default.searchHistoryClickHandler(controlSearchHistory);
    _searchHistoryViewDefault.default.clearSearchHistoryClickHandler(controlClearHistory);
    _generalJs.addActiveLinkClass();
    _localNewsViewDefault.default.localNewsClickHandler(controlLocalNewsResults);
    _bookmarksViewJsDefault.default.bookmarkClickHandler(controlBookmarks);
};
initController();

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./general.js":"1FZwQ","./config.js":"k5Hzs","../js/model.js":"Y4A21","./views/newsShareView.js":"lcoJh","./views/newsSearchView.js":"f0r3R","./views/newsCategoryView.js":"6LDKs","./views/topHeadlinesView.js":"54ci3","./views/searchHistoryView":"5OMXP","./views/localNewsView":"2E3DL","./views/bookmarksView.js":"4Lqzq","./views/view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
var $ = require('../internals/export');
var global = require('../internals/global');
var task = require('../internals/task');
var FORCED = !global.setImmediate || !global.clearImmediate;
// http://w3c.github.io/setImmediate/
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
}, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task.clear
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var setGlobal = require('../internals/set-global');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
    });
    else target = (global[TARGET] || {
    }).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        // extend global
        redefine(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/redefine":"1ZKnU","../internals/set-global":"ldqR5","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
(function() {
    return this;
})() || Function('return this')();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var call = require('../internals/function-call');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/function-call":"d7JlP","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has-own-property":"gC2Q5","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require('../internals/fails');
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({
    }, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require('../internals/fails');
module.exports = !fails(function() {
    var test = (function() {
    }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":"hL6D2"}],"7SuiS":[function(require,module,exports) {
'use strict';
var $propertyIsEnumerable = {
}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');
var Object = global.Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;

},{"../internals/global":"i8HOC","../internals/function-uncurry-this":"7GlkT","../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);
module.exports = NATIVE_BIND ? function(fn) {
    return fn && uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toString = uncurryThis({
}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"fOR0B":[function(require,module,exports) {
var global = require('../internals/global');
var TypeError = global.TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/global":"i8HOC"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var global = require('../internals/global');
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');
var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/global":"i8HOC","../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require('../internals/is-callable');
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function(argument) {
    return typeof argument == 'function';
};

},{}],"4aV4F":[function(require,module,exports) {
var global = require('../internals/global');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var Object = global.Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};

},{"../internals/global":"i8HOC","../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = uncurryThis({
}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require('../internals/native-symbol');
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"grUXC"}],"grUXC":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require('../internals/a-callable');
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir"}],"gOMir":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');
var TypeError = global.TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var global = require('../internals/global');
var String = global.String;
module.exports = function(argument) {
    try {
        return String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{"../internals/global":"i8HOC"}],"7MME2":[function(require,module,exports) {
var global = require('../internals/global');
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var TypeError = global.TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw TypeError("Can't convert object to primitive value");
};

},{"../internals/global":"i8HOC","../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require('../internals/global');
var shared = require('../internals/shared');
var hasOwn = require('../internals/has-own-property');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');
var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
        var description = 'Symbol.' + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/native-symbol":"grUXC","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {
    });
})('versions', []).push({
    version: '3.21.1',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {
});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/set-global":"ldqR5"}],"ldqR5":[function(require,module,exports) {
var global = require('../internals/global');
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');
var hasOwnProperty = uncurryThis({
}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var global = require('../internals/global');
var requireObjectCoercible = require('../internals/require-object-coercible');
var Object = global.Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return Object(requireObjectCoercible(argument));
};

},{"../internals/global":"i8HOC","../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1..toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {
    };
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');
var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/global":"i8HOC","../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {
    }, 'prototype', {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var String = global.String;
var TypeError = global.TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw TypeError(String(argument) + ' is not an object');
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"1ZKnU":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var setGlobal = require('../internals/set-global');
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) createNonEnumerableProperty(value, 'name', name);
        state = enforceInternalState(value);
        if (!state.source) state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
    if (O === global) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
    } else if (!unsafe) delete O[key];
    else if (!noTargetGet && O[key]) simple = true;
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
});

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/create-non-enumerable-property":"8CL42","../internals/set-global":"ldqR5","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF","../internals/function-name":"l6Kgd"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {
    });
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = uncurryThis(store.get);
    var wmhas = uncurryThis(store.has);
    var wmset = uncurryThis(store.set);
    set = function(it, metadata) {
        if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget(store, it) || {
        };
    };
    has = function(it) {
        return wmhas(store, it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {
        };
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/native-weak-map":"7LdJl","../internals/global":"i8HOC","../internals/function-uncurry-this":"7GlkT","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"7LdJl":[function(require,module,exports) {
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');
var inspectSource = require('../internals/inspect-source');
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn","../internals/inspect-source":"9jh7O"}],"eAjGz":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var hasOwn = require('../internals/has-own-property');
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {
}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require('../internals/has-own-property');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"gC2Q5","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/function-uncurry-this":"7GlkT","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/has-own-property":"gC2Q5","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-absolute-index":"5yh27","../internals/length-of-array-like":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require('../internals/to-length');
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {
};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var bind = require('../internals/function-bind-context');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var fails = require('../internals/fails');
var html = require('../internals/html');
var arraySlice = require('../internals/array-slice');
var createElement = require('../internals/document-create-element');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {
};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global.location;
} catch (error) {
}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), location.protocol + '//' + location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/function-apply":"148ka","../internals/function-bind-context":"7vpmS","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/fails":"hL6D2","../internals/html":"2pze4","../internals/array-slice":"RsFXo","../internals/document-create-element":"4bOHl","../internals/validate-arguments-length":"b9O3D","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require('../internals/function-bind-native');
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');
var NATIVE_BIND = require('../internals/function-bind-native');
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/a-callable":"gOMir","../internals/function-bind-native":"i16Dq"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');
module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require('../internals/function-uncurry-this');
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var global = require('../internals/global');
var TypeError = global.TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw TypeError('Not enough arguments');
    return passed;
};

},{"../internals/global":"i8HOC"}],"bzGah":[function(require,module,exports) {
var userAgent = require('../internals/engine-user-agent');
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require('../internals/classof-raw');
var global = require('../internals/global');
module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err1) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"1FZwQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSONData", ()=>getJSONData
);
parcelHelpers.export(exports, "simulateLoading", ()=>simulateLoading
);
parcelHelpers.export(exports, "addActiveLinkClass", ()=>addActiveLinkClass
);
parcelHelpers.export(exports, "removeActiveLinkClass", ()=>removeActiveLinkClass
);
parcelHelpers.export(exports, "getLatLng", ()=>getLatLng
);
var _config = require("./config");
// Function to remove active class from menu links
const removeActiveLinkClass = function() {
    const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
    menuLinks.forEach((link)=>{
        link.classList.remove('menu-link--active');
    });
    window.location.hash = '';
};
// Function to add active class in menu link
const addActiveLinkClass = function() {
    window.addEventListener('hashchange', function() {
        const id = window.location.hash;
        const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
        // Remove active class from all menu links
        menuLinks.forEach((link)=>{
            link.classList.remove('menu-link--active');
        });
        // Add active class to the one which had same hash as the window's hash
        menuLinks.forEach((link)=>{
            if (link.getAttribute('href') === id) link.classList.add('menu-link--active');
        });
    });
};
// If API request took more than defined time, it will return message.
const requestTimeout = function(sec) {
    return new Promise((_, reject)=>{
        setTimeout(function() {
            reject(new Error(`Requets took too long! Timeout after ${sec} seconds.`));
        }, sec * 1000);
    });
};
// For simulating the infinite scroll effect.
const simulateLoading = function(sec) {
    return new Promise((resolve, _)=>{
        setTimeout(resolve, sec * 1000);
    });
};
// Function to handle API request and get data.
const getJSONData = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            requestTimeout(_config.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
};
// Function to get latitude and longitute for local news load.
const getLatLng = async function() {
    let coords = [];
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(obj) {
                coords = [
                    obj.coords.latitude,
                    obj.coords.longitude
                ];
            }, function() {
                alert('Could not get your location :(');
            });
            const countryData = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords[0]}&longitude=${coords[1]}&localityLanguage=en`);
            const country = await countryData.json();
            return country.countryName;
        }
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "URL_DOMAIN", ()=>URL_DOMAIN
);
parcelHelpers.export(exports, "URL_QUERY", ()=>URL_QUERY
);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE
);
parcelHelpers.export(exports, "URL_CATEGORY", ()=>URL_CATEGORY
);
parcelHelpers.export(exports, "URL_TOP_HEADLINES", ()=>URL_TOP_HEADLINES
);
parcelHelpers.export(exports, "SEARCH_HEADING", ()=>SEARCH_HEADING
);
parcelHelpers.export(exports, "SEARCH_ICON", ()=>SEARCH_ICON
);
const API_KEY = 'b9796ac0a2404b8d8407e5972c861857';
const TIMEOUT_SEC = 10;
const RESULTS_PER_PAGE = 10;
const SEARCH_HEADING = 'stories';
const SEARCH_ICON = 'icon-earth';
// KEY-1 => 357dffae768847649c703b90457b302a
// KEY-2 => b9796ac0a2404b8d8407e5972c861857
// fetching news data for domains (e.g. cnn.com, bbc.com, techcrunch.com)
const URL_DOMAIN = function(query) {
    return `https://newsapi.org/v2/everything?domains=${query}.com&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};
// fetching news data for queries (e.g. elon musk, bitcoin, cryptocurrency)
const URL_QUERY = function(query) {
    return `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};
// fetching news data for category (e.g. sports, entertainment, business)
const URL_CATEGORY = function(category) {
    return `https://newsapi.org/v2/top-headlines?category=${category}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}
  `;
};
const URL_TOP_HEADLINES = function() {
    return `https://newsapi.org/v2/everything?domains=bbc.com,thenextweb.com,cnn.com,nytimes.com,timesofindia.com,forbes.com,spacex.com,nasa.com,techcrunc.com,indiatimes.com&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appData", ()=>appData
);
parcelHelpers.export(exports, "loadNewsResults", ()=>loadNewsResults
);
parcelHelpers.export(exports, "saveHistory", ()=>saveHistory
);
parcelHelpers.export(exports, "getSearchResultsData", ()=>getSearchResultsData
);
parcelHelpers.export(exports, "loadCategoryResults", ()=>loadCategoryResults
);
parcelHelpers.export(exports, "clearSearchQueries", ()=>clearSearchQueries
);
parcelHelpers.export(exports, "handleBookmark", ()=>handleBookmark
);
parcelHelpers.export(exports, "getSearchResultsDataBookmark", ()=>getSearchResultsDataBookmark
);
parcelHelpers.export(exports, "handleBookmarked", ()=>handleBookmarked
);
var _configJs = require("./config.js");
var _generalJs = require("./general.js");
// Stores all required data
const appData = {
    newsResults: [],
    search: {
        queries: [],
        pageNum: 0
    },
    category: {
        title: '',
        iconName: ''
    },
    bookmarks: []
};
// "async" function returns promise.
const loadNewsResults = async function(query, category = '', icon = '') {
    appData.category.title = category;
    appData.category.iconName = icon;
    // Initial promise value
    let newsData = new Promise(function(_, _) {
    });
    // Initializing pageNum for slicing array after user inputs query.
    appData.search.pageNum = 0;
    // Getting data from the API (either query or domain)
    // First check for domain input (cnn.com,bbc.com,techcrunch.com etc.)
    // Then if not available, send it as a query (e.g. elon musk, russia, ukraine etc.)
    try {
        newsData = await _generalJs.getJSONData(_configJs.URL_DOMAIN(query));
        if (newsData.articles.length !== 0) appData.newsResults = newsData.articles;
        else {
            newsData = await _generalJs.getJSONData(_configJs.URL_QUERY(query));
            appData.newsResults = newsData.articles;
        }
        setLocalStorage();
    } catch (err) {
        console.error(`💥💥 ${err}`);
        throw err;
    }
};
const saveHistory = function(query, title = '', iconName = '') {
    appData.category.title = title;
    appData.category.iconName = iconName;
    // Save unique history (!duplicate)
    if (appData.search.queries.length > 0) {
        if (appData.search.queries.some((el)=>el === query
        )) return;
        appData.search.queries.push(query);
    } else appData.search.queries.push(query);
};
// Loading results according to category
const loadCategoryResults = async function(category, icon) {
    appData.category.title = category;
    appData.category.iconName = icon;
    let newsData = new Promise(function(_, _) {
    });
    // Initializing pageNum for slicing array after user inputs query.
    appData.search.pageNum = 0;
    try {
        if (category === 'top stories') {
            newsData = await _generalJs.getJSONData(_configJs.URL_TOP_HEADLINES());
            appData.search.pageNum = 0;
        } else newsData = await _generalJs.getJSONData(_configJs.URL_CATEGORY(category));
        appData.newsResults = newsData.articles;
        setLocalStorage();
    } catch (err) {
        console.error(`💥💥 ${err}`);
        throw err;
    }
};
// Check if any of the loaded results is bookmarked
const checkIsBookmarked = function() {
    if (appData.bookmarks.length > 0) appData.bookmarks.forEach((el)=>{
        appData.newsResults.forEach((elm)=>{
            if (!elm.title) return;
            if (el.title.trim() === elm.title.trim()) {
                elm.bookmarked = true;
                return;
            }
        });
    });
};
const getSearchResultsData = function(page = appData.search.pageNum) {
    // Initialize the start as well as end index
    const startIndex = _configJs.RESULTS_PER_PAGE * page;
    const endIndex = _configJs.RESULTS_PER_PAGE * (page + 1);
    checkIsBookmarked();
    // Increase page number to display other results per scroll to bottom
    page++;
    appData.search.pageNum = page;
    // Return array with 10-10 values from different index ranges.
    return appData.newsResults.slice(startIndex, endIndex);
};
const getSearchResultsDataBookmark = function() {
    const startIndex = 0;
    const endIndex = _configJs.RESULTS_PER_PAGE * appData.search.pageNum;
    console.log(appData.search.pageNum);
    console.log(startIndex, endIndex);
    checkIsBookmarked();
    return appData.newsResults.slice(startIndex, endIndex);
};
const clearSearchQueries = function() {
    appData.search.queries = [];
    setLocalStorage();
};
const deleteBookmark = function(bookmarkedArticle) {
    bookmarkedArticle.bookmarked = false;
    const index = appData.bookmarks.findIndex((el)=>el.title.trim() === bookmarkedArticle.title.trim()
    );
    appData.bookmarks.splice(index, 1);
};
const addBookmark = function(bookmarkedArticle) {
    bookmarkedArticle.bookmarked = true;
    appData.bookmarks.push(bookmarkedArticle);
};
// Function to handle bookmark from news results page
const handleBookmark = function(id) {
    // Get which article(news) is bookmarked
    const bookmarkedArticle = appData.newsResults.find((elem)=>{
        return elem.title.trim() === id;
    });
    // Check if it is already bookmarked
    const isBookmarked = bookmarkedArticle.bookmarked || 0; // short-circuiting
    // If already bookmarked, unbookmark else bookmark
    if (isBookmarked) deleteBookmark(bookmarkedArticle);
    else addBookmark(bookmarkedArticle);
    setLocalStorage();
};
// Handle the bookmark from saved news page (i.e. already bookmarked items)
const handleBookmarked = function(id) {
    const bookmarkedArticle = appData.bookmarks.find((elem)=>{
        return elem.title.trim() === id;
    });
    deleteBookmark(bookmarkedArticle);
    setLocalStorage();
};
const setLocalStorage = function() {
    localStorage.setItem('bookmark', JSON.stringify(appData.bookmarks));
    localStorage.setItem('history', JSON.stringify(appData.search.queries));
};
const init = function() {
    const bookmarks = localStorage.getItem('bookmark');
    const histories = localStorage.getItem('history');
    if (!bookmarks || !histories) return;
    appData.bookmarks = JSON.parse(bookmarks);
    appData.search.queries = JSON.parse(histories);
};
init();

},{"./config.js":"k5Hzs","./general.js":"1FZwQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcoJh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NewsShareView {
    _parentElement = document.querySelector('.share-popup-container');
    _btnOpenModal = document.querySelector('.main-container');
    _overlay = document.querySelector('.overlay');
    _btnClose = document.querySelector('.close');
    _shareURL = '';
    _shareText = '';
    constructor(){
        this._showModalHandler();
        this._closeModalHandler();
        this._socialShareHandler();
    }
    _openModal(e) {
        const targetElement = e.target.closest('.btn--share');
        if (!targetElement) return;
        this._toggleModal();
        // Getting the news URL
        this._shareURL = `${targetElement.closest('.news-content').querySelector('.news-title').querySelector('a').getAttribute('href')}`;
        // Getting the news Heading
        this._shareText = `text=${targetElement.closest('.news-content').querySelector('.news-title').textContent.trim()}`;
    }
    _closeModal(e) {
        if (e.key === 'Escape') this._toggleModal();
    }
    _toggleModal() {
        this._parentElement.classList.toggle('hidden');
        this._overlay.classList.toggle('hidden');
    }
    _showModalHandler() {
        this._btnOpenModal.addEventListener('click', this._openModal.bind(this));
    }
    _closeModalHandler() {
        this._overlay.addEventListener('click', this._toggleModal.bind(this));
        this._btnClose.addEventListener('click', this._toggleModal.bind(this));
        window.addEventListener('keydown', this._closeModal.bind(this));
    }
    _socialShare(e) {
        let createURL = '';
        const targetElement = e.target.closest('.social-icon');
        if (!targetElement) return;
        if (targetElement.classList.contains('twitter')) {
            createURL = `https://twitter.com/intent/tweet?url=${this._shareURL}&${this._shareText}`;
            targetElement.setAttribute('href', createURL);
        }
        if (targetElement.classList.contains('whatsapp')) {
            createURL = `https://wa.me/?url=${this._shareURL}&${this._shareText}`;
            targetElement.setAttribute('href', createURL);
        }
        if (targetElement.classList.contains('telegram')) {
            createURL = `https://t.me/share/url?url=${this._shareURL}&${this._shareText}`;
            targetElement.setAttribute('href', createURL);
        }
        if (targetElement.classList.contains('copy')) {
            navigator.clipboard.writeText(this._shareURL);
            alert('Link copied 😊');
        }
    }
    _socialShareHandler() {
        this._parentElement.addEventListener('click', this._socialShare.bind(this));
    }
}
exports.default = new NewsShareView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0r3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NewsSearchView {
    _parentElement = document.querySelector('.search-form');
    getQuery() {
        const query = this._parentElement.querySelector('.search-field').value;
        this._clearInputFields();
        return query;
    }
    _clearInputFields() {
        this._parentElement.querySelector('.search-field').value = '';
    }
    submitHandler(controlHandler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            controlHandler();
        });
    }
}
exports.default = new NewsSearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LDKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
class NewsCategoryView extends _viewJs.View {
    _containerElement = document.querySelector('.menu-app');
    categoryClickHandler(handler) {
        this._containerElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.menu-link');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
}
exports.default = new NewsCategoryView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View
);
// TimeAgo npm package to format time in "time ago format"
var _javascriptTimeAgo = require("javascript-time-ago");
var _javascriptTimeAgoDefault = parcelHelpers.interopDefault(_javascriptTimeAgo);
var _enJson = require("javascript-time-ago/locale/en.json");
var _enJsonDefault = parcelHelpers.interopDefault(_enJson);
var _loadingSpinnerSvg = require("url:../../img/loading_spinner.svg");
var _loadingSpinnerSvgDefault = parcelHelpers.interopDefault(_loadingSpinnerSvg);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _loadingSpinnerSmallSvg = require("url:../../img/loading_spinner_small.svg");
var _loadingSpinnerSmallSvgDefault = parcelHelpers.interopDefault(_loadingSpinnerSmallSvg);
var _config = require("../config");
_javascriptTimeAgoDefault.default.addDefaultLocale(_enJsonDefault.default);
class View {
    _parentElement = document.querySelector('.main-container');
    _containerClassName1 = 'news-container';
    _containerClassName2 = 'news-results-container';
    _newsContainer = '';
    _loadingSpinner = '';
    _additionalElement = '';
    _errorMessage = 'Oops! Something went wrong, please try again...';
    _errorIconName = 'icon-alert-circle';
    renderHandler(data, headingTitle = _config.SEARCH_HEADING, headingIconName = _config.SEARCH_ICON) {
        const markup = `
        <div class="${this._containerClassName1}">
            <h2 class="secondary-heading">
                <svg>
                    <use href="${_iconsSvgDefault.default}#${headingIconName}"></use>
                </svg>
                ${headingTitle}
            </h2>
            <div class="${this._containerClassName2}">
              ${this._createMarkup(data)}
            </div>
            ${this._additionalElement}
        </div>
      `;
        this._clearContainer();
        this._renderLoadingSpinnerResults();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        //Created after markup is generated
        // Need to append the results after scrolling to bottom
        this._newsContainer = document.querySelector('.news-container');
        // Need to load it at the bottom before loading other news results
        this._loadingSpinner = document.querySelector('.loading-spinner-small');
        // Needed the markup for update()
        return markup;
    }
    // Function to load spinner after search or load
    renderSpinner() {
        const markup = `
    <div class="loading-spinner">
        <svg>
            <use href="${_loadingSpinnerSvgDefault.default}#loading-spinner"></use>
        </svg>
    </div>
  `;
        this._clearContainer();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError() {
        const markup = `
        <p class="search-message">
            <svg>
                <use href="${_iconsSvgDefault.default}#${this._errorIconName}"></use>
            </svg>
            ${this._errorMessage}
        </p>
    `;
        this._clearContainer();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    // Function to append the news results after scroll(event) to the bottom
    appendNewsResults(data) {
        this._newsContainer.insertAdjacentHTML('beforeend', this._createMarkup(data));
    }
    newsResultsScrollHandler(handler) {
        window.addEventListener('scroll', ()=>{
            handler(this._loadingSpinner);
        });
    }
    // Function to handle bookmark btn on news results view
    bookmarkClickHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.btn--save');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
    // Share click handler
    shareClickHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.btn--share');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
    update(data, title, iconName) {
        title = title === '' ? _config.SEARCH_HEADING : title;
        iconName = iconName === '' ? _config.SEARCH_ICON : iconName;
        const newMarkup = this.renderHandler(data, title, iconName);
        // Creating virtual element in the memory
        const newDom = document.createRange().createContextualFragment(newMarkup);
        // Selecting all the elements from the selected DOM
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        // Code to compare the new element with existing one to update the area/element where required
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Update changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    pageLoadHandler(handler) {
        window.addEventListener('load', function() {
            handler();
        });
    }
    // Function to load small loading spinner after scroll(event) to bottom.
    _renderLoadingSpinnerResults() {
        const loadingSpinnerMarkup = `
    <svg class="loading-spinner-small">
      <use href="${_loadingSpinnerSmallSvgDefault.default}#loading-spinner"></use>
    </svg>
    `;
        this._parentElement.insertAdjacentHTML('beforeend', loadingSpinnerMarkup);
    }
    _clearContainer() {
        this._parentElement.innerHTML = '';
    }
    // Utility function to check if description from data is valid
    _checkDescription(description) {
        return description && description.includes('/a>') || description && description.includes('h2') || description && description.includes('img') || description && description.includes('/span>') ? '' : description;
    }
    // Function to create the markup for news results
    _createMarkup = (data)=>{
        const timeAgo = new _javascriptTimeAgoDefault.default('en-US');
        return `${data.map((article)=>{
            return `
        <div class="news">
            <div class="news-content">
              <h2 class="news-title">
                <a href="${article.url}"
                  target = "_blank">${!article.title ? '' : article.title}
                </a>
              </h2>

              <div class="news-info">
                <span class="news-source">
                  ${article.source.name}
                </span>
                <span class="news-time">${timeAgo.format(new Date(article.publishedAt))}
                </span>
              </div>

                <p class="news-description">
                    ${article.description}
                </p>

                <div class="news-menu">
                  <button class="btn btn--news btn--save">
                    <svg>
                      <use href="
                        ${_iconsSvgDefault.default}#${article.bookmarked ? 'icon-bookmark' : 'icon-bookmark-outline'}">
                      </use>
                    </svg>
                  </button>
      
                  <button class="btn btn--news btn--share">
                    <svg>
                      <use href="${_iconsSvgDefault.default}#icon-share-social"></use>
                    </svg>
                  </button>
                </div>
            </div>
            <div>
            <img
              src="${article.urlToImage}"
              alt="${article.title}" class="news-img" />
            </div>
        </div>
    `;
        }).join('')}`;
    };
}
exports.default = new View();

},{"javascript-time-ago":"hYK2Y","javascript-time-ago/locale/en.json":"kC0rm","url:../../img/loading_spinner.svg":"fi9s5","../../img/icons.svg":"cMpiy","url:../../img/loading_spinner_small.svg":"hZEc4","../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYK2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_timeAgoDefault.default
);
// I guess these two are deprecated.
parcelHelpers.export(exports, "intlDateTimeFormatSupported", ()=>_locale.intlDateTimeFormatSupported
);
parcelHelpers.export(exports, "intlDateTimeFormatSupportedLocale", ()=>_locale.intlDateTimeFormatSupportedLocale
);
var _timeAgo = require("./modules/TimeAgo");
var _timeAgoDefault = parcelHelpers.interopDefault(_timeAgo);
var _locale = require("./modules/locale");

},{"./modules/TimeAgo":"fYGXj","./modules/locale":"8JGnT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYGXj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Default locale global variable.
 */ parcelHelpers.export(exports, "default", ()=>TimeAgo
);
var _relativeTimeFormat = require("relative-time-format");
var _relativeTimeFormatDefault = parcelHelpers.interopDefault(_relativeTimeFormat);
var _cache = require("./cache");
var _cacheDefault = parcelHelpers.interopDefault(_cache);
var _locale = require("./locale");
var _localeDefault = parcelHelpers.interopDefault(_locale);
var _isStyleObject = require("./isStyleObject");
var _isStyleObjectDefault = parcelHelpers.interopDefault(_isStyleObject);
var _getStep = require("./steps/getStep");
var _getStepDefault = parcelHelpers.interopDefault(_getStep);
var _getStepDenominator = require("./steps/getStepDenominator");
var _getStepDenominatorDefault = parcelHelpers.interopDefault(_getStepDenominator);
var _getTimeToNextUpdate = require("./steps/getTimeToNextUpdate");
var _getTimeToNextUpdateDefault = parcelHelpers.interopDefault(_getTimeToNextUpdate);
var _localeDataStore = require("./LocaleDataStore");
var _roundMinute = require("./style/roundMinute");
var _roundMinuteDefault = parcelHelpers.interopDefault(_roundMinute);
var _getStyleByName = require("./style/getStyleByName");
var _getStyleByNameDefault = parcelHelpers.interopDefault(_getStyleByName);
var _round = require("./round"); // Valid time units.
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var UNITS = [
    'now',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'quarter',
    'year'
];
var TimeAgo = /*#__PURE__*/ function() {
    /**
   * @param {(string|string[])} locales=[] - Preferred locales (or locale).
   * @param {boolean} [polyfill] — Pass `false` to use native `Intl.RelativeTimeFormat` and `Intl.PluralRules` instead of the polyfills.
   */ function TimeAgo1() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        }, polyfill = _ref.polyfill;
        _classCallCheck(this, TimeAgo1);
        // Convert `locales` to an array.
        if (typeof locales === 'string') locales = [
            locales
        ];
         // Choose the most appropriate locale
        // from the list of `locales` added by the user.
        // For example, new TimeAgo("en-US") -> "en".
        this.locale = _localeDefault.default(locales.concat(TimeAgo1.getDefaultLocale()), _localeDataStore.getLocaleData);
        if (typeof Intl !== 'undefined') // Use `Intl.NumberFormat` for formatting numbers (when available).
        {
            if (Intl.NumberFormat) this.numberFormat = new Intl.NumberFormat(this.locale);
        } // Some people have requested the ability to use native
        // `Intl.RelativeTimeFormat` and `Intl.PluralRules`
        // instead of the polyfills.
        // https://github.com/catamphetamine/javascript-time-ago/issues/21
        if (polyfill === false) {
            this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
            this.IntlPluralRules = Intl.PluralRules;
        } else {
            this.IntlRelativeTimeFormat = _relativeTimeFormatDefault.default;
            this.IntlPluralRules = _relativeTimeFormatDefault.default.PluralRules;
        } // Cache `Intl.RelativeTimeFormat` instance.
        this.relativeTimeFormatCache = new _cacheDefault.default(); // Cache `Intl.PluralRules` instance.
        this.pluralRulesCache = new _cacheDefault.default();
    }
    /**
   * Formats relative date/time.
   *
   * @param {number} [options.now] - Sets the current date timestamp.
   *
   * @param  {boolean} [options.future] — Tells how to format value `0`:
   *         as "future" (`true`) or "past" (`false`).
   *         Is `false` by default, but should have been `true` actually,
   *         in order to correspond to `Intl.RelativeTimeFormat`
   *         that uses `future` formatting for `0` unless `-0` is passed.
   *
   * @param {string} [options.round] — Rounding method. Overrides the style's one.
   *
   * @param {boolean} [options.getTimeToNextUpdate] — Pass `true` to return `[formattedDate, timeToNextUpdate]` instead of just `formattedDate`.
   *
   * @return {string} The formatted relative date/time. If no eligible `step` is found, then an empty string is returned.
   */ _createClass(TimeAgo1, [
        {
            key: "format",
            value: function format(input, style, options) {
                if (!options) {
                    if (style && !isStyle(style)) {
                        options = style;
                        style = undefined;
                    } else options = {
                    };
                }
                if (!style) style = _roundMinuteDefault.default;
                if (typeof style === 'string') style = _getStyleByNameDefault.default(style);
                var timestamp = getTimestamp(input); // Get locale messages for this type of labels.
                // "flavour" is a legacy name for "labels".
                var _this$getLabels = this.getLabels(style.flavour || style.labels), labels = _this$getLabels.labels, labelsType = _this$getLabels.labelsType;
                var now; // Can pass a custom `now`, e.g. for testing purposes.
                //
                // Legacy way was passing `now` in `style`.
                // That way is deprecated.
                if (style.now !== undefined) now = style.now;
                 // The new way is passing `now` option to `.format()`.
                if (now === undefined && options.now !== undefined) now = options.now;
                if (now === undefined) now = Date.now();
                 // how much time has passed (in seconds)
                var secondsPassed = (now - timestamp) / 1000; // in seconds
                var future = options.future || secondsPassed < 0;
                var nowLabel = getNowLabel(labels, _localeDataStore.getLocaleData(this.locale).now, _localeDataStore.getLocaleData(this.locale).long, future); // `custom` – A function of `{ elapsed, time, date, now, locale }`.
                //
                // Looks like `custom` function is deprecated and will be removed
                // in the next major version.
                //
                // If this function returns a value, then the `.format()` call will return that value.
                // Otherwise the relative date/time is formatted as usual.
                // This feature is currently not used anywhere and is here
                // just for providing the ultimate customization point
                // in case anyone would ever need that. Prefer using
                // `steps[step].format(value, locale)` instead.
                //
                if (style.custom) {
                    var custom = style.custom({
                        now: now,
                        date: new Date(timestamp),
                        time: timestamp,
                        elapsed: secondsPassed,
                        locale: this.locale
                    });
                    if (custom !== undefined) // Won't return `timeToNextUpdate` here
                    // because `custom()` seems deprecated.
                    return custom;
                } // Get the list of available time interval units.
                var units = getTimeIntervalMeasurementUnits(// create a new custom `style` instead.
                style.units, labels, nowLabel); // // If no available time unit is suitable, just output an empty string.
                // if (units.length === 0) {
                // 	console.error(`None of the "${units.join(', ')}" time units have been found in "${labelsType}" labels for "${this.locale}" locale.`)
                // 	return ''
                // }
                var round = options.round || style.round; // Choose the appropriate time measurement unit
                // and get the corresponding rounded time amount.
                var _getStep1 = _getStepDefault.default(// For historical reasons, "approximate" steps are used by default.
                // In the next major version, there'll be no default for `steps`.
                style.gradation || style.steps || _roundMinuteDefault.default.steps, secondsPassed, {
                    now: now,
                    units: units,
                    round: round,
                    future: future,
                    getNextStep: true
                }), _getStep2 = _slicedToArray(_getStep1, 3), prevStep = _getStep2[0], step = _getStep2[1], nextStep = _getStep2[2];
                var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
                    labels: labels,
                    labelsType: labelsType,
                    nowLabel: nowLabel,
                    now: now,
                    future: future,
                    round: round
                }) || '';
                if (options.getTimeToNextUpdate) {
                    var timeToNextUpdate = _getTimeToNextUpdateDefault.default(timestamp, step, {
                        nextStep: nextStep,
                        prevStep: prevStep,
                        now: now,
                        future: future,
                        round: round
                    });
                    return [
                        formattedDate,
                        timeToNextUpdate
                    ];
                }
                return formattedDate;
            }
        },
        {
            key: "formatDateForStep",
            value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
                var _this = this;
                var labels = _ref2.labels, labelsType = _ref2.labelsType, nowLabel = _ref2.nowLabel, now = _ref2.now, future = _ref2.future, round = _ref2.round;
                // If no step matches, then output an empty string.
                if (!step) return;
                if (step.format) return step.format(timestamp, this.locale, {
                    formatAs: function formatAs(unit, value) {
                        // Mimicks `Intl.RelativeTimeFormat.format()`.
                        return _this.formatValue(value, unit, {
                            labels: labels,
                            future: future
                        });
                    },
                    now: now,
                    future: future
                });
                 // "unit" is now called "formatAs".
                var unit1 = step.unit || step.formatAs;
                if (!unit1) throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
                 // `Intl.RelativeTimeFormat` doesn't operate in "now" units.
                // Therefore, threat "now" as a special case.
                if (unit1 === 'now') return nowLabel;
                 // Amount in units.
                var amount = Math.abs(secondsPassed) / _getStepDenominatorDefault.default(step); // Apply granularity to the time amount
                // (and fallback to the previous step
                //  if the first level of granularity
                //  isn't met by this amount)
                //
                // `granularity` — (advanced) Time interval value "granularity".
                // For example, it could be set to `5` for minutes to allow only 5-minute increments
                // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
                // Perhaps this feature will be removed because there seem to be no use cases
                // of it in the real world.
                //
                if (step.granularity) // Recalculate the amount of seconds passed based on granularity
                amount = _round.getRoundFunction(round)(amount / step.granularity) * step.granularity;
                var valueForFormatting = -1 * Math.sign(secondsPassed) * _round.getRoundFunction(round)(amount); // By default, this library formats a `0` in "past" mode,
                // unless `future: true` option is passed.
                // This is different to `relative-time-format`'s behavior
                // which formats a `0` in "future" mode by default, unless it's a `-0`.
                // So, convert `0` to `-0` if `future: true` option wasn't passed.
                // `=== 0` matches both `0` and `-0`.
                if (valueForFormatting === 0) {
                    if (future) valueForFormatting = 0;
                    else valueForFormatting = -0;
                }
                switch(labelsType){
                    case 'long':
                    case 'short':
                    case 'narrow':
                        // Format the amount using `Intl.RelativeTimeFormat`.
                        return this.getFormatter(labelsType).format(valueForFormatting, unit1);
                    default:
                        // Format the amount.
                        // (mimicks `Intl.RelativeTimeFormat` behavior for other time label styles)
                        return this.formatValue(valueForFormatting, unit1, {
                            labels: labels,
                            future: future
                        });
                }
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, unit, _ref3) {
                var labels = _ref3.labels, future = _ref3.future;
                return this.getFormattingRule(labels, unit, value, {
                    future: future
                }).replace('{0}', this.formatNumber(Math.abs(value)));
            }
        },
        {
            key: "getFormattingRule",
            value: function getFormattingRule(formattingRules, unit, value, _ref4) {
                var future = _ref4.future;
                // Passing the language is required in order to
                // be able to correctly classify the `value` as a number.
                var locale = this.locale;
                formattingRules = formattingRules[unit]; // Check for a special "compacted" rules case:
                // if formatting rules are the same for "past" and "future",
                // and also for all possible `value`s, then those rules are
                // stored as a single string.
                if (typeof formattingRules === 'string') return formattingRules;
                 // Choose either "past" or "future" based on time `value` sign.
                // If "past" is same as "future" then they're stored as "other".
                // If there's only "other" then it's being collapsed.
                var pastOrFuture = value === 0 ? future ? 'future' : 'past' : value < 0 ? 'past' : 'future';
                var quantifierRules = formattingRules[pastOrFuture] || formattingRules; // Bundle size optimization technique.
                if (typeof quantifierRules === 'string') return quantifierRules;
                 // Quantify `value`.
                var quantifier = this.getPluralRules().select(Math.abs(value)); // "other" rule is supposed to always be present.
                // If only "other" rule is present then "rules" is not an object and is a string.
                return quantifierRules[quantifier] || quantifierRules.other;
            }
        },
        {
            key: "formatNumber",
            value: function formatNumber(number) {
                return this.numberFormat ? this.numberFormat.format(number) : String(number);
            }
        },
        {
            key: "getFormatter",
            value: function getFormatter(labelsType) {
                // `Intl.RelativeTimeFormat` instance creation is (hypothetically) assumed
                // a lengthy operation so the instances are cached and reused.
                return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
                    style: labelsType
                }));
            }
        },
        {
            key: "getPluralRules",
            value: function getPluralRules() {
                // `Intl.PluralRules` instance creation is (hypothetically) assumed
                // a lengthy operation so the instances are cached and reused.
                return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var labelsType1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                // Convert `labels` to an array.
                if (typeof labelsType1 === 'string') labelsType1 = [
                    labelsType1
                ];
                 // Supports legacy "tiny" and "mini-time" label styles.
                labelsType1 = labelsType1.map(function(labelsType) {
                    switch(labelsType){
                        case 'tiny':
                        case 'mini-time':
                            return 'mini';
                        default:
                            return labelsType;
                    }
                }); // "long" labels type is the default one.
                // (it's always present for all languages)
                labelsType1 = labelsType1.concat('long'); // Find a suitable labels type.
                var localeData = _localeDataStore.getLocaleData(this.locale);
                for(var _iterator = labelsType1, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;){
                    var _ref5;
                    if (_isArray) {
                        if (_i2 >= _iterator.length) break;
                        _ref5 = _iterator[_i2++];
                    } else {
                        _i2 = _iterator.next();
                        if (_i2.done) break;
                        _ref5 = _i2.value;
                    }
                    var _labelsType = _ref5;
                    if (localeData[_labelsType]) return {
                        labelsType: _labelsType,
                        labels: localeData[_labelsType]
                    };
                }
            }
        }
    ]);
    return TimeAgo1;
}();
var defaultLocale = 'en';
/**
 * Gets default locale.
 * @return  {string} locale
 */ TimeAgo.getDefaultLocale = function() {
    return defaultLocale;
};
/**
 * Sets default locale.
 * @param  {string} locale
 */ TimeAgo.setDefaultLocale = function(locale) {
    return defaultLocale = locale;
};
/**
 * Adds locale data for a specific locale and marks the locale as default.
 * @param {Object} localeData
 */ TimeAgo.addDefaultLocale = function(localeData) {
    if (defaultLocaleHasBeenSpecified) return console.error('[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.');
    defaultLocaleHasBeenSpecified = true;
    TimeAgo.setDefaultLocale(localeData.locale);
    TimeAgo.addLocale(localeData);
};
var defaultLocaleHasBeenSpecified;
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */ TimeAgo.addLocale = function(localeData) {
    _localeDataStore.addLocaleData(localeData);
    _relativeTimeFormatDefault.default.addLocale(localeData);
};
/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */ TimeAgo.locale = TimeAgo.addLocale;
/**
 * Adds custom labels to locale data.
 * @param {string} locale
 * @param {string} name
 * @param {object} labels
 */ TimeAgo.addLabels = function(locale, name, labels) {
    var localeData = _localeDataStore.getLocaleData(locale);
    if (!localeData) {
        _localeDataStore.addLocaleData({
            locale: locale
        });
        localeData = _localeDataStore.getLocaleData(locale); // throw new Error(`[javascript-time-ago] No data for locale "${locale}"`)
    }
    localeData[name] = labels;
}; // Normalizes `.format()` `time` argument.
function getTimestamp(input) {
    if (input.constructor === Date || isMockedDate(input)) return input.getTime();
    if (typeof input === 'number') return input;
     // For some weird reason istanbul doesn't see this `throw` covered.
    /* istanbul ignore next */ throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
} // During testing via some testing libraries `Date`s aren't actually `Date`s.
// https://github.com/catamphetamine/javascript-time-ago/issues/22
function isMockedDate(object) {
    return _typeof(object) === 'object' && typeof object.getTime === 'function';
} // Get available time interval measurement units.
function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
    // Get all time interval measurement units that're available
    // in locale data for a given time labels style.
    var units = Object.keys(labels); // `now` unit is handled separately and is shipped in its own `now.json` file.
    // `now.json` isn't present for all locales, so it could be substituted with
    // ".second.current".
    // Add `now` unit if it's available in locale data.
    if (nowLabel) units.push('now');
     // If only a specific set of available time measurement units can be used
    // then only those units are allowed (if they're present in locale data).
    if (allowedUnits) units = allowedUnits.filter(function(unit) {
        return unit === 'now' || units.indexOf(unit) >= 0;
    });
    return units;
}
function getNowLabel(labels, nowLabels, longLabels, future) {
    var nowLabel = labels.now || nowLabels && nowLabels.now; // Specific "now" message form extended locale data (if present).
    if (nowLabel) {
        // Bundle size optimization technique.
        if (typeof nowLabel === 'string') return nowLabel;
         // Not handling `value === 0` as `localeData.now.current` here
        // because it wouldn't make sense: "now" is a moment,
        // so one can't possibly differentiate between a
        // "previous" moment, a "current" moment and a "next moment".
        // It can only be differentiated between "past" and "future".
        if (future) return nowLabel.future;
        else return nowLabel.past;
    } // Use ".second.current" as "now" message.
    if (longLabels && longLabels.second && longLabels.second.current) return longLabels.second.current;
}
function isStyle(variable) {
    return typeof variable === 'string' || _isStyleObjectDefault.default(variable);
}

},{"relative-time-format":"iUkxV","./cache":"6iLOa","./locale":"8JGnT","./isStyleObject":"7QSqj","./steps/getStep":"3ocsp","./steps/getStepDenominator":"g80zU","./steps/getTimeToNextUpdate":"a9E9U","./LocaleDataStore":"b52LM","./style/roundMinute":"1i1NF","./style/getStyleByName":"ibDcZ","./round":"bae8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUkxV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_relativeTimeFormatDefault.default
);
var _relativeTimeFormat = require("./modules/RelativeTimeFormat");
var _relativeTimeFormatDefault = parcelHelpers.interopDefault(_relativeTimeFormat);

},{"./modules/RelativeTimeFormat":"8cfYd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cfYd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UNITS", ()=>UNITS
);
/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'es-PY']
 * var options = { localeMatcher: 'lookup' }
 * // Returns ["id", "es-PY"]
 * Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
 */ parcelHelpers.export(exports, "default", ()=>RelativeTimeFormat
);
var _localeDataStore = require("./LocaleDataStore");
var _resolveLocale = require("./resolveLocale");
var _resolveLocaleDefault = parcelHelpers.interopDefault(_resolveLocale);
var _pluralRules = require("./PluralRules"); // Importing `PluralRule` polyfill from a separate package
var _pluralRulesDefault = parcelHelpers.interopDefault(_pluralRules);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var UNITS = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
]; // Valid values for the `numeric` option.
var NUMERIC_VALUES = [
    "auto",
    "always"
]; // Valid values for the `style` option.
var STYLE_VALUES = [
    "long",
    "short",
    "narrow"
]; // Valid values for the `localeMatcher` option.
var LOCALE_MATCHER_VALUES = [
    "lookup",
    "best fit"
];
/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */ var RelativeTimeFormat = /*#__PURE__*/ function() {
    /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.numeric="always"] - (Version >= 2) One of: "always", "auto".
   * @param {string} [options.localeMatcher="lookup"] - One of: "lookup", "best fit". Currently only "lookup" is supported.
   * @param {boolean} [options.styleFallback] - If "style" is missing from locale data then fall back to an existing one (for example, "long"). Is used in `javascript-time-ago`.
   */ function RelativeTimeFormat1() {
        var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        _classCallCheck(this, RelativeTimeFormat1);
        _defineProperty(this, "numeric", "always");
        _defineProperty(this, "style", "long");
        _defineProperty(this, "localeMatcher", "lookup");
        var numeric = options.numeric, style = options.style, styleFallback = options.styleFallback, localeMatcher = options.localeMatcher; // Set `numeric` option.
        if (numeric !== undefined) {
            if (NUMERIC_VALUES.indexOf(numeric) < 0) throw new RangeError("Invalid \"numeric\" option: ".concat(numeric));
            this.numeric = numeric;
        } // Set `style` option.
        if (style !== undefined) {
            if (STYLE_VALUES.indexOf(style) < 0 && !styleFallback) throw new RangeError("Invalid \"style\" option: ".concat(style));
            this.style = style;
        } // Set `localeMatcher` option.
        if (localeMatcher !== undefined) {
            if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
            this.localeMatcher = localeMatcher;
        } // Set `locale`.
        // Convert `locales` to an array.
        if (typeof locales === 'string') locales = [
            locales
        ];
         // Add default locale.
        locales.push(_localeDataStore.getDefaultLocale()); // Choose the most appropriate locale.
        this.locale = RelativeTimeFormat1.supportedLocalesOf(locales, {
            localeMatcher: this.localeMatcher
        })[0];
        if (!this.locale) throw new Error("No supported locale was found");
         // Construct an `Intl.PluralRules` instance (polyfill).
        if (_pluralRulesDefault.default.supportedLocalesOf(this.locale).length > 0) this.pluralRules = new _pluralRulesDefault.default(this.locale);
        else console.warn("\"".concat(this.locale, "\" locale is not supported"));
         // Use `Intl.NumberFormat` for formatting numbers (when available).
        if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
            this.numberFormat = new Intl.NumberFormat(this.locale);
            this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
        } else this.numberingSystem = 'latn';
        this.locale = _resolveLocaleDefault.default(this.locale, {
            localeMatcher: this.localeMatcher
        }); // Fall back to another style if `style` is not supported for the `locale`.
        if (styleFallback) {
            var styles = Object.keys(_localeDataStore.getLocaleData(this.locale));
            var _arr = [
                this.style
            ].concat(STYLE_VALUES, [
                styles[0]
            ]);
            for(var _i = 0; _i < _arr.length; _i++){
                var _style = _arr[_i];
                if (styles.indexOf(_style) >= 0) {
                    this.style = _style;
                    break;
                }
            }
        }
    }
    /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */ _createClass(RelativeTimeFormat1, [
        {
            key: "format",
            value: function format() {
                var _parseFormatArgs = parseFormatArgs(arguments), _parseFormatArgs2 = _slicedToArray(_parseFormatArgs, 2), number = _parseFormatArgs2[0], unit = _parseFormatArgs2[1];
                return this.getRule(number, unit).replace('{0}', this.formatNumber(Math.abs(number)));
            }
        },
        {
            key: "formatToParts",
            value: function formatToParts() {
                var _parseFormatArgs3 = parseFormatArgs(arguments), _parseFormatArgs4 = _slicedToArray(_parseFormatArgs3, 2), number = _parseFormatArgs4[0], unit = _parseFormatArgs4[1];
                var rule = this.getRule(number, unit);
                var valueIndex = rule.indexOf("{0}"); // "yesterday"/"today"/"tomorrow".
                if (valueIndex < 0) return [
                    {
                        type: "literal",
                        value: rule
                    }
                ];
                var parts = [];
                if (valueIndex > 0) parts.push({
                    type: "literal",
                    value: rule.slice(0, valueIndex)
                });
                parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function(part) {
                    return _objectSpread({
                    }, part, {
                        unit: unit
                    });
                }));
                if (valueIndex + 3 < rule.length - 1) parts.push({
                    type: "literal",
                    value: rule.slice(valueIndex + 3)
                });
                return parts;
            }
        },
        {
            key: "getRule",
            value: function getRule(value, unit) {
                // Get locale-specific time interval formatting rules
                // of a given `style` for the given value of measurement `unit`.
                //
                // E.g.:
                //
                // ```json
                // {
                //  "past": {
                //    "one": "a second ago",
                //    "other": "{0} seconds ago"
                //  },
                //  "future": {
                //    "one": "in a second",
                //    "other": "in {0} seconds"
                //  }
                // }
                // ```
                //
                var unitMessages = _localeDataStore.getLocaleData(this.locale)[this.style][unit]; // Bundle size optimization technique for styles like
                // "tiny" in `javascript-time-ago`: "1m", "2h", "3d"...
                if (typeof unitMessages === 'string') return unitMessages;
                 // Special case for "yesterday"/"today"/"tomorrow".
                if (this.numeric === "auto") {
                    // "yesterday", "the day before yesterday", etc.
                    if (value === -2 || value === -1) {
                        var message = unitMessages["previous".concat(value === -1 ? '' : '-' + Math.abs(value))];
                        if (message) return message;
                    } else if (value === 1 || value === 2) {
                        var _message = unitMessages["next".concat(value === 1 ? '' : '-' + Math.abs(value))];
                        if (_message) return _message;
                    } else if (value === 0) {
                        if (unitMessages.current) return unitMessages.current;
                    }
                } // Choose either "past" or "future" based on time `value` sign.
                // If there's only "other" then it's being collapsed.
                // (the resulting bundle size optimization technique)
                var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"]; // Bundle size optimization technique for styles like "narrow"
                // having messages like "in {0} d." or "{0} d. ago".
                if (typeof pluralizedMessages === "string") return pluralizedMessages;
                 // Quantify `value`.
                // There seems to be no such locale in CLDR
                // for which "plural rules" function is missing.
                var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || 'other'; // "other" rule is supposed to be always present.
                // If only "other" rule is present then "rules" is not an object and is a string.
                return pluralizedMessages[quantifier] || pluralizedMessages.other;
            }
        },
        {
            key: "formatNumber",
            value: function formatNumber(number) {
                return this.numberFormat ? this.numberFormat.format(number) : String(number);
            }
        },
        {
            key: "formatNumberToParts",
            value: function formatNumberToParts(number) {
                // `Intl.NumberFormat.formatToParts()` is not present, for example,
                // in Node.js 8.x while `Intl.NumberFormat` itself is present.
                return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [
                    {
                        type: "integer",
                        value: this.formatNumber(number)
                    }
                ];
            }
        },
        {
            key: "resolvedOptions",
            value: function resolvedOptions() {
                return {
                    locale: this.locale,
                    style: this.style,
                    numeric: this.numeric,
                    numberingSystem: this.numberingSystem
                };
            }
        }
    ]);
    return RelativeTimeFormat1;
}();
RelativeTimeFormat.supportedLocalesOf = function(locales) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    // Convert `locales` to an array.
    if (typeof locales === 'string') locales = [
        locales
    ];
    else if (!Array.isArray(locales)) throw new TypeError('Invalid "locales" argument');
    return locales.filter(function(locale) {
        return _resolveLocaleDefault.default(locale, options);
    });
};
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */ RelativeTimeFormat.addLocale = _localeDataStore.addLocaleData;
/**
 * Sets default locale.
 * @param  {string} locale
 */ RelativeTimeFormat.setDefaultLocale = _localeDataStore.setDefaultLocale;
/**
 * Gets default locale.
 * @return  {string} locale
 */ RelativeTimeFormat.getDefaultLocale = _localeDataStore.getDefaultLocale;
/**
 * Export `Intl.PluralRules` just in case it's used somewhere else.
 */ RelativeTimeFormat.PluralRules = _pluralRulesDefault.default; // The specification allows units to be in plural form.
// Convert plural to singular.
// Example: "seconds" -> "second".
var UNIT_ERROR = 'Invalid "unit" argument';
function parseUnit(unit) {
    if (_typeof(unit) === 'symbol') throw new TypeError(UNIT_ERROR);
    if (typeof unit !== 'string') throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
    if (unit[unit.length - 1] === 's') unit = unit.slice(0, unit.length - 1);
    if (UNITS.indexOf(unit) < 0) throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
    return unit;
} // Converts `value` to a `Number`.
// The specification allows value to be a non-number.
// For example, "-0" is supposed to be treated as `-0`.
// Also checks if `value` is a finite number.
var NUMBER_ERROR = 'Invalid "number" argument';
function parseNumber(value) {
    value = Number(value);
    if (Number.isFinite) {
        if (!Number.isFinite(value)) throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
    return value;
}
/**
 * Tells `0` from `-0`.
 * https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
 * @param  {number} number
 * @return {Boolean}
 * @example
 * isNegativeZero(0); // false
 * isNegativeZero(-0); // true
 */ function isNegativeZero(number) {
    return 1 / number === -Infinity;
}
function isNegative(number) {
    return number < 0 || number === 0 && isNegativeZero(number);
}
function parseFormatArgs(args) {
    if (args.length < 2) throw new TypeError("\"unit\" argument is required");
    return [
        parseNumber(args[0]),
        parseUnit(args[1])
    ];
}

},{"./LocaleDataStore":"OtcsI","./resolveLocale":"bO2Ti","./PluralRules":"2CjQh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OtcsI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultLocale", ()=>getDefaultLocale
);
parcelHelpers.export(exports, "setDefaultLocale", ()=>setDefaultLocale
);
/**
 * Gets locale data previously added by `addLocaleData()`.
 * @return  {object} [localeData]
 */ parcelHelpers.export(exports, "getLocaleData", ()=>getLocaleData
);
/**
 * Adds locale data.
 * Is called by `RelativeTimeFormat.addLocale(...)`.
 * @param  {object} localeData
 */ parcelHelpers.export(exports, "addLocaleData", ()=>addLocaleData
);
/**
 * Returns a locale for which locale data has been added
 * via `RelativeTimeFormat.addLocale(...)`.
 * @param  {string} locale
 * @return {string} [locale]
 */ parcelHelpers.export(exports, "resolveLocale", ()=>resolveLocale
);
// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
var defaultLocale = 'en'; // For all locales added
// their relative time formatter messages will be stored here.
var localesData = {
}; // According to the spec BCP 47 language tags are case-insensitive.
// https://tools.ietf.org/html/rfc5646
var lowercaseLocaleLookup = {
};
function getDefaultLocale() {
    return defaultLocale;
}
function setDefaultLocale(locale) {
    defaultLocale = locale;
}
function getLocaleData(locale) {
    return localesData[locale];
}
function addLocaleData(localeData) {
    if (!localeData) throw new Error('No locale data passed');
     // This locale data is stored in a global variable
    // and later used when calling `.format(time)`.
    localesData[localeData.locale] = localeData;
    lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
function resolveLocale(locale) {
    if (localesData[locale]) return locale;
    if (lowercaseLocaleLookup[locale.toLowerCase()]) return lowercaseLocaleLookup[locale.toLowerCase()];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bO2Ti":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Resolves a locale to a supported one (if any).
 * Starts from the most specific locale and gradually
 * falls back to less specific ones.
 * This is a basic implementation of the "lookup" algorithm.
 * https://tools.ietf.org/html/rfc4647#section-3.4
 * @param  {string} locale
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocaleLookup("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocaleLookup("xx-Latn")
 */ parcelHelpers.export(exports, "resolveLocaleLookup", ()=>resolveLocaleLookup
);
var _localeDataStore = require("./LocaleDataStore");
function resolveLocale(locale) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    var localeMatcher = options.localeMatcher || 'lookup';
    switch(localeMatcher){
        case 'lookup':
            return resolveLocaleLookup(locale);
        // "best fit" locale matching is not supported.
        // https://github.com/catamphetamine/relative-time-format/issues/2
        case 'best fit':
            // return resolveLocaleBestFit(locale)
            return resolveLocaleLookup(locale);
        default:
            throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
    }
}
exports.default = resolveLocale;
function resolveLocaleLookup(locale) {
    var resolvedLocale = _localeDataStore.resolveLocale(locale);
    if (resolvedLocale) return resolvedLocale;
     // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
    var parts = locale.split('-');
    while(locale.length > 1){
        parts.pop();
        locale = parts.join('-');
        var _resolvedLocale = _localeDataStore.resolveLocale(locale);
        if (_resolvedLocale) return _resolvedLocale;
    }
}

},{"./LocaleDataStore":"OtcsI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CjQh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PluralRules
);
// Importing `PluralRule` polyfill from a separate package
// results in a bundle that is larger by 1kB for some reason.
// export { default as default } from 'intl-plural-rules-polyfill/cardinal'
var _pluralRuleFunctions = require("./PluralRuleFunctions");
var _pluralRuleFunctionsDefault = parcelHelpers.interopDefault(_pluralRuleFunctions);
var _getPluralRulesLocale = require("./getPluralRulesLocale");
var _getPluralRulesLocaleDefault = parcelHelpers.interopDefault(_getPluralRulesLocale);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */ var PluralRules = /*#__PURE__*/ function() {
    function PluralRules1(locale, options) {
        _classCallCheck(this, PluralRules1);
        var locales = PluralRules1.supportedLocalesOf(locale);
        if (locales.length === 0) throw new RangeError("Unsupported locale: " + locale);
        if (options && options.type !== "cardinal") throw new RangeError("Only \"cardinal\" \"type\" is supported");
        this.$ = _pluralRuleFunctionsDefault.default[_getPluralRulesLocaleDefault.default(locales[0])];
    }
    _createClass(PluralRules1, [
        {
            key: "select",
            value: function select(number) {
                return this.$(number);
            }
        }
    ], [
        {
            key: "supportedLocalesOf",
            value: function supportedLocalesOf(locales) {
                if (typeof locales === "string") locales = [
                    locales
                ];
                return locales.filter(function(locale) {
                    return _pluralRuleFunctionsDefault.default[_getPluralRulesLocaleDefault.default(locale)];
                });
            }
        }
    ]);
    return PluralRules1;
}();

},{"./PluralRuleFunctions":"bWOJk","./getPluralRulesLocale":"75w9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWOJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// (this file was autogenerated by `generate-locales`)
// "plural rules" functions are not stored in locale JSON files because they're not strings.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
var $ = {
    af: function af(n) {
        return n == 1 ? 'one' : 'other';
    },
    am: function am(n) {
        return n >= 0 && n <= 1 ? 'one' : 'other';
    },
    ar: function ar(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
        return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
    },
    ast: function ast(n) {
        var s = String(n).split('.'), v0 = !s[1];
        return n == 1 && v0 ? 'one' : 'other';
    },
    be: function be(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
    },
    br: function br(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
        return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
    },
    bs: function bs(n) {
        var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
        return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
    },
    ceb: function ceb(n) {
        var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
        return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
    },
    cs: function cs(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1];
        return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
    },
    cy: function cy(n) {
        return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
    },
    da: function da(n) {
        var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
        return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
    },
    dsb: function dsb(n) {
        var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
        return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
    },
    dz: function dz(n) {
        return 'other';
    },
    es: function es(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
        return n == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
    },
    ff: function ff(n) {
        return n >= 0 && n < 2 ? 'one' : 'other';
    },
    fr: function fr(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
        return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
    },
    ga: function ga(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n;
        return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
    },
    gd: function gd(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n;
        return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
    },
    he: function he(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
        return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
    },
    is: function is(n) {
        var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
        return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
    },
    it: function it(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
        return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
    },
    ksh: function ksh(n) {
        return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
    },
    lt: function lt(n) {
        var s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
    },
    lv: function lv(n) {
        var s = String(n).split('.'), f = s[1] || '', v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
        return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
    },
    mk: function mk(n) {
        var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
        return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
    },
    mt: function mt(n) {
        var s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
        return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
    },
    pa: function pa(n) {
        return n == 0 || n == 1 ? 'one' : 'other';
    },
    pl: function pl(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
        return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
    },
    pt: function pt(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
        return i == 0 || i == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
    },
    ro: function ro(n) {
        var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
        return n == 1 && v0 ? 'one' : !v0 || n == 0 || n100 >= 2 && n100 <= 19 ? 'few' : 'other';
    },
    ru: function ru(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
        return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
    },
    se: function se(n) {
        return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
    },
    si: function si(n) {
        var s = String(n).split('.'), i = s[0], f = s[1] || '';
        return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
    },
    sl: function sl(n) {
        var s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);
        return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
    }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.ca = $.ast;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fil = $.ceb;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.ha = $.af;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.ff;
$.ia = $.ast;
$.id = $.dz;
$.ig = $.dz;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.af;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.no = $.af;
$.or = $.af;
$.pcm = $.am;
$.ps = $.af;
$.rm = $.af;
$.sah = $.dz;
$.sc = $.ast;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.su = $.dz;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.wo = $.dz;
$.yi = $.ast;
$.yo = $.dz;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
exports.default = $;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"75w9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPluralRulesLocale(locale) {
    // "pt" language is the only one having different pluralization rules
    // for the one ("pt") (Portuguese) locale and the other ("pt-PT") (European Portuguese).
    // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
    // (see the entries for "pt" and "pt_PT" there)
    if (locale === 'pt-PT') return locale;
    return getLanguageFromLanguageTag(locale);
}
exports.default = getPluralRulesLocale;
/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */ var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;
function getLanguageFromLanguageTag(languageTag) {
    var match = languageTag.match(LANGUAGE_REG_EXP);
    if (!match) throw new TypeError("Invalid locale: ".concat(languageTag));
    return match[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iLOa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Cache
);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * A basic in-memory cache.
 *
 * import Cache from 'javascript-time-ago/Cache'
 * const cache = new Cache()
 * const object = cache.get('key1', 'key2', ...) || cache.put('key1', 'key2', ..., createObject())
 */ var Cache = /*#__PURE__*/ function() {
    function Cache1() {
        _classCallCheck(this, Cache1);
        _defineProperty(this, "cache", {
        });
    }
    _createClass(Cache1, [
        {
            key: "get",
            value: function get() {
                var cache = this.cache;
                for(var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++)keys[_key] = arguments[_key];
                for(var _i = 0; _i < keys.length; _i++){
                    var key = keys[_i];
                    if (_typeof(cache) !== 'object') return;
                    cache = cache[key];
                }
                return cache;
            }
        },
        {
            key: "put",
            value: function put() {
                for(var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)keys[_key2] = arguments[_key2];
                var value = keys.pop();
                var lastKey = keys.pop();
                var cache = this.cache;
                for(var _i2 = 0; _i2 < keys.length; _i2++){
                    var key = keys[_i2];
                    if (_typeof(cache[key]) !== 'object') cache[key] = {
                    };
                    cache = cache[key];
                }
                return cache[lastKey] = value;
            }
        }
    ]);
    return Cache1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JGnT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */ parcelHelpers.export(exports, "intlDateTimeFormatSupportedLocale", ()=>intlDateTimeFormatSupportedLocale
);
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */ parcelHelpers.export(exports, "intlDateTimeFormatSupported", ()=>intlDateTimeFormatSupported
);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function chooseLocale(locales, isLocaleDataAvailable) {
    // This is not an intelligent algorithm,
    // but it will do for this library's case.
    // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
    for(var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;){
        var _ref;
        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }
        var locale = _ref;
        if (isLocaleDataAvailable(locale)) return locale;
        var parts = locale.split('-');
        while(parts.length > 1){
            parts.pop();
            locale = parts.join('-');
            if (isLocaleDataAvailable(locale)) return locale;
        }
    }
    throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(', ')));
}
exports.default = chooseLocale;
function intlDateTimeFormatSupportedLocale(locales) {
    /* istanbul ignore else */ if (intlDateTimeFormatSupported()) return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
}
function intlDateTimeFormatSupported() {
    // Babel transforms `typeof` into some "branches"
    // so istanbul will show this as "branch not covered".
    /* istanbul ignore next */ var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof(Intl)) === 'object';
    return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QSqj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function isStyleObject(object) {
    return isObject(object) && (Array.isArray(object.steps) || Array.isArray(object.gradation) || Array.isArray(object.flavour) || typeof object.flavour === 'string' || Array.isArray(object.labels) || typeof object.labels === 'string' || Array.isArray(object.units) || typeof object.custom === 'function');
}
exports.default = isStyleObject;
var OBJECT_CONSTRUCTOR = {
}.constructor;
function isObject(object) {
    return _typeof(object) !== undefined && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ocsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getStepDenominator = require("./getStepDenominator");
var _getStepDenominatorDefault = parcelHelpers.interopDefault(_getStepDenominator);
var _getStepMinTime = require("./getStepMinTime");
var _getStepMinTimeDefault = parcelHelpers.interopDefault(_getStepMinTime);
var _round = require("../round");
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getStep(steps, secondsPassed, _ref) {
    var now = _ref.now, future = _ref.future, round = _ref.round, units = _ref.units, getNextStep = _ref.getNextStep;
    // Ignore steps having not-supported time units in `formatAs`.
    steps = filterStepsByUnits(steps, units);
    var step = _getStep(steps, secondsPassed, {
        now: now,
        future: future,
        round: round
    });
    if (getNextStep) {
        if (step) {
            var prevStep = steps[steps.indexOf(step) - 1];
            var nextStep = steps[steps.indexOf(step) + 1];
            return [
                prevStep,
                step,
                nextStep
            ];
        }
        return [
            undefined,
            undefined,
            steps[0]
        ];
    }
    return step;
}
exports.default = getStep;
function _getStep(steps, secondsPassed, _ref2) {
    var now = _ref2.now, future = _ref2.future, round = _ref2.round;
    // If no steps fit the conditions then return nothing.
    if (steps.length === 0) return;
     // Find the most appropriate step.
    var i = getStepIndex(steps, secondsPassed, {
        now: now,
        future: future || secondsPassed < 0,
        round: round
    }); // If no step is applicable the return nothing.
    if (i === -1) return;
    var step = steps[i]; // Apply granularity to the time amount
    // (and fall back to the previous step
    //  if the first level of granularity
    //  isn't met by this amount)
    if (step.granularity) {
        // Recalculate the amount of seconds passed based on `granularity`.
        var secondsPassedGranular = _round.getRoundFunction(round)(Math.abs(secondsPassed) / _getStepDenominatorDefault.default(step) / step.granularity) * step.granularity; // If the granularity for this step is too high,
        // then fall back to the previous step.
        // (if there is any previous step)
        if (secondsPassedGranular === 0 && i > 0) return steps[i - 1];
    }
    return step;
}
/**
 * Iterates through steps until it finds the maximum one satisfying the `minTime` threshold.
 * @param  {Object} steps - Steps.
 * @param  {number} secondsPassed - How much seconds have passed since the date till `now`.
 * @param  {number} options.now - Current timestamp.
 * @param  {boolean} options.future - Whether the time interval should be formatted as a future one.
 * @param  {number} [i] - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */ function getStepIndex(steps, secondsPassed, options) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var minTime = _getStepMinTimeDefault.default(steps[i], _objectSpread({
        prevStep: steps[i - 1],
        timestamp: options.now - secondsPassed * 1000
    }, options)); // If `minTime` isn't defined or deduceable for this step, then stop.
    if (minTime === undefined) return i - 1;
     // If the `minTime` threshold for moving from previous step
    // to this step is too high then return the previous step.
    if (Math.abs(secondsPassed) < minTime) return i - 1;
     // If it's the last step then return it.
    if (i === steps.length - 1) return i;
     // Move to the next step.
    return getStepIndex(steps, secondsPassed, options, i + 1);
}
/**
 * Leaves only allowed steps.
 * @param  {Object[]} steps
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */ function filterStepsByUnits(steps, units) {
    return steps.filter(function(_ref3) {
        var unit = _ref3.unit, formatAs = _ref3.formatAs;
        // "unit" is now called "formatAs".
        unit = unit || formatAs; // If this step has a `unit` defined
        // then this `unit` must be in the list of allowed `units`.
        if (unit) return units.indexOf(unit) >= 0;
         // A step is not required to specify a `unit`:
        // alternatively, it could specify `format()`.
        // (see "twitter" style for an example)
        return true;
    });
}

},{"./getStepDenominator":"g80zU","./getStepMinTime":"1u11o","../round":"bae8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g80zU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _units = require("./units");
function getStepDenominator(step) {
    // `factor` is a legacy property.
    if (step.factor !== undefined) return step.factor;
     // "unit" is now called "formatAs".
    return _units.getSecondsInUnit(step.unit || step.formatAs) || 1;
}
exports.default = getStepDenominator;

},{"./units":"5yijw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yijw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minute", ()=>minute
);
parcelHelpers.export(exports, "hour", ()=>hour
);
parcelHelpers.export(exports, "day", ()=>day
);
parcelHelpers.export(exports, "week", ()=>week
);
parcelHelpers.export(exports, "month", ()=>month
);
parcelHelpers.export(exports, "year", ()=>year
);
parcelHelpers.export(exports, "getSecondsInUnit", ()=>getSecondsInUnit
) // export function getPreviousUnitFor(unit) {
 // 	switch (unit) {
 // 		case 'second':
 // 			return 'now'
 // 		case 'minute':
 // 			return 'second'
 // 		case 'hour':
 // 			return 'minute'
 // 		case 'day':
 // 			return 'hour'
 // 		case 'week':
 // 			return 'day'
 // 		case 'month':
 // 			return 'week'
 // 		case 'year':
 // 			return 'month'
 // 	}
 // }
;
var minute = 60; // in seconds
var hour = 60 * minute; // in seconds
var day = 24 * hour; // in seconds
var week = 7 * day; // in seconds
var month = 30.44 * day; // in seconds
var year = 365.2425 * day; // in seconds
function getSecondsInUnit(unit) {
    switch(unit){
        case 'second':
            return 1;
        case 'minute':
            return minute;
        case 'hour':
            return hour;
        case 'day':
            return day;
        case 'week':
            return week;
        case 'month':
            return month;
        case 'year':
            return year;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1u11o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _units = require("./units");
var _round = require("../round");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function getStepMinTime(step, _ref) {
    var prevStep = _ref.prevStep, timestamp = _ref.timestamp, now = _ref.now, future = _ref.future, round = _ref.round;
    var minTime; // "threshold_for_xxx" is a legacy property.
    if (prevStep) {
        if (prevStep.id || prevStep.unit) minTime = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
    if (minTime === undefined) // "threshold" is a legacy property.
    {
        if (step.threshold !== undefined) {
            // "threshold" is a legacy name for "minTime".
            minTime = step.threshold; // "threshold" function is deprecated.
            if (typeof minTime === 'function') minTime = minTime(now, future);
        }
    }
    if (minTime === undefined) minTime = step.minTime;
     // A deprecated way of specifying a different threshold
    // depending on the previous step's unit.
    if (_typeof(minTime) === 'object') {
        if (prevStep && prevStep.id && minTime[prevStep.id] !== undefined) minTime = minTime[prevStep.id];
        else minTime = minTime.default;
    }
    if (typeof minTime === 'function') minTime = minTime(timestamp, {
        future: future,
        getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
            return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
                round: round
            });
        }
    });
     // Evaluate the `test()` function.
    // `test()` function is deprecated.
    if (minTime === undefined) {
        if (step.test) {
            if (step.test(timestamp, {
                now: now,
                future: future
            })) // `0` threshold always passes.
            minTime = 0;
            else // `MAX_SAFE_INTEGER` threshold won't ever pass in real life.
            minTime = 9007199254740991; // Number.MAX_SAFE_INTEGER
        }
    }
    if (minTime === undefined) {
        if (prevStep) {
            if (step.formatAs && prevStep.formatAs) minTime = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
                round: round
            });
        } else // The first step's `minTime` is `0` by default.
        minTime = 0;
    } // Warn if no `minTime` was defined or could be deduced.
    if (minTime === undefined) console.warn('[javascript-time-ago] A step should specify `minTime`:\n' + JSON.stringify(step, null, 2));
    return minTime;
}
exports.default = getStepMinTime;
function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
    var round = _ref2.round;
    var toUnitAmount = _units.getSecondsInUnit(toUnit); // if (!fromUnit) {
    // 	return toUnitAmount;
    // }
    // if (!fromUnit) {
    // 	fromUnit = getPreviousUnitFor(toUnit)
    // }
    var fromUnitAmount;
    if (fromUnit === 'now') fromUnitAmount = _units.getSecondsInUnit(toUnit);
    else fromUnitAmount = _units.getSecondsInUnit(fromUnit);
    if (toUnitAmount !== undefined && fromUnitAmount !== undefined) return toUnitAmount - fromUnitAmount * (1 - _round.getDiffRatioToNextRoundedNumber(round));
}

},{"./units":"5yijw","../round":"bae8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bae8q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundFunction", ()=>getRoundFunction
) // For non-negative numbers.
;
parcelHelpers.export(exports, "getDiffRatioToNextRoundedNumber", ()=>getDiffRatioToNextRoundedNumber
);
function getRoundFunction(round) {
    switch(round){
        case 'floor':
            return Math.floor;
        default:
            return Math.round;
    }
}
function getDiffRatioToNextRoundedNumber(round) {
    switch(round){
        case 'floor':
            // Math.floor(x) = x
            // Math.floor(x + 1) = x + 1
            return 1;
        default:
            // Math.round(x) = x
            // Math.round(x + 0.5) = x + 1
            return 0.5;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9E9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INFINITY", ()=>INFINITY
);
parcelHelpers.export(exports, "getStepChangesAt", ()=>getStepChangesAt
);
parcelHelpers.export(exports, "getTimeToStepChange", ()=>getTimeToStepChange
);
var _getTimeToNextUpdateForUnit = require("./getTimeToNextUpdateForUnit");
var _getTimeToNextUpdateForUnitDefault = parcelHelpers.interopDefault(_getTimeToNextUpdateForUnit);
var _getStepMinTime = require("./getStepMinTime");
var _getStepMinTimeDefault = parcelHelpers.interopDefault(_getStepMinTime);
var _round = require("../round"); // A thousand years is practically a metaphor for "infinity".
var YEAR = 31536000000;
var INFINITY = 1000 * YEAR;
function getTimeToNextUpdate(date, step, _ref) {
    var prevStep = _ref.prevStep, nextStep = _ref.nextStep, now = _ref.now, future = _ref.future, round = _ref.round;
    var timestamp = date.getTime ? date.getTime() : date;
    var getTimeToNextUpdateForUnit = function getTimeToNextUpdateForUnit(unit) {
        return _getTimeToNextUpdateForUnitDefault.default(unit, timestamp, {
            now: now,
            round: round
        });
    }; // For future dates, steps move from the last one to the first one,
    // while for past dates, steps move from the first one to the last one,
    // due to the fact that time flows in one direction,
    // and future dates' interval naturally becomes smaller
    // while past dates' interval naturally grows larger.
    //
    // For future dates, it's the transition
    // from the current step to the previous step,
    // therefore check the `minTime` of the current step.
    //
    // For past dates, it's the transition
    // from the current step to the next step,
    // therefore check the `minTime` of the next step.
    //
    var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
        future: future,
        now: now,
        round: round,
        prevStep: future ? prevStep : step // isFirstStep: future && isFirstStep
    });
    if (timeToStepChange === undefined) // Can't reliably determine "time to next update"
    // if not all of the steps provide `minTime`.
    return;
    var timeToNextUpdate;
    if (step) {
        if (step.getTimeToNextUpdate) timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
            getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit,
            getRoundFunction: _round.getRoundFunction,
            now: now,
            future: future,
            round: round
        });
        if (timeToNextUpdate === undefined) {
            // "unit" is now called "formatAs".
            var unit1 = step.unit || step.formatAs;
            if (unit1) // For some units, like "now", there's no defined amount of seconds in them.
            // In such cases, `getTimeToNextUpdateForUnit()` returns `undefined`,
            // and the next step's `minTime` could be used to calculate the update interval:
            // it will just assume that the label never changes for this step.
            timeToNextUpdate = getTimeToNextUpdateForUnit(unit1);
        }
    }
    if (timeToNextUpdate === undefined) return timeToStepChange;
    return Math.min(timeToNextUpdate, timeToStepChange);
}
exports.default = getTimeToNextUpdate;
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
    var now = _ref2.now, future = _ref2.future, round = _ref2.round, prevStep = _ref2.prevStep;
    // The first step's `minTime` is `0` by default.
    // It doesn't "change" steps at zero point
    // but it does change the wording when switching
    // from "future" to "past": "in ..." -> "... ago".
    // Therefore, the label should be updated at zero-point too.
    var minTime = _getStepMinTimeDefault.default(currentOrNextStep, {
        timestamp: timestamp,
        now: now,
        future: future,
        round: round,
        prevStep: prevStep
    });
    if (minTime === undefined) return;
    if (future) // The step changes to the previous step
    // as soon as `timestamp - now` becomes
    // less than the `minTime` of the current step:
    // `timestamp - now === minTime - 1`
    // => `now === timestamp - minTime + 1`.
    return timestamp - minTime * 1000 + 1;
    else {
        // The step changes to the next step
        // as soon as `now - timestamp` becomes
        // equal to `minTime` of the next step:
        // `now - timestamp === minTime`
        // => `now === timestamp + minTime`.
        // This is a special case when double-update could be skipped.
        if (minTime === 0 && timestamp === now) return INFINITY;
        return timestamp + minTime * 1000;
    }
}
function getTimeToStepChange(step, timestamp, _ref3) {
    var now = _ref3.now, future = _ref3.future, round = _ref3.round, prevStep = _ref3.prevStep;
    if (step) {
        var stepChangesAt = getStepChangesAt(step, timestamp, {
            now: now,
            future: future,
            round: round,
            prevStep: prevStep
        });
        if (stepChangesAt === undefined) return;
        return stepChangesAt - now;
    } else {
        if (future) // No step.
        // Update right after zero point, when it changes from "future" to "past".
        return timestamp - now + 1;
        else // The last step doesn't ever change when `date` is in the past.
        return INFINITY;
    }
}

},{"./getTimeToNextUpdateForUnit":"6QUaN","./getStepMinTime":"1u11o","../round":"bae8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QUaN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _units = require("./units");
var _round = require("../round");
function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
    var now = _ref.now, round = _ref.round;
    // For some units, like "now", there's no defined amount of seconds in them.
    if (!_units.getSecondsInUnit(unit)) // If there's no amount of seconds defined for this unit
    // then the update interval can't be determined reliably.
    return;
    var unitDenominator = _units.getSecondsInUnit(unit) * 1000;
    var future = timestamp > now;
    var preciseAmount = Math.abs(timestamp - now);
    var roundedAmount = _round.getRoundFunction(round)(preciseAmount / unitDenominator) * unitDenominator;
    if (future) {
        if (roundedAmount > 0) // Amount decreases with time.
        return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round, unitDenominator);
        else // Refresh right after the zero point,
        // when "future" changes to "past".
        return preciseAmount - roundedAmount + 1;
    } // Amount increases with time.
    return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round, unitDenominator);
}
exports.default = getTimeToNextUpdateForUnit;
function getDiffToNextRoundedNumber(round, unitDenominator) {
    return _round.getDiffRatioToNextRoundedNumber(round) * unitDenominator;
}
function getDiffToPreviousRoundedNumber(round, unitDenominator) {
    return (1 - _round.getDiffRatioToNextRoundedNumber(round)) * unitDenominator + 1;
}

},{"./units":"5yijw","../round":"bae8q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b52LM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocaleData", ()=>getLocaleData
);
parcelHelpers.export(exports, "addLocaleData", ()=>addLocaleData
);
// For all locales added
// their relative time formatter messages will be stored here.
var localesData = {
};
function getLocaleData(locale) {
    return localesData[locale];
}
function addLocaleData(localeData) {
    if (!localeData) throw new Error('[javascript-time-ago] No locale data passed.');
     // This locale data is stored in a global variable
    // and later used when calling `.format(time)`.
    localesData[localeData.locale] = localeData;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1i1NF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _round = require("./round"); // just now
var _roundDefault = parcelHelpers.interopDefault(_round);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _roundDefault.default, {
    // Skip "seconds".
    steps: _roundDefault.default.steps.filter(function(step) {
        return step.formatAs !== 'second';
    })
});

},{"./round":"bs56k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bs56k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _round = require("../steps/round"); // just now
var _roundDefault = parcelHelpers.interopDefault(_round);
exports.default = {
    steps: _roundDefault.default,
    labels: 'long'
};

},{"../steps/round":"6f4q1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6f4q1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        formatAs: 'now'
    },
    {
        formatAs: 'second'
    },
    {
        formatAs: 'minute'
    },
    {
        formatAs: 'hour'
    },
    {
        formatAs: 'day'
    },
    {
        formatAs: 'week'
    },
    {
        formatAs: 'month'
    },
    {
        formatAs: 'year'
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibDcZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _round = require("./round");
var _roundDefault = parcelHelpers.interopDefault(_round);
var _roundMinute = require("./roundMinute"); // `approximate` style is deprecated.
var _roundMinuteDefault = parcelHelpers.interopDefault(_roundMinute);
var _approximate = require("./approximate"); // `approximateTime` style is deprecated.
var _approximateDefault = parcelHelpers.interopDefault(_approximate);
var _approximateTime = require("./approximateTime");
var _approximateTimeDefault = parcelHelpers.interopDefault(_approximateTime);
var _twitter = require("./twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
var _twitterNow = require("./twitterNow");
var _twitterNowDefault = parcelHelpers.interopDefault(_twitterNow);
var _twitterMinute = require("./twitterMinute");
var _twitterMinuteDefault = parcelHelpers.interopDefault(_twitterMinute);
var _twitterMinuteNow = require("./twitterMinuteNow");
var _twitterMinuteNowDefault = parcelHelpers.interopDefault(_twitterMinuteNow);
var _twitterFirstMinute = require("./twitterFirstMinute");
var _twitterFirstMinuteDefault = parcelHelpers.interopDefault(_twitterFirstMinute);
var _mini = require("./mini");
var _miniDefault = parcelHelpers.interopDefault(_mini);
var _miniNow = require("./miniNow");
var _miniNowDefault = parcelHelpers.interopDefault(_miniNow);
var _miniMinute = require("./miniMinute");
var _miniMinuteDefault = parcelHelpers.interopDefault(_miniMinute);
var _miniMinuteNow = require("./miniMinuteNow");
var _miniMinuteNowDefault = parcelHelpers.interopDefault(_miniMinuteNow);
function getStyleByName(style) {
    switch(style){
        // "default" style name is deprecated.
        case 'default':
        case 'round':
            return _roundDefault.default;
        case 'round-minute':
            return _roundMinuteDefault.default;
        case 'approximate':
            return _approximateDefault.default;
        // "time" style name is deprecated.
        case 'time':
        case 'approximate-time':
            return _approximateTimeDefault.default;
        case 'mini':
            return _miniDefault.default;
        case 'mini-now':
            return _miniNowDefault.default;
        case 'mini-minute':
            return _miniMinuteDefault.default;
        case 'mini-minute-now':
            return _miniMinuteNowDefault.default;
        case 'twitter':
            return _twitterDefault.default;
        case 'twitter-now':
            return _twitterNowDefault.default;
        case 'twitter-minute':
            return _twitterMinuteDefault.default;
        case 'twitter-minute-now':
            return _twitterMinuteNowDefault.default;
        case 'twitter-first-minute':
            return _twitterFirstMinuteDefault.default;
        default:
            // For historical reasons, the default style is "approximate".
            return _approximateDefault.default;
    }
}
exports.default = getStyleByName;

},{"./round":"bs56k","./roundMinute":"1i1NF","./approximate":"knm9i","./approximateTime":"81LhT","./twitter":"jcPaQ","./twitterNow":"ipomx","./twitterMinute":"gibOb","./twitterMinuteNow":"5PVgj","./twitterFirstMinute":"4kBjo","./mini":"gZv3e","./miniNow":"amfIm","./miniMinute":"kzHFx","./miniMinuteNow":"jbqnz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knm9i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _approximate = require("../steps/approximate"); // "gradation" is a legacy name for "steps".
var _approximateDefault = parcelHelpers.interopDefault(_approximate);
exports.default = {
    gradation: _approximateDefault.default,
    flavour: 'long',
    units: [
        'now',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'year'
    ]
};

},{"../steps/approximate":"6gvhB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gvhB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _units = require("./units"); // "factor" is a legacy property.
exports.default = [
    {
        // This step returns the amount of seconds
        // by dividing the amount of seconds by `1`.
        factor: 1,
        // "now" labels are used for formatting the output.
        unit: 'now'
    },
    {
        // When the language doesn't support `now` unit,
        // the first step is ignored, and it uses this `second` unit.
        threshold: 1,
        // `threshold_for_now` should be the same as `threshold` on minutes.
        threshold_for_now: 45.5,
        // This step returns the amount of seconds
        // by dividing the amount of seconds by `1`.
        factor: 1,
        // "second" labels are used for formatting the output.
        unit: 'second'
    },
    {
        // `threshold` should be the same as `threshold_for_now` on seconds.
        threshold: 45.5,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a minute.
        factor: _units.minute,
        // "minute" labels are used for formatting the output.
        unit: 'minute'
    },
    {
        // This step is effective starting from 2.5 minutes.
        threshold: 2.5 * _units.minute,
        // Allow only 5-minute increments of minutes starting from 2.5 minutes.
        // `granularity` — (advanced) Time interval value "granularity".
        // For example, it could be set to `5` for minutes to allow only 5-minute increments
        // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
        // Perhaps this feature will be removed because there seem to be no use cases
        // of it in the real world.
        granularity: 5,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a minute.
        factor: _units.minute,
        // "minute" labels are used for formatting the output.
        unit: 'minute'
    },
    {
        // This step is effective starting from 22.5 minutes.
        threshold: 22.5 * _units.minute,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in  half-an-hour.
        factor: 0.5 * _units.hour,
        // "half-hour" labels are used for formatting the output.
        // (if available, which is no longer the case)
        unit: 'half-hour'
    },
    {
        // This step is effective starting from 42.5 minutes.
        threshold: 42.5 * _units.minute,
        threshold_for_minute: 52.5 * _units.minute,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in an hour.
        factor: _units.hour,
        // "hour" labels are used for formatting the output.
        unit: 'hour'
    },
    {
        // This step is effective starting from 20.5 hours.
        threshold: 20.5 / 24 * _units.day,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a day.
        factor: _units.day,
        // "day" labels are used for formatting the output.
        unit: 'day'
    },
    {
        // This step is effective starting from 5.5 days.
        threshold: 5.5 * _units.day,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a week.
        factor: _units.week,
        // "week" labels are used for formatting the output.
        unit: 'week'
    },
    {
        // This step is effective starting from 3.5 weeks.
        threshold: 3.5 * _units.week,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a month.
        factor: _units.month,
        // "month" labels are used for formatting the output.
        unit: 'month'
    },
    {
        // This step is effective starting from 10.5 months.
        threshold: 10.5 * _units.month,
        // Return the amount of minutes by dividing the amount
        // of seconds by the amount of seconds in a year.
        factor: _units.year,
        // "year" labels are used for formatting the output.
        unit: 'year'
    }
];

},{"./units":"5yijw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"81LhT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _approximate = require("../steps/approximate"); // "gradation" is a legacy name for "steps".
var _approximateDefault = parcelHelpers.interopDefault(_approximate);
exports.default = {
    gradation: _approximateDefault.default,
    flavour: 'long-time',
    units: [
        'now',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'year'
    ]
};

},{"../steps/approximate":"6gvhB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcPaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _steps = require("../steps");
var _locale = require("../locale"); // For compatibility with the old versions of this library.
var _renameLegacyProperties = require("./renameLegacyProperties"); // Twitter-style relative date/time formatting.
var _renameLegacyPropertiesDefault = parcelHelpers.interopDefault(_renameLegacyProperties);
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
//
// Seconds, minutes or hours are shown for shorter intervals,
// and longer intervals are formatted using full date format.
var steps = [
    {
        formatAs: 'second'
    },
    {
        formatAs: 'minute'
    },
    {
        formatAs: 'hour'
    }
]; // A cache for `Intl.DateTimeFormat` formatters
// for various locales (is a global variable).
var formatters = {
}; // Starting from day intervals, output month and day.
var monthAndDay = {
    minTime: function minTime(timestamp, _ref) {
        var future = _ref.future, getMinTimeForUnit = _ref.getMinTimeForUnit;
        // Returns `23.5 * 60 * 60` when `round` is "round",
        // and `24 * 60 * 60` when `round` is "floor".
        return getMinTimeForUnit('day');
    },
    format: function format(value, locale) {
        /* istanbul ignore else */ if (!formatters[locale]) formatters[locale] = {
        };
        /* istanbul ignore else */ if (!formatters[locale].dayMonth) // "Apr 11" (MMMd)
        formatters[locale].dayMonth = new Intl.DateTimeFormat(locale, {
            month: 'short',
            day: 'numeric'
        });
         // Output month and day.
        return formatters[locale].dayMonth.format(_steps.getDate(value));
    }
}; // If the `date` happened/happens outside of current year,
// then output day, month and year.
// The interval should be such that the `date` lies outside of the current year.
var yearMonthAndDay = {
    minTime: function minTime(timestamp, _ref2) {
        var future = _ref2.future;
        if (future) {
            // January 1, 00:00, of the `date`'s year is right after
            // the maximum `now` for formatting a future date:
            // When `now` is before that date, the `date` is formatted as "day/month/year" (this step),
            // When `now` is equal to or after that date, the `date` is formatted as "day/month" (another step).
            // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
            // The date is right after the maximum `now` for formatting a future date,
            // so subtract 1 millisecond from it.
            var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1; // Return `minTime` (in seconds).
            return (timestamp - maxFittingNow) / 1000;
        } else {
            // January 1, 00:00, of the year following the `date`'s year
            // is the minimum `now` for formatting a past date:
            // When `now` is before that date, the `date` is formatted as "day/month" (another step),
            // When `now` is equal to or after that date, the `date` is formatted as "day/month/year" (this step).
            // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
            var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime(); // Return `minTime` (in seconds).
            return (minFittingNow - timestamp) / 1000;
        }
    },
    format: function format(value, locale) {
        /* istanbul ignore if */ if (!formatters[locale]) formatters[locale] = {
        };
        /* istanbul ignore else */ if (!formatters[locale].dayMonthYear) // "Apr 11, 2017" (yMMMd)
        formatters[locale].dayMonthYear = new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
         // Output day, month and year.
        return formatters[locale].dayMonthYear.format(_steps.getDate(value));
    }
}; // If `Intl.DateTimeFormat` is supported,
// then longer time intervals will be formatted as dates.
/* istanbul ignore else */ if (_locale.intlDateTimeFormatSupported()) steps.push(monthAndDay, yearMonthAndDay);
else steps.push({
    formatAs: 'day'
}, {
    formatAs: 'week'
}, {
    formatAs: 'month'
}, {
    formatAs: 'year'
});
exports.default = {
    steps: steps,
    labels: [
        'mini',
        'short-time',
        // "narrow" labels can sometimes be weird (like "+5d."),
        // but "short" labels have the " ago" part, so "narrow" seem
        // more appropriate.
        // "short" labels would have been more appropriate if they
        // didn't have the " ago" part, hence the "short-time" above.
        'narrow',
        // of this array can be removed.
        'short'
    ]
};

},{"../steps":"2JNVq","../locale":"8JGnT","./renameLegacyProperties":"3kMJ2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JNVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// "convenient" is a legacy name of "approximate" steps.
parcelHelpers.export(exports, "approximate", ()=>_approximateDefault.default
) // "canonical" is a legacy name of "round" steps.
;
parcelHelpers.export(exports, "convenient", ()=>_approximateDefault.default
);
parcelHelpers.export(exports, "round", ()=>_roundDefault.default
);
parcelHelpers.export(exports, "canonical", ()=>_roundDefault.default
);
parcelHelpers.export(exports, "minute", ()=>_units.minute
);
parcelHelpers.export(exports, "hour", ()=>_units.hour
);
parcelHelpers.export(exports, "day", ()=>_units.day
);
parcelHelpers.export(exports, "week", ()=>_units.week
);
parcelHelpers.export(exports, "month", ()=>_units.month
);
parcelHelpers.export(exports, "year", ()=>_units.year
);
parcelHelpers.export(exports, "getDate", ()=>_helpers.getDate
);
var _approximate = require("./approximate");
var _approximateDefault = parcelHelpers.interopDefault(_approximate);
var _round = require("./round");
var _roundDefault = parcelHelpers.interopDefault(_round);
var _units = require("./units");
var _helpers = require("./helpers");

},{"./approximate":"6gvhB","./round":"6f4q1","./units":"5yijw","./helpers":"8kXT7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kXT7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Looks like this one's deprecated.
// /**
//  * Returns a step corresponding to the unit.
//  * @param  {Object[]} steps
//  * @param  {string} unit
//  * @return {?Object}
//  */
// export function getStepForUnit(steps, unit) {
// 	for (const step of steps) {
// 		if (step.unit === unit) {
// 			return step
// 		}
// 	}
// }
// Looks like this one won't be used in the next major version.
/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */ parcelHelpers.export(exports, "getDate", ()=>getDate
);
function getDate(value) {
    return value instanceof Date ? value : new Date(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kMJ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renameLegacyProperties = require("../steps/renameLegacyProperties"); // This function is only used for backwards compatibility
var _renameLegacyPropertiesDefault = parcelHelpers.interopDefault(_renameLegacyProperties);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = function(style_) {
    var style = _objectSpread({
    }, style_);
    if (style.steps) {
        style.gradation = style.steps.map(_renameLegacyPropertiesDefault.default);
        delete style.steps;
    }
    if (style.labels) {
        style.flavour = style.labels;
        delete style.labels;
    }
    return style;
};

},{"../steps/renameLegacyProperties":"72jdg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72jdg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = function(step_) {
    var step = _objectSpread({
    }, step_);
    if (step.minTime !== undefined) {
        if (_typeof(step.minTime) === 'object') {
            var _arr = Object.keys(step.minTime);
            for(var _i = 0; _i < _arr.length; _i++){
                var key = _arr[_i];
                if (key === 'default') step.threshold = step.minTime.default;
                else step["threshold_for_".concat(key)] = step.minTime[key];
            }
        } else step.threshold = step.minTime;
        delete step.minTime;
    }
    if (step.formatAs) {
        step.unit = step.formatAs;
        delete step.formatAs;
    }
    return step;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipomx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twitter = require("./twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _twitterDefault.default, {
    // Add "now".
    steps: [
        {
            formatAs: 'now'
        }
    ].concat(_twitterDefault.default.steps)
});

},{"./twitter":"jcPaQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gibOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twitter = require("./twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _twitterDefault.default, {
    // Skip "seconds".
    steps: _twitterDefault.default.steps.filter(function(step) {
        return step.formatAs !== 'second';
    })
});

},{"./twitter":"jcPaQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PVgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twitterMinute = require("./twitterMinute");
var _twitterMinuteDefault = parcelHelpers.interopDefault(_twitterMinute);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _twitterMinuteDefault.default, {
    // Add "now".
    steps: [
        {
            formatAs: 'now'
        }
    ].concat(_twitterMinuteDefault.default.steps)
});

},{"./twitterMinute":"gibOb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kBjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _units = require("../steps/units");
var _twitter = require("./twitter");
var _twitterDefault = parcelHelpers.interopDefault(_twitter);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _twitterDefault.default, {
    // Skip "seconds".
    steps: _twitterDefault.default.steps.filter(function(step) {
        return step.formatAs !== 'second';
    }) // Start showing `1m` from the first minute.
    .map(function(step) {
        return step.formatAs === 'minute' ? _objectSpread({
        }, step, {
            minTime: _units.minute
        }) : step;
    })
});

},{"../steps/units":"5yijw","./twitter":"jcPaQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZv3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    steps: [
        {
            formatAs: 'second'
        },
        {
            formatAs: 'minute'
        },
        {
            formatAs: 'hour'
        },
        {
            formatAs: 'day'
        },
        {
            formatAs: 'month'
        },
        {
            formatAs: 'year'
        }
    ],
    labels: [
        'mini',
        'short-time',
        // "narrow" labels can sometimes be weird (like "+5d."),
        // but "short" labels have the " ago" part, so "narrow" seem
        // more appropriate.
        // "short" labels would have been more appropriate if they
        // didn't have the " ago" part, hence the "short-time" above.
        'narrow',
        // of this array can be removed.
        'short'
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amfIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mini = require("./mini");
var _miniDefault = parcelHelpers.interopDefault(_mini);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _miniDefault.default, {
    // Add "now".
    steps: [
        {
            formatAs: 'now'
        }
    ].concat(_miniDefault.default.steps)
});

},{"./mini":"gZv3e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzHFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mini = require("./mini");
var _miniDefault = parcelHelpers.interopDefault(_mini);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _miniDefault.default, {
    // Skip "seconds".
    steps: _miniDefault.default.steps.filter(function(step) {
        return step.formatAs !== 'second';
    })
});

},{"./mini":"gZv3e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbqnz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _miniMinute = require("./miniMinute");
var _miniMinuteDefault = parcelHelpers.interopDefault(_miniMinute);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _objectSpread({
}, _miniMinuteDefault.default, {
    // Add "now".
    steps: [
        {
            formatAs: 'now'
        }
    ].concat(_miniMinuteDefault.default.steps)
});

},{"./miniMinute":"kzHFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kC0rm":[function(require,module,exports) {
module.exports = JSON.parse("{\"locale\":\"en\",\"long\":{\"year\":{\"previous\":\"last year\",\"current\":\"this year\",\"next\":\"next year\",\"past\":{\"one\":\"{0} year ago\",\"other\":\"{0} years ago\"},\"future\":{\"one\":\"in {0} year\",\"other\":\"in {0} years\"}},\"quarter\":{\"previous\":\"last quarter\",\"current\":\"this quarter\",\"next\":\"next quarter\",\"past\":{\"one\":\"{0} quarter ago\",\"other\":\"{0} quarters ago\"},\"future\":{\"one\":\"in {0} quarter\",\"other\":\"in {0} quarters\"}},\"month\":{\"previous\":\"last month\",\"current\":\"this month\",\"next\":\"next month\",\"past\":{\"one\":\"{0} month ago\",\"other\":\"{0} months ago\"},\"future\":{\"one\":\"in {0} month\",\"other\":\"in {0} months\"}},\"week\":{\"previous\":\"last week\",\"current\":\"this week\",\"next\":\"next week\",\"past\":{\"one\":\"{0} week ago\",\"other\":\"{0} weeks ago\"},\"future\":{\"one\":\"in {0} week\",\"other\":\"in {0} weeks\"}},\"day\":{\"previous\":\"yesterday\",\"current\":\"today\",\"next\":\"tomorrow\",\"past\":{\"one\":\"{0} day ago\",\"other\":\"{0} days ago\"},\"future\":{\"one\":\"in {0} day\",\"other\":\"in {0} days\"}},\"hour\":{\"current\":\"this hour\",\"past\":{\"one\":\"{0} hour ago\",\"other\":\"{0} hours ago\"},\"future\":{\"one\":\"in {0} hour\",\"other\":\"in {0} hours\"}},\"minute\":{\"current\":\"this minute\",\"past\":{\"one\":\"{0} minute ago\",\"other\":\"{0} minutes ago\"},\"future\":{\"one\":\"in {0} minute\",\"other\":\"in {0} minutes\"}},\"second\":{\"current\":\"now\",\"past\":{\"one\":\"{0} second ago\",\"other\":\"{0} seconds ago\"},\"future\":{\"one\":\"in {0} second\",\"other\":\"in {0} seconds\"}}},\"short\":{\"year\":{\"previous\":\"last yr.\",\"current\":\"this yr.\",\"next\":\"next yr.\",\"past\":\"{0} yr. ago\",\"future\":\"in {0} yr.\"},\"quarter\":{\"previous\":\"last qtr.\",\"current\":\"this qtr.\",\"next\":\"next qtr.\",\"past\":{\"one\":\"{0} qtr. ago\",\"other\":\"{0} qtrs. ago\"},\"future\":{\"one\":\"in {0} qtr.\",\"other\":\"in {0} qtrs.\"}},\"month\":{\"previous\":\"last mo.\",\"current\":\"this mo.\",\"next\":\"next mo.\",\"past\":\"{0} mo. ago\",\"future\":\"in {0} mo.\"},\"week\":{\"previous\":\"last wk.\",\"current\":\"this wk.\",\"next\":\"next wk.\",\"past\":\"{0} wk. ago\",\"future\":\"in {0} wk.\"},\"day\":{\"previous\":\"yesterday\",\"current\":\"today\",\"next\":\"tomorrow\",\"past\":{\"one\":\"{0} day ago\",\"other\":\"{0} days ago\"},\"future\":{\"one\":\"in {0} day\",\"other\":\"in {0} days\"}},\"hour\":{\"current\":\"this hour\",\"past\":\"{0} hr. ago\",\"future\":\"in {0} hr.\"},\"minute\":{\"current\":\"this minute\",\"past\":\"{0} min. ago\",\"future\":\"in {0} min.\"},\"second\":{\"current\":\"now\",\"past\":\"{0} sec. ago\",\"future\":\"in {0} sec.\"}},\"narrow\":{\"year\":{\"previous\":\"last yr.\",\"current\":\"this yr.\",\"next\":\"next yr.\",\"past\":\"{0} yr. ago\",\"future\":\"in {0} yr.\"},\"quarter\":{\"previous\":\"last qtr.\",\"current\":\"this qtr.\",\"next\":\"next qtr.\",\"past\":{\"one\":\"{0} qtr. ago\",\"other\":\"{0} qtrs. ago\"},\"future\":{\"one\":\"in {0} qtr.\",\"other\":\"in {0} qtrs.\"}},\"month\":{\"previous\":\"last mo.\",\"current\":\"this mo.\",\"next\":\"next mo.\",\"past\":\"{0} mo. ago\",\"future\":\"in {0} mo.\"},\"week\":{\"previous\":\"last wk.\",\"current\":\"this wk.\",\"next\":\"next wk.\",\"past\":\"{0} wk. ago\",\"future\":\"in {0} wk.\"},\"day\":{\"previous\":\"yesterday\",\"current\":\"today\",\"next\":\"tomorrow\",\"past\":{\"one\":\"{0} day ago\",\"other\":\"{0} days ago\"},\"future\":{\"one\":\"in {0} day\",\"other\":\"in {0} days\"}},\"hour\":{\"current\":\"this hour\",\"past\":\"{0} hr. ago\",\"future\":\"in {0} hr.\"},\"minute\":{\"current\":\"this minute\",\"past\":\"{0} min. ago\",\"future\":\"in {0} min.\"},\"second\":{\"current\":\"now\",\"past\":\"{0} sec. ago\",\"future\":\"in {0} sec.\"}},\"short-time\":{\"year\":\"{0} yr.\",\"month\":\"{0} mo.\",\"week\":\"{0} wk.\",\"day\":{\"one\":\"{0} day\",\"other\":\"{0} days\"},\"hour\":\"{0} hr.\",\"minute\":\"{0} min.\",\"second\":\"{0} sec.\"},\"long-time\":{\"year\":{\"one\":\"{0} year\",\"other\":\"{0} years\"},\"month\":{\"one\":\"{0} month\",\"other\":\"{0} months\"},\"week\":{\"one\":\"{0} week\",\"other\":\"{0} weeks\"},\"day\":{\"one\":\"{0} day\",\"other\":\"{0} days\"},\"hour\":{\"one\":\"{0} hour\",\"other\":\"{0} hours\"},\"minute\":{\"one\":\"{0} minute\",\"other\":\"{0} minutes\"},\"second\":{\"one\":\"{0} second\",\"other\":\"{0} seconds\"}},\"now\":{\"now\":{\"current\":\"now\",\"future\":\"in a moment\",\"past\":\"just now\"}},\"tiny\":{\"year\":\"{0}yr\",\"month\":\"{0}mo\",\"week\":\"{0}wk\",\"day\":\"{0}d\",\"hour\":\"{0}h\",\"minute\":\"{0}m\",\"second\":\"{0}s\",\"now\":\"now\"},\"mini\":{\"year\":\"{0}yr\",\"month\":\"{0}mo\",\"week\":\"{0}wk\",\"day\":\"{0}d\",\"hour\":\"{0}h\",\"minute\":\"{0}m\",\"second\":\"{0}s\",\"now\":\"now\"}}");

},{}],"fi9s5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "loading_spinner.27a3f4ad.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cMpiy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.21bad73c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hZEc4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "loading_spinner_small.444a601c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"54ci3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
class TopHeadlinesView extends _viewJs.View {
    _targetElement = document.querySelector('[data-category="top stories"]');
    topHeadlinesClickHandler(handler) {
        this._targetElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.menu-link');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
}
exports.default = new TopHeadlinesView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OMXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
class SearchHistoryView extends _viewJs.View {
    _targetElement = document.querySelector('[data-title="history"]');
    _containerClassName1 = 'search-history-container';
    _containerClassName2 = 'search-history';
    // Element for "Clear All" button
    _additionalElement = '<button data-title="history" data-icon-name = "icon-time" class="btn btn-clear">Clear All</button>';
    _errorMessage = 'No search history found.';
    _errorIconName = 'icon-sad-face';
    searchHistoryClickHandler(handler) {
        this._targetElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.menu-link');
            handler(targetElement);
        });
    }
    clearSearchHistoryClickHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.btn-clear');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
    _createMarkup = (data)=>{
        return `${data.map((search)=>{
            return `
            <p class="search-history-title">${search}</p>
        `;
        }).join('')}`;
    };
}
exports.default = new SearchHistoryView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2E3DL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
class LocalNewsView extends _viewJs.View {
    _targetElement = document.querySelector('.nav-btn--local-news');
    localNewsClickHandler(handler) {
        this._targetElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.nav-btn--local-news');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
}
exports.default = new LocalNewsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _javascriptTimeAgo = require("javascript-time-ago");
var _javascriptTimeAgoDefault = parcelHelpers.interopDefault(_javascriptTimeAgo);
var _enJson = require("javascript-time-ago/locale/en.json");
var _enJsonDefault = parcelHelpers.interopDefault(_enJson);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./view.js");
_javascriptTimeAgoDefault.default.addLocale(_enJsonDefault.default);
class BookmarksView extends _viewJs.View {
    _targetElement = document.querySelector('[data-title="saved searches"]');
    _containerClassName1 = 'saved-searches-container';
    _containerClassName2 = 'saved-search';
    _errorMessage = 'Save news to get started...';
    _errorIconName = 'icon-newspaper';
    bookmarkClickHandler(handler) {
        this._targetElement.addEventListener('click', function(e) {
            const targetElement = e.target.closest('.menu-link');
            if (!targetElement) return;
            handler(targetElement);
        });
    }
    _createMarkup = (data)=>{
        const timeAgo = new _javascriptTimeAgoDefault.default('en-US');
        return `${data.map((bookmark)=>{
            return `<div class="news">
              <div class="news-content">
                <h2 class="news-title">
                  <a href="${bookmark.url}" target="_blank"
                    >${bookmark.title}</a
                  >
                </h2>

                <div class="news-info">
                  <span class="news-source">${bookmark.source.name}</span>
                  <span class="news-time">${timeAgo.format(new Date(bookmark.publishedAt))}</span>
                </div>

                <div class="news-menu">
                  <button class="btn btn--news btn--save">
                    <svg class="menu-icon">
                      <use href="${_iconsSvgDefault.default}#icon-bookmark"></use>
                    </svg>
                  </button>

                  <button class="btn btn--news btn--share">
                    <svg class="menu-icon">
                    <use href="${_iconsSvgDefault.default}#icon-share-social"></use>
                </svg>
                  </button>
                </div>
              </div>
              <img
              src="${bookmark.urlToImage}"
              alt="${bookmark.title}" class="saved-news-img">
            </div>
    `;
        }).join('')}`;
    };
}
exports.default = new BookmarksView();

},{"javascript-time-ago":"hYK2Y","javascript-time-ago/locale/en.json":"kC0rm","../../img/icons.svg":"cMpiy","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire23e7")

//# sourceMappingURL=index.e37f48ea.js.map
