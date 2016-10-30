Crypto Square Specs

it will remove spaces and punctuation from input
  input: I am the greatest because I don't quit!
  output: IamthegreatestbecauseIdontquit
it downcase the message:
  input: IamthegreatestbecauseIdontquit
  output: iamthegreatestbecauseidontquit
it will get the length of the message:
  input: iamthegreatestbecauseidontquit
  output: 27

it will write message into a square if the length is a square root or rectangle if it is not (got to next nearest square root--round square root to find this out):
  input SQUARE: 25
    output: 5 columns 5 rows
    var letters = [
    [col1, x, x, x, x],
    [col2, x, x, x, x],
    [col3, x, x, x, x],
    [col4, x, x, x, x],
    [col5, x, x, x, x],
    [0][0]
    [1][0]
    [2][0]


    ]---letters [0]is the ROW, letters [0][1] is the COLUMN: ([0][1], [1][1], [2][1], [3][1],[4][1]); ROW: ([0][0],[0][1],[0][2],[0][3],[0][4], [0][5])
  input RECTANGLE: 27
    output: 5 columns 6 rows
    <!-- var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]); // 1 row, column
console.log(items); -->

it will write a new message by reading down the columns from left to right
  input: fuckfuck (8) starts at nearest square root (round square root result) if new result has enough spaces, use the square, if not add one extra row

  input:
     fuc
     kfu
     ck

  output:  
    fkcufkcu

it will output the message in groups of five letters
  input: fkcufkcu
  output: fkcuf fkcu
