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
  var encryptedMessage = "";

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

  var timesToLoop = messageWithoutPunctuation.length / 5;
  for (var y = 0; y<timesToLoop; y++){
    for (var x = 0; x<5; x++){
      encryptedMessage += output[x]
    }
    encryptedMessage += " : ";
  }
// 0 1 2 3 4   5 6 7 8 9  10 11 12 13
  return encryptedMessage = output.map(function (element, index){
    console.log("el: ", element, " in: ", index);
    if (index % 5 === 0 && index !=0){
      return "  " + element;
    }
    return element;
  });

  // console.log(encryptedMessage);


}

$(document).ready(function (){
  $("form").submit(function (event){
    var value = $("#input").val();
    $("#answer").empty();
    encrypt(value).forEach(function (letters){
      $("#answer").append(letters);
    })



    event.preventDefault();
  });
});
