var square;
var squareSize;
var cryptosquare = function(phrase) {
    var phrase = phrase.replace(/\s+/g, '');
    squareSize = Math.ceil(Math.sqrt(phrase.length));
    square = new Array(squareSize);
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

    // format the output in groups of five characters
    var formatted_output = ""
    for(var i = 0; i < output.length; i++) {
        formatted_output = formatted_output.concat(output.charAt(i));
        if((i + 1) % 5 === 0) {
            formatted_output = formatted_output.concat(" ");
        }
    }

    return formatted_output

};

$(document).ready(function() {
debugger;
    $("form#cryptosquare").submit(function(event) {
        var input = ($("input#input-string").val());
        var result = cryptosquare(input);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();

        html_to_prepend = ""
        for(var y = 0; y < squareSize; y++) {
            html_to_prepend = html_to_prepend.concat("<tr>");
            for(var x = 0; x < squareSize; x++) {
                html_to_prepend = html_to_prepend.concat("<td>" + square[x][y] + "</td>");
            }
            html_to_prepend = html_to_prepend.concat("</tr>");
        }
        $("table#output-table").prepend(html_to_prepend);

    });

});
