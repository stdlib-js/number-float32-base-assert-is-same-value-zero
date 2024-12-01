/** @license Apache-2.0 */

'use strict';

/**
* Test if two single-precision floating-point numbers are the same value.
*
* @module @stdlib/number-float32-base-assert-is-same-value-zero
*
* @example
* var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
* var isSameValueZerof = require( '@stdlib/number-float32-base-assert-is-same-value-zero' );
*
* var bool = isSameValueZerof( toFloat32( 3.14 ), toFloat32( 3.14 ) );
* // returns true
*
* bool = isSameValueZerof( toFloat32( -0.0 ), toFloat32( -0.0 ) );
* // returns true
*
* bool = isSameValueZerof( toFloat32( -0.0 ), toFloat32( 0.0 ) );
* // returns true
*
* bool = isSameValueZerof( toFloat32( NaN ), toFloat32( NaN ) );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
