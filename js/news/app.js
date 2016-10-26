(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://encanto-development.firebaseio.com/news");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Noticias';
    $scope.app={title:'',detail:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={title:'',detail:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.edit=function(value){
        $scope.app=value;
    };
    });
})();