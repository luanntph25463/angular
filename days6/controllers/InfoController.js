window.InfoController = function($scope,$routeParams){
    // $routeParams lấy ra object các thâm số trên url
    // $scope.luan = [{
    //             name: "luân",
    //             age: 21,
    //             sdt: "0334590019"
    //         },{
    //             name: "chiến",
    //             age: 21,
    //             sdt: "0334590019"
    //         }]
    // console.log($routeParams.name)
    $scope.kiemTraDuLieu = {
        ten:false, // chưa Có Lỗi
        songaynamvien: false
    }
    $scope.name = $routeParams.name;
    $scope.onSubmitForm = function (){
    $scope.name = $routeParams.name;
     
        // kiểm Tra nếu họ Tên trống
        let flag = false
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.kiemTraDuLieu.ten = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.songaynamvien){
            $scope.kiemTraDuLieu.songaynamvien = true;// Có Lỗi
            flag = true
        }
           $scope.gender = ($scope.inputValue.gioitinh == 1)? "Ông" : "Bà";
        if($scope.inputValue.capbac == 1 && $scope.name == "Nhân_viên"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 1200;
        }
        if($scope.inputValue.capbac == 2 && $scope.name == "Nhân_viên"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 2400;
        }
        if($scope.inputValue.capbac == 3 && $scope.name == "Nhân_viên"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 3600;
        }
        if($scope.inputValue.capbac == 1 && $scope.name == "Cán_bộ"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 2460;
        }
        if($scope.inputValue.capbac == 2 && $scope.name == "Cán_bộ"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 3600;
        }
        if($scope.inputValue.capbac == 3 && $scope.name == "Cán_bộ"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 5800;
        }
        if($scope.inputValue.capbac == 1 && $scope.name == "Quản_lý"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 4000;
        }
        if($scope.inputValue.capbac == 2 && $scope.name == "Quản_lý"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 4100;
        }
        if($scope.inputValue.capbac == 3 && $scope.name == "Quản_lý"){
            $scope.tongtien = $scope.inputValue.songaynamvien * 4200;
        }
        if(!flag){
            $scope.hienthi = $scope.gender +" " + $scope.inputValue.ten + " Cấp Bậc " + $scope.inputValue.capbac + " là " + $scope.name + " Được Chi Trả " + $scope.tongtien + " Tiền Viện"
        }
    }
}