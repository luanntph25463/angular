window.danhSachController = function($scope,$routeParams,$http){
    // $routeParams lấy ra object các thâm số trên url
    // $http thao tác với api (lấy đường dẫn url)
    let apiURL = "http://localhost:3000/comments";
    // getData đón dữ liệu từ api về
    $scope.getData = function(){
        $http.get(apiURL).then(function(response){
            // dữ liệu được đón về thành công sẻ nằm ở biến response
            console.log(response.data)
            $scope.danhSach = response.data
        })
    }
    $scope.getData();
    $scope.onEdit = function(editId){
        $scope.editId = editId;
        // Tạo Ra 1 Đối Tượng Sửa
        var inputValue = {}
        $http.get(`${apiURL}/${editId}`).then(
            function (res) {
                $scope.inputValue = {...res.data};
            },
        );

    }
    $scope.onSubmitForm = function (){
        $scope.kiemTraDuLieu = {
            ten:false, // chưa Có Lỗi
            tuoi: false,
            capbac: false,
            gender: false,
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
        if(!$scope.inputValue || !$scope.inputValue.gender){
            $scope.kiemTraDuLieu.gender = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.capbac){
            $scope.kiemTraDuLieu.capbac = true;// Có Lỗi
            flag = true
        }

       if(!flag){
        // Xử Lý Thêm
        var ds = $scope.danhSach;
        var editId = $scope.editId;
        if(editId){
            $http.put(`${apiURL}/${editId}`, $scope.inputValue).then(
                function(response){
                    if(response.status == 201){
                        $scope.getData();
                    }
                }
            )
        }else{
            var newItem = {
                ten:$scope.inputValue.ten,
                tuoi:$scope.inputValue.tuoi,
                gender:$scope.inputValue.gender,
                capbac:$scope.inputValue.capbac,
            }
               // Đây là Cục Đối tượng
        // push đối tượng vào mảng đối tượng danh Sách
        // call api với phương thức post để đẩy dữ liệu vào
            $http.post(
                apiURL, // đường dẫn API
                newItem
            ).then(
                function(response){
                    if(response.status == 201){
                    }
                }
            )
            $scope.onClose();
            $scope.alert = "Thêm Thành Công Vào Danh Sách";
          
        }
     
       }
    }
    $scope.onDelete = function (deleteId) {
        let confirm = window.confirm("Bạn xóa muốn xóa không ?");
        if(confirm) {
            //xóa 
            $http.delete(`${apiURL}/${deleteId}`).then(
                function(response){
                    if(response.status == 201){
                        $scope.getData();
                $scope.alert = "xóa Vào Danh Sách";
                    }
                }
            )
           }
        }
    }