app.service('productServices', ['$http', function($http) {
        var serviceBase = 'app/data/';

        this.getProducts = function($scope, category, tabSelected) {
            var productsUrl = serviceBase + 'azc_products.json';
            $http.get(productsUrl).then(function(data) {
                var filteredList = [];
                angular.forEach(data.data, function(item, i) {
                    var catList = item.Categories.split(";;");
                    if (catList.indexOf(category) > -1) {
                        if (item.Brand==tabSelected) {
                            filteredList.push(item);
                        }
                    }
                });
                $scope.products = filteredList;
            });
        };
    }]);