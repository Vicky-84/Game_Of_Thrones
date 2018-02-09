//Service to get the JSON data 

myApp.service('recipeService',['$http', function($http){

    var main=this;
    
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
    
    var baseUrl = "https://www.anapioficeandfire.com/api/books"
    var baseUrl1 = "https://www.anapioficeandfire.com/api/characters"
    var baseUrl2 = "https://www.anapioficeandfire.com/api/houses"
    
  //Service Function to get details of a book
    
  main.saveRecipe = function(recipe){
      
      console.log(recipe);
      // return a Promise object so that the caller can handle success/failure
       return $http({ method: 'GET', url: baseUrl+'/'+recipe}).then(function successCallback(response){
                
                
                main.bookDetail= response.data;
                
       main.name = main.bookDetail.name;
       main.isbn = main.bookDetail.isbn;
       main.authors = main.bookDetail.authors;
       main.numberOfPages = main.bookDetail.numberOfPages;
       main.publisher = main.bookDetail.publisher;
       main.country =  main.bookDetail.country;
       main.mediaType = main.bookDetail.mediaType;
       main.released = main.bookDetail.released;
       main.characters = main.bookDetail.characters;
       main.povCharacters = main.bookDetail.povCharacters;        
           
           
                return main.bookDetail;
                
                },function errorCallback(response){
                console.log("Something went wrong with books call");
            });
  }
  
  
    //Service Function to get details of a character
  
  main.saveRecipe1 = function(recipe){
      
      console.log(recipe);
      // return a Promise object so that the caller can handle success/failure
       return $http({ method: 'GET', url: baseUrl1+'/'+recipe}).then(function successCallback(response){
                
                
       main.charDetail= response.data;
                
       main.charName = main.charDetail.name;
       main.charGender = main.charDetail.gender;
       main.charCulture = main.charDetail.culture;
       main.charBorn = main.charDetail.born;
       main.charDied = main.charDetail.died;
       main.charTitles = main.charDetail.titles;
       main.charAliases = main.charDetail.aliases;
       main.charFather = main.charDetail.father;
       main.charMother = main.charDetail.mother;
       main.charSpouse = main.charDetail.spouse;
       main.charAllegiances = main.charDetail.allegiances;
       main.charBooks = main.charDetail.books;
       main.charPovBooks = main.charDetail.povBooks;
       main.charTvSeries = main.charDetail.tvSeries;
       main.charPlayedBy = main.charDetail.playedBy;       
              
           
             
           
           
                return main.charDetail;
                
                },function errorCallback(response){
                console.log("Something went wrong with characters call");
            });
  }
  
  
    //Service Function to get details of a house
  
   main.saveRecipe2 = function(recipe){
      
      console.log(recipe);
      // return a Promise object so that the caller can handle success/failure
       return $http({ method: 'GET', url: baseUrl2+'/'+recipe}).then(function successCallback(response){
                
                
       main.houseDetail= response.data;
                
       main.houseName = main.houseDetail.name;
       main.houseRegion = main.houseDetail.region;
       main.houseCoatOfArms = main.houseDetail.coatOfArms;
       main.houseWords = main.houseDetail.words;
       main.houseDied = main.houseDetail.died;
       main.houseTitles = main.houseDetail.titles;
       main.houseSeats = main.houseDetail.seats;
       main.houseCurrentLord = main.houseDetail.currentLord;
       main.houseHeir = main.houseDetail.heir;
       main.houseOverlord = main.houseDetail.overlord;
       main.houseFounded = main.houseDetail.founded;
       main.houseFounder = main.houseDetail.founder;
       main.houseDiedOut = main.houseDetail.diedOut;
       main.houseAncestralWeapons = main.houseDetail.ancestralWeapons;
       main.houseCadetBranches = main.houseDetail.cadetBranches;
       main.houseSwornMembers = main.houseDetail.swornMembers;       
              
           
             
           
           
                return main.houseDetail;
                
                },function errorCallback(response){
                console.log("Something went wrong with characters call");
            });
  }
  

}]);