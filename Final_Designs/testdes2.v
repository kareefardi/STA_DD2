module CLAn(x,y,ci,co,s);
parameter n = 16;
input [n-1:0] x,y;
input ci;
output co;
output [n-1:0] s;
wire[n-1:0] gen,prop,c;
genvar i;

assign c[0] = ci;
assign gen = x&y;
assign prop = x|y;
for(i=1;i<n;i= i+1) begin 
    assign c[i] = gen[i-1] | (prop[i-1]& c[i-1]);
end
assign co = gen[n-1] | (prop[n-1]&c[n-1]);
assign s = x^y^c;
endmodule
