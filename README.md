A simple JS(j-query) web app that implements the “crypto square” cipher and wires it to a form.
Here’s what it does:
cryptosquare(phrase) removes spaces, computes a square size (ceil of sqrt of length), fills a 2D array column-wise, then reads it row-wise to build the encrypted string.
It formats the encrypted output into groups of five characters separated by spaces.
On form submit (form#cryptosquare), it encrypts the input, displays the result, shows the output area, and builds an HTML table showing the square grid (uppercase) row by row.
