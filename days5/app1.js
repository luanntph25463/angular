angular.module("myapp", []).controller("infoController",($scope)=>{
    $scope.test = ()=>{
        var tuoi = new Date()
        var now = tuoi.getFullYear();
        $scope.now = now
        $scope.sotuoi = $scope.now - $scope.age;
        $scope.dutuoi = ($scope.sotuoi <= 27 && $scope.sotuoi >= 18)? "Có" : "Không"
        $scope.gender = ($scope.gender == 1)? "Ông" : "Bà";
        $scope.hienthi = $scope.gender +" "+ $scope.name +" "+ $scope.dutuoi + " Đủ Tuổi Đi Nghĩa Vụ Quân SỰ"
    }
})