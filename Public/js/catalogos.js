$(document).ready(function () {

  $.ajax({
    type: "GET",
    url: "../Controlador/catalogos-controller.php?page=1",
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, registro) {
        $("#id_tipo_emp_lcs").append('<option value=' + registro.id_tipo_emp_lcs + '>' + registro.nom_tipo_emp_lcs + '</option>');
      });
      $.each(data, function (key, registro) {
        $("#id_tipo_emp_lcs_edit").append('<option value=' + registro.id_tipo_emp_lcs + '>' + registro.nom_tipo_emp_lcs + '</option>');
      });
    },
    error: function (data) {
      alert('error');
    }
  });

  $.ajax({
    type: "GET",
    url: "../Controlador/catalogos-controller.php?page=2",
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, registro) {
        $("#id_puesto_lcs").append('<option value=' + registro.id_puesto_lcs + '>' + registro.nom_puesto_lcs + '</option>');
      });

      $.each(data, function (key, registro) {
        $("#id_puesto_lcs_edit").append('<option value=' + registro.id_puesto_lcs + '>' + registro.nom_puesto_lcs + '</option>');
      });
    },
    error: function (data) {
      alert('error');
    }
  });

  $.ajax({
    type: "GET",
    url: "../Controlador/catalogos-controller.php?page=3",
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, registro) {
        $("#id_planta_lcs").append('<option value=' + registro.id_planta_lcs + '>' + registro.nombre_planta_lcs + '</option>');
      });

      $.each(data, function (key, registro) {
        $("#id_planta_lcs_edit").append('<option value=' + registro.id_planta_lcs + '>' + registro.nombre_planta_lcs + '</option>');
      });
    },
    error: function (data) {
      alert('error');
    }
  });
});

function buscarDepto() {
  var id_planta_lcs = $("#id_planta_lcs").val();
  const $select = document.querySelector("#id_departamento_lcs");
  for (let i = $select.options.length; i >= 1; i--) {
    $select.remove(i);
  }

  $.ajax({
    type: "GET",
    url: '../Controlador/catalogos-controller.php?page=4&id_planta_lcs=' + id_planta_lcs,
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, registro) {
        $("#id_departamento_lcs").append('<option value=' + registro.id_departamento_lcs + '>' + registro.nom_depto_lcs + '</option>');
      });
    },
    error: function (data) {
      alert('error');
    }
  });

  var id_planta_lcs_edit = $("#id_planta_lcs_edit").val();
  const $selectEdit = document.querySelector("#id_departamento_lcs_edit");
  for (let i = $selectEdit.options.length; i >= 1; i--) {
    $selectEdit.remove(i);
  }

  $.ajax({
    type: "GET",
    url: '../Controlador/catalogos-controller.php?page=4&id_planta_lcs=' + id_planta_lcs_edit,
    dataType: "json",
    success: function (data) {
      $.each(data, function (key, registro) {
        $("#id_departamento_lcs_edit").append('<option value=' + registro.id_departamento_lcs + '>' + registro.nom_depto_lcs + '</option>');
      });
    },
    error: function (data) {
      alert('error');
    }
  });
};


