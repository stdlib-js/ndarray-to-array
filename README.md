<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ndarray2array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert an [ndarray][@stdlib/ndarray/ctor] to a generic array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-to-array
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
```

#### ndarray2array( arr )

Converts an [ndarray][@stdlib/ndarray/ctor] to a generic array (which may include nested arrays).

```javascript
var ndarray = require( '@stdlib/ndarray-ctor' );

var buffer = [ 1, 2, 3, 4 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
// returns <ndarray>

var out = ndarray2array( arr );
// returns [ [ 1, 2 ], [ 3, 4 ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

// Create a data buffer:
var buffer = zeroTo( 27 );

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'column-major';
var ndims = shape.length;

// Compute array meta data:
var strides = shape2strides( shape, order );
var offset = strides2offset( shape, strides );

// Print array information:
console.log( '' );
console.log( 'Dims: %s', shape.join( 'x' ) );

// Randomly flip strides and convert an ndarray to a nested array...
var arr;
var i;
var j;
for ( i = 0; i < 20; i++ ) {
    j = discreteUniform( 0, ndims-1 );
    strides[ j ] *= -1;
    offset = strides2offset( shape, strides );

    console.log( '' );
    console.log( 'Strides: %s', strides.join( ',' ) );
    console.log( 'Offset: %d', offset );

    arr = ndarray( 'generic', buffer, shape, strides, offset, order );
    console.log( JSON.stringify( ndarray2array( arr ) ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-to-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-to-array

[test-image]: https://github.com/stdlib-js/ndarray-to-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-to-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-to-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-to-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-to-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-to-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-to-array/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-to-array/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-to-array/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-to-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-to-array/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
