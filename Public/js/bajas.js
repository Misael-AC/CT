var objModeloActual = {};
var objModeloActual = {};

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

$(document).ready(function () {
  DatosModeloActual();

});

function DatosModeloActual(){
  $.ajax({
    type: "GET",
    url: "../Controlador/bajas-controller.php?page=7",
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

function bajarDes() {
  var modActual = document.getElementById("modeloActual").value;
  var salidaQR = document.getElementById("salidaQR").value;
  var fragmentos;

  if (salidaQR.length != 32) {
    sweetAlert("Captura inválida", "Ingrese un Código QR válido mediante el escáner", "error");
    $("#salidaQR").val("");
    return false;
  }

  fragmentos = salidaQR.substr(0, 8);
  document.getElementById("nombreComponente").value = fragmentos;

  fragmentos = salidaQR.substr(9, 4)
  document.getElementById("terminacionComponente").value = fragmentos;

  fragmentos = salidaQR.substr(14, 8);
  document.getElementById("numeroPallet").value = fragmentos;

  fragmentos = salidaQR.substr(24, 2);
  document.getElementById("pzs").value = fragmentos;

  var nombreComponente = $("#nombreComponente").val();
  var terminacionComponente = $("#terminacionComponente").val();
  var numeroPallet = $("#numeroPallet").val();
  var pzs = $("#pzs").val();
  var id_modelo_actual = $("#id_modelo_actual").val();

  if (modActual != terminacionComponente) {
    sweetAlert("Modelo incorrecto", "Verifique que el modelo actual coincida con la captura del escaneo", "error");
    $("#salidaQR").val("");
    return false;
    
  }

  // evitarDobleEscaneo(salidaQR)
  // .then((data) => {
  //   enviarCodigoQr();
  // })
  // .catch((error) => {
  //   if (error['status'] == 400) {
  //     sweetAlert("Doble escaneo", "El código QR ya fue escaneado anteriormente, evita el doble escaneo", "error");
  //     // $("#salidaQR").val("");
  //     return false;
  //   }
  // })
  // .finally(function() { 
  //   $("#salidaQR").val("");
  // });

  // function evitarDobleEscaneo(salidaQR) {
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       url: "../Controlador/bajas-controller.php?page=8",
  //       type: "POST",
  //       data: { salidaQR },
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
      url: "../Controlador/bajas-controller.php?page=6",
      type: "POST",
      data: {
        nombreComponente: nombreComponente,
        terminacionComponente: terminacionComponente,
        numeroPallet: numeroPallet,
        pzs: pzs,
        id_modelo_actual: id_modelo_actual
      },
      success: function (response) {
        swal("Pallet restado correctamente",
          "",
          "success");
          location.reload('../Vista/bajas.php', 19000);
      },
      error: function (error) {
        swal("No se restó el Pallet",
          "Hubo un error en la petición",
          "error");
      },
    });
  // };
}
function DatosEstadoActual() {
  $.ajax({
    url: "../Controlador/bajas-controller.php?page=10",
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
