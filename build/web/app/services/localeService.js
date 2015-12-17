app.service('translationService', ['$resource', function($resource) {

        this.getTranslation = function($scope, language) {
            var languageFilePath = 'resource/translation_' + language + '.json';
            console.log(languageFilePath);
            $resource(languageFilePath).get(function(data) {
                $scope.translation = data;
                $scope.selectedLanguage = {};
                $scope.selectedLanguage.name = $scope.translation[language + "_lang"];
                $scope.selectedLanguage.url = $scope.translation[language + "_url"];
                location.href='#home';
            });
        };
    }]);