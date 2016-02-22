# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	y = Array( Float64, length( x ) );
	for i in eachindex(x)
		y[i] = erfinv( x[i] );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# |x| <= 0.5
x = linspace( -0.5, 0.5, 3000 );
gen( x, "x_-0.5_0.5.json" );

# 1-|x| > 0.25
x = linspace( 0.5, 0.75, 500 );
gen( x, "x_0.5_0.75.json" );

x = linspace( -0.5, -0.75, 500 );
gen( x, "x_-0.5_-0.75.json" );

# 0.75 < |x| < 0.9998765901959134
x = linspace( 0.75, 0.9998, 500 );
gen( x, "x_0.75_0.9998.json" );

# 0.9998765901959134 < |x| < 0.9999999999999998
x = linspace( 0.9998, 0.9999999999999998, 500 );
gen( x, "x_0.9998_0.9999..8.json" );

# 0.9999999999999998 < |x| < 1
x = linspace( 0.9999999999999998, 1, 500 );
gen( x, "x_0.9999..8_1.json" );