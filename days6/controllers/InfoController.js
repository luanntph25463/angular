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
    switch ($routeParams.name) {
        case 'nhan_vien':
            $scope.per = "Nhân Viên";
            $scope.tien = [700, 1200, 2400];
            break;
        case 'can_bo':
            $scope.per = "Cán Bộ";
            $scope.tien = [1000, 2000, 3000];
            break;
        case 'quan_ly':
            $scope.per = "Quản Lý";
            $scope.tien =  [2000, 4000, 6000];
            break;
    }
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

       $scope.gender = ($scope.inputValue.gioitinh == 1)? "Ông" : "Bà";
       // không lỗi Xử Lý Thêm
       if(!flag){
        // Xử Lý Thêm
        var ds = $scope.danhSach;
        //  fake id tăng tự dộng
        var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
        var newItem = {
            id:newID,
            ten:$scope.inputValue.ten,
            tuoi:$scope.inputValue.tuoi,
        }// Đây là Cục Đối tượng
        $scope.hienthi = $scope.gender +" " + $scope.inputValue.ten + " là " + $scope.per + " Cấp Bậc " + $scope.inputValue.capbac + " Được Chi Trả " + $scope.tien[$scope.inputValue.capbac-1]* $scope.inputValue.songaynamvien + " Tiền Viện"
       }
    }
    $scope.danhSach = [
        {id:1,ten:"ABC",tuoi:20},
        {id:2,ten:"ABC",tuoi:201},
        {id:3,ten:"ABC",tuoi:203},
        {id:4,ten:"ABC",tuoi:203},
        {id:5,ten:"ABC",tuoi:204},
    ]
}