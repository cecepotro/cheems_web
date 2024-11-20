function registrar(id){
    var url = "/ciudad-registro"
    $.get(url, function(data){
        $('#modal_info').html(data);
        $('#modal_info').modal({ backdrop: 'static', keyboard: false});
        $('#modal_info').modal('show');
    })
}

function save(){
    fetch('/ciudad', {

    })
    .then(response => {
        if (response.status === 201) {
        } else {
            alert(`Ocurrió un error al guardar: ${response.status}`);
        }
    })
    .catch(error => console.error('Error:', error));
}