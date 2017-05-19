{
  "creator": "Yosys 0.7 (git sha1 61f6811, gcc 5.4.0-6ubuntu1~16.04.4 -O2 -fstack-protector-strong -fPIC -Os)",
  "modules": {
    "counter": {
      "attributes": {
        "top": 1,
        "src": "testdes3.v:1"
      },
      "ports": {
        "out": {
          "direction": "output",
          "bits": [ 2, 3, 4, 5, 6, 7, 8, 9 ]
        },
        "enable": {
          "direction": "input",
          "bits": [ 10 ]
        },
        "clk": {
          "direction": "input",
          "bits": [ 11 ]
        },
        "reset": {
          "direction": "input",
          "bits": [ 12 ]
        }
      },
      "cells": {
        "$abc$630$auto$blifparse.cc:286:parse_blif$631": {
          "hide_name": 1,
          "type": "AND2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 10 ],
            "B": [ 2 ],
            "Y": [ 13 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$632": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 12 ],
            "Y": [ 14 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$633": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 10 ],
            "B": [ 2 ],
            "C": [ 14 ],
            "Y": [ 15 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$634": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 13 ],
            "B": [ 15 ],
            "Y": [ 16 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$635": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 3 ],
            "B": [ 10 ],
            "C": [ 2 ],
            "Y": [ 17 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$636": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 17 ],
            "Y": [ 18 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$637": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 3 ],
            "B": [ 13 ],
            "C": [ 14 ],
            "Y": [ 19 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$638": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 18 ],
            "B": [ 19 ],
            "Y": [ 20 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$639": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 4 ],
            "Y": [ 21 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$640": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 21 ],
            "B": [ 17 ],
            "Y": [ 22 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$641": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 4 ],
            "B": [ 18 ],
            "C": [ 14 ],
            "Y": [ 23 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$642": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 22 ],
            "B": [ 23 ],
            "Y": [ 24 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$643": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 5 ],
            "Y": [ 25 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$644": {
          "hide_name": 1,
          "type": "NOR3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 21 ],
            "B": [ 25 ],
            "C": [ 17 ],
            "Y": [ 26 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$645": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 5 ],
            "B": [ 22 ],
            "C": [ 14 ],
            "Y": [ 27 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$646": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 26 ],
            "B": [ 27 ],
            "Y": [ 28 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$647": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "B": [ 26 ],
            "C": [ 14 ],
            "Y": [ 29 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$648": {
          "hide_name": 1,
          "type": "AOI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "B": [ 26 ],
            "C": [ 29 ],
            "Y": [ 30 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$649": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "Y": [ 31 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$650": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 7 ],
            "Y": [ 32 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$651": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 4 ],
            "B": [ 5 ],
            "C": [ 18 ],
            "Y": [ 33 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$652": {
          "hide_name": 1,
          "type": "NOR3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 31 ],
            "B": [ 32 ],
            "C": [ 33 ],
            "Y": [ 34 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$653": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 31 ],
            "B": [ 33 ],
            "C": [ 32 ],
            "Y": [ 35 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$654": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 14 ],
            "B": [ 35 ],
            "Y": [ 36 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$655": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 34 ],
            "B": [ 36 ],
            "Y": [ 37 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$656": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "B": [ 34 ],
            "C": [ 14 ],
            "Y": [ 38 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$657": {
          "hide_name": 1,
          "type": "AOI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "B": [ 34 ],
            "C": [ 38 ],
            "Y": [ 39 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$658": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "Y": [ 40 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$659": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "B": [ 7 ],
            "C": [ 26 ],
            "Y": [ 41 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$660": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 40 ],
            "B": [ 41 ],
            "C": [ 9 ],
            "Y": [ 42 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$661": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 9 ],
            "Y": [ 43 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$662": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "B": [ 43 ],
            "C": [ 34 ],
            "Y": [ 44 ]
          }
        },
        "$abc$630$auto$blifparse.cc:286:parse_blif$663": {
          "hide_name": 1,
          "type": "AOI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 44 ],
            "B": [ 42 ],
            "C": [ 12 ],
            "Y": [ 45 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$73": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 16 ],
            "Q": [ 2 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$74": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 20 ],
            "Q": [ 3 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$75": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 24 ],
            "Q": [ 4 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$76": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 28 ],
            "Q": [ 5 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$77": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 30 ],
            "Q": [ 6 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$78": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 37 ],
            "Q": [ 7 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$79": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 39 ],
            "Q": [ 8 ]
          }
        },
        "$auto$simplemap.cc:420:simplemap_dff$80": {
          "hide_name": 1,
          "type": "DFFPOSX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "CLK": [ 11 ],
            "D": [ 45 ],
            "Q": [ 9 ]
          }
        }
      },
      "netnames": {
        "$0\\out[7:0]": {
          "hide_name": 1,
          "bits": [ 16, 20, 24, 28, 30, 37, 39, 45 ],
          "attributes": {
            "src": "testdes3.v:10"
          }
        },
        "$abc$630$n19_1": {
          "hide_name": 1,
          "bits": [ 13 ],
          "attributes": {
          }
        },
        "$abc$630$n20": {
          "hide_name": 1,
          "bits": [ 14 ],
          "attributes": {
          }
        },
        "$abc$630$n21": {
          "hide_name": 1,
          "bits": [ 15 ],
          "attributes": {
          }
        },
        "$abc$630$n23": {
          "hide_name": 1,
          "bits": [ 17 ],
          "attributes": {
          }
        },
        "$abc$630$n24_1": {
          "hide_name": 1,
          "bits": [ 18 ],
          "attributes": {
          }
        },
        "$abc$630$n25_1": {
          "hide_name": 1,
          "bits": [ 19 ],
          "attributes": {
          }
        },
        "$abc$630$n27_1": {
          "hide_name": 1,
          "bits": [ 21 ],
          "attributes": {
          }
        },
        "$abc$630$n28_1": {
          "hide_name": 1,
          "bits": [ 22 ],
          "attributes": {
          }
        },
        "$abc$630$n29_1": {
          "hide_name": 1,
          "bits": [ 23 ],
          "attributes": {
          }
        },
        "$abc$630$n31_1": {
          "hide_name": 1,
          "bits": [ 25 ],
          "attributes": {
          }
        },
        "$abc$630$n32_1": {
          "hide_name": 1,
          "bits": [ 26 ],
          "attributes": {
          }
        },
        "$abc$630$n33_1": {
          "hide_name": 1,
          "bits": [ 27 ],
          "attributes": {
          }
        },
        "$abc$630$n35": {
          "hide_name": 1,
          "bits": [ 29 ],
          "attributes": {
          }
        },
        "$abc$630$n37": {
          "hide_name": 1,
          "bits": [ 31 ],
          "attributes": {
          }
        },
        "$abc$630$n38": {
          "hide_name": 1,
          "bits": [ 32 ],
          "attributes": {
          }
        },
        "$abc$630$n39": {
          "hide_name": 1,
          "bits": [ 33 ],
          "attributes": {
          }
        },
        "$abc$630$n40": {
          "hide_name": 1,
          "bits": [ 34 ],
          "attributes": {
          }
        },
        "$abc$630$n41": {
          "hide_name": 1,
          "bits": [ 35 ],
          "attributes": {
          }
        },
        "$abc$630$n42": {
          "hide_name": 1,
          "bits": [ 36 ],
          "attributes": {
          }
        },
        "$abc$630$n44": {
          "hide_name": 1,
          "bits": [ 38 ],
          "attributes": {
          }
        },
        "$abc$630$n46": {
          "hide_name": 1,
          "bits": [ 40 ],
          "attributes": {
          }
        },
        "$abc$630$n47": {
          "hide_name": 1,
          "bits": [ 41 ],
          "attributes": {
          }
        },
        "$abc$630$n48": {
          "hide_name": 1,
          "bits": [ 42 ],
          "attributes": {
          }
        },
        "$abc$630$n49": {
          "hide_name": 1,
          "bits": [ 43 ],
          "attributes": {
          }
        },
        "$abc$630$n50": {
          "hide_name": 1,
          "bits": [ 44 ],
          "attributes": {
          }
        },
        "clk": {
          "hide_name": 0,
          "bits": [ 11 ],
          "attributes": {
            "src": "testdes3.v:8"
          }
        },
        "enable": {
          "hide_name": 0,
          "bits": [ 10 ],
          "attributes": {
            "src": "testdes3.v:8"
          }
        },
        "out": {
          "hide_name": 0,
          "bits": [ 2, 3, 4, 5, 6, 7, 8, 9 ],
          "attributes": {
            "src": "testdes3.v:7"
          }
        },
        "reset": {
          "hide_name": 0,
          "bits": [ 12 ],
          "attributes": {
            "src": "testdes3.v:8"
          }
        }
      }
    }
  }
}
