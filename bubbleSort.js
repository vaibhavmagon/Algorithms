(function(){

    var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
    function bubbleSort(arr){
        var temp;
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr.length; j++){
                if(arr[i] < arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    console.log(bubbleSort(a));

})();
