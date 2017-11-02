
app.config( function( $routeProvider ){
    
      $routeProvider
        .when('/',{
            templateUrl: 'src/analytics.html',
            controller: 'analyticsCtrl'
        })
        .when('/analytics',{
            templateUrl: 'src/analytics.html',
            controller: 'analyticsCtrl'
        })
        .when('/news',{
            templateUrl: 'src/news.html',
            controller: 'newsCtrl'
        })
        .otherwise({
          redirectTo: '/'
        })
    
    })
    