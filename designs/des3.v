module temp(clk,rst,en,a,b,c,f);
input [11:0] a,b,c;
output reg [11:0] f;
input clk,rst,en;
reg [11:0] d;

always@(posedge clk)
begin
    if(!rst)
        d <= 0;
    else
        begin
            d <= ~b;
            d <= d + (a | c);
        end
end

always@(posedge clk)
begin
    if(!rst)
        f <= 0;
    else
        begin
            f <= d + 1;
            f <= f & a & b;
        end

end
endmodule
