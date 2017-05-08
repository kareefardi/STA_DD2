module test1 (x, y, z);
	input x;
	input y;
	output z;
	wire tmp;
	assign tmp = x ^ y;
	assign z = tmp & y;
endmodule
