{
  "creator": "Yosys 0.7 (git sha1 61f6811, gcc 5.4.0-6ubuntu1~16.04.4 -O2 -fstack-protector-strong -fPIC -Os)",
  "modules": {
    "CLAn": {
      "attributes": {
        "top": 1,
        "src": "testdes2.v:1"
      },
      "ports": {
        "x": {
          "direction": "input",
          "bits": [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ]
        },
        "y": {
          "direction": "input",
          "bits": [ 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33 ]
        },
        "ci": {
          "direction": "input",
          "bits": [ 34 ]
        },
        "co": {
          "direction": "output",
          "bits": [ 35 ]
        },
        "s": {
          "direction": "output",
          "bits": [ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ]
        }
      },
      "cells": {
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4992": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 34 ],
            "Y": [ 52 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4993": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 2 ],
            "B": [ 18 ],
            "Y": [ 53 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4994": {
          "hide_name": 1,
          "type": "OR2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 2 ],
            "B": [ 18 ],
            "Y": [ 54 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4995": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 52 ],
            "B": [ 53 ],
            "Y": [ 55 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4996": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 2 ],
            "B": [ 18 ],
            "C": [ 55 ],
            "Y": [ 56 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4997": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 34 ],
            "B": [ 54 ],
            "C": [ 56 ],
            "Y": [ 57 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4998": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 52 ],
            "B": [ 53 ],
            "C": [ 57 ],
            "Y": [ 36 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$4999": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 3 ],
            "B": [ 19 ],
            "Y": [ 58 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5000": {
          "hide_name": 1,
          "type": "OR2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 3 ],
            "B": [ 19 ],
            "Y": [ 59 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5001": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 58 ],
            "B": [ 59 ],
            "Y": [ 60 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5002": {
          "hide_name": 1,
          "type": "XOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 56 ],
            "B": [ 60 ],
            "Y": [ 37 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5003": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 4 ],
            "B": [ 20 ],
            "Y": [ 61 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5004": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 4 ],
            "B": [ 20 ],
            "Y": [ 62 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5005": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 62 ],
            "Y": [ 63 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5006": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 61 ],
            "B": [ 63 ],
            "Y": [ 64 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5007": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 2 ],
            "B": [ 18 ],
            "C": [ 34 ],
            "Y": [ 65 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5008": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 53 ],
            "B": [ 58 ],
            "C": [ 65 ],
            "Y": [ 66 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5009": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 3 ],
            "B": [ 19 ],
            "C": [ 66 ],
            "Y": [ 67 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5010": {
          "hide_name": 1,
          "type": "XOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 67 ],
            "B": [ 64 ],
            "Y": [ 38 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5011": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 5 ],
            "B": [ 21 ],
            "Y": [ 68 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5012": {
          "hide_name": 1,
          "type": "OR2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 5 ],
            "B": [ 21 ],
            "Y": [ 69 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5013": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 68 ],
            "B": [ 69 ],
            "Y": [ 70 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5014": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 62 ],
            "B": [ 67 ],
            "C": [ 61 ],
            "Y": [ 71 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5015": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 71 ],
            "B": [ 70 ],
            "Y": [ 39 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5016": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "B": [ 22 ],
            "Y": [ 72 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5017": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 6 ],
            "B": [ 22 ],
            "Y": [ 73 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5018": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 73 ],
            "Y": [ 74 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5019": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 72 ],
            "B": [ 74 ],
            "Y": [ 75 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5020": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 59 ],
            "B": [ 63 ],
            "C": [ 66 ],
            "Y": [ 76 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5021": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 61 ],
            "B": [ 68 ],
            "C": [ 76 ],
            "Y": [ 77 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5022": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 5 ],
            "B": [ 21 ],
            "C": [ 77 ],
            "Y": [ 78 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5023": {
          "hide_name": 1,
          "type": "XOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 78 ],
            "B": [ 75 ],
            "Y": [ 40 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5024": {
          "hide_name": 1,
          "type": "AND2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 7 ],
            "B": [ 23 ],
            "Y": [ 79 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5025": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 79 ],
            "Y": [ 80 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5026": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 7 ],
            "B": [ 23 ],
            "Y": [ 81 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5027": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 81 ],
            "Y": [ 82 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5028": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 82 ],
            "B": [ 80 ],
            "Y": [ 83 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5029": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 73 ],
            "B": [ 78 ],
            "C": [ 72 ],
            "Y": [ 84 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5030": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 84 ],
            "B": [ 83 ],
            "Y": [ 41 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5031": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 69 ],
            "B": [ 74 ],
            "C": [ 77 ],
            "Y": [ 85 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5032": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 72 ],
            "B": [ 80 ],
            "C": [ 85 ],
            "Y": [ 86 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5033": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 7 ],
            "B": [ 23 ],
            "C": [ 86 ],
            "Y": [ 87 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5034": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "B": [ 24 ],
            "Y": [ 88 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5035": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 87 ],
            "Y": [ 89 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5036": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 8 ],
            "B": [ 24 ],
            "Y": [ 90 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5037": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 90 ],
            "Y": [ 91 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5038": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 82 ],
            "B": [ 91 ],
            "C": [ 86 ],
            "Y": [ 92 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5039": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 88 ],
            "B": [ 92 ],
            "Y": [ 93 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5040": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 93 ],
            "Y": [ 94 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5041": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 89 ],
            "B": [ 91 ],
            "C": [ 94 ],
            "Y": [ 95 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5042": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 87 ],
            "B": [ 88 ],
            "C": [ 95 ],
            "Y": [ 42 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5043": {
          "hide_name": 1,
          "type": "AND2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 9 ],
            "B": [ 25 ],
            "Y": [ 96 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5044": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 96 ],
            "Y": [ 97 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5045": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 9 ],
            "B": [ 25 ],
            "Y": [ 98 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5046": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 98 ],
            "Y": [ 99 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5047": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 99 ],
            "B": [ 97 ],
            "Y": [ 100 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5048": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 93 ],
            "B": [ 100 ],
            "Y": [ 43 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5049": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 10 ],
            "Y": [ 101 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5050": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 26 ],
            "Y": [ 102 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5051": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 101 ],
            "B": [ 102 ],
            "Y": [ 103 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5052": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 10 ],
            "B": [ 26 ],
            "Y": [ 104 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5053": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 104 ],
            "B": [ 103 ],
            "Y": [ 105 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5054": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 88 ],
            "B": [ 97 ],
            "C": [ 92 ],
            "Y": [ 106 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5055": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 9 ],
            "B": [ 25 ],
            "C": [ 106 ],
            "Y": [ 107 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5056": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 107 ],
            "B": [ 105 ],
            "Y": [ 44 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5057": {
          "hide_name": 1,
          "type": "AND2X2",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 11 ],
            "B": [ 27 ],
            "Y": [ 108 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5058": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 108 ],
            "Y": [ 109 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5059": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 11 ],
            "B": [ 27 ],
            "Y": [ 110 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5060": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 110 ],
            "Y": [ 111 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5061": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 111 ],
            "B": [ 109 ],
            "Y": [ 112 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5062": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 104 ],
            "Y": [ 113 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5063": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 99 ],
            "B": [ 113 ],
            "C": [ 106 ],
            "Y": [ 114 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5064": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 101 ],
            "B": [ 102 ],
            "C": [ 114 ],
            "Y": [ 115 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5065": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 115 ],
            "B": [ 112 ],
            "Y": [ 45 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5066": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 12 ],
            "B": [ 28 ],
            "Y": [ 116 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5067": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 12 ],
            "B": [ 28 ],
            "Y": [ 117 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5068": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 117 ],
            "Y": [ 118 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5069": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 116 ],
            "B": [ 118 ],
            "Y": [ 119 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5070": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 103 ],
            "Y": [ 120 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5071": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 120 ],
            "B": [ 109 ],
            "C": [ 114 ],
            "Y": [ 121 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5072": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 11 ],
            "B": [ 27 ],
            "C": [ 121 ],
            "Y": [ 122 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5073": {
          "hide_name": 1,
          "type": "XOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 122 ],
            "B": [ 119 ],
            "Y": [ 46 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5074": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 13 ],
            "Y": [ 123 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5075": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 29 ],
            "Y": [ 124 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5076": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 123 ],
            "B": [ 124 ],
            "Y": [ 125 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5077": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 125 ],
            "Y": [ 126 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5078": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 123 ],
            "B": [ 124 ],
            "Y": [ 127 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5079": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 127 ],
            "B": [ 126 ],
            "Y": [ 128 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5080": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 117 ],
            "B": [ 122 ],
            "C": [ 116 ],
            "Y": [ 129 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5081": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 129 ],
            "B": [ 128 ],
            "Y": [ 47 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5082": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 14 ],
            "Y": [ 130 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5083": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 30 ],
            "Y": [ 131 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5084": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 130 ],
            "B": [ 131 ],
            "Y": [ 132 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5085": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 14 ],
            "B": [ 30 ],
            "Y": [ 133 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5086": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 133 ],
            "B": [ 132 ],
            "Y": [ 134 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5087": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 111 ],
            "B": [ 118 ],
            "C": [ 121 ],
            "Y": [ 135 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5088": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 116 ],
            "B": [ 126 ],
            "C": [ 135 ],
            "Y": [ 136 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5089": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 13 ],
            "B": [ 29 ],
            "C": [ 136 ],
            "Y": [ 137 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5090": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 137 ],
            "B": [ 134 ],
            "Y": [ 48 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5091": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 15 ],
            "Y": [ 138 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5092": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 31 ],
            "Y": [ 139 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5093": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 138 ],
            "B": [ 139 ],
            "Y": [ 140 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5094": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 15 ],
            "B": [ 31 ],
            "Y": [ 141 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5095": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 141 ],
            "B": [ 140 ],
            "Y": [ 142 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5096": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 133 ],
            "Y": [ 143 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5097": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 127 ],
            "B": [ 143 ],
            "C": [ 136 ],
            "Y": [ 144 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5098": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 130 ],
            "B": [ 131 ],
            "C": [ 144 ],
            "Y": [ 145 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5099": {
          "hide_name": 1,
          "type": "XOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 145 ],
            "B": [ 142 ],
            "Y": [ 49 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5100": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 16 ],
            "Y": [ 146 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5101": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 32 ],
            "Y": [ 147 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5102": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 146 ],
            "B": [ 147 ],
            "Y": [ 148 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5103": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 16 ],
            "B": [ 32 ],
            "Y": [ 149 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5104": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 149 ],
            "B": [ 148 ],
            "Y": [ 150 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5105": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 132 ],
            "Y": [ 151 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5106": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 140 ],
            "Y": [ 152 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5107": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 151 ],
            "B": [ 152 ],
            "C": [ 144 ],
            "Y": [ 153 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5108": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 15 ],
            "B": [ 31 ],
            "C": [ 153 ],
            "Y": [ 154 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5109": {
          "hide_name": 1,
          "type": "XNOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 154 ],
            "B": [ 150 ],
            "Y": [ 50 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5110": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 149 ],
            "Y": [ 155 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5111": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 17 ],
            "Y": [ 156 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5112": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 33 ],
            "Y": [ 157 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5113": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 156 ],
            "B": [ 157 ],
            "Y": [ 158 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5114": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 17 ],
            "B": [ 33 ],
            "Y": [ 159 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5115": {
          "hide_name": 1,
          "type": "NOR2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 159 ],
            "B": [ 158 ],
            "Y": [ 160 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5116": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 160 ],
            "Y": [ 161 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5117": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 148 ],
            "Y": [ 162 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5118": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 141 ],
            "Y": [ 163 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5119": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 54 ],
            "B": [ 59 ],
            "C": [ 55 ],
            "Y": [ 164 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5120": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 58 ],
            "B": [ 61 ],
            "C": [ 164 ],
            "Y": [ 165 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5121": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 63 ],
            "B": [ 69 ],
            "C": [ 165 ],
            "Y": [ 166 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5122": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 68 ],
            "B": [ 72 ],
            "C": [ 166 ],
            "Y": [ 167 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5123": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 74 ],
            "B": [ 82 ],
            "C": [ 167 ],
            "Y": [ 168 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5124": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 80 ],
            "B": [ 88 ],
            "C": [ 168 ],
            "Y": [ 169 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5125": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 91 ],
            "B": [ 99 ],
            "C": [ 169 ],
            "Y": [ 170 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5126": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 97 ],
            "B": [ 120 ],
            "C": [ 170 ],
            "Y": [ 171 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5127": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 113 ],
            "B": [ 111 ],
            "C": [ 171 ],
            "Y": [ 172 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5128": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 109 ],
            "B": [ 116 ],
            "C": [ 172 ],
            "Y": [ 173 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5129": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 118 ],
            "B": [ 127 ],
            "C": [ 173 ],
            "Y": [ 174 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5130": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 126 ],
            "B": [ 151 ],
            "C": [ 174 ],
            "Y": [ 175 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5131": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 143 ],
            "B": [ 163 ],
            "C": [ 175 ],
            "Y": [ 176 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5132": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 152 ],
            "B": [ 162 ],
            "C": [ 176 ],
            "Y": [ 177 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5133": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 155 ],
            "B": [ 161 ],
            "C": [ 177 ],
            "Y": [ 178 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5134": {
          "hide_name": 1,
          "type": "AOI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 153 ],
            "B": [ 163 ],
            "C": [ 148 ],
            "Y": [ 179 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5135": {
          "hide_name": 1,
          "type": "OAI21X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 149 ],
            "B": [ 179 ],
            "C": [ 160 ],
            "Y": [ 180 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5136": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 180 ],
            "B": [ 178 ],
            "Y": [ 51 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5137": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 158 ],
            "Y": [ 181 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5138": {
          "hide_name": 1,
          "type": "INVX1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 159 ],
            "Y": [ 182 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5139": {
          "hide_name": 1,
          "type": "NAND3X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 155 ],
            "B": [ 182 ],
            "C": [ 177 ],
            "Y": [ 183 ]
          }
        },
        "$abc$4991$auto$blifparse.cc:286:parse_blif$5140": {
          "hide_name": 1,
          "type": "NAND2X1",
          "parameters": {
          },
          "attributes": {
          },
          "connections": {
            "A": [ 181 ],
            "B": [ 183 ],
            "Y": [ 35 ]
          }
        }
      },
      "netnames": {
        "$abc$4991$n100_1": {
          "hide_name": 1,
          "bits": [ 95 ],
          "attributes": {
          }
        },
        "$abc$4991$n102_1": {
          "hide_name": 1,
          "bits": [ 96 ],
          "attributes": {
          }
        },
        "$abc$4991$n103_1": {
          "hide_name": 1,
          "bits": [ 97 ],
          "attributes": {
          }
        },
        "$abc$4991$n104_1": {
          "hide_name": 1,
          "bits": [ 98 ],
          "attributes": {
          }
        },
        "$abc$4991$n105_1": {
          "hide_name": 1,
          "bits": [ 99 ],
          "attributes": {
          }
        },
        "$abc$4991$n106_1": {
          "hide_name": 1,
          "bits": [ 100 ],
          "attributes": {
          }
        },
        "$abc$4991$n108_1": {
          "hide_name": 1,
          "bits": [ 101 ],
          "attributes": {
          }
        },
        "$abc$4991$n109_1": {
          "hide_name": 1,
          "bits": [ 102 ],
          "attributes": {
          }
        },
        "$abc$4991$n110_1": {
          "hide_name": 1,
          "bits": [ 103 ],
          "attributes": {
          }
        },
        "$abc$4991$n111_1": {
          "hide_name": 1,
          "bits": [ 104 ],
          "attributes": {
          }
        },
        "$abc$4991$n112_1": {
          "hide_name": 1,
          "bits": [ 105 ],
          "attributes": {
          }
        },
        "$abc$4991$n113_1": {
          "hide_name": 1,
          "bits": [ 106 ],
          "attributes": {
          }
        },
        "$abc$4991$n114_1": {
          "hide_name": 1,
          "bits": [ 107 ],
          "attributes": {
          }
        },
        "$abc$4991$n116_1": {
          "hide_name": 1,
          "bits": [ 108 ],
          "attributes": {
          }
        },
        "$abc$4991$n117_1": {
          "hide_name": 1,
          "bits": [ 109 ],
          "attributes": {
          }
        },
        "$abc$4991$n118_1": {
          "hide_name": 1,
          "bits": [ 110 ],
          "attributes": {
          }
        },
        "$abc$4991$n119_1": {
          "hide_name": 1,
          "bits": [ 111 ],
          "attributes": {
          }
        },
        "$abc$4991$n120_1": {
          "hide_name": 1,
          "bits": [ 112 ],
          "attributes": {
          }
        },
        "$abc$4991$n121_1": {
          "hide_name": 1,
          "bits": [ 113 ],
          "attributes": {
          }
        },
        "$abc$4991$n122_1": {
          "hide_name": 1,
          "bits": [ 114 ],
          "attributes": {
          }
        },
        "$abc$4991$n123_1": {
          "hide_name": 1,
          "bits": [ 115 ],
          "attributes": {
          }
        },
        "$abc$4991$n125": {
          "hide_name": 1,
          "bits": [ 116 ],
          "attributes": {
          }
        },
        "$abc$4991$n126": {
          "hide_name": 1,
          "bits": [ 117 ],
          "attributes": {
          }
        },
        "$abc$4991$n127_1": {
          "hide_name": 1,
          "bits": [ 118 ],
          "attributes": {
          }
        },
        "$abc$4991$n128": {
          "hide_name": 1,
          "bits": [ 119 ],
          "attributes": {
          }
        },
        "$abc$4991$n129": {
          "hide_name": 1,
          "bits": [ 120 ],
          "attributes": {
          }
        },
        "$abc$4991$n130": {
          "hide_name": 1,
          "bits": [ 121 ],
          "attributes": {
          }
        },
        "$abc$4991$n131": {
          "hide_name": 1,
          "bits": [ 122 ],
          "attributes": {
          }
        },
        "$abc$4991$n133": {
          "hide_name": 1,
          "bits": [ 123 ],
          "attributes": {
          }
        },
        "$abc$4991$n134": {
          "hide_name": 1,
          "bits": [ 124 ],
          "attributes": {
          }
        },
        "$abc$4991$n135": {
          "hide_name": 1,
          "bits": [ 125 ],
          "attributes": {
          }
        },
        "$abc$4991$n136": {
          "hide_name": 1,
          "bits": [ 126 ],
          "attributes": {
          }
        },
        "$abc$4991$n137": {
          "hide_name": 1,
          "bits": [ 127 ],
          "attributes": {
          }
        },
        "$abc$4991$n138": {
          "hide_name": 1,
          "bits": [ 128 ],
          "attributes": {
          }
        },
        "$abc$4991$n139": {
          "hide_name": 1,
          "bits": [ 129 ],
          "attributes": {
          }
        },
        "$abc$4991$n141": {
          "hide_name": 1,
          "bits": [ 130 ],
          "attributes": {
          }
        },
        "$abc$4991$n142": {
          "hide_name": 1,
          "bits": [ 131 ],
          "attributes": {
          }
        },
        "$abc$4991$n143": {
          "hide_name": 1,
          "bits": [ 132 ],
          "attributes": {
          }
        },
        "$abc$4991$n144": {
          "hide_name": 1,
          "bits": [ 133 ],
          "attributes": {
          }
        },
        "$abc$4991$n145": {
          "hide_name": 1,
          "bits": [ 134 ],
          "attributes": {
          }
        },
        "$abc$4991$n146": {
          "hide_name": 1,
          "bits": [ 135 ],
          "attributes": {
          }
        },
        "$abc$4991$n147": {
          "hide_name": 1,
          "bits": [ 136 ],
          "attributes": {
          }
        },
        "$abc$4991$n148": {
          "hide_name": 1,
          "bits": [ 137 ],
          "attributes": {
          }
        },
        "$abc$4991$n150": {
          "hide_name": 1,
          "bits": [ 138 ],
          "attributes": {
          }
        },
        "$abc$4991$n151": {
          "hide_name": 1,
          "bits": [ 139 ],
          "attributes": {
          }
        },
        "$abc$4991$n152": {
          "hide_name": 1,
          "bits": [ 140 ],
          "attributes": {
          }
        },
        "$abc$4991$n153": {
          "hide_name": 1,
          "bits": [ 141 ],
          "attributes": {
          }
        },
        "$abc$4991$n154": {
          "hide_name": 1,
          "bits": [ 142 ],
          "attributes": {
          }
        },
        "$abc$4991$n155": {
          "hide_name": 1,
          "bits": [ 143 ],
          "attributes": {
          }
        },
        "$abc$4991$n156": {
          "hide_name": 1,
          "bits": [ 144 ],
          "attributes": {
          }
        },
        "$abc$4991$n157": {
          "hide_name": 1,
          "bits": [ 145 ],
          "attributes": {
          }
        },
        "$abc$4991$n159": {
          "hide_name": 1,
          "bits": [ 146 ],
          "attributes": {
          }
        },
        "$abc$4991$n160": {
          "hide_name": 1,
          "bits": [ 147 ],
          "attributes": {
          }
        },
        "$abc$4991$n161": {
          "hide_name": 1,
          "bits": [ 148 ],
          "attributes": {
          }
        },
        "$abc$4991$n162": {
          "hide_name": 1,
          "bits": [ 149 ],
          "attributes": {
          }
        },
        "$abc$4991$n163": {
          "hide_name": 1,
          "bits": [ 150 ],
          "attributes": {
          }
        },
        "$abc$4991$n164": {
          "hide_name": 1,
          "bits": [ 151 ],
          "attributes": {
          }
        },
        "$abc$4991$n165": {
          "hide_name": 1,
          "bits": [ 152 ],
          "attributes": {
          }
        },
        "$abc$4991$n166": {
          "hide_name": 1,
          "bits": [ 153 ],
          "attributes": {
          }
        },
        "$abc$4991$n167": {
          "hide_name": 1,
          "bits": [ 154 ],
          "attributes": {
          }
        },
        "$abc$4991$n169": {
          "hide_name": 1,
          "bits": [ 155 ],
          "attributes": {
          }
        },
        "$abc$4991$n170": {
          "hide_name": 1,
          "bits": [ 156 ],
          "attributes": {
          }
        },
        "$abc$4991$n171": {
          "hide_name": 1,
          "bits": [ 157 ],
          "attributes": {
          }
        },
        "$abc$4991$n172": {
          "hide_name": 1,
          "bits": [ 158 ],
          "attributes": {
          }
        },
        "$abc$4991$n173": {
          "hide_name": 1,
          "bits": [ 159 ],
          "attributes": {
          }
        },
        "$abc$4991$n174": {
          "hide_name": 1,
          "bits": [ 160 ],
          "attributes": {
          }
        },
        "$abc$4991$n175": {
          "hide_name": 1,
          "bits": [ 161 ],
          "attributes": {
          }
        },
        "$abc$4991$n176": {
          "hide_name": 1,
          "bits": [ 162 ],
          "attributes": {
          }
        },
        "$abc$4991$n177": {
          "hide_name": 1,
          "bits": [ 163 ],
          "attributes": {
          }
        },
        "$abc$4991$n178": {
          "hide_name": 1,
          "bits": [ 164 ],
          "attributes": {
          }
        },
        "$abc$4991$n179": {
          "hide_name": 1,
          "bits": [ 165 ],
          "attributes": {
          }
        },
        "$abc$4991$n180": {
          "hide_name": 1,
          "bits": [ 166 ],
          "attributes": {
          }
        },
        "$abc$4991$n181": {
          "hide_name": 1,
          "bits": [ 167 ],
          "attributes": {
          }
        },
        "$abc$4991$n182": {
          "hide_name": 1,
          "bits": [ 168 ],
          "attributes": {
          }
        },
        "$abc$4991$n183": {
          "hide_name": 1,
          "bits": [ 169 ],
          "attributes": {
          }
        },
        "$abc$4991$n184": {
          "hide_name": 1,
          "bits": [ 170 ],
          "attributes": {
          }
        },
        "$abc$4991$n185": {
          "hide_name": 1,
          "bits": [ 171 ],
          "attributes": {
          }
        },
        "$abc$4991$n186": {
          "hide_name": 1,
          "bits": [ 172 ],
          "attributes": {
          }
        },
        "$abc$4991$n187": {
          "hide_name": 1,
          "bits": [ 173 ],
          "attributes": {
          }
        },
        "$abc$4991$n188": {
          "hide_name": 1,
          "bits": [ 174 ],
          "attributes": {
          }
        },
        "$abc$4991$n189": {
          "hide_name": 1,
          "bits": [ 175 ],
          "attributes": {
          }
        },
        "$abc$4991$n190": {
          "hide_name": 1,
          "bits": [ 176 ],
          "attributes": {
          }
        },
        "$abc$4991$n191": {
          "hide_name": 1,
          "bits": [ 177 ],
          "attributes": {
          }
        },
        "$abc$4991$n192": {
          "hide_name": 1,
          "bits": [ 178 ],
          "attributes": {
          }
        },
        "$abc$4991$n193": {
          "hide_name": 1,
          "bits": [ 179 ],
          "attributes": {
          }
        },
        "$abc$4991$n194": {
          "hide_name": 1,
          "bits": [ 180 ],
          "attributes": {
          }
        },
        "$abc$4991$n196": {
          "hide_name": 1,
          "bits": [ 181 ],
          "attributes": {
          }
        },
        "$abc$4991$n197": {
          "hide_name": 1,
          "bits": [ 182 ],
          "attributes": {
          }
        },
        "$abc$4991$n198": {
          "hide_name": 1,
          "bits": [ 183 ],
          "attributes": {
          }
        },
        "$abc$4991$n51": {
          "hide_name": 1,
          "bits": [ 52 ],
          "attributes": {
          }
        },
        "$abc$4991$n52": {
          "hide_name": 1,
          "bits": [ 53 ],
          "attributes": {
          }
        },
        "$abc$4991$n53": {
          "hide_name": 1,
          "bits": [ 54 ],
          "attributes": {
          }
        },
        "$abc$4991$n54": {
          "hide_name": 1,
          "bits": [ 55 ],
          "attributes": {
          }
        },
        "$abc$4991$n55": {
          "hide_name": 1,
          "bits": [ 56 ],
          "attributes": {
          }
        },
        "$abc$4991$n56": {
          "hide_name": 1,
          "bits": [ 57 ],
          "attributes": {
          }
        },
        "$abc$4991$n58": {
          "hide_name": 1,
          "bits": [ 58 ],
          "attributes": {
          }
        },
        "$abc$4991$n59": {
          "hide_name": 1,
          "bits": [ 59 ],
          "attributes": {
          }
        },
        "$abc$4991$n60_1": {
          "hide_name": 1,
          "bits": [ 60 ],
          "attributes": {
          }
        },
        "$abc$4991$n62_1": {
          "hide_name": 1,
          "bits": [ 61 ],
          "attributes": {
          }
        },
        "$abc$4991$n63": {
          "hide_name": 1,
          "bits": [ 62 ],
          "attributes": {
          }
        },
        "$abc$4991$n64_1": {
          "hide_name": 1,
          "bits": [ 63 ],
          "attributes": {
          }
        },
        "$abc$4991$n65": {
          "hide_name": 1,
          "bits": [ 64 ],
          "attributes": {
          }
        },
        "$abc$4991$n66_1": {
          "hide_name": 1,
          "bits": [ 65 ],
          "attributes": {
          }
        },
        "$abc$4991$n67": {
          "hide_name": 1,
          "bits": [ 66 ],
          "attributes": {
          }
        },
        "$abc$4991$n68_1": {
          "hide_name": 1,
          "bits": [ 67 ],
          "attributes": {
          }
        },
        "$abc$4991$n70_1": {
          "hide_name": 1,
          "bits": [ 68 ],
          "attributes": {
          }
        },
        "$abc$4991$n71": {
          "hide_name": 1,
          "bits": [ 69 ],
          "attributes": {
          }
        },
        "$abc$4991$n72_1": {
          "hide_name": 1,
          "bits": [ 70 ],
          "attributes": {
          }
        },
        "$abc$4991$n73": {
          "hide_name": 1,
          "bits": [ 71 ],
          "attributes": {
          }
        },
        "$abc$4991$n75": {
          "hide_name": 1,
          "bits": [ 72 ],
          "attributes": {
          }
        },
        "$abc$4991$n76_1": {
          "hide_name": 1,
          "bits": [ 73 ],
          "attributes": {
          }
        },
        "$abc$4991$n77": {
          "hide_name": 1,
          "bits": [ 74 ],
          "attributes": {
          }
        },
        "$abc$4991$n78_1": {
          "hide_name": 1,
          "bits": [ 75 ],
          "attributes": {
          }
        },
        "$abc$4991$n79": {
          "hide_name": 1,
          "bits": [ 76 ],
          "attributes": {
          }
        },
        "$abc$4991$n80_1": {
          "hide_name": 1,
          "bits": [ 77 ],
          "attributes": {
          }
        },
        "$abc$4991$n81": {
          "hide_name": 1,
          "bits": [ 78 ],
          "attributes": {
          }
        },
        "$abc$4991$n83": {
          "hide_name": 1,
          "bits": [ 79 ],
          "attributes": {
          }
        },
        "$abc$4991$n84_1": {
          "hide_name": 1,
          "bits": [ 80 ],
          "attributes": {
          }
        },
        "$abc$4991$n85": {
          "hide_name": 1,
          "bits": [ 81 ],
          "attributes": {
          }
        },
        "$abc$4991$n86_1": {
          "hide_name": 1,
          "bits": [ 82 ],
          "attributes": {
          }
        },
        "$abc$4991$n87": {
          "hide_name": 1,
          "bits": [ 83 ],
          "attributes": {
          }
        },
        "$abc$4991$n88_1": {
          "hide_name": 1,
          "bits": [ 84 ],
          "attributes": {
          }
        },
        "$abc$4991$n90_1": {
          "hide_name": 1,
          "bits": [ 85 ],
          "attributes": {
          }
        },
        "$abc$4991$n91": {
          "hide_name": 1,
          "bits": [ 86 ],
          "attributes": {
          }
        },
        "$abc$4991$n92_1": {
          "hide_name": 1,
          "bits": [ 87 ],
          "attributes": {
          }
        },
        "$abc$4991$n93_1": {
          "hide_name": 1,
          "bits": [ 88 ],
          "attributes": {
          }
        },
        "$abc$4991$n94_1": {
          "hide_name": 1,
          "bits": [ 89 ],
          "attributes": {
          }
        },
        "$abc$4991$n95_1": {
          "hide_name": 1,
          "bits": [ 90 ],
          "attributes": {
          }
        },
        "$abc$4991$n96_1": {
          "hide_name": 1,
          "bits": [ 91 ],
          "attributes": {
          }
        },
        "$abc$4991$n97_1": {
          "hide_name": 1,
          "bits": [ 92 ],
          "attributes": {
          }
        },
        "$abc$4991$n98_1": {
          "hide_name": 1,
          "bits": [ 93 ],
          "attributes": {
          }
        },
        "$abc$4991$n99_1": {
          "hide_name": 1,
          "bits": [ 94 ],
          "attributes": {
          }
        },
        "c": {
          "hide_name": 0,
          "bits": [ 34, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198 ],
          "attributes": {
            "src": "testdes2.v:7"
          }
        },
        "ci": {
          "hide_name": 0,
          "bits": [ 34 ],
          "attributes": {
            "src": "testdes2.v:4"
          }
        },
        "co": {
          "hide_name": 0,
          "bits": [ 35 ],
          "attributes": {
            "src": "testdes2.v:5"
          }
        },
        "s": {
          "hide_name": 0,
          "bits": [ 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ],
          "attributes": {
            "src": "testdes2.v:6"
          }
        },
        "x": {
          "hide_name": 0,
          "bits": [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
          "attributes": {
            "src": "testdes2.v:3"
          }
        },
        "y": {
          "hide_name": 0,
          "bits": [ 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33 ],
          "attributes": {
            "src": "testdes2.v:3"
          }
        }
      }
    }
  }
}
