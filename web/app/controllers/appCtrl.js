app.controller('AppCtrl', ['$scope', 'translationService', 'productServices', function($scope, translationService, productServices) {
        $scope.appName = 'ASZ APP';
        //Run translation if selected language changes
        $scope.translate = function(selectedLanguage) {
            translationService.getTranslation($scope, selectedLanguage);

        };
        $scope.showProductsByCategory = function() {
            productServices.getProducts($scope, $scope.category.name, $scope.tabSelected);
        };
        $scope.showTabProducts = function(selectedTab) {
            $scope.tabSelected = selectedTab;
            productServices.getProducts($scope, $scope.category.name, $scope.tabSelected);
        };
        $scope.catagories = [
            {name: "RAMADAN"},
            {name: "GROCERY"},
            {name: "DRINKS/ BEVERAGES"},
            {name: "OTHER FRUIT DRINKS"},
            {name: "BREAKFAST DRINKS"},
            {name: "COSMETICS"},
            {name: "ORANGE"},
            {name: "FROZEN BREAD AND CAKES"},
            {name: "OTHER FROZEN BREAD"},
            {name: "FROZEN VEGETABLES"},
            {naem: "VEGETABLE PIZZA"}
        ];
        $scope.category = angular.copy($scope.catagories[0]);

        $scope.lang = {en: "en", az: "az"};

        //Init
        var selectedLanguage = 'en';
        $scope.translate(selectedLanguage);
        $scope.tabSelected = "KNORR";
        $scope.showProductsByCategory();

    }]);
