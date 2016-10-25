(function(){
var app = angular.module('app',["firebase" ])
.controller('appCtrl',function($scope,$firebase){
  var ref = new Firebase("https://encanto-a1e7f.firebaseio.com/users");
        var sync = $firebase(ref);


  $scope.DB = sync.$asArray();
  
  $scope.titulo='Usuarios';
  $scope.generos=['F','M'];
 
  
  $scope.app={username:'',first_name:'',gender:'',email:''};

  $scope.add=function(){
    $scope.DB.$add($scope.app);
    $scope.app={username:'',first_name:'',genero:'',email:''};
  };
  $scope.delete=function(item){
    $scope.DB.$remove(item);
  };
 
});
})();