(function(){

    var hanoi = function(disc, a, b, c){
      if(disc > 0){
        hanoi(disc -1, a, c, b);
        console.log('Move disc ' + disc + ' from ' + a + ' to ' + b);
        hanoi(disc -1, c , b, a);
      }
    };

    hanoi(3, 'A', 'B', 'C'); // length, src, temp, dest.

})();
