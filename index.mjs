// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-strides@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-offset@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-data-buffer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function a(a){if(!s(a))throw new TypeError(m("invalid argument. Must provide an ndarray. Value: `%s`.",a));return r(n(a),d(a),t(a),e(a),i(a))}export{a as default};
//# sourceMappingURL=index.mjs.map
