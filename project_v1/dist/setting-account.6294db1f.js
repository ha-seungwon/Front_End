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
})({"a66kl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "111f17966294db1f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aIa6Q":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropdown");
    var dropdownText1 = dropdown.querySelector(".text704");
    dropdownText1.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });
    var options = document.querySelectorAll(".dropdown-content a");
    options.forEach(function(option) {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            var selectedOption = option.textContent;
            dropdownText1.textContent = selectedOption;
            dropdown.classList.remove("active");
        });
    });
    window.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) dropdown.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");
    var settingContainer = document.getElementById("settingContainer");
    if (settingContainer) settingContainer.addEventListener("click", function(e) {
        window.location.href = "setting-account.html";
    });
    var menu01Container = document.getElementById("menu01Container");
    if (menu01Container) menu01Container.addEventListener("click", function(e) {
        window.location.href = "./dashboard.html";
    });
    var menu02 = document.getElementById("menu02");
    if (menu02) menu02.addEventListener("click", function(e) {
        window.location.href = "./record.html";
    });
    var menu03Container = document.getElementById("menu03Container");
    if (menu03Container) menu03Container.addEventListener("click", function(e) {
        window.location.href = "./personal-information.html";
    });
    var menu04Container = document.getElementById("menu04Container");
    if (menu04Container) menu04Container.addEventListener("click", function(e) {
        window.location.href = "./application-information1.html";
    });
    var option02Container = document.getElementById("option02Container");
    if (option02Container) option02Container.addEventListener("click", function(e) {
        window.location.href = "./setting-personal-information.html";
    });
});
// password validation
const passwordInput = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");
const passwordResult = document.getElementById("password_result");
const passwordResult2 = document.getElementById("password_result2");
document.addEventListener("DOMContentLoaded", function() {
    let password1_result = 0;
    let password2_result = 0;
    // password 처리
    passwordInput.addEventListener("input", checkPasswordValidity);
    function checkPasswordValidity() {
        const password = passwordInput.value;
        var errorMessage = "";
        const lengthRegex = /^.{9,16}$/;
        const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if (!lengthRegex.test(password)) errorMessage = "비밀번호는 9자 이상 16자 이하로 입력하세요.";
        else if (!alphanumericRegex.test(password)) errorMessage = "비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.";
        /*
        else if (!nameCheck) {
            errorMessage = "비밀번호에 사용자 이름이 포함되어 있습니다.";
        } else if (!pastPasswordsCheck) {
            errorMessage = "비밀번호가 과거에 사용된 적이 있습니다.";
        }
        */ passwordResult.textContent = errorMessage || "비밀번호가 유효합니다.";
    }
    // repassword 처리
    passwordInput2.addEventListener("input", checkPasswordMatch);
    function checkPasswordMatch() {
        const password1 = passwordInput.value;
        const password2 = passwordInput2.value;
        if (password1 === password2) {
            passwordResult2.textContent = "비밀번호가 일치합니다.";
            password1_result = 1;
            password2_result = 1;
        } else passwordResult2.textContent = "비밀번호가 일치하지 않습니다.";
    }
    // 저장하기 버튼 클릭
    const signUpBtn = document.querySelector(".button2");
    signUpBtn.addEventListener("click", async function() {
        var nameInputValue = "";
        if (name_result) nameInputValue = nameInput.value;
        var emailInputValue = "";
        mail_result = 1;
        if (mail_result) emailInputValue = emailInput.value; // Get the value from the email input
        var password1InputValue = "";
        if (password_result) password1InputValue = passwordInput.value; // Get the value from the first password input
        var password2InputValue = "";
        if (password2_result) password2InputValue = passwordInput2.value; // Get the value from the second password input
        if (password1InputValue !== password2InputValue) {
            alert("비밀번호와 재비밀번호의 값은 같아야합니다.");
            return;
        }
        const checkBoxSelected = check_box.classList.contains("selected_box");
        const selectedApplicationType = dropdownText.textContent;
        if (checkBoxSelected) {
            // applicationType name -> key
            const response = await fetch(currentDomain + "/api/applicationType/key", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectedApplicationType)
            });
            if (!response.ok) throw new Error("Failed to fetch data");
            const responseBody = await response.json(); // JSON 데이터 파싱
            const applicationTypeKey = responseBody.applicationTypeKey;
            // 프론트 로그
            console.log("이름 입력 값:", nameInputValue);
            console.log("이메일 입력 값:", emailInputValue);
            console.log("비밀번호 입력 값:", password1InputValue);
            console.log("개인정보 이용 동의 여부:", checkBoxSelected);
            console.log("희망 지망 직렬 선택:", applicationTypeKey);
            // 회원가입 - 서버에 요청
            const userData = {
                name: nameInputValue,
                email: emailInputValue,
                password: password1InputValue,
                applicationType: applicationTypeKey
            };
            try {
                const response = await fetch(currentDomain + "/api/member/signUp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });
                if (!response.ok) {
                    const data = await response.text();
                    throw new Error(data || "회원가입 실패");
                }
                alert("회원가입을 성공했습니다.");
            } catch (error) {
                alert(error.message);
            }
        } else alert("개인정보 이용 동의 여부를 체크해주세요");
    });
});
function togglePasswordVisibility(inputElementId) {
    var passwordInput = document.getElementById(inputElementId);
    var eyeIcon = document.querySelector(`#${inputElementId} + .password-toggle`);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        // 변경된 path 또는 추가적인 path 등을 포함한 아이콘 내용으로 변경
        eyeIcon.innerHTML = `<path d="M20.2501 21.0001C20.1516 21.0003 20.054 20.9809 19.963 20.9432C19.872 20.9054 19.7894 20.8501 19.7199 20.7802L3.21994 4.28025C3.08522 4.13845 3.01123 3.94964 3.01373 3.75407C3.01624 3.5585 3.09504 3.37164 3.23334 3.23334C3.37164 3.09504 3.5585 3.01624 3.75407 3.01373C3.94964 3.01123 4.13845 3.08522 4.28025 3.21994L20.7803 19.7199C20.8851 19.8248 20.9564 19.9584 20.9854 20.1039C21.0143 20.2493 20.9994 20.4001 20.9427 20.5371C20.8859 20.6741 20.7899 20.7912 20.6666 20.8736C20.5433 20.956 20.3984 21 20.2501 21.0001V21.0001Z" fill="#21272A"/>
                           <path d="M11.984 18.0002C10.0392 18.0002 8.16371 17.4245 6.40965 16.2892C4.81261 15.258 3.37496 13.7809 2.25183 12.0236V12.0198C3.18652 10.6806 4.21027 9.54812 5.30996 8.635C5.31991 8.62668 5.32802 8.61639 5.33379 8.60478C5.33956 8.59317 5.34285 8.58048 5.34347 8.56753C5.34409 8.55458 5.34201 8.54164 5.33737 8.52953C5.33273 8.51742 5.32563 8.50641 5.31652 8.49719L4.38277 7.56484C4.36618 7.54811 4.34389 7.53824 4.32035 7.5372C4.29682 7.53616 4.27375 7.54402 4.25574 7.55922C3.08761 8.54359 2.0034 9.75109 1.01761 11.1648C0.848014 11.4083 0.754608 11.6966 0.749266 11.9932C0.743924 12.2899 0.826888 12.5814 0.987615 12.8308C2.22558 14.7681 3.81886 16.3998 5.59449 17.5487C7.59371 18.8439 9.74527 19.5002 11.984 19.5002C13.1924 19.4964 14.3923 19.2973 15.5371 18.9105C15.5522 18.9053 15.5658 18.8965 15.5765 18.8846C15.5872 18.8728 15.5947 18.8585 15.5983 18.8429C15.602 18.8274 15.6015 18.8112 15.5972 18.7959C15.5928 18.7805 15.5845 18.7666 15.5732 18.7553L14.5617 17.7437C14.5384 17.721 14.5096 17.7048 14.4781 17.6965C14.4466 17.6883 14.4136 17.6884 14.3821 17.6969C13.5987 17.8986 12.793 18.0005 11.984 18.0002V18.0002Z" fill="#21272A"/>
                           <path d="M23.0081 11.1844C21.7678 9.26625 20.1586 7.63688 18.3548 6.47203C16.3594 5.18203 14.1562 4.5 11.9841 4.5C10.7884 4.50212 9.60172 4.70543 8.47358 5.10141C8.45855 5.10664 8.4451 5.11561 8.4345 5.12747C8.42389 5.13934 8.41648 5.15371 8.41296 5.16923C8.40945 5.18475 8.40994 5.20091 8.41439 5.21619C8.41885 5.23147 8.42712 5.24536 8.43843 5.25656L9.44858 6.26672C9.4721 6.28984 9.5013 6.30634 9.53323 6.31457C9.56516 6.3228 9.5987 6.32246 9.63046 6.31359C10.3978 6.10602 11.1891 6.00058 11.9841 6C13.8914 6 15.7612 6.58266 17.5411 7.73438C19.1681 8.78437 20.6226 10.26 21.7486 12C21.7494 12.0011 21.7499 12.0024 21.7499 12.0037C21.7499 12.0051 21.7494 12.0064 21.7486 12.0075C20.9313 13.2942 19.9171 14.4446 18.743 15.4167C18.7329 15.425 18.7247 15.4353 18.7188 15.4469C18.713 15.4586 18.7096 15.4713 18.7089 15.4843C18.7083 15.4973 18.7103 15.5103 18.715 15.5225C18.7196 15.5347 18.7268 15.5457 18.7359 15.555L19.6687 16.4873C19.6852 16.504 19.7074 16.5139 19.7308 16.515C19.7543 16.5161 19.7773 16.5084 19.7953 16.4934C21.0487 15.4381 22.1337 14.1975 23.0128 12.8147C23.1682 12.571 23.2503 12.2878 23.2495 11.9988C23.2487 11.7098 23.1649 11.4272 23.0081 11.1844V11.1844Z" fill="#21272A"/>
                           <path d="M12 7.5C11.6629 7.49982 11.3269 7.53756 10.9983 7.6125C10.9817 7.61595 10.9663 7.62383 10.9538 7.63531C10.9414 7.64679 10.9322 7.66144 10.9274 7.6777C10.9226 7.69395 10.9223 7.71121 10.9265 7.72763C10.9308 7.74405 10.9393 7.75901 10.9514 7.77094L16.2291 13.0472C16.241 13.0592 16.2559 13.0678 16.2724 13.0721C16.2888 13.0763 16.306 13.076 16.3223 13.0712C16.3386 13.0663 16.3532 13.0572 16.3647 13.0447C16.3762 13.0323 16.384 13.0169 16.3875 13.0003C16.5378 12.3413 16.5376 11.6568 16.3871 10.9979C16.2365 10.3389 15.9395 9.72228 15.518 9.19385C15.0964 8.66542 14.5613 8.23874 13.9523 7.9455C13.3432 7.65226 12.6759 7.49999 12 7.5V7.5Z" fill="#21272A"/>
                           <path d="M7.77091 10.9526C7.75899 10.9406 7.74402 10.932 7.7276 10.9278C7.71118 10.9235 7.69392 10.9238 7.67767 10.9287C7.66141 10.9335 7.64676 10.9426 7.63528 10.9551C7.6238 10.9675 7.61592 10.9829 7.61247 10.9995C7.44248 11.7422 7.46382 12.5158 7.67451 13.248C7.88519 13.9801 8.27832 14.6468 8.81704 15.1855C9.35577 15.7243 10.0224 16.1174 10.7546 16.3281C11.4868 16.5388 12.2604 16.5601 13.0031 16.3901C13.0197 16.3867 13.035 16.3788 13.0475 16.3673C13.06 16.3558 13.0691 16.3412 13.0739 16.3249C13.0787 16.3087 13.0791 16.2914 13.0748 16.275C13.0706 16.2586 13.062 16.2436 13.05 16.2317L7.77091 10.9526Z" fill="#21272A"/>
                          `;
    } else {
        passwordInput.type = "password";
        // 변경된 path 또는 추가적인 path 등을 포함한 아이콘 내용으로 변경
        eyeIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M1.01759 11.1645C4.0676 6.79251 8.02225 4.5 11.9841 4.5C16.6371 4.5 20.6453 7.53129 23.0101 11.1836L23.0112 11.1853C23.1677 11.4285 23.2509 11.7115 23.2509 12.0007C23.2509 12.2893 23.168 12.5719 23.012 12.8147C20.6493 16.5141 16.6671 19.5 11.9841 19.5C7.2513 19.5 3.3458 16.5203 0.988892 12.8317C0.828743 12.583 0.745679 12.2925 0.750173 11.9968C0.754679 11.7002 0.846976 11.4117 1.0154 11.1676L1.01759 11.1645ZM2.25001 12.0196L2.25208 12.0228C4.42901 15.4304 7.91813 18 11.9841 18C16.0045 18 19.5689 15.4195 21.7484 12.0065L21.7498 12.0043C21.7505 12.0032 21.7509 12.002 21.7509 12.0007C21.7509 12.0002 21.7508 11.9996 21.7507 11.9991C21.7505 11.9985 21.7503 11.9979 21.7499 11.9973C19.5621 8.61915 15.9686 6 11.9841 6C8.63995 6 5.10025 7.93555 2.25001 12.0196Z" fill="#21272A"/>
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12Z" fill="#21272A"/>
                          `;
    }
}
// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080";
async function fetchApplicationTypeName() {
    const applicationTypeDropDownContent = document.getElementById("applicationTypeDropDownContent");
    await fetch(currentDomain + "/api/applicationType/names").then((response)=>response.json()).then((responseJson)=>{
        const options = responseJson.applicationTypeNames;
        options.forEach(function(option) {
            const aElement = document.createElement("a");
            aElement.href = "#"; // 링크를 원하는 주소로 수정 가능
            aElement.textContent = option;
            applicationTypeDropDownContent.appendChild(aElement);
        });
    }).catch(()=>{
        throw new Error("Failed to fetch data");
    });
}
fetchApplicationTypeName();

},{}]},["a66kl","aIa6Q"], "aIa6Q", "parcelRequiredc1e")

//# sourceMappingURL=setting-account.6294db1f.js.map
