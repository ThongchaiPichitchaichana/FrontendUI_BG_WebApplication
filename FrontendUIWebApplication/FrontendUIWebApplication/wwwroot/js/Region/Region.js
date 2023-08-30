var table;

$(document).ready(function () {

    BindData(null);
  
});



function BindData(jsn) {
    if ($.fn.dataTable.isDataTable('.dataTable-search')) {
        // Do something else since the dataTable's already initialized 
        table.clear().draw(false);
        table.rows.add(jsn).draw(false); // Add new data        
    } else {
        table = $('.dataTable-search').DataTable({

            data: jsn,
            columns: [
                {//action
                    data: 'Id',
                    visible: true,
                    targets: 1,
                    className: "text-center",
                    render: function (data, type, row) {
                        return '<a style="color:deepskyblue;margin-right:10px"  class="fa fa-edit open-ModalDialog fa-edit edit" title="Edit"></a>' +
                            '  |   <a style = "color:deepskyblue;margin-left:10px" class="fa fa-trash open-ModalDialog fa-trash delete" title="Delete"></a >';
                    }
                },
                { title: 'Id', data: 'Id' },
                { title: 'Region', data: 'RegionName' },
             
         
           
              
                							

            ],
            "bInfo": true,
            pageLength: 100,
            bLengthChange: true,
            "scrollY": "500px",
            "scrollCollapse": true,
            "paging": true,


            ordering: true,
            "order": [[1, "asc"]],
            "bFilter": true,
            // Pagination settings
            dom: `<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>
			<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

            buttons: [
                'copyHtml5',
                'excelHtml5',
            ],
            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all"
            }],
            language: {
                lengthMenu: "_MENU_ &nbsp;แถว",
                loadingRecords: "กรุณารอสักครู่ - กำลังค้นหา...",
                search: "ค้นหา:",
                zeroRecords: "ไม่พบข้อมูลที่ค้นหา",
                info: "แสดงผล _START_ - _END_ จากข้อมูลทั้งหมด _TOTAL_ ข้อมูล",
                infoEmpty: "ไม่มีข้อมูล",
                infoFiltered: "(ค้นหาจาก _MAX_ ข้อมูล)"
            }
        });
    }
}
