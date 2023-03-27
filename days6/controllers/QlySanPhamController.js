window.QlySanPhamController = function($scope,$routeParams){
    // $routeParams lấy ra object các thâm số trên url
    $scope.danhSach = [
        {id:1,ten:"Áo",color:"Xanh",status:1,price: "200"},
        {id:2,ten:"Áo",color:"Đen",status:2,price: "300"},
        {id:3,ten:"Áo",color:"Vàng",status:1,price: "300"},
    ]
   
   
    $scope.onSubmitForm = function (){
        $scope.kiemTraDuLieu = {
            ten:false, // chưa Có Lỗi
            price: false,
            color: false,
            status: false,
        }
        // kiểm Tra nếu họ Tên trống
        let flag = false
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.kiemTraDuLieu.ten = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.color){
            $scope.kiemTraDuLieu.color = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.status){
            $scope.kiemTraDuLieu.status = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || $scope.inputValue.price <= 0){
            $scope.kiemTraDuLieu.price = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.price){
            $scope.kiemTraDuLieu.price = true;// Có Lỗi
            flag = true
        }

       // không lỗi Xử Lý Thêm
       if(!flag){
        // Xử Lý Thêm
        var ds = $scope.danhSach;
        var editId = $scope.editId;
        if(editId){
            for(var i = 0;i < $scope.danhSach.length;i++){
                if($scope.danhSach[i].id == editId){
                $scope.danhSach[i].ten = $scope.inputValue.ten;
                $scope.danhSach[i].color = $scope.inputValue.color;
                $scope.danhSach[i].price = $scope.inputValue.price;
                $scope.danhSach[i].status = $scope.inputValue.status;
                }
            }
            $scope.onClose();
        $scope.alert = "Sửa Thành Công Danh Sách";

            return;
        }
        //  fake id tăng tự dộng
        var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
        var newItem = {
            id:newID,
            ten:$scope.inputValue.ten,
            color:$scope.inputValue.color,
            price: $scope.inputValue.price,
            status: $scope.inputValue.status,
        }// Đây là Cục Đối tượng
        // push đối tượng vào mảng đối tượng danh Sách
        $scope.danhSach.push(newItem);
        $scope.onClose();
        $scope.alert = "Thêm Thành Công Vào Danh Sách";
      
       }
    }
    $scope.onEdit = function(editId){
        $scope.editId = editId;
        // Tạo Ra 1 Đối Tượng Sửa
        var editItem = {
            ten: "",
            color: "",
            price: "",
            status : "",
        }
        console.log(editId);
        for(var i = 0;i < $scope.danhSach.length;i++){
            if($scope.danhSach[i].id == editId){
                editItem.ten = $scope.danhSach[i].ten;
                editItem.color = $scope.danhSach[i].color;
                editItem.status = $scope.danhSach[i].status;
                editItem.price = $scope.danhSach[i].price;
            }
        }
        $scope.inputValue = {
            ten : editItem.ten,
            price : editItem.price,
            color : editItem.color,
            status : editItem.status
        }
    }
    $scope.onClose = function(){
        $scope.inputValue = {
            ten:"",
            color:"",
            status:"",
            price:"",
        }
        $scope.editId = 0;
    }
   
    $scope.onDelete = function (editId) {
        $scope.danhSach.splice($scope.editId, 1);
        $scope.alert = "Xóa Thành Công  Sản Phẩm";

    }
}