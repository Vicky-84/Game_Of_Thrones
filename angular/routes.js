
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
        
           templateUrl		: 'views/index-view.html',
        
        })
    
        .when('/home',{
            
        	templateUrl		: 'views/index-view.html',
        	
           
        })
    
         .when('/results',{
            
        	templateUrl		: 'views/result-view.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myMatch'
        	 
           
        })
    
    
    
    .when('/allbooks',{
            
        	templateUrl		: 'views/allbooks.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myMatch'
        	 
           
        })
    
    
    .when('/allcharacter',{
            
        	templateUrl		: 'views/allcharacter.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myMatch'
        	 
           
        })
    
    
    .when('/allhouse',{
            
        	templateUrl		: 'views/allhouse.html',
            controller 		: 'mainController',
        	controllerAs 	: 'myMatch'
        	 
           
        })
    
    
    .when('/bookview/:ID',{
            
        	templateUrl		: 'views/name.html',
            controller 		: 'recipeCtrl',
        	controllerAs 	: 'single',
            resolve: {
					charname: function(recipeService,$route){
						return recipeService.saveRecipe($route.current.params.ID);
					}
				}
        	 
           
        })
    
    
    .when('/characterview/:ID',{
            
        	templateUrl		: 'views/charname.html',
            controller 		: 'recipeCtrl',
        	controllerAs 	: 'single',
            resolve: {
					charname: function(recipeService,$route){
						return recipeService.saveRecipe1($route.current.params.ID);
					}
				}
        	 
           
        })
    
    .when('/houseview/:ID',{
            
        	templateUrl		: 'views/housename.html',
            controller 		: 'recipeCtrl',
        	controllerAs 	: 'single',
            resolve: {
					charname: function(recipeService,$route){
						return recipeService.saveRecipe2($route.current.params.ID);
					}
				}
        	 
           
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);