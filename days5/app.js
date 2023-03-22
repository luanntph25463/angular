angular.module("myapp", []).controller("infoController",($scope)=>{
        $scope.luan = [{
            name: "luân",
            age: 21,
            sdt: "0334590019"
        },{
            name: "chiến",
            age: 21,
            sdt: "0334590019"
        }]
        $scope.say = ()=>{
            // alert($scope.test);
            // alert($scope.tinh);
            $scope.hihi = ($scope.gender == 1)? "Nam" : "Nữ";
        }
        $scope.count = 0
        $scope.Mymouse = () =>{
            $scope.count++;
        }
    })