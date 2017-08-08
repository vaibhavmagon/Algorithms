(function(){

    var arr = [900, 940, 950, 1100, 1500, 1800];
    var dep = [910, 1200, 1120, 1130, 1900, 2000];

    function count(arr, dept, n){
        arr = arr.sort(function(a,b){return a - b });
        dep = dep.sort(function(a,b){return a - b });

        var platform = 1;
        var result = 1;
        var i = 1;
        var j = 0;

        while(i<n && j<n){
                if(arr[i] < dep[j]){
                    platform = platform + 1 ;
        	        i++;
                    if(platform > result){
                        result = platform;
                    }
                }else{
                    platform = platform - 1;
        	        j++;
               }
            }
        return result;
    }

    console.log(count(arr, dep, arr.length));

})();
