(function(){

    function linearSearch(values, target){

        for(var i=0; i< values.length;i++){
            if(arr[i] === target){
                return i;
            }else{
                continue;
            }
        }   

    }

    var arr = [1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24];
    
    console.log(linearSearch(arr, 20));


})();
