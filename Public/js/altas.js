var objModeloActual = {};
var objEstadoActual = {};

const bg_color = {
   1: 'rgba(255, 215, 0, 0.5)',      // Amarillo - Chico
   2: 'rgba(50, 205, 50, 0.5)',      // Verde - Mediano
   3: 'rgba(30, 144, 255, 0.5)',     // Azul - Grande
   4: 'rgba(255, 215, 0, 0.5)',      // Amarillo - Chico
   5: 'rgba(50, 205, 50, 0.5)',      // Verde - Mediano
   6: 'rgba(30, 144, 255, 0.5)',     // Azul - Grande
   default: 'rgba(249, 11, 11, 0.2)' // Rojo - PLAN
  };

const br_color = {
  1: 'rgba(218, 165, 32)',     // Amarillo - Chico
  2: 'rgba(46, 139, 87)',      // Verde - Mediano
  3: 'rgba(0, 106, 213)',      // Azul - Grande
  4: 'rgba(218, 165, 32)',     // Amarillo - Chico
  5: 'rgba(46, 139, 87)',      // Verde - Mediano
  6: 'rgba(0, 106, 213)',      // Azul - Grande
  default: 'rgba(249, 11, 11)' // Rojo - PLAN
};

$.ajax({
  url: "../Controlador/altas-controller.php?page=1",
  success: function (response) {
    $("#nombreModelo").html(response);
    $("#nombreModelo").val(response);
  }
});

$(document).ready(function () {
  DatosModeloActual();

  $("#nombreModelo").change(function () {
    var idSelect = $(this).val();

    $.ajax({
      url: "../Controlador/altas-controller.php?page=2",
      type: "POST",
      data: { idSelect: idSelect },
      success: function (response) {
        $("#id_modelo").html(response);
        $('#id_modelo').val(response);
      }
    })
  });
});

function botonGenerar() {
  var nombreSelect = $("#nombreModelo").val();
  $("#btnGenerar").prop('disabled', true);

  if (nombreSelect >= 1) {
    $("#btnGenerar").prop('disabled', false);
  }
  return false;
};

function agregarModAct() {
  var nomina = $("#nomina").val();
  var id_modelos_lcs = $("#id_modelo").val();
  var id_modelo_actual = $("#id_modelo_actual").val();

  if (id_modelo_actual === id_modelos_lcs) {
    sweetAlert("Cambio erróneo", "El modelo que se quiere cambiar ya se encuentra en la línea", "error");
    return false;
  }

  swal({
    title: "¿Quieres cambiar de modelo?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#249934",
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
    closeOnConfirm: false,
    closeOnCancel: false
  },
    function (confirma) {
      if (confirma) {
        $.ajax({
          url: "../Controlador/altas-controller.php?page=3",
          type: "POST",
          data: {
            nomina: nomina,
            id_modelos_lcs: id_modelos_lcs,
          },
          success: function (response) {
            swal("Cambio realizado correctamente",
              "",
              "success");
            DatosModeloActual();
            // TODO: Preguntar la razón de la recarga del modelo, la línea de abajo.
            location.reload('../Vista/altas.php', 19000);
            // location.reload('../Vista/altas.php');
          },
        });
      } else {
        swal("Cancelado correctamente",
          "No se realizó ninguna acción",
          "error");
      }
    });
}

function DatosModeloActual() {
  $.ajax({
    url: "../Controlador/altas-controller.php?page=7",
    type: "GET",
    dataType: "json",
    success: function (response) {
      objModeloActual = response;
      $("#id_modelo_actual").val(objModeloActual['id_modelos_lcs']);
      $("#modeloActual").html(objModeloActual['num_term_mod_lcs']);
      $("#modeloActual").val(objModeloActual['num_term_mod_lcs']);
      DatosEstadoActual();
    },
    error: function (reject) {
      console.log(reject);
    }
  });
};

function subirDes() {
  var modActual = document.getElementById("modeloActual").value;
  var entradaQR = document.getElementById("entradaQR").value;
  var fragmentos;

  if (entradaQR.length != 32) {
    sweetAlert("Captura inválida", "Ingrese un Código QR válido mediante el escáner", "error");
    $("#entradaQR").val("");
    return false;
  }

  fragmentos = entradaQR.substr(0, 8);
  document.getElementById("nombreComponente").value = fragmentos;

  fragmentos = entradaQR.substr(9, 4)
  document.getElementById("terminacionComponente").value = fragmentos;

  fragmentos = entradaQR.substr(14, 8);
  document.getElementById("numeroPallet").value = fragmentos;

  fragmentos = entradaQR.substr(24, 2);
  document.getElementById("pzs").value = fragmentos;

  var nombreComponente = $("#nombreComponente").val();
  var terminacionComponente = $("#terminacionComponente").val();
  var numeroPallet = $("#numeroPallet").val();
  var pzs = $("#pzs").val();
  var id_modelo_actual = $("#id_modelo_actual").val();

  if (modActual != terminacionComponente) {
    sweetAlert("Modelo incorrecto", "Verifique que el modelo actual coincida con la captura del escaneo", "error");
    $("#entradaQR").val("");
    return false;
  }

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
    $.ajax({
      url: "../Controlador/altas-controller.php?page=5",
      type: "POST",
      data: {
        nombreComponente: nombreComponente,
        terminacionComponente: terminacionComponente,
        numeroPallet: numeroPallet,
        pzs: pzs,
        id_modelo_actual: id_modelo_actual
      },
      success: function (response) {
        swal("Pallet agregado correctamente",
          "",
          "success");
          // DatosEstadoActual($("#id_modelo_actual").val());
        location.reload('../Vista/altas.php', 19000);

      },
      error: function (error) {
        swal("No se agregó el Pallet",
          "Hubo un error en la petición",
          "error");
      },
    });
  // };
}

let nIntervId;

nIntervId = setInterval(myCallback, 5000, 'parámetro 1', 'parámetro 2');

function myCallback(a, b) {
  if (!nIntervId){
    console.log(a);
    console.log(b);

  }
};


function DatosEstadoActual() {
  $.ajax({
    url: "../Controlador/altas-controller.php?page=6",
    type: "POST",
    dataType: "json",
    data: {
      id_modelo_actual: $("#id_modelo_actual").val()
    },
    success: function (response) {
      objEstadoActual = response;

      var data = {
        labels: [objEstadoActual['num_term_mod_lcs']],
        datasets: [
          {
            label: 'Real',
            data: [objEstadoActual['cantidad_real_lcs']],
            borderColor: br_color[objEstadoActual['id_modelos_lcs']],
            backgroundColor: bg_color[objEstadoActual['id_modelos_lcs']],
            borderWidth: 2
          },
          {
            label: 'Plan',
            data: [objEstadoActual['cantidad_limite_lcs']],
            borderColor: br_color['default'],
            backgroundColor: bg_color['default'],
            borderWidth: 2
          }
        ]
      };

      const config = {
        type: 'bar',
        data: data,
        plugins: [ChartDataLabels],
        options: {
          plugins: {
            datalabels: {
              align: 'start',
              labels: {
                value: {
                  color: 'black'
                },
              }
            },
            legend: {
              display: true,
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        },
      };

      var myChart = new Chart(
        document.getElementById('mycanvas'),
        config
      );

    }
  });



};