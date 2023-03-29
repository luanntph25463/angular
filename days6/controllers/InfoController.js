window.InfoController = function($scope,$routeParams){
    // $routeParams lấy ra object các thâm số trên url
    switch ($routeParams.name) {
        case 'nhan_vien':
            $scope.per = "Nhân Viên";
            $scope.tien = [1200, 2400, 3600];
            break;
        case 'can_bo':
            $scope.per = "Cán Bộ";
            $scope.tien = [2460, 3600, 5800];
            break;
        case 'quan_ly':
            $scope.per = "Quản Lý";
            $scope.tien =  [6000, 7000, 8000];
            break;
    }
    const isNumeric = /^\d+$/;

    $scope.onSubmitForm = function (){
        $scope.kiemTraDuLieu = {
            ten:false, // chưa Có Lỗi
            songaynamvien: false,
            capbac: false,
            gioitinh: false,
        }
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
        if(!$scope.inputValue || !$scope.inputValue.gioitinh){
            $scope.kiemTraDuLieu.gioitinh = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.capbac){
            $scope.kiemTraDuLieu.capbac = true;// Có Lỗi
            flag = true
        }
        if(isNumeric.test($scope.inputValue.songaynamvien) == false){
            $scope.kiemTraDuLieu.songaynamvien = true;// Có Lỗi
            flag = true
        }
       $scope.gender = ($scope.inputValue.gioitinh == 1)? "Ông" : "Bà";
       // không lỗi Xử Lý Thêm
       if(!flag){
        $scope.hienthi = $scope.gender +" " + $scope.inputValue.ten + " là " + $scope.per + " Cấp Bậc " + $scope.inputValue.capbac + " Được Chi Trả " + $scope.tien[$scope.inputValue.capbac-1]* $scope.inputValue.songaynamvien + " Tiền Viện"
       }
    }
}