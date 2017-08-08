(function(){

    function binarySearch(values, target, start, end){

        if(start > end){
            return 0;
        }

        var middle = Math.floor((start + end) / 2);

        var value = arr[middle];

        if (value > target) {
            return binarySearch(values, target, start, middle-1); 
        }

        if (value < target) { 
            return binarySearch(values, target, middle+1, end);
        }
        
        return middle;

    }

    var arr = [1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24];
    
    console.log(binarySearch(arr, 20, 0, arr.length-1));


})();
