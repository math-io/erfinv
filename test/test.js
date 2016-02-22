'use strict';

// MODULES //

var tape = require( 'tape' );
var erfinv = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof erfinv, 'function', 'main export is a function' );
	t.end();
});
