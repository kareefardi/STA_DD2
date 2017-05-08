module Next(
	input[5:0] x,
	input y,
	input [5:0]n,
	output z
);
	assign z = x | y + n;
	
endmodule
