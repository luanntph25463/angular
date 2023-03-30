window.danhSachController = function($scope,$routeParams){
    // $routeParams lấy ra object các thâm số trên url
    $scope.kiemTraDuLieu = {
        ten:false, // chưa Có Lỗi
        tuoi: false
    }
    $scope.onClose = function(){
        $scope.inputValue = {
            ten:"",
            tuoi:"",
        }
        $scope.editId = 0;
    }
    $scope.onSubmitForm = function (){
        $scope.kiemTraDuLieu = {
            ten:false, // chưa Có Lỗi
            tuoi: false,
            capbac: false,
            gioitinh: false,
        }
        // kiểm Tra nếu họ Tên trống
        let flag = false
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.kiemTraDuLieu.ten = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.tuoi){
            $scope.kiemTraDuLieu.tuoi = true;// Có Lỗi
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
        var editId = $scope.editId;
        if(editId){
            for(var i = 0;i < $scope.danhSach.length;i++){
                if($scope.danhSach[i].id == editId){
                $scope.danhSach[i].ten = $scope.inputValue.ten;
                $scope.danhSach[i].gender = $scope.gender;
                $scope.danhSach[i].Capbac = $scope.inputValue.capbac;
                $scope.danhSach[i].tuoi = $scope.inputValue.tuoi;
                }
            }
            $scope.onClose();
            return;
        }
        //  fake id tăng tự dộng
        var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
        var newItem = {
            id:newID,
            ten:$scope.inputValue.ten,
            gender:$scope.gender,
            Capbac: $scope.inputValue.capbac,
            tuoi:$scope.inputValue.tuoi,
        }// Đây là Cục Đối tượng
        // push đối tượng vào mảng đối tượng danh Sách
        $scope.danhSach.push(newItem);
        $scope.onClose();
        $scope.alert = "Thêm Thành Công Vào Danh Sách";
      
       }
    }
    $scope.danhSach = [
        {id:1,ten:"ABC",gender:"Ông",Capbac: "1",tuoi:20},
        {id:2,ten:"ABC",gender:"Ông",Capbac: "1",tuoi:201},
        {id:3,ten:"ABC",gender:"Ông",Capbac: "1",tuoi:203},
        {id:4,ten:"ABC",gender:"Ông",Capbac: "1",tuoi:203},
        {id:5,ten:"ABC",gender:"Ông",Capbac: "1",tuoi:204},
    ]
    $scope.onEdit = function(editId){
        $scope.editId = editId;
        // Tạo Ra 1 Đối Tượng Sửa
        var editItem = {
            ten: "",
            tuoi: ""
        }
        console.log(editId);
        for(var i = 0;i < $scope.danhSach.length;i++){
            if($scope.danhSach[i].id == editId){
                editItem.ten = $scope.danhSach[i].ten;
                editItem.tuoi = $scope.danhSach[i].tuoi;
            }
        }
        $scope.inputValue = {
            ten : editItem.ten,
            tuoi : editItem.tuoi
        }
    }
    $scope.onDelete = function (deleteId) {
        let confirm = window.confirm("Bạn xóa muốn xóa không ?");
        if(confirm) {
            //xóa 
            $scope.danhSach  = $scope.danhSach.filter(function(item){
                return item.id !== deleteId;
            });
        }
    }
}