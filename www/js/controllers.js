angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {

})

.controller('mainScreenController', function ($scope, $rootScope, global) {
    $scope.$on("$ionicView.enter", function (scopes) {
        console.log("local storage " + window.localStorage['showIntro'] + " showIntro: " + $scope.showIntro);
        //            if (window.localStorage['showIntro'] == undefined) {
        //                $scope.showIntro = true;
        //            }
        //            if (window.localStorage['showIntro'] == 'shownIntro') {
        //                $scope.showIntro = false;
        //            }

    });

    $scope.showIntro = window.localStorage['showIntro'] || 'true';
    $scope.all_prices = global.all_prices;

    $scope.original_price = '';
    $scope.total_price = 0;
    $scope.x = 0;
    $scope.press_equal = false;

    var og_price = $scope.original_price;
    var decimal_pushed = false;
    var push = 0;
    var count = 0;
    $scope.pattern = /(\.\d{1,2})?/;
    var decimal_pattern = /\W/;

    var all_cost = {};

    $scope.finishIntro = function () {
        $scope.showIntro = 'false';
        window.localStorage['showIntro'] = 'false';
    }

    $scope.one = function () {

        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '1';
            $scope.press_equal = false;

        }

        //        if ($scope.original_price.match($scope.original_price.match(/\.\d{1}/))){
        //            console.log("it works!")
        //        }

    };
    $scope.two = function () {

        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '2';
            $scope.press_equal = false;
        }
    };
    $scope.three = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '3';
            $scope.press_equal = false;
        }
    };
    $scope.four = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '4';
            $scope.press_equal = false;
        }
    };
    $scope.five = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '5';
            $scope.press_equal = false;
        }
    };
    $scope.six = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '6';
            $scope.press_equal = false;
        }
    };
    $scope.seven = function () {
        console.log("this is a success. shouldve registered.");
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '7';
            $scope.press_equal = false;
        }
    };
    $scope.eight = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '8';
            $scope.press_equal = false;
        }
    };
    $scope.nine = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '9';
            $scope.press_equal = false;
        }
    };
    $scope.decimal = function () {
        if (decimal_pushed == false) {
            $scope.original_price += '.';
            decimal_pushed = true;
            $scope.press_equal = false;
        }
    };
    $scope.zero = function () {
        if ($scope.original_price.length >= 5) {

        } else if ($scope.original_price.match($scope.original_price.match(/\.\d{2}/))) {
            //            console.log("it works!");
        } else {
            $scope.original_price += '0';
            $scope.press_equal = false;
        }
    };
    $scope.clear = function () {
        var og_price = $scope.original_price;
        var d_check = og_price.substr(og_price.length - 1);
        if (d_check == '.') {
            decimal_pushed = false;
        }
        og_price = og_price.substr(0, og_price.length - 1);
        $scope.original_price = og_price;
        $scope.press_equal = false;
    };

    var totalTax = 0;

    $scope.equal = function () {
        var new_x = (($scope.x % 5) ? $scope.x - $scope.x % 5 + 5 : $scope.x) / 100;
        //        var tax = global.tax_percent;
        var netPrice;

        new_x = 1 - new_x;
        //console.log('Percent off(new_x): ' + new_x);

        netPrice = $scope.original_price * new_x;
        //console.log('netPrice: ' + netPrice);
        var temp = Number(global.tax_percent) / 100;
        //console.log('global.tax_percent: ' + global.tax_percent);
        //        totalTax = netPrice * temp;
        //console.log('totalTax: ' + totalTax);
        //console.log('$scope.total_price: ' + $scope.total_price);
        $scope.total_price = netPrice;
        $scope.total_price = $scope.total_price.toFixed(2);

        if ($scope.original_price.match(/\./)) {
            decimal_pushed = false;
        }

        if ($scope.original_price == 0) {

        } else {
            $scope.press_equal = true;
        }
    };

    $scope.addToList = function () {
        //push = true;
        var all_prices = {};

        all_prices.original = Number($scope.original_price).toFixed(2);
        all_prices.total = Number($scope.total_price).toFixed(2);
        all_prices.percentage = Number($scope.x).toFixed(2);
        global.setAll_Prices(all_prices);
        //console.log(global.all_prices);

        global.setTotal_Prices($scope.total_price);
        global.setOriginal_Prices($scope.original_price);
        //console.log(global.total_prices);

        while (push < global.all_prices.length) {
            count = 0;
            for (var i = 0; i < global.all_prices.length; i++) {
                count = count + +global.all_prices[i].total;
                console.log("total price: " + +global.all_prices[i].total);
                //console.log("count "+count);
                console.log($scope.press_equal);
            }
            console.log("final count " + count);
            global.setMyTotal(count);
            push += 1;
        }
        $scope.total_price = 0;
        $scope.original_price = '';
        $scope.press_equal = false;

    };

    $scope.updateTotal = function (x) {
        temp = $scope.original_price * ((100 - ((x % 5) ? x - x % 5 + 5 : x)) / 100);
        $scope.total_price = temp.toFixed(2);
    };

})

.controller('sideMenuController', function ($scope, $ionicListDelegate, global) {
    $scope.tax_amount = 0;

    $scope.total_prices = global.total_prices;
    $scope.original_prices = global.original_prices

    $scope.all_prices = global.all_prices;

    //var firstItem = global.total_prices;

    $scope.increaseTax = function () {
        //console.log('all-prices: ' + global.all_prices);
        if ($scope.tax_amount >= 10) {
            //do nothing
        } else {
            $scope.tax_amount += 0.5;
            global.setTax_Percent($scope.tax_amount);

        }
    };
    $scope.decreaseTax = function () {

        if ($scope.tax_amount <= 0) {

        } else {
            $scope.tax_amount -= 0.5;
            global.setTax_Percent($scope.tax_amount);
        }
    };


    $scope.edit = function (index) {
        //console.log("item: " + item);
        //var index=$scope.all_prices.indexOf(item)
        //console.log("$scope.all_prices.indexOf(item): " + $scope.all_prices.indexOf(item));
        $scope.all_prices.splice(index, 1);
        $ionicListDelegate.closeOptionButtons();
    }

    $scope.totalOfItAll = function () {
        console.log($scope.all_prices);
        //    $scope.myTotal = global.myTotal;
    };

    $scope.thingItem = {
        item: ''
    }
    $scope.thingsList = [];
    $scope.addItemToThings = function (item) {
        $scope.thingsList.push(item);
        //        document.getElementById('thingItem').value='';
        $scope.thingItem.item = "";
        console.log($scope.inputBox);
    };
    $scope.deleteThing = function (index) {
        //console.log("item: " + item);
        //var index=$scope.all_prices.indexOf(item)
        //console.log("$scope.all_prices.indexOf(item): " + $scope.all_prices.indexOf(item));
        $scope.thingsList.splice(index, 1);
        $ionicListDelegate.closeOptionButtons();
    }
});
