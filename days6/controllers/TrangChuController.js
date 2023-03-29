window.TrangChuController = function($scope){
    $scope.danhSach = [
        {id:1,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},
        {id:2,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},
        {id:3,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},
        {id:4,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},
        {id:5,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},
        {id:6,ten:"Áo",date:"22/03/2003",gender:1,dantoc: "Kinh",cccd: "30024024242",ngaycap:"20/03/2003",noicap:"Hà Nội",hktp:1,hkqh:1,xa:2,sonha:"2002",sdt:"0334590019",email:"Luanntph25463@fpt.edu.vn",htph:"Huê",sdtph:"0334590019",csnh:1,nvt1:1,nganh1:1,nvt2:2,nganh2:2,namtn:"2020",ttn:"Đồng Quan",ntn:1,qhtn:1,xtn:2,nn:"Thí Sinh",dcn: "dchktt"},


    ]
     
    $scope.onSubmitForm = function (){
        $scope.kiemTraDuLieu = {
        }
        const isNumeric = /^\d+$/;
        const phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        // kiểm Tra nếu họ Tên trống
        let flag = false
        if(!$scope.inputValue || !$scope.inputValue.ten){
            $scope.kiemTraDuLieu.ten = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.date){
            $scope.kiemTraDuLieu.date = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.gender){
            $scope.kiemTraDuLieu.gender = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.dantoc){
            $scope.kiemTraDuLieu.dantoc = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.cccd){
            $scope.kiemTraDuLieu.cccd = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.ngaycap){
            $scope.kiemTraDuLieu.ngaycap = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.noicap){
            $scope.kiemTraDuLieu.noicap = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.hktp){
            $scope.kiemTraDuLieu.hktp = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.xa){
            $scope.kiemTraDuLieu.xa = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.hkqh){
            $scope.kiemTraDuLieu.hkqh = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.sonha){
            $scope.kiemTraDuLieu.sonha = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.sdt){
            $scope.kiemTraDuLieu.sdt = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.email){
            $scope.kiemTraDuLieu.email = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.htph){
            $scope.kiemTraDuLieu.htph = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.sdtph){
            $scope.kiemTraDuLieu.sdtph = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.csnh){
            $scope.kiemTraDuLieu.csnh = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.nvt1){
            $scope.kiemTraDuLieu.nvt1 = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.nganh1){
            $scope.kiemTraDuLieu.nganh1 = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.nvt2){
            $scope.kiemTraDuLieu.nvt2 = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.nganh2){
            $scope.kiemTraDuLieu.nganh2 = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.namtn){
            $scope.kiemTraDuLieu.namtn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.ttn){
            $scope.kiemTraDuLieu.ttn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.ntn){
            $scope.kiemTraDuLieu.ntn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.qhtn){
            $scope.kiemTraDuLieu.qhtn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.xtn){
            $scope.kiemTraDuLieu.xtn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.nn){
            $scope.kiemTraDuLieu.nn = true;// Có Lỗi
            flag = true
        }
        if(!$scope.inputValue || !$scope.inputValue.dcn){
            $scope.kiemTraDuLieu.dcn = true;// Có Lỗi
            flag = true
        }
        if(phone.test($scope.inputValue.sdt) == false){
            $scope.kiemTraDuLieu.sdt = true;// Có Lỗi
            flag = true
        }
        if(phone.test($scope.inputValue.sdtph) == false){
            $scope.kiemTraDuLieu.sdtph = true;// Có Lỗi
            flag = true
        }
        if(isNumeric.test($scope.inputValue.cccd) == false){
            $scope.kiemTraDuLieu.cccd = true;// Có Lỗi
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
                $scope.danhSach[i].date = $scope.inputValue.date;
                $scope.danhSach[i].gender = $scope.inputValue.gender;
                $scope.danhSach[i].dantoc = $scope.inputValue.dantoc;
                $scope.danhSach[i].cccd = $scope.inputValue.cccd;
                $scope.danhSach[i].ngaycap = $scope.inputValue.ngaycap;
                $scope.danhSach[i].noicap = $scope.inputValue.noicap;
                $scope.danhSach[i].hktp = $scope.inputValue.hktp;
                $scope.danhSach[i].hkqh = $scope.inputValue.hkqh;
                $scope.danhSach[i].xa = $scope.inputValue.xa;
                $scope.danhSach[i].sonha = $scope.inputValue.sonha;
                $scope.danhSach[i].sdt = $scope.inputValue.sdt;
                $scope.danhSach[i].email = $scope.inputValue.email;
                $scope.danhSach[i].htph = $scope.inputValue.htph;
                $scope.danhSach[i].csnh = $scope.inputValue.csnh;
                $scope.danhSach[i].nvt1 = $scope.inputValue.nvt1;
                $scope.danhSach[i].nvt2 = $scope.inputValue.nvt2;
                $scope.danhSach[i].nganh1 = $scope.inputValue.nganh1;
                $scope.danhSach[i].nganh2 = $scope.inputValue.nganh2;
                $scope.danhSach[i].namtn = $scope.inputValue.namtn;
                $scope.danhSach[i].ttn = $scope.inputValue.ttn;
                $scope.danhSach[i].ntn = $scope.inputValue.ntn;
                $scope.danhSach[i].sdtph = $scope.inputValue.sdt;
                $scope.danhSach[i].qhtn = $scope.inputValue.qhtn;
                $scope.danhSach[i].xtn = $scope.inputValue.xtn;
                $scope.danhSach[i].nn = $scope.inputValue.nn;
                $scope.danhSach[i].dcn = $scope.inputValue.dcn;
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
            gender:$scope.inputValue.color,
            date: $scope.inputValue.date,
            dantoc: $scope.inputValue.dantoc,
            cccd: $scope.inputValue.cccd,
            ngaycap: $scope.inputValue.ngaycap,
            noicap: $scope.inputValue.noicap,
            hktp: $scope.inputValue.hktp,
            hkqh: $scope.inputValue.hkqh,
            sonha: $scope.inputValue.sonha,
            sdt: $scope.inputValue.sdt,
            email: $scope.inputValue.email,
            htph: $scope.inputValue.htph,
            sdtph: $scope.inputValue.sdtph,
            csnh: $scope.inputValue.csnh,
            nvt1: $scope.inputValue.email,
            nganh1: $scope.inputValue.email,
            nvt2: $scope.inputValue.nvt2,
            nganh2: $scope.inputValue.nganh2,
            namtn: $scope.inputValue.namtn,
            ntn: $scope.inputValue.ntn,
            ttn: $scope.inputValue.ttn,
             xtn: $scope.inputValue.xtn,
             qhtn: $scope.inputValue.qhtn,
            nn: $scope.inputValue.nn,
            dcn: $scope.inputValue.dcn,
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
            date: "",
            gender: "",
            dantoc: "",
            cccd : "",
            ngaycap : "",
            noicap : "",
            hktp : "",
            hkqh : "",
            xa : "",
            sonha : "",
            sdt : "",
            email : "",
            sdtph : "",
            htph : "",
            csnh : "",
            nvt1 : "",
            nganh1 : "",
            nvt2 : "",
            nganh2 : "",
            namtn : "",
            ttn : "",
            ntn : "",
            xtn : "",
            qhtn : "",
            nn : "",
            dcn : "",
        }
        for(var i = 0;i < $scope.danhSach.length;i++){
            if($scope.danhSach[i].id == editId){
                editItem.ten = $scope.danhSach[i].ten;
                editItem.gender = $scope.danhSach[i].gender;
                editItem.date = $scope.danhSach[i].date;
                editItem.dantoc = $scope.danhSach[i].dantoc;
                editItem.cccd = $scope.danhSach[i].cccd;
                editItem.ngaycap = $scope.danhSach[i].ngaycap;
                editItem.noicap = $scope.danhSach[i].noicap;
                editItem.hktp = $scope.danhSach[i].hktp;
                editItem.hkqh = $scope.danhSach[i].hkqh;
                editItem.xa = $scope.danhSach[i].xa;
                editItem.sonha = $scope.danhSach[i].sonha;
                editItem.sdt = $scope.danhSach[i].sdt;
                editItem.email = $scope.danhSach[i].email;
                editItem.htph = $scope.danhSach[i].htph;
                editItem.sdtph = $scope.danhSach[i].sdtph;
                editItem.csnh = $scope.danhSach[i].csnh;
                editItem.nvt1 = $scope.danhSach[i].nvt1;
                editItem.nvt2 = $scope.danhSach[i].nvt2;
                editItem.nganh1 = $scope.danhSach[i].nganh1;
                editItem.nganh2 = $scope.danhSach[i].nganh2;
                editItem.namtn = $scope.danhSach[i].namtn;
                editItem.ttn = $scope.danhSach[i].ttn;
                editItem.ntn = $scope.danhSach[i].ntn;
                editItem.xtn = $scope.danhSach[i].xtn;
                editItem.qhtn = $scope.danhSach[i].qhtn;
                editItem.dcn = $scope.danhSach[i].dcn;
                editItem.nn = $scope.danhSach[i].nn;
            }
        }
        $scope.inputValue = {
            ten : editItem.ten,
            gender : editItem.gender,
            dantoc : editItem.dantoc,
            sdt : editItem.sdt,
            namtn : editItem.namtn,
            ttn : editItem.ttn,
            sonha : editItem.sonha,
            ntn : editItem.ntn,
            dcn : editItem.dcn,
            date : editItem.date,
            cccd : editItem.cccd,
            ngaycap : editItem.ngaycap,
            noicap : editItem.noicap,
            hktp : editItem.hktp,
            hkqh : editItem.hkqh,
            xa : editItem.xa,
            email : editItem.email,
            sdtph : editItem.sdtph,
            htph : editItem.htph,
            csnh : editItem.csnh,
            nvt1 : editItem.nvt1,
            nvt2 : editItem.nvt2,
            nganh1 : editItem.nganh1,
            nganh2 : editItem.nganh2,
            nn : editItem.nn,
            xtn : editItem.xtn,
            qhtn : editItem.qhtn,
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