'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );
var erfinv = require( './../lib' );


// FIXTURES //

var x1 = require( './fixtures/x_-0.5_0.5.json' );
var x2 = require( './fixtures/x_-0.5_-0.75.json' );
var x3 = require( './fixtures/x_0.5_0.75.json' );
var x4 = require( './fixtures/x_0.75_0.9998.json' );
var x5 = require( './fixtures/x_0.9998_0.9999..8.json' );
var x6 = require( './fixtures/x_0.9999..8_1.json' );


// FUNCTIONS //

function almostEqual( a, b, tol ) {
	var delta = abs( a - b );
	tol = tol * Math.max( 1, abs( a ), abs( b ) );
	return ( delta <= tol );
}


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

tape( 'the function evaluates the inverse error function for `x` on the interval `[-0.5,0.5]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x1.expected;
	x = x1.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse error function for `x` on the interval `[-0.5,-0.75]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x2.expected;
	x = x2.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse error function for `x` on the interval `[0.5,0.75]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 4e-16;

	expected = x3.expected;
	x = x3.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse error function for `x` on the interval `[0.75,0.9998]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 2.8e-15;

	expected = x4.expected;
	x = x4.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse error function for `x` on the interval `[0.9998,0.9999..8]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 1.85e-15;

	expected = x5.expected;
	x = x5.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the inverse error function for `x` on the interval `[0.9999..8,1]', function test( t ) {
	var expected;
	var bool;
	var tol;
	var x;
	var y;
	var i;

	tol = 1.75e-16;

	expected = x6.expected;
	x = x6.x;
	for ( i = 0; i < x.length; i++ ) {
		y = erfinv( x[i] );
		if ( expected[ i ] === null ) {
			expected[ i ] = PINF;
		}
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		}  else {
			bool = almostEqual( y, expected[i], tol );
			t.ok( bool, 'within tolerance. x: '+x[i]+'. y: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});


