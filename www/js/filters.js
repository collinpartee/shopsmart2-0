angular.module('starter.filters', [])

.filter('sumOfValue', function (global) {
    return function (data, key) {
//        debugger;
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;        
        var sum = 0.00;
        
        angular.forEach(data,function(v,k){
            sum = sum + parseFloat(v[key]);
        });
        
        var temp = sum.toFixed(2) * (global.tax_percent / 100);
//        console.log(temp);
        sum = sum + temp;
        return sum.toFixed(2);
    }
})
.filter('percentFilter', function () {
    return function (data, key) {
//        debugger;
        if (angular.isUndefined(data) && angular.isUndefined(key))
            return 0;        
        var percent = 0;
        
        percent = parseInt(data);
        percent = (percent%5)?percent-percent%5+5:percent;
        return percent;
    }
    
})
.filter('numberFixedLen', function(){
     return function (n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len);
//            if (isNaN(num) || isNaN(len)) {
//                return n;
//            }
         var temp = (100 - len)/100;
//         console.log('len '+len);
//            num = ''+num;
//            while (num.length < len) {
//                num = '0'+num;
//            }
         
            num = num * temp;
            return Number(num).toFixed(2);
        };
        
})
.filter('twoDigits', function(){
     return function (n) {
            var num = parseInt(n, 10);
//            len = parseInt(len);
//            if (isNaN(num) || isNaN(len)) {
//                return n;
//            }
            return Number(num).toFixed(2);
        };
        
})

;