'use strict';

var linspace = require( 'compute-linspace' );
var erfinv = require( './../lib' );

var x = linspace( -1, 1, 100 );
var y;
var i;

for ( i = 0; i < x.length; i++ ) {
	y = erfinv( x[ i ] );
	console.log( 'x: %d, erfinv(x): %d', x[ i ], y );
}