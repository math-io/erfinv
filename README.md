erfinv
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Inverse error function][inverse-error-function].

The [inverse error function][inverse-error-function] is defined in terms of the [Maclaurin series][maclaurin-series]

<div class="equation" align="center" data-raw-text="\operatorname{erf}^{-1}(z)=\sum_{k=0}^\infty\frac{c_k}{2k+1}\left (\frac{\sqrt{\pi}}{2}z\right )^{2k+1}" data-equation="eq:inverse_error_function">
	<img src="" alt="Inverse error function.">
	<br>
</div>

where `c_0 = 1` and 

<div class="equation" align="center" data-raw-text="c_k=\sum_{m=0}^{k-1}\frac{c_m c_{k-1-m}}{(m+1)(2m+1)} = \left\{1,1,\frac{7}{6},\frac{127}{90},\frac{4369}{2520},\frac{34807}{16200},\ldots\right\}" data-equation="eq:inverse_error_function_series_coefficients">
	<img src="" alt="Series coefficients.">
	<br>
</div>


## Installation

``` bash
$ npm install math-erfinv
```


## Usage

``` javascript
var erfinv = require( 'math-erfinv' );
```

#### erfinv( x )

Evaluates the [inverse error function][inverse-error-function].

``` javascript
var y = erfinv(  );
// returns 

y = erfinv(  );
// returns
```

If provided `NaN`, the `function` returns `NaN`.

``` javascript
var y = erfinv( NaN );
// returns NaN
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var erfinv = require( 'math-erfinv' );

var x = linspace( 0, 2, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
	y = erfinv( x[ i ] );
	console.log( 'x: %d, erfinv(x): %d', x[ i ], y );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-erfinv.svg
[npm-url]: https://npmjs.org/package/math-erfinv

[build-image]: http://img.shields.io/travis/math-io/erfinv/master.svg
[build-url]: https://travis-ci.org/math-io/erfinv

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/erfinv/master.svg
[coverage-url]: https://codecov.io/github/math-io/erfinv?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/erfinv.svg
[dependencies-url]: https://david-dm.org/math-io/erfinv

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/erfinv.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/erfinv

[github-issues-image]: http://img.shields.io/github/issues/math-io/erfinv.svg
[github-issues-url]: https://github.com/math-io/erfinv/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[inverse-error-function]: https://en.wikipedia.org/wiki/Error_function#Inverse_functions
[maclaurin-series]: http://mathworld.wolfram.com/MaclaurinSeries.html