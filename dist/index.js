"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=i(function(c,a){
var u=require('@stdlib/assert-is-ndarray-like/dist'),n=require('@stdlib/ndarray-base-to-array/dist'),s=require('@stdlib/ndarray-strides/dist'),v=require('@stdlib/ndarray-offset/dist'),q=require('@stdlib/ndarray-shape/dist'),d=require('@stdlib/ndarray-order/dist'),o=require('@stdlib/ndarray-data-buffer/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function g(r){if(!u(r))throw new TypeError(y('1dfDv',r));return n(o(r),q(r),s(r),v(r),d(r))}a.exports=g
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
