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

  rows = squareRoot;
  columns = squareRoot;

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

  return encryptedMessage = output.map(function (element, index){
    if (index % 5 === 0 && index !=0){
      return "  " + element;
    }
    return element;
  });


}

$(document).ready(function (){
  $("form").submit(function (event){
    var value = $("#input").val();
    $("#answer").empty();
    encrypt(value).forEach(function (letters){
      $("#answer").append(letters);
    });
    $("#answer").fadeOut().fadeIn();

    event.preventDefault();
  });
});
