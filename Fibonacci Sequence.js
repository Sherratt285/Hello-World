get(startingNumber);

//funciton name: fibonacciGenerator
//inputs: starting number
//outputs: n/a
//brief description: function generates a fibonacci sequence to a user inputted number if less then 9 or 9th number if greater
//the next numebr in the seuqence is found by adding the two numbers before it. the sequence is then printed
fibonacciGenerator = function(startingNumber){
    var fibonacciSequence = [];

    if (startingNumber < 9){
        for (var i = 0; i < startingNumebr; i++){
            fibonacciSequence.push( fibonacciCalculator(i) );
        }
    } else {
        for ( i = startingNumber; i < 9; i++){
            fibonacciSequence.push( fibonacciCalculator(i) ) ;
        }
    }

    for (var i = 0; i < fibonacciSequence.length; i++ ){
        console.log(fibonacciSequence(i));
    }
}

//function name: fibonacciCalculator
//inputs: n
//outputs: fibonacci number of n
//brief decsription: calculates the fibonacci number of an inputted number using the fibonacci golden ratio formula
fibonacciCalculator = function(n){
    var goldenRatio = 1.618034;
    return ( ((goldenRatio)^n - (1 - goldenRatio)^n) / Math.sqrt(5) );
}