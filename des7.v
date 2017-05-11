module temp(clk,rst,en,a,b,c,f);
input a,b,c;
output reg f;
input clk,rst,en;
reg d;

always@(posedge clk)
begin
    if(!rst)
        d <= 0;
    else
        begin
            d <= ~b & ~c;
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
            f <= f & a;
        end

end
endmodule
