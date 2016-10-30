var encrypt = function (input){
  //first spec
  var messageWithoutPunctuation = input.replace(/[\s.,\/#!$%\^&\*;:{}=\-_'`~()0-9?@><]/g,"").toLowerCase();

  var rows = 0;
  var columns = 0;
  var characters = 0;
  var messageLength = messageWithoutPunctuation.length;
  var squareRoot = Math.round(Math.sqrt(messageLength));
  var lettersGrid = [];
  var output = [];

  // console.log(Math.round(Math.sqrt(messageLength)), " ",messageLength);
  rows = squareRoot;
  columns = squareRoot;
  // console.log((squareRoot * squareRoot));
  if (messageLength > (squareRoot * squareRoot)){
      columns = squareRoot + 1;
  }

  for (var r = 0; r < rows; r++){
    lettersGrid.push([]);
    for (var c = 0; c < columns; c++){
      lettersGrid[r].push(messageWithoutPunctuation.charAt(characters));
      characters++;
    }
  }
for (var col = 0; col < columns; col ++){
  for (var ro = 0; ro < rows; ro++){
      output.push(lettersGrid[ro][col]);
  }
}







}

$(document).ready(function (){
  $("form").submit(function (event){
    var value = $("#input").val();
    encrypt(value);

    event.preventDefault();
  });
});
