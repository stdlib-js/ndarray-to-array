"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var t=u(function(h,a){
var n=require('@stdlib/assert-is-ndarray-like/dist'),s=require('@stdlib/ndarray-base-to-array/dist'),v=require('@stdlib/ndarray-strides/dist'),q=require('@stdlib/ndarray-offset/dist'),d=require('@stdlib/ndarray-shape/dist'),o=require('@stdlib/ndarray-order/dist'),y=require('@stdlib/ndarray-data-buffer/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r){if(!n(r))throw new TypeError(g('1dfDv',r));return s(y(r),d(r),v(r),q(r),o(r))}a.exports=f
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
