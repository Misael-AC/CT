$(document).ready(function () {
    $("#nuevoRegistro").on('hidden.bs.modal', function (event) {
        console.log(".reset form nuevoRegistro")
        const $nuevoRegistroForm = $("#nuevoRegistro").find('form');
        $nuevoRegistroForm[0].reset();
    }).on('shown.bs.modal', function () {
        $("#nomina_lcs").focus();
    });
    $('.btn-nuevoRegistro').click(function () {
        $("#nuevoRegistro").modal('show');
    });

    var tabla1 = $("#dt_Usuarios").DataTable({

        pageLength: 5, lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],

        "ajax": {
            "method": "POST",
            "url": "../Controlador/usuarios-controller.php?page=1"
        },
        "columns": [
            {
                "data": "id_usuario_lcs",
                visible: false,
            },
            { "data": "nomina_lcs" },
            { "data": "NOMBRE_COMPLETO" },
            { "data": "nom_tipo_emp_lcs" },
            { "data": "nom_puesto_lcs" },
            // { "data": "id_area_lcs" },
            { "data": "nombre_planta_lcs" },
            { "data": "nom_depto_lcs" },

            {
                "mData": null,
                "bSortable": false,
                "mRender": function (data, type, full) {
                    return "<button class='btn btn-primary btn-xs' onclick='editarRegis(" + JSON.stringify(data) + ")' style='margin-top: 5px;'><i class='fa fa-edit'></i> Editar</button>"
                }
            }
        ]
    });

    $(".btn-saveRegistro").click(function () {

        if ($(nomina_lcs).val() == "") {
            sweetAlert("", "Debe agregar el número de nómina", "error");
            return false;
        }

        if ($(nombre_lcs).val() == "") {
            sweetAlert("", "Debe agregar el nombre del empleado", "error");
            return false;
        }

        if ($(apellido_p_lcs).val == "") {
            sweetAlert("", "Debe agregar al menos el primer apellido del empleado", "error");
            return false;
        }

        if ($(id_tipo_emp_lcs).val() == 0) {
            sweetAlert("", "Debe agregar el tipo de empleado", "error");
            return false;
        }

        if ($(id_puesto_lcs).val() == 0) {
            sweetAlert("", "Debe agregar el puesto del empleado", "error");
            return false;
        }

        if ($(id_area_lcs).val() == 0) {
            sweetAlert("", "Debe agregar el área del empleado", "error");
            return false;
        }

        if ($(id_planta_lcs).val() == 0) {
            sweetAlert("", "Debe agregar la planta donde labora", "error");
            return false;
        }

        if ($(id_departamento_lcs).val() == 0) {
            sweetAlert("", "Debe agregar el departamento al que pertenece", "error");
            return false;
        }

        $.ajax({
            url: "../Controlador/usuarios-controller.php?page=2",
            method: "POST",
            data: {
                nomina_lcs : $("#nomina_lcs").val(),
                nombre_lcs : $("#nombre_lcs").val(),
                apellido_p_lcs : $("#apellido_p_lcs").val(),
                apellido_m_lcs : $("#apellido_m_lcs").val(),
                password_lcs : $("#password_lcs").val(),
                id_tipo_emp_lcs : $("#id_tipo_emp_lcs").val(),
                id_puesto_lcs : $("#id_puesto_lcs").val(),
                id_area_lcs : $("#id_area_lcs").val(),
                id_planta_lcs : $("#id_planta_lcs").val(),
                id_departamento_lcs : $("#id_departamento_lcs").val()
            },
            success: function () {
                sweetAlert("", "Usuario agregado", "success");
                tabla1.ajax.reload();
            }
        });
        $('#nuevoRegistro').modal('hide');
    });
});

$('#editarRegistro').on('hidden.bs.modal', function (event) {
    console.log(".reset form editarRegistro");
    const $editarRegistroForm = $('#editarRegistro').find('form');
    $editarRegistroForm[0].reset();
});

function editarRegis(data) {

    $(id_usuario_lcs).val(data['id_usuario_lcs']);

    $.ajax({
        url: "../Controlador/usuarios-controller.php?page=4",
        type: "POST",
        data: {
            id_usuario_lcs : $(id_usuario_lcs).val()
        },
        // datype: "json",
        datype: "html",
        success: function (data) {
            data = JSON.parse(data);

            $(id_usuario_lcs).val(data['id_usuario_lcs']);
            $(nomina_lcs_edit).val(data['nomina_lcs']);
            $(nombre_lcs_edit).val(data['nombre_lcs']);
            $(apellido_p_lcs_edit).val(data['apellido_p_lcs']);
            $(apellido_m_lcs_edit).val(data['apellido_m_lcs']);
            $(password_lcs_edit).val(data['password_lcs']);
            $(id_tipo_emp_lcs_edit).val(data['id_tipo_emp_lcs']);
            $(id_puesto_lcs_edit).val(data['id_puesto_lcs']);
            $(id_planta_lcs_edit).val(data['id_planta_lcs']);
            buscarDepto();
            $(id_departamento_lcs_edit).val(data['id_departamento_lcs']);
            $(id_area_lcs_edit).val(data['id_area_lcs']);

            $("#editarRegistro").modal('show');
        }
    });
}

$(".btn-saveEditRegistro").click(function () {
    var id_usuario_lcs = $("#id_usuario_lcs").val();
    var nomina_lcs = $("#nomina_lcs_edit").val();
    var nombre_lcs = $("#nombre_lcs_edit").val();
    var apellido_p_lcs = $("#apellido_p_lcs_edit").val();
    var apellido_m_lcs = $("#apellido_m_lcs_edit").val();
    var password_lcs = $("#password_lcs_edit").val();
    var id_tipo_emp_lcs = $("#id_tipo_emp_lcs_edit").val();
    var id_puesto_lcs = $("#id_puesto_lcs_edit").val();
    var id_area_lcs = $("#id_area_lcs_edit").val();
    var id_planta_lcs = $("#id_planta_lcs_edit").val();
    var id_departamento_lcs = $("#id_departamento_lcs_edit").val();

    if (id_usuario_lcs == "") {
        sweetAlert("", "Debe arrojarte el identificador del empleado", "error");
        return false;
    }

    if (nomina_lcs == "") {
        sweetAlert("", "Debe agregar el número de nómina", "error");
        return false;
    }

    if (nombre_lcs == "") {
        sweetAlert("", "Debe agregar el nombre del empleado", "error");
        return false;
    }

    if (apellido_p_lcs == 0) {
        sweetAlert("", "Debe agregar al menos el primer apellido del empleado", "error");
        return false;
    }

    if (id_tipo_emp_lcs == 0) {
        sweetAlert("", "Debe agregar el tipo de empleado", "error");
        return false;
    }

    if (id_puesto_lcs == 0) {
        sweetAlert("", "Debe agregar el puesto del empleado", "error");
        return false;
    }

    if (id_area_lcs == 0) {
        sweetAlert("", "Debe agregar el área del empleado", "error");
        return false;
    }

    if (id_planta_lcs == 0) {
        sweetAlert("", "Debe agregar la planta donde labora", "error");
        return false;
    }

    if (id_departamento_lcs == 0) {
        sweetAlert("", "Debe agregar el departamento al que pertenece", "error");
        return false;
    }

    $.ajax({
        url: "../Controlador/usuarios-controller.php?page=3",
        method: "POST",
        data: {
            id_usuario_lcs : id_usuario_lcs,
            nomina_lcs : nomina_lcs,
            nombre_lcs : nombre_lcs,
            apellido_p_lcs : apellido_p_lcs,
            apellido_m_lcs : apellido_m_lcs,
            password_lcs : password_lcs,
            id_tipo_emp_lcs : id_tipo_emp_lcs,
            id_puesto_lcs : id_puesto_lcs,
            id_area_lcs  : id_area_lcs,
            id_planta_lcs : id_planta_lcs,
            id_departamento_lcs : id_departamento_lcs
        },
        success: function () {
            sweetAlert("", "Datos Actualizados", "success");
            $("#dt_Usuarios").DataTable().ajax.reload();
        }
    });
    $('#editarRegistro').modal('hide');
});



