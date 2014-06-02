

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	// initiate the command, and an empty response object
	transicc( "lab", "cmyk", [ l, a, b ], function( cmyk ){

		// construct a response
		var response = {
			"c": Math.round( cmyk[0] ),
			"m": Math.round( cmyk[1] ),
			"y": Math.round( cmyk[2] ),
			"k": Math.round( cmyk[3] )
		};
		
		// pass it into the callback
		callback( response );

	});

};

