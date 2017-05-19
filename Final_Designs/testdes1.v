module alu( input [31:0] A, B, input [3:0] F,
              output reg [31:0] Y,
             output Zero , input [4:0] shamt,input[15:0] imm);
    wire [31:0] S, Bout;

  assign Bout = F[3] ? ~B : B;
  assign S = A + Bout + F[3];

    always @ (*)
      case (F[2:0])
        3'b000: Y <= A & Bout;
        3'b010: Y <= A | Bout;
        3'b100: Y <= S;
        3'b110: Y <= S[31];
        3'b111: Y <= B<<shamt;
        3'b101: Y <= B>>shamt;
        3'b011: Y <= B>>>shamt;
        3'b001: Y <= {imm,16'b0};
      endcase

      assign Zero = (Y == 32'b0);

endmodule
