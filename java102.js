//print numbers
function printNumbers(startNumber, endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      console.log(i);
    }
  }
  printNumbers(1,10);
  
  //print a square
  function printSquare(size) {
    let row = '';
    for (let i = 0; i < size; i++) {
      row = '';
      for (let j = 0; j < size; j++) {
        row = row + '*';
      }
      console.log(row)
    }
  }
  printSquare(5)
  
  //print a box
  function printBox(width, height) {
    const boxCenter = "*" + " ".repeat(width-1) + "*";
    const boxEdge = "*".repeat(width) + "*";
    console.log(boxEdge);
    for (let i = 0; i < height-2; i++){
      console.log(boxCenter)
    }
    console.log(boxEdge);
  }
  printBox(6,4)
  
  //print a banner
  function printBanner(sentence) {
      let row = '';
      var star = '*';
      var space = ' ';
      for (let i = 0; i < 3; i++) {
          if (i ===0 || i === 2) {
          row = star.repeat(sentence.length + 4);
          }
          else {
          row = star + space + sentence + space + star;
          }
          console.log(row);
      }
  }
  printBanner('Welcome to Digitalcrafts')
  
  //factor a number
  function factors(number) {
      let factor = [];
      for (let x = 0; x <= number; x++) {
          if (number % x === 0) {
          factor.push(x);
          }
      }
      console.log(factor);
  }
  factors(20);
  
  //caesar chipher
  function cipher(string, offset) {
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      var corrected = string.toLowerCase();
      let decoded_message = '';
      for (let i = 0; i < corrected.length; i++) {
          let letter = corrected[i]
          if (alphabet.includes(letter) === false) {
          decoded_message += letter;
          }
          else if (alphabet.includes(letter)) {
              let index_in_alphabet = alphabet.indexOf(letter);
              let new_index = index_in_alphabet + offset;
              if (new_index >= alphabet.length) {
                  new_index -= alphabet.length;
              }
              decoded_message += alphabet[new_index];
          }
      }
      console.log(decoded_message);
  }
  cipher('Genius without education is like silver in the mine', 13);