app.config(['$routeProvider',
  function($routeProvider) {
      var viewBase = 'app/views/';
    $routeProvider.
      when('/home', {
        templateUrl: viewBase+'home.html',
//        controller: 'homeCtrl'
      }).
      when('/tab1', {
        templateUrl: viewBase+'home.html',
//        controller: 'homeCtrl'
      }).
      when('/aboutus', {
        templateUrl: viewBase+'aboutus.html',
        controller: 'aboutusCtrl'
      }).
      when('/more', {
        templateUrl: viewBase+'product.html',
//        controller: 'aboutusCtrl'
      }).
      when('/whatsnew', {
        templateUrl: viewBase+'whatsnew.html',
//        controller: 'aboutusCtrl'
      }).
      when('/recipees', {
        templateUrl: viewBase+'recipees.html',
//        controller: 'aboutusCtrl'
      }).
      when('/vegetables', {
        templateUrl: viewBase+'vegetables.html',
//        controller: 'aboutusCtrl'
      }).
      when('/ramadan', {
        templateUrl: viewBase+'ramadan.html',
//        controller: 'aboutusCtrl'
      }).
      when('/grocery', {
        templateUrl: viewBase+'grocery.html',
//        controller: 'aboutusCtrl'
      }).
      when('/drinks', {
        templateUrl: viewBase+'drinks.html',
//        controller: 'aboutusCtrl'
      }).
      when('/vegetables', {
        templateUrl: viewBase+'vegetables.html',
//        controller: 'aboutusCtrl'
      }).
      when('/fruits', {
        templateUrl: viewBase+'fruits.html',
//        controller: 'aboutusCtrl'
      }).
      when('/breads', {
        templateUrl: viewBase+'breads.html',
//        controller: 'aboutusCtrl'
      }).
      when('/news', {
        templateUrl: viewBase+'news.html',
//        controller: 'aboutusCtrl'
      }).
      when('/blog', {
        templateUrl: viewBase+'blog.html',
//        controller: 'aboutusCtrl'
      }).
      when('/contactus', {
        templateUrl: viewBase+'contactus.html',
//        controller: 'aboutusCtrl'
      }).
      when('/checkout', {
        templateUrl: viewBase+'checkout.html',
//        controller: 'aboutusCtrl'
      }).
      when('/myaccount', {
        templateUrl: viewBase+'myaccount.html',
//        controller: 'aboutusCtrl'
      }).
      when('/trackorder', {
        templateUrl: viewBase+'trackorder.html',
//        controller: 'aboutusCtrl'
      }).
      when('/login', {
        templateUrl: viewBase+'login.html',
//        controller: 'aboutusCtrl'
      }).
      when('/cart', {
        templateUrl: viewBase+'cart.html',
//        controller: 'aboutusCtrl'
      }).
      when('/register', {
        templateUrl: viewBase+'register.html',
//        controller: 'aboutusCtrl'
      }).
      when('/404', {
        templateUrl: viewBase+'404.html',
//        controller: 'aboutusCtrl'
      }).
      when('/', {
        templateUrl: viewBase+'home.html',
//        controller: 'aboutusCtrl'
      }).
      otherwise({
//        redirectTo: '/404'
        redirectTo: '/home'
      });
  }]);

//
//app.config(function($stateProvider, $urlRouterProvider) {
//    $stateProvider
//
//            .state('app', {
//        url: '/app',
//        abstract: true,
//        templateUrl: 'templates/menu.html',
////        controller: 'AppCtrl'
//    })
//
//            .state('app.defauldadapter', {
//        url: '/defauldadapter',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/defauldadapter.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.blackberry-persistent-store', {
//        url: '/blackberry-persistent-store',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/blackberry-persistent-store.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.dom', {
//        url: '/dom',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/dom.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.window-name', {
//        url: '/window-name',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/window-name.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.gears-sqlite', {
//        url: '/gears-sqlite',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/gears-sqlite.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.ie-userdata', {
//        url: '/ie-userdata',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/ie-userdata.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.webkit-sqlite', {
//        url: '/webkit-sqlite',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/webkit-sqlite.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.indexed-db', {
//        url: '/indexed-db',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/indexed-db.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.memory', {
//        url: '/memory',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/adapters/memory.html',
//                controller: 'SearchCtrl'
//            }
//        }
//    })
//            .state('app.log', {
//        url: '/log',
//        views: {
//            'menuContent': {
//                templateUrl: 'templates/log.html',
////                controller: 'SearchCtrl'
//            }
//        }
//    });
//    // if none of the above states are matched, use this as the fallback
//    $urlRouterProvider.otherwise('/app/log');
//});
