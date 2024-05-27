/*
outer loop - counts the number of lines or rows
inner loop - focus on the column and the connection to the rows
print the "pattern" inside the inner loop
observe symmetry
*/

/*Pattern 1
* * *
* * *
* * **/

for (let i = 0; i < 10; i++) {
  for
   (let j = 0; j < 4; j++) {}
  //console.log("*");
}
//solution 1
function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let line = "";
        for (let j = 0; j < 3; j++) {
            line += "* * *\n";
        }
        console.log(line);
    }
}

printPattern(1);
//solution 2
for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
        row += "* ";
    }
    console.log(row);
}

