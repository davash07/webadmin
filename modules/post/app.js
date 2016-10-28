(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://encanto-development.firebaseio.com/posts");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Publicaciones';
    $scope.app={description:'', image_url:'', create_at:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={description:'', image_url:'', create_at:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.edit=function(value){
        $scope.app=value;
        
    };
    $scope.ver=function(value){
        $scope.app=value;
    };
    $scope.vercomentarios=function(value){
        $scope.app=value;
    };
    
    });
    
})();

