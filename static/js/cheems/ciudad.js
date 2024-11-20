function registrar(id){
    var url = "/ciudad-registro"
    $.get(url, function(data){
        $('#modal_info').html(data);
        //$('modal_info').modal({ backdrop: 'static', keyboard: false});
        $('#modal_info').modal('show');
    })
}