module temp(a,b,c,d);
input a,b,c;
output d;

wire s;
assign s = a & b & c;
wire h;
assign h = a + b + c;
wire m; assign m = a | b | c;
assign d = m | h | a;
endmodule
