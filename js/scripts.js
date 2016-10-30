var encrypt = function (input){
  //first spec
  var messageWithoutPunctuation = input.replace(/[\s.,\/#!$%\^&\*;:{}=\-_'`~()0-9?@><]/g,"").toLowerCase();

  var rows = 0;
  var columns = 0;
  var characters = 0;
  var messageLength = messageWithoutPunctuation.length;
  var squareRoot = Math.round(Math.sqrt(messageLength));
  var letters = [];

  // console.log(Math.round(Math.sqrt(messageLength)), " ",messageLength);
  rows = squareRoot;
  columns = squareRoot;
  // console.log((squareRoot * squareRoot));
  if (messageLength > (squareRoot * squareRoot)){
      columns = squareRoot + 1;
  }

  for (var r = 0; r < rows; r++){
    letters.push([]);
    for (var c = 0; c < columns; c++){
      letters[r].push(messageWithoutPunctuation.charAt(characters));
      characters++;
      // console.log(c, " c: ", c);
    }

  }
  console.log(letters)

  // console.log("rows: ", rows, " columns: ", columns);
  //cols = squareroot
  //rows = extra space if needed
  //add extra to rows

  //get square root and round


  var output = [];

}

$(document).ready(function (){
  $("form").submit(function (event){
    var value = $("#input").val();
    encrypt(value);

    event.preventDefault();
  });
});
