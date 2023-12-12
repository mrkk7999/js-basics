// Demonstrates how function is structured
// function - keyword at start
// followed by function name 
// followed by parameters in round bracket ()
// followed by code wrapped in  {}
// inside there is a return statement at the end (optional)

// With return statement

function square(number){
    return number*number;
}
console.log("\n With return statement");
console.log(square(2));

// With return statement but not returning anything

function square(number){
    console.log(number*number);
    return;
}
console.log("\n With return statement but not returning anything");
console.log(square(2));

// without return statement

function square(number){
    console.log(number*number);
}
console.log("\n without return statement")
square(2);

