module temp(clk,rst,en,a,b,c,d);
input [11:0] a,b,c;
input clk,rst,en;
output reg [11:0] d;

always@(posedge clk)
begin
    if(!rst)
        d <= 0;
    else
        begin
            d <= a + b + c + 1;
            d <= d | b | c | a;
        end
end
endmodule
