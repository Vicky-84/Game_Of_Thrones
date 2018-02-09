//Directive to view all books

myApp.directive("myBooks",['$http', function($http){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/books.html",
        
          }
    

}]);


//Directive to view all characters

myApp.directive("myCharacter",['$http', function($http){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/characters.html",
          }

}]);


//Directive to view all houses

myApp.directive("myHouses",['$http', function($http){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/houses.html",
          }

}]);


//Directive to view series

myApp.directive("singleSeries",['$http', function($http){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/singleseries.html",
          }

}]);


//Directive to view all titles

myApp.directive("singleTitle",['$http', function($http){

	var index = 1;
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/singletitle.html",
          }

}]);



//Directive to view single character name

myApp.directive("singleChar",['$http', function($http){
     
    
    
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/singlechar.html",
        
        scope : {
            
            baseurl :'@'
            
        }, controller  : function($scope){
                
                console.log($scope.baseurl);
                $http({ method: 'GET', url: $scope.baseurl}).then(function successCallback(response){
                    
                    
                    
                       $scope.charId = ($scope.baseurl.substr($scope.baseurl.lastIndexOf('/') + 1));
                       $scope.name = response.data.name;
                    
                       console.log($scope.charId,$scope.name);
                    
                },function errorCallback(response) {
                    alert("some error occurred. Check the console.");
                    console.log(response);
                });
                    
            
        }
    
        
        
          }

}]);


//Directive to view single book name

myApp.directive("singleBook",['$http', function($http){
     
    
    
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/singlebook.html",
        
        scope : {
            
            baseurl :'@'
            
        }, controller  : function($scope){
                
                console.log($scope.baseurl);
                $http({ method: 'GET', url: $scope.baseurl}).then(function successCallback(response){
                    
                    
                    
                       $scope.bookId = ($scope.baseurl.substr($scope.baseurl.lastIndexOf('/') + 1));
                       $scope.name = response.data.name;
                    
                       console.log($scope.bookId,$scope.name);
                    
                },function errorCallback(response) {
                    alert("some error occurred. Check the console.");
                    console.log(response);
                });
                    
            
        }
    
        
        
          }

}]);



//Directive to view single house name

myApp.directive("singleHouse",['$http', function($http){
     
    
    
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/singlehouse.html",
        
        scope : {
            
            baseurl :'@'
            
        }, controller  : function($scope){
                
                console.log($scope.baseurl);
                $http({ method: 'GET', url: $scope.baseurl}).then(function successCallback(response){
                    
                    
                    
                       $scope.houseId = ($scope.baseurl.substr($scope.baseurl.lastIndexOf('/') + 1));
                       $scope.name = response.data.name;
                    
                       console.log($scope.houseId,$scope.name);
                    
                },function errorCallback(response) {
                    alert("some error occurred. Check the console.");
                    console.log(response);
                });
                    
            
        }
    
        
        
          }

}]);







