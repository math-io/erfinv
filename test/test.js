'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var erfinv = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof erfinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = erfinv( NaN );
	t.ok( y !== y, 'returns NaN' );
	t.end();
});

tape( 'if provided `1`, the function returns `+infinity`', function test( t ) {
	var y = erfinv( 1 );
	t.equal( y, PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided `-1`, the function returns `-infinity`', function test( t ) {
	var y = erfinv( -1 );
	t.equal( y, NINF, 'returns `-infinity`' );
	t.end();
});

tape( 'if provided `-0`, the function returns `-0`', function test( t ) {
	var y = erfinv( -0 );
	t.equal( y, 0, 'returns 0' );
	t.equal( 1/y, NINF, 'returns `-0`' );
	t.end();
});

tape( 'if provided `0`, the function returns `0`', function test( t ) {
	var y = erfinv( 0 );
	t.equal( y, 0, 'returns 0' );
	t.equal( 1/y, PINF, 'returns `+0`' );
	t.end();
});

tape( 'if provided a value which is either less than `-1` or greater than `1`, the function throws a range error', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-3.14,
		-1.00000001,
		1.00000001,
		PINF,
		NINF
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			erfinv( value );
		};
	}
});


