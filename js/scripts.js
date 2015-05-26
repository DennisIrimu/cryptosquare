var cryptosquare = function(phrase) {
    phrase = phrase.replace(/\s+/g, '');
    var squareSize = Math.ceil(Math.sqrt(phrase.length));
    var square = new Array(squareSize);
    var output = "";
    // store the message in a 2D array
    for(var x = 0; x < squareSize; x++) {
        square[x] = new Array(squareSize)
        for(var y = 0; y < squareSize; y++) {
            square[x][y] = phrase.charAt(x + y * squareSize);
        }
    }

    // read the reordered message from the 2d array
    for(var x = 0; x < squareSize; x++) {
        for(var y = 0; y < squareSize; y++) {
            console.log(square[x][y]);
            output = output.concat(square[x][y])
        }
    }

    var formatted_output = ""
    for(var i = 0; i < output.length; i++) {
        formatted_output = formatted_output.concat(output.charAt(i));
        if((i + 1) % 5 === 0) {
            formatted_output = formatted_output.concat(" ");
        }
    }

    return formatted_output

};
