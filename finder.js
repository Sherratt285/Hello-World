//fabbocacci sequence is made buy the sum of the two previous numbers in the sequence
//finds the sum of even numbers of a fabonacci sequence starting the 1st to 10th number of the sequence 
//then up to the 4 millionth number
fabonacciFinder = function(){
//    var sequence = [];
    var sequenceTest = [ 1, 2 ];
//    var n1 = 0;
//    var n2 = 1;
    var maxSize = 10;
    var evenNumberSum = 0;

    sequence.push(n1);
    for ( var i = 0; i < maxSize; i++ ){
        n2 = sequenceTest[i] + sequenceTest[i+1];
        sequenceTest.push(n2);
        evenNumberSum += evenFinder( sequenceTest[i] );
    }
    console.log(sequenceTest);

}

//this funciton tests weather a number is even or not
evenFinder = function( toTest ){
    if (toTest % 2 === 0){
        return toTest;
    } else { return 0; }
}