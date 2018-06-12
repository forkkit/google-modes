(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^const(?![a-zA-Z¡-￿_0-9_])/, /^var(?![a-zA-Z¡-￿_0-9_])/, /^type(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^package(?![a-zA-Z¡-￿_0-9_])/, /^func(?![a-zA-Z¡-￿_0-9_])/, /^go(?![a-zA-Z¡-￿_0-9_])/, /^defer(?![a-zA-Z¡-￿_0-9_])/, /^return(?![a-zA-Z¡-￿_0-9_])/, /^break(?![a-zA-Z¡-￿_0-9_])/, /^continue(?![a-zA-Z¡-￿_0-9_])/, /^default(?![a-zA-Z¡-￿_0-9_])/, /^case(?![a-zA-Z¡-￿_0-9_])/, /^select(?![a-zA-Z¡-￿_0-9_])/, /^goto(?![a-zA-Z¡-￿_0-9_])/, /^fallthrough(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^if(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^switch(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^(?:\!|\+|\-|\*|\^|\&|\<\-)/, /^range(?![a-zA-Z¡-￿_0-9_])/, /^struct(?![a-zA-Z¡-￿_0-9_])/, /^interface(?![a-zA-Z¡-￿_0-9_])/, /^map(?![a-zA-Z¡-￿_0-9_])/, /^chan(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:0o|0O)[0-7]+|(?:0x|OX)[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?i?)/, /^(?:true|false|nil|iota)(?![a-zA-Z¡-￿_0-9_])/, /^make(?![a-zA-Z¡-￿_0-9_])/, /^(?:append|cap|close|complex|copy|delete|imag|len|new|panic|print|println|real|recover)(?![a-zA-Z¡-￿_0-9_])/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\&\^?|\-|\||\*|\^|\/|\<\<?|\>\>?|\%|\=)\=?|\<\-|\=|\:\=|\!\=)/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [1, ";", "\n"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:)/, /^(?:\.\.\.)?/];
  var nodes = [
    [1, 4, 2],
    [/^[^]/, 0],
    [1, 6, 1],
    [3, "keyword", e[9], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[23], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[1], -1,
     3, "builtin", e[33], -1,
     3, "atom", e[32], -1,
     3, "builtin", e[34], -1,
     3, "operator", e[36], -1,
     3, "operator", e[25], -1,
     3, "operator", e[35], -1,
     3, "number", e[31], -1,
     2, 9, -1, {"name":"string","token":"string"},
     3, "variable", e[16], -1,
     2, 11, -1, {"name":"comment","token":"comment"},
     /^[^]/, -1],
    [/^[ \t]/, 4,
     2, 11, 4, {"name":"comment","token":"comment"},
     [0, /^(?=\n)/, [7, "skippableNewline"]], 5,
     0, -1],
    ["\n", 4],
    [/^[ \t]/, 6,
     2, 11, 6, {"name":"comment","token":"comment"},
     "\n", 6,
     0, 7],
    [2, 16, 8, {"name":"Statement"},
     0, -1],
    [/^[ \t]/, 8,
     2, 11, 8, {"name":"comment","token":"comment"},
     e[38], 8,
     0, 7],
    [/^(?:\'(?:\\.(?:(?!\').)*|.)\'|\"(?:\\.|(?!\").)*\")/, -1,
     "`", 10],
    [[0, /^(?!\`)/, /^[^]/], 10,
     "`", -1],
    [/^\/\*\*(?!\/)/, 12,
     "/*", 15,
     /^\/\/.*/, -1],
    [e[20], 13,
     0, 14],
    [0, 12,
     0, 12],
    [2, 54, 14, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 15,
     "*/", -1],
    [3, "keyword", e[0], 17,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 19,
     3, "keyword", e[3], 23,
     3, "keyword", e[4], 27,
     2, 65, -1, {"name":"IfStatement"},
     2, 87, -1, {"name":"SwitchStatement"},
     2, 96, -1, {"name":"ForStatement"},
     3, "keyword", e[5], 29,
     3, "keyword", e[6], 31,
     3, "keyword", e[7], 31,
     3, "keyword", e[8], 33,
     3, "keyword", e[9], 35,
     3, "keyword", e[10], 35,
     3, "keyword", e[11], 37,
     3, "keyword", e[12], 38,
     /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:(?!\=))/, 37,
     2, 106, -1, {"name":"Block"},
     3, "keyword", e[13], 41,
     3, "keyword", e[14], 43,
     3, "keyword", e[15], -1,
     3, "keyword", e[12], 45,
     1, 111, 49],
    [1, 4, 18],
    [1, 132, -1],
    [1, 4, 20],
    [2, 142, -1, {"name":"Set"},
     3, "def", e[16], 21],
    [1, 4, 22],
    [1, 147, -1],
    [1, 4, 24],
    [2, 182, -1, {"name":"Set"},
     ".", 25,
     3, "def", e[16], 25,
     0, 25],
    [1, 4, 26],
    [2, 9, -1, {"name":"string","token":"string"}],
    [1, 4, 28],
    [3, "variable", e[16], -1],
    [1, 4, 30],
    [2, 187, -1, {"name":"FunctionDecl"}],
    [1, 4, 32],
    [1, 111, -1],
    [1, 4, 34],
    [1, 202, -1],
    [1, 4, 36],
    [/^(?:[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*)?/, -1],
    [1, 4, 39],
    [1, 4, 40],
    [":", -1],
    [1, 202, 37],
    [1, 4, 42],
    [2, 106, -1, {"name":"Block"}],
    [1, 4, 44],
    [e[16], -1],
    [1, 4, 46],
    [2, 16, 47, {"name":"Statement"}],
    [1, 4, 48],
    [":", -1],
    [1, 4, 50],
    [",", 51,
     0, -1],
    [1, 4, 52],
    [1, 111, 53],
    [1, 4, 50],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 55,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 56,
     3, "tag", e[19], 63,
     "{", 57],
    [e[17], 55,
     3, "def", e[18], 63,
     "<", 58,
     0, 63],
    [e[17], 56,
     3, "type", e[18], 63,
     0, 63],
    [3, "tag", e[19], 59],
    [3, "type def", /^[a-zA-Z¡-￿_]+/, 60],
    [/^[\t ]*/, 61],
    [">", 63],
    [1, 208, 62],
    ["}", 63],
    [e[20], 64,
     0, -1],
    [0, 63,
     0, 63],
    [3, "keyword", e[21], 66],
    [1, 4, 67],
    [1, 212, 68],
    [1, 4, 69],
    [";", 70,
     0, 72],
    [1, 4, 71],
    [1, 212, 72],
    [1, 4, 73],
    [2, 106, 74, {"name":"Block"}],
    [1, 4, 75],
    [3, "keyword", e[22], 76,
     0, -1],
    [1, 4, 77],
    [3, "keyword", e[21], 78,
     0, 79],
    [1, 4, 80],
    [1, 4, 81],
    [1, 212, 82],
    [2, 106, 83, {"name":"Block"}],
    [1, 4, 84],
    [1, 4, 75],
    [";", 85,
     0, 79],
    [1, 4, 86],
    [1, 212, 79],
    [3, "keyword", e[23], 88],
    [1, 4, 89],
    [1, 212, 90,
     0, 94],
    [1, 4, 91],
    [";", 92,
     0, 94],
    [1, 4, 93],
    [1, 212, 94,
     0, 94],
    [1, 4, 95],
    [2, 106, -1, {"name":"Block"}],
    [3, "keyword", e[24], 97],
    [1, 4, 98],
    [1, 212, 99,
     0, 104],
    [1, 4, 100],
    [";", 101,
     0, 104],
    [1, 4, 102],
    [1, 212, 103,
     0, 103],
    [1, 4, 100],
    [1, 4, 105],
    [2, 106, -1, {"name":"Block"}],
    ["{", 107],
    [1, 4, 108],
    [1, 6, 109],
    [1, 4, 110],
    ["}", -1],
    [[5, 226], 112,
     0, 120],
    [3, "def", e[16], 113],
    [1, 4, 114],
    [",", 115,
     3, "operator", ":=", 116],
    [1, 4, 117],
    [1, 4, 118],
    [3, "def", e[16], 119],
    [1, 111, -1],
    [1, 4, 114],
    [3, "operator", e[25], 121,
     3, "keyword", e[26], 121,
     [0, [6, 232], [5, 233]], 122,
     1, 236, 123],
    [1, 4, 120],
    [1, 147, 124],
    [1, 4, 125],
    [1, 4, 126],
    [1, 252, 127,
     0, -1],
    [2, 261, 123, {"name":"LiteralBody"},
     "(", 128],
    [1, 4, 125],
    [1, 4, 129],
    [1, 111, 130],
    [1, 4, 131],
    [")", 123],
    [2, 266, -1, {"name":"Set"},
     3, "def", e[16], 133],
    [1, 4, 134],
    [",", 135,
     1, 147, 136,
     0, 136],
    [1, 4, 137],
    [1, 4, 138],
    [3, "def", e[16], 139],
    [3, "operator", "=", 140,
     0, -1],
    [1, 4, 134],
    [1, 4, 141],
    [1, 202, -1],
    ["(", 143],
    [1, 4, 144],
    [1, 271, 145],
    [1, 4, 146],
    [")", -1],
    ["[", 148,
     3, "keyword", e[27], 154,
     3, "keyword", e[28], 156,
     "*", 158,
     3, "keyword", e[5], 160,
     3, "keyword", e[29], 164,
     3, "operator", "<-", 172,
     3, "keyword", e[30], 173,
     "(", 176,
     0, 180],
    [1, 4, 149],
    [1, 111, 150,
     0, 150],
    [1, 4, 151],
    ["]", 152],
    [1, 4, 153],
    [1, 147, -1],
    [1, 4, 155],
    [2, 276, -1, {"name":"StructBody"}],
    [1, 4, 157],
    [2, 281, -1, {"name":"InterfaceBody"}],
    [1, 4, 159],
    [1, 147, -1],
    [1, 4, 161],
    [2, 286, 162, {"name":"ParamList"}],
    [1, 4, 163],
    [2, 286, -1, {"name":"ParamList"},
     1, 147, -1,
     0, -1],
    [1, 4, 165],
    ["[", 166],
    [1, 4, 167],
    [1, 147, 168],
    [1, 4, 169],
    ["]", 170],
    [1, 4, 171],
    [1, 147, -1],
    [1, 4, 174],
    [1, 4, 175],
    [1, 147, -1],
    [3, "operator", "<-", 172,
     0, 172],
    [1, 4, 177],
    [1, 147, 178],
    [1, 4, 179],
    [")", -1],
    [3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*\./, 181,
     3, "type", e[16], -1],
    [1, 4, 180],
    ["(", 183],
    [1, 4, 184],
    [1, 291, 185],
    [1, 4, 186],
    [")", -1],
    ["(", 188,
     0, 194],
    [1, 4, 189],
    [3, "def", e[16], 190],
    [1, 4, 191],
    [1, 147, 192],
    [1, 4, 193],
    [")", 194],
    [1, 4, 195],
    [2, 296, 196, {"name":"funcName"},
     0, 196],
    [1, 4, 197],
    [2, 286, 198, {"name":"ParamList"}],
    [1, 4, 199],
    [2, 286, 200, {"name":"ParamList"},
     1, 147, 200,
     0, 200],
    [1, 4, 201],
    [2, 106, -1, {"name":"Block"},
     0, -1],
    [1, 111, 203,
     0, -1],
    [1, 4, 204],
    [",", 205,
     0, -1],
    [1, 4, 206],
    [1, 111, 207,
     0, 207],
    [1, 4, 204],
    [3, "attribute", "{", 209,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 208,
     "\n", 210,
     0, -1],
    [1, 208, 211],
    [/^[\t ]*(?:\*[\t ]*)?/, 208],
    [/^(?=\*\/)/, 208,
     3, "attribute", "}", 208],
    [[5, 226], 213,
     0, 221],
    [3, "def", e[16], 214],
    [1, 4, 215],
    [",", 216,
     3, "operator", ":=", 217],
    [1, 4, 218],
    [1, 4, 219],
    [3, "def", e[16], 220],
    [1, 212, -1],
    [1, 4, 215],
    [3, "operator", e[25], 222,
     3, "keyword", e[26], 222,
     1, 236, 223],
    [1, 4, 221],
    [1, 4, 224],
    [1, 297, 225,
     0, -1],
    [1, 4, 224],
    [e[16], 227],
    [1, 4, 228],
    [",", 229,
     ":=", -1],
    [1, 4, 230],
    [e[16], 231],
    [1, 4, 228],
    [3, "keyword", e[5], -1],
    [1, 147, 234],
    [1, 4, 235],
    ["{", -1],
    [3, "number", e[31], -1,
     2, 9, -1, {"name":"string","token":"string"},
     3, "atom", e[32], -1,
     3, "keyword", e[5], 237,
     3, "builtin", e[33], 239,
     3, "builtin", e[34], -1,
     3, "variable callee", e[37], -1,
     3, "variable", e[16], -1,
     [5, 306], 241,
     2, 311, 248, {"name":"Bracketed"},
     "*", 250,
     2, 319, -1, {"name":"ParenExpr"}],
    [1, 4, 238],
    [2, 324, -1, {"name":"FunctionExpr"}],
    [1, 4, 240],
    [2, 329, -1, {"name":"TypeList"}],
    [1, 147, 242],
    [1, 4, 243],
    [2, 261, -1, {"name":"LiteralBody"},
     "(", 244],
    [1, 4, 245],
    [1, 111, 246],
    [1, 4, 247],
    [")", -1],
    [1, 4, 249],
    [1, 147, -1,
     0, -1],
    [1, 4, 251],
    [1, 147, -1],
    [".(", 253,
     ".", 257,
     3, "operator", e[35], -1,
     3, "operator", e[36], 259,
     2, 334, -1, {"name":"ArgList"},
     2, 311, -1, {"name":"Bracketed"}],
    [1, 4, 254],
    [1, 147, 255],
    [1, 4, 256],
    [")", -1],
    [1, 4, 258],
    [3, "property callee", e[37], -1,
     3, "property", e[16], -1],
    [1, 4, 260],
    [1, 111, -1],
    ["{", 262],
    [1, 4, 263],
    [1, 341, 264],
    [1, 4, 265],
    ["}", -1],
    ["(", 267],
    [1, 4, 268],
    [1, 355, 269],
    [1, 4, 270],
    [")", -1],
    [/^[ \t]/, 271,
     2, 11, 271, {"name":"comment","token":"comment"},
     "\n", 271,
     0, 272],
    [3, "def", e[16], 273,
     0, -1],
    [1, 4, 274],
    [1, 147, 275],
    [/^[ \t]/, 275,
     2, 11, 275, {"name":"comment","token":"comment"},
     e[38], 275,
     0, 272],
    ["{", 277],
    [1, 4, 278],
    [1, 367, 279],
    [1, 4, 280],
    ["}", -1],
    ["{", 282],
    [1, 4, 283],
    [1, 380, 284],
    [1, 4, 285],
    ["}", -1],
    ["(", 287],
    [1, 4, 288],
    [1, 387, 289],
    [1, 4, 290],
    [")", -1],
    [/^[ \t]/, 291,
     2, 11, 291, {"name":"comment","token":"comment"},
     "\n", 291,
     0, 292],
    [".", 293,
     3, "def", e[16], 293,
     0, 293,
     0, -1],
    [1, 4, 294],
    [2, 9, 295, {"name":"string","token":"string"}],
    [/^[ \t]/, 295,
     2, 11, 295, {"name":"comment","token":"comment"},
     e[38], 295,
     0, 292],
    [3, "def", e[16], -1],
    [".(", 298,
     ".", 302,
     3, "operator", e[35], -1,
     3, "operator", e[36], 304,
     2, 334, -1, {"name":"ArgList"},
     2, 311, -1, {"name":"Bracketed"}],
    [1, 4, 299],
    [1, 147, 300],
    [1, 4, 301],
    [")", -1],
    [1, 4, 303],
    [3, "property callee", e[37], -1,
     3, "property", e[16], -1],
    [1, 4, 305],
    [1, 212, -1],
    [3, "keyword", e[29], 307,
     0, 307,
     3, "keyword", e[27], -1,
     "*", -1],
    [1, 4, 308],
    ["[", 309],
    [1, 4, 310],
    ["]", -1],
    ["[", 312],
    [1, 4, 313],
    [1, 202, 314],
    [1, 4, 315],
    [":", 316,
     "]", -1],
    [1, 4, 317],
    [1, 111, 318,
     0, 318],
    [1, 4, 315],
    ["(", 320],
    [1, 4, 321],
    [1, 202, 322],
    [1, 4, 323],
    [")", -1],
    [2, 286, 325, {"name":"ParamList"}],
    [1, 4, 326],
    [2, 286, 327, {"name":"ParamList"},
     1, 147, 327,
     0, 327],
    [1, 4, 328],
    [2, 106, -1, {"name":"Block"}],
    ["(", 330],
    [1, 4, 331],
    [1, 411, 332],
    [1, 4, 333],
    [")", -1],
    ["(", 335],
    [1, 4, 336],
    [1, 202, 337],
    [1, 4, 338],
    [e[40], 339],
    [1, 4, 340],
    [")", -1],
    [3, "property", e[39], 342,
     2, 261, 342, {"name":"LiteralBody"},
     1, 111, 342,
     0, -1],
    [1, 4, 343],
    [":", 344,
     0, 345],
    [1, 4, 346],
    [1, 4, 347],
    [2, 261, 345, {"name":"LiteralBody"},
     1, 111, 345],
    [",", 348,
     0, -1],
    [1, 4, 349],
    [3, "property", e[39], 350,
     2, 261, 350, {"name":"LiteralBody"},
     1, 111, 350,
     0, 351],
    [1, 4, 352],
    [1, 4, 347],
    [":", 353,
     0, 351],
    [1, 4, 354],
    [2, 261, 351, {"name":"LiteralBody"},
     1, 111, 351],
    [/^[ \t]/, 355,
     2, 11, 355, {"name":"comment","token":"comment"},
     "\n", 355,
     0, 356],
    [3, "def", e[16], 357,
     0, -1],
    [1, 4, 358],
    [",", 359,
     1, 147, 360,
     0, 360],
    [1, 4, 361],
    [1, 4, 362],
    [3, "def", e[16], 363],
    [3, "operator", "=", 364,
     0, 365],
    [1, 4, 358],
    [1, 4, 366],
    [/^[ \t]/, 365,
     2, 11, 365, {"name":"comment","token":"comment"},
     e[38], 365,
     0, 356],
    [1, 202, 365],
    [/^[ \t]/, 367,
     2, 11, 367, {"name":"comment","token":"comment"},
     "\n", 367,
     0, 368],
    [[5, 417], 369,
     "*", 370,
     0, 370,
     0, -1],
    [3, "def property", e[16], 371],
    [1, 4, 372],
    [1, 4, 373],
    [1, 147, 374],
    [",", 375,
     0, 370],
    [1, 4, 376],
    [1, 4, 377],
    [2, 9, 378, {"name":"string","token":"string"},
     0, 378],
    [3, "def property", e[16], 379],
    [/^[ \t]/, 378,
     2, 11, 378, {"name":"comment","token":"comment"},
     e[38], 378,
     0, 368],
    [1, 4, 373],
    [/^[ \t]/, 380,
     2, 11, 380, {"name":"comment","token":"comment"},
     "\n", 380,
     0, 381],
    [3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\()/, 382,
     1, 147, 383,
     0, -1],
    [1, 4, 384],
    [/^[ \t]/, 383,
     2, 11, 383, {"name":"comment","token":"comment"},
     e[38], 383,
     0, 381],
    [2, 286, 385, {"name":"ParamList"}],
    [1, 4, 386],
    [2, 286, 383, {"name":"ParamList"},
     1, 147, 383,
     0, 383],
    [3, "def", e[16], 388,
     0, 389,
     0, -1],
    [1, 4, 390],
    [1, 4, 391],
    [",", 392,
     0, 389],
    [e[40], 393],
    [1, 4, 394],
    [1, 4, 395],
    [3, "def", e[16], 396],
    [1, 147, 397,
     0, 397],
    [1, 4, 390],
    [1, 4, 398],
    [",", 399,
     0, -1],
    [1, 4, 400],
    [3, "def", e[16], 401,
     0, 402,
     0, 403],
    [1, 4, 404],
    [1, 4, 405],
    [1, 4, 398],
    [",", 406,
     0, 402],
    [e[40], 407],
    [1, 4, 408],
    [1, 4, 409],
    [3, "def", e[16], 410],
    [1, 147, 403,
     0, 403],
    [1, 4, 404],
    [1, 147, 412,
     3, "number", e[31], 412,
     0, -1],
    [1, 4, 413],
    [",", 414,
     0, -1],
    [1, 4, 415],
    [1, 147, 416,
     3, "number", e[31], 416,
     0, 416],
    [1, 4, 413],
    [e[16], 418],
    [1, 4, 419],
    [/^[a-zA-Z¡-￿__\[\,\*\<\(]/, -1]
  ];
  var start = 0;
  var token = 3;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["Block", "FunctionDecl", "FunctionExpr", "IfStatement", "ForStatement", "SwitchStatement", "InterfaceBody"];
  var allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"];

  function skippableNewline(line, pos, cx) {
    if (cx && allowNewline.indexOf(cx.name) > -1) { return true }
    var match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos));
    return !match ||
      (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
  }

  var bracketed = {
    Block: "}", LiteralBody: "}", StructBody: "}", InterfaceBody: "}",
    Bracketed: "]",
    Set: ")", ParamList: ")", ArgList: ")", ParenExpr: ")"
  };

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed || cx.name == "Block" && /^(case|default)\b/.test(textAfter);
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + (flat ? 0 : config.tabSize)
    } else if (cx.name == "Statement") {
      return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.tabSize
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  var GoMode = (function (superclass) {
    function GoMode(conf) {
      superclass.call(this, grammar, {
        predicates: {skippableNewline: skippableNewline}
      });
      this.conf = conf;
    }

    if ( superclass ) GoMode.__proto__ = superclass;
    GoMode.prototype = Object.create( superclass && superclass.prototype );
    GoMode.prototype.constructor = GoMode;

    GoMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    GoMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, this.conf)
    };

    return GoMode;
  }(CodeMirror.GrammarMode));

  GoMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
  GoMode.prototype.closeBrackets = "()[]{}''\"\"``";
  GoMode.prototype.blockCommentStart = "/*";
  GoMode.prototype.blockCommentEnd = "*/";
  GoMode.prototype.blockCommentContinue = " * ";
  GoMode.prototype.lineComment = "//";
  GoMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-go", function (conf) { return new GoMode(conf); });

})));
