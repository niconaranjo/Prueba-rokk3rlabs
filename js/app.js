
var app = angular.module('rokk3rlabApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    
    $scope.activity = {};
    $scope.zonaID = [];
    //$scope.tblProfesores = 'src/analytics.html';

    $http.get('./json/activity-data.json')
    .then(function( response ){
        console.log( response )
        $scope.activity = response.data;
        for( var i =0; 0< response.data.length; i++){
            $scope.zonaID.push( response.data[i].zoneId);
        }
        $scope.zonaID = response.data.zoneId;
    })
    
    $scope.menuSuperior = "src/menu.html";

    $scope.setActive = function(option){
        $scope.mAnalytics = "";
        $scope.mNews = "";

        $scope[option] = "activo";

    }

    $scope.init = function () {
        var ctx = document.getElementById("countZone").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: $scope.zonaID,
                datasets: [{
                    label: '# of Votes',
                    data: [16, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    };

    

    


}]);