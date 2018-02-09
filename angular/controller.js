
// Controller to get the data from each of the JSON 
myApp.controller('mainController',['$http','$location',function($http,$location) {


  var main = this;
  
  this.characters = [];
  this.books = [];    
  this.houses = [];    

  this.baseUrl  = 'https://www.anapioficeandfire.com/api/books?page=1&pageSize=50';
  this.baseUrl1 = 'https://www.anapioficeandfire.com/api/characters?page=20&pageSize=50';
  this.baseUrl2 = 'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50';
  

 //Function to get data for books    
    
  this.loadAllBooks = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          main.books= response.data;
          console.log(main.books);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
  
  
   //Function to get data for characters
  
    this.loadAllCharacter = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl1
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          main.characters= response.data
          console.log(main.characters);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
    
    
     //Function to get data for houses
    
    this.loadAllHouse = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl2
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          
          console.log(response);
          main.houses= response.data;
          console.log(main.houses);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }
    
    
    
    
    
}]);


//// Controller to get the data and url ID for each of the books,characters and houses 
  
myApp.controller('recipeCtrl', ['$scope', 'recipeService','$location',
    function($scope, recipeService,$location){
        
      var main=this;
      // initialize your model in you controller
      $scope.recipe={};
        
      this.authors=[];
      this.characters=[];  
      this.povCharacters=[];
        
        
    this.charTitles=[];
    this.charAliases=[];
    this.charAllegiances=[];
    this.charBooks=[];
    this.charPovBooks=[];
    this.charTvSeries=[];
    this.charPlayedBy=[]; 
        
        
    this.houseTitles=[];
    this.houseSeats=[];
    this.houseAncestralWeapons=[];
    this.houseCadetBranches=[];
    this.houseSwornMembers=[];    
        
    this.sortType     = 'name'; // set the default sort type
    this.sortReverse  = false;  // set the default sort order
    
        
        
        
        

    
      this.saveRecipe = function(recipe) {
          
           main.bookId=(recipe.substr(recipe.lastIndexOf('/') + 1));
          
           console.log(main.bookId);
          
          $location.path("bookview/"+main.bookId);

      }
      
      
      this.character = function(recipe) {
           // call the service, handle success/failure from within your controller
           main.charId=(recipe.substr(recipe.lastIndexOf('/') + 1));
          
           console.log(main.charId);
          
          $location.path("characterview/"+main.charId);

      }
      
      
      this.houses = function(recipe) {
           // call the service, handle success/failure from within your controller
           main.houseId=(recipe.substr(recipe.lastIndexOf('/') + 1));
          
           console.log(main.houseId);
          
          $location.path("houseview/"+main.houseId);

      }
      
                
       this.name = recipeService.name;
       this.isbn = recipeService.isbn;
       this.authors = recipeService.authors;
       this.numberOfPages = recipeService.numberOfPages;
       this.publisher = recipeService.publisher;
       this.country =  recipeService.country;
       this.mediaType = recipeService.mediaType;
       this.released = recipeService.released;
       this.characters = recipeService.characters;
       this.povCharacters = recipeService.povCharacters;
        
       this.charName = recipeService.charName;
       this.charGender = recipeService.charGender;
       this.charCulture = recipeService.charCulture;
       this.charBorn = recipeService.charBorn;
       this.charDied = recipeService.charDied;
       this.charTitles = recipeService.charTitles;
       this.charAliases = recipeService.charAliases
       this.charFather = recipeService.charFather;
       this.charMother = recipeService.charMother;
       this.charSpouse = recipeService.charSpouse;
       this.charAllegiances = recipeService.charAllegiances;
       this.charBooks = recipeService.charBooks;
       this.charPovBooks = recipeService.charPovBooks;
       this.charTvSeries = recipeService.charTvSeries;
       this.charPlayedBy = recipeService.charPlayedBy; 
        
       this.houseName = recipeService.houseName;
       this.houseRegion = recipeService.houseRegion;
       this.houseCoatOfArms = recipeService.houseCoatOfArms;
       this.houseWords = recipeService.houseWords;
       this.houseDied = recipeService.houseDied;
       this.houseTitles = recipeService.houseTitles;
       this.houseSeats = recipeService.houseSeats;
       this.houseCurrentLord = recipeService.houseCurrentLord;
       this.houseHeir = recipeService.houseHeir;
       this.houseOverlord = recipeService.houseOverlord;
       this.houseFounded = recipeService.houseFounded;
       this.houseFounder = recipeService.houseFounder;
       this.houseDiedOut = recipeService.houseFounder;
       this.houseAncestralWeapons = recipeService.houseAncestralWeapons;
       this.houseCadetBranches = recipeService.houseCadetBranches;
       this.houseSwornMembers = recipeService.houseSwornMembers;           
        
        
       //console.log(this.name,this.isbn,this.authors,this.charName);    
      
      
  }]);