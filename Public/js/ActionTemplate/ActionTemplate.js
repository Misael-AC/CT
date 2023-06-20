
var CargarTemplate=function(){

  $.post( '../Controlador/ControllerCargarSelects.php?page=15' ).done( function(respuesta4){
    $( '#Seldivicion' ).html( respuesta4 );
  });

  $.post( '../Controlador/ControllerCargarSelects.php?page=17' ).done( function(respuesta4){
    $( '#selcustomer' ).html( respuesta4 );
  });

  // ################################ Funciones botones ######################################

  $(".btn-upload-template").off("click");
  $(".btn-upload-template").on("click", function(e) {
    var FileTemplate = $("#FileTemplate").val().trim();
    var Seldivicion = $("#Seldivicion").val().trim();
    var selproduct = $("#selproduct").val().trim();
    var selcustomer = $("#selcustomer").val().trim();
    var seltest = $("#seltest").val().trim();
    var selpartnumber = $("#selpartnumber").val().trim();
    var txtDescripion = $("#txtDescripion").val().trim();
    var Valhistorial = $("#Valhistorial").val().trim();
    var id_usuario = $("#id_usuario").val().trim();

    

    if (FileTemplate!='') {
      var file = $("#FileTemplate")[0].files[0];
      var FileNameTemplate = file.name;
    }else{
      var FileNameTemplate = '';
    }

    if (FileTemplate != '') {
      if (txtDescripion != '') {
        if (Seldivicion != 0) {
          if (selproduct != 0) {
            if (selcustomer != 0) {
              if (seltest != 0) {
                if (selpartnumber != 0) {

    var formData = new FormData($(".FormTemplate")[0]);
      $.ajax({
          //url: '../Controlador/Controller-upload.php?page=4&SampleID='+sampleID+'&TesterID='+TesterID+'&RepAprobador='+RepAprobador+'',
          url: '../Controlador/Controller-upload.php?page=5&Seldivicion='+Seldivicion+'&selproduct='+selproduct+'&selcustomer='+selcustomer+'&seltest='+seltest+'&selpartnumber='+selpartnumber+'&txtDescripion='+txtDescripion+'&Valhistorial='+Valhistorial+'&id_usuario='+id_usuario+'',
          type: 'POST',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,

          success:function(data){
            if (data >= 1) {
              swal("Notice", "The selected part number and test already has a linked report, click to ok or select other option", "warning");
            }else{


            swal("Template uploaded !", "You clicked the button!", "success")
            .then((value) => {
              location.href='uploadTemplate.php';
            });

            $("#FileTemplate").val('');
            $("#Seldivicion").val(0);
            $("#selproduct").val(0);
            $("#selcustomer").val(0);
            $("#seltest").val(0);
            $("#selpartnumber").val(0);
            $("#txtDescripion").val('');
            $('#dt_template').DataTable().ajax.reload();
          }

          }
      });
                }else{
                  alert("Select part number");
                }

              }else{
                alert("Select test");
              }

            }else{
              alert("Select customer");
            }

        }else{
          alert("Select product");
        }

      }else{
        alert("Select division");
      }
    
    }else{
      alert("Write description");

    }
  }else{
      alert("Attach template");

    }
   
  
  });

  // =============================================================================================

  // ################################ Funciones botones ######################################

  $(".btn-update-templateUp").off("click");
  $(".btn-update-templateUp").on("click", function(e) {

    var id_prueba = $("#id_prueba").val().trim();
    var id_partNumber = $("#id_partNumber").val().trim();
    var id_user = $("#id_user").val().trim();
    var FileTemplateUp = $("#FileTemplateUp").val().trim();
    var txtDescripionUp = $("#txtDescripionUp").val().trim();
    var ReasonChange = $("#ReasonChange").val().trim();

    if (FileTemplateUp!='') {
      var file = $("#FileTemplateUp")[0].files[0];
      var FileNameTemplate = file.name;
    }else{
      var FileNameTemplate = '';
    }

     var formData = new FormData($(".FormTemplateUp")[0]);
      $.ajax({
          //url: '../Controlador/Controller-upload.php?page=4&SampleID='+sampleID+'&TesterID='+TesterID+'&RepAprobador='+RepAprobador+'',
          url: '../Controlador/Controller-upload.php?page=6&id_prueba='+id_prueba+'&id_partNumber='+id_partNumber+'&id_user='+id_user+'&txtDescripionUp='+txtDescripionUp+'&ReasonChange='+ReasonChange+'',
          type: 'POST',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,

          success:function(data){
            alert(data);


          }
      });
  });

//#############################################################################################################     
  
},

EfectosChangeTemplate=function(){

  $('#Seldivicion').change(function(){ 
      var id_divicion = $(this).val();
      $.post( '../Controlador/ControllerCargarSelects.php?page=16', { id_divicion: id_divicion} ).done( function( respuesta )
      {
        $( '#selproduct' ).html( respuesta ); 
      });
  });

  $('#selcustomer').change(function(){
      var id_producto = $("#selproduct").val().trim();
      var id_divicion = $("#Seldivicion").val().trim();
      var id_customer = $("#selcustomer").val().trim();

    
      $.post( '../Controlador/ControllerCargarSelects.php?page=18', { id_customer: id_customer, id_producto: id_producto } ).done( function( respuesta )
      {
        $( '#selpartnumber' ).html( respuesta );

      });


      $.post( '../Controlador/ControllerCargarSelects.php?page=19', { id_divicion: id_divicion, id_producto: id_producto, id_customer: id_customer  } ).done( function( respuesta2 )
      {
        $( '#seltest' ).html( respuesta2 );
      });
      
  }); 

  $('#seltest').change(function(){
    var id_test = $(this).val();
    var id_partnumber = $("#selpartnumber").val().trim();

    //alert(id_test);
    //alert(id_partnumber);

       $.ajax({
              url:"../Controlador/Request_controller.php?page=20",
              method:"POST",  
              data:{
                id_partnumber:id_partnumber,
                id_test:id_test
              },

              success:function(data){
                if (data >= 1) {
                  document.getElementById('msgAlredyPartNumber').innerHTML="The selected part number already has a linked report";
                  swal("Notice", "The selected part number and test already has a linked report, click to ok or select other option", "warning");
                  $("#Valhistorial").val(1);
                  $( ".btn-upload-template" ).prop( "disabled", true );
                }else{
                  document.getElementById('msgAlredyPartNumber').innerHTML="";
                  $("#Valhistorial").val(0);
                  $( ".btn-upload-template" ).prop( "disabled", false );
                }
              }
            }); 
  }); 






       

  

},





  ActionsSelectsTemplate=function(){
    "use strict";
    return{
      init:function(){
        CargarTemplate(),
        EfectosChangeTemplate()
        
      }
    }
  }();