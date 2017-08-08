(function(){

    var arr = [];

    function recPrem(left,rest){
       if(rest.length == 0){
            arr.push(left);
       }else{
           for(var i=0;i<rest.length;i++){
                var next = left.concat(rest[i]);  
                var rem = rest.slice(0,i).concat(rest.slice(i+1,rest.length));
                recPrem(next, rem);
           }
       }
    }

    recPrem([],[1,2,3,4]);

    console.log(arr);

})();
