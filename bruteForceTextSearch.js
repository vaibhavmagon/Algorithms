(function(){

    function bruteForceSearch(pattern, text) {
        var M = pattern.length;
        var N = text.length;
        for (var i = 0; i <= N - M; ++i) {
            var matched = true;
            for (var j = 0; j < M; ++j) {
                if (text.charAt(i + j) != pattern.charAt(j)) {
                    matched = false;
                    break;
                }
            }
            if (matched) {
                return i;
            }
        }
        return -1;
    }

    console.log(bruteForceSearch("Delhi","New Delhi"));

})();