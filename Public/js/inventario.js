var dataTable;
var i = 1;
$(document).ready(function() {
    MostrarLineas();
    MostrarModelos();

    dataTable = $('#dt_Inventarios').DataTable( {
        "ajax": {
            url: "../Controlador/inventario-controller.php?page=1",
            type : "POST",
            data : function(){ return $('#filter-form').serialize();}
    },
        "columns": [
            {
                data: "id",
                render: function (data, type, row, meta) {
                    return i++;
                }
            },
            { data: "linea" },
            { data: "nombre" },
            { data: "rango" },
            { data: "modelo" },
            { data: "inv_min" },
            { data: "inv_max" },
            {
                data: "fecha",
                render: function (data, type, row, meta) {
                    return moment(row.fecha).format('DD-MM-YYYY');
                }
            },
        ]
    } );

    $('#filter-form').submit(function(e){
        e.preventDefault();

        var linea = $("#selectLinea").val();
        var modelo = $("#selectModelo").val();
        var fecha = $("#fecha").val();

        if (linea == "" && modelo == "" && fecha == "") {
            sweetAlert("", "Debe ingresar al menos un valor para aplicar un filtro al inventario", "warning");
            return false;
        }

        i = 1;
        dataTable.ajax.reload();
    });
} );

function MostrarLineas() {
    $.ajax({
        url: "../Controlador/inventario-controller.php?page=2",
        type: "post",
        dataType: "json",
        success: function (data) {
            var stdBody = "";
            for (var key in data) {
                stdBody += `<option value="${data[key]['linea']}">${data[key]['linea']}</option>`;
            }
            $("#selectLinea").append(stdBody);
        }
    });
}

function MostrarModelos() {
    $.ajax({
        url: "../Controlador/inventario-controller.php?page=3",
        type: "post",
        dataType: "json",
        success: function (data) {
            var resBody = "";
            for (var key in data) {
                resBody += `<option value="${data[key]['modelo']}">${data[key]['modelo']}</option>`;
            }
            $("#selectModelo").append(resBody);
        }
    });
}

function limpiar() {
    $("#selectLinea").html(`<option value="">Seleccione una línea</option>`);
    $("#selectModelo").html(`<option value="">Seleccione un modelo</option>`);
    $("#fecha").val('');

    MostrarModelos();
    MostrarLineas();
};

function restaurar() {
    limpiar();
    i = 1;
    dataTable.ajax.reload();
};