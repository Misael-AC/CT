var objModeloActual = {};
var objEstadoActual = {};
var dataTable;
var i = 1;

$(document).ready(function () {
  MostrarLineasDESC();
  MostrarModelos();

  dataTable = $('#dt_Inventarios').DataTable({
    "scrollY": false,
    "scrollX": false,
    "data": dataTable,
    "ordering": false,
    "info": false,
    "scrollCollapse": false,
    "responsive": false,

    "ajax": {
      url: "../Controlador/escaneo-cajas-controller.php?page=1",
      type: "POST",
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
  });
});

function subirDes() {
  var entradaQR = document.getElementById("entradaQR").value;
  var fragmentos;

  if (entradaQR.length != 45) {
    sweetAlert("Captura inválida", "Ingrese un Código QR válido mediante el escáner", "error");
    $("#entradaQR").val("");
    return false;
  }

  fragmentos = entradaQR.substr(0, 7);
  document.getElementById("Linea").value = fragmentos;

  fragmentos = entradaQR.substr(8, 13)
  document.getElementById("Nombre").value = fragmentos;

  fragmentos = entradaQR.substr(22, 8);
  document.getElementById("rango").value = fragmentos;

  fragmentos = entradaQR.substr(30, 13);
  document.getElementById("modelo").value = fragmentos;

  fragmentos = entradaQR.substr(44, 1);
  document.getElementById("inv_min").value = fragmentos;

  var Linea = $("#Linea").val();
  var Nombre = $("#Nombre").val();
  var rango = $("#rango").val();
  var modelo = $("#modelo").val();
  var inv_min = $("#inv_min").val();

  // evitarDobleEscaneo(entradaQR)
  //   .then((data) => {
  //     enviarCodigoQr();
  //   })
  //   .catch((error) => {
  //     if (error['status'] == 400) {
  //       sweetAlert("Doble escaneo", "El código QR ya fue escaneado anteriormente, evita el doble escaneo", "error");
  //       $("#entradaQR").val("");
  //       return false;
  //     }
  //   })
  //   .finally(function () {
  //     $("#entradaQR").val("");
  //   });

  // function evitarDobleEscaneo(entradaQR) {
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       url: "../Controlador/altas-controller.php?page=8",
  //       type: "POST",
  //       data: { entradaQR },
  //       success: function (data) {
  //         resolve(data);
  //       },
  //       error: function (error) {
  //         reject(error);
  //       },
  //     })
  //   })
  // };

  // function enviarCodigoQr(){
  // $.ajax({
  //   url: "../Controlador/inv_controller.php?page=11",
  //   type: "POST",
  //   data: {
  //     Linea: Linea,
  //     Nombre: Nombre,
  //     rango: rango,
  //     modelo: modelo,
  //     inv_min: inv_min
  //   },

  //   success: function (response) {
  //     swal("Caja agregado correctamente",
  //       "",
  //       "success");
  //       // DatosEstadoActual($("#id_modelo_actual").val());
  //   },
  //   error: function (error) {
  //     swal("No se agregó el Pallet",
  //       "Hubo un error en la petición",
  //       "error");
  //   },
  // });
  // };

  $.ajax({
    url: "../Controlador/escaneo-cajas-controller.php?page=11",
    type: "POST",
    data: {
      Linea: Linea,
      Nombre: Nombre,
      rango: rango,
      modelo: modelo,
      inv_min: inv_min

    },
    success: function (response) {
      swal("Caja agregada correctamente",
        "",
        "success");
      // location.reload('../Vista/escaneo_cajas.php', 30000);
      i = 1;
      dataTable.ajax.reload();
      $("#entradaQR").val('');
    },
    error: function (error) {
      swal("Superas el máximo de cajas ",
        "Hubo un error en la petición",
        "error");
      // location.reload('../Vista/escaneo_cajas.php');
      $("#entradaQR").val('');
    },
  });
}

function MostrarLineasDESC() {
  $.ajax({
    url: "../Controlador/escaneo-cajas-controller.php?page=2",
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
    url: "../Controlador/escaneo-cajas-controller.php?page=3",
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