'use strict';

/**
* NOTE: the original C++ code and copyright notice is from the [Boost library]{http://www.boost.org/doc/libs/1_43_0/boost/math/tools/rational.hpp}.
*
* The implementation has been modified for JavaScript.
*/

/**
* (C) Copyright John Maddock 2006.
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/

// NOTES //

/**
* erfinv( x )
*
* Method:
*   1. For `|x| <= 0.5`, evaluate inverse erf using a rational approximation:
*
*        erfinv = x(x+10)(Y+R(x))
*
*      where `Y` is a constant and `R(x)` is optimized for a low absolute error compared to `|Y|`. Max error `2.001849e-18`.
*
*   2. For `0.5 > 1-|x| >= 0`, evaluate inverse erf using the rational approximation:
*
*        erfinv = sqrt(-2*log(1-x)) / (Y + R(1-x))
*
*      where `Y `is a constant, and R(q) is optimized for a low absolute error compared to `Y`. Max error `7.403372e-17`.
*
*   3. For `1-|x| < 0.25`, we have a series of rational approximations all of the general form:
*
*        p = sqrt(-log(1-x))
*
*      Then the result is given by:
*
*        erfinv = p(Y+R(p-B))
*
*      where `Y` is a constant, `B` is the lowest value of `p` for which the approximation is valid, and `R(x-B)` is optimized for a low absolute error compared to `Y`.
*
*   Notes:
*     - Almost all code will really go through the first or maybe second approximation.  After that we are dealing with very small input values.
*
*       If `p < 3`, max error `1.089051e-20`.
*       If `p < 6`, max error `8.389174e-21`.
*       If `p < 18`, max error `1.481312e-19`.
*       If `p < 44`, max error `5.697761e-20`.
*       If `p >= 44`, max error `1.279746e-20`.
*
*     - The Boost library can accommodate 80 and 128 bit long doubles. JavaScript only supports a 64 bit double (IEEE754). Accordingly, the smallest `p` (in JavaScript at the time of this writing) is `sqrt(-log(~5e-324)) = 27.284429111150214`.
*/


// MODULES //

var evalpoly = require( 'math-evalpoly' ).factory;


// CONSTANTS //



// ERFINV //

/**
* FUNCTION: erfinv()
*	
*
* @returns {Void}
*/
function erfinv() {

} // end FUNCTION erfinv()


// EXPORTS //

module.exports = erfinv;
