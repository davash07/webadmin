(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://encanto-development.firebaseio.com/classified/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Clasificados';
    $scope.app={username:'',country:'', description:'', imageclassified_url:'', timestamp:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={username:'',country:'', description:'', imageclassified_url:'', timestamp:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.ver=function(value){
            $scope.DB.app(value);
    };
    
    });
    
    
    app.controller('appView',function($scope, $firebase){
    var ref = new Firebase("https://encanto-development.firebaseio.com/classified/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Clasificados';
    $scope.app={username:'',country:'', description:'', imageclassified_url:'', timestamp:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={username:'',country:'', description:'', imageclassified_url:'', timestamp:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.ver=function(value){
        if ($scope.DB.$id){
            var ref = new Firebase("https://encanto-development.firebaseio.com/classified/" + $id);
            var sync = $firebase(ref);
            $scope.DB = sync.$asArray();
            scope.app={username:'',country:'', description:'', imageclassified_url:'', timestamp:''};
            $scope.DB.app(value);
        };
    };
    
    });
   
})();