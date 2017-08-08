(function(){

    function coinChange(arr, m, n){
        if(n == 0){
            return 1;
        }

        if(n < 0){
            return 0;
        }

        if(m <= 0 && n >= 1){
            return 0;
        }

        return coinChange(arr, m - 1, n) + coinChange(arr, m, n - arr[m-1]);
    }

    console.log(coinChange([1,2,3,4],4,4));


})();
