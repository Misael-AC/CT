var SendRequest=function(){

  var count = 0; 

  $(".btn-agregar-producto").off("click");
  $(".btn-agregar-producto").on("click", function(e) { 

    var producto = $("#txt_producto").val().trim();
    var id_usuario = $("#id_usuario").val().trim();
    var code = $("#code").val().trim();
    var id_assy = $("#txt_assy").val().trim();
    var partnumber = $("#txt_partnumber").val().trim();
    var total = $("#txt_totalsamples").val().trim();
    var datecode = $("#txt_datecode").val().trim();
    var line = $("#cbo_line").val().trim();
    var shift = $("#cbo_shift").val().trim();
    var test1 = $("#cbo_test1").val().trim();
    var test2 = $("#cbo_test2").val().trim();
    var test3 = $("#cbo_test3").val().trim(); 
    var DesPrev = $("#DesPrev").val().trim();
    var DesMain = $("#DesMain").val().trim();
    var DesPost = $("#DesPost").val().trim();
    var Bolet = $('input:radio[name=wastebolet]:checked').val();
    var lineshift = line;
    lineshift += ' ';
    lineshift += shift;
    var FileAntes = $("#FileAntes").val().trim();
    var FilePrincipal = $("#FilePrincipal").val().trim();
    var FileDespues = $("#FileDespues").val().trim();

    var OtherPartNumber = $("#OtherPartNumber").val().trim();

    var Depnum = $("#Depnum").val().trim();

    //document.getElementById('alertaTblSample').style.display = 'block'

    if (FileAntes!='') {
      var file = $("#FileAntes")[0].files[0];
      var fileNameAntes = file.name;
    }else{
      var fileNameAntes = '';
    }

    if (FilePrincipal!='') {
      var file = $("#FilePrincipal")[0].files[0];
      var fileNamePrincipal = file.name;
    }else{
      var fileNamePrincipal = '';
    }

    if (FileDespues!='') {
      var file = $("#FileDespues")[0].files[0];
      var fileNameDespues = file.name;
    }else{
      var fileNameDespues = '';
    }





    if(id_assy!=0){
      if(partnumber!=''){
        if(total!= ''){
          if(total > 0){
            if(datecode!=''){
              if(line!=''){
                if(shift!=0){
                  if(test2!=''){
                    if(DesMain != '' || FilePrincipal !=''){
                      if( $('input:radio[name=wastebolet]:checked').is(':checked')) {
                          if (test1 == '') {
                            test1 = 'NA';
                            DesPrev = 'NA';
                          }

                          if (test3 == '') {
                            test3 = 'NA';
                            DesPost = 'NA';
                          }
                                
                          if (test1 != '' && (DesPrev != '' || FileAntes != '')) {
                            if (test3 != '' && (DesPost != '' || FileDespues)) {


                          count++;


  var html_code = "<tr id='row"+count+"'>";
      html_code += "<td id='PNSugerido"+count+"' class='sugerido' style='display:none;'> </td>"; 
      html_code += "<td id='basura"+count+"'> </td>";
      html_code += "<td id='idtable"+count+"'> </td>";
      html_code += "<td id='partnumber"+count+"' class='partnumber'> </td>";
      html_code += "<td id='model"+count+"' class='model'> </td>";
      html_code += "<td id='totalS"+count+"' class='totalS'> </td>";
      html_code += "<td id='datecode"+count+"' class='datecode'> </td>";
      html_code += "<td id='lineshift"+count+"' class='lineshift'> </td>";
      html_code += "<td id='test1"+count+"' class='Before'>   </td>";
      html_code += "<td id='test2"+count+"' class='Main'> </td>";
      html_code += "<td id='test3"+count+"' class='After'> </td>";
      html_code += "<td><button type='button' name='remove' data-row='row"+count+"' class='btn btn-danger btn-xs remove'><i class='fa fa-minus' aria-hidden='true'></i></button></td>";  
      html_code += "</tr>";

   $('#samples').append(html_code);


    if(FilePrincipal != ''){   
      downloadPrincipal = "<a href='../Public/filesSpecs/"+code+fileNamePrincipal+"' download > <i class='fa fa-download' aria-hidden='true'></i> </a>"; 
    }else{
      downloadPrincipal = "";
    }

    if(FileAntes != ''){   
      downloadAntes = "<a href='../Public/filesSpecs/"+code+fileNameAntes+"' download> <i class='fa fa-download' aria-hidden='true'></i> </a>"; 
    }else{
      downloadAntes = "";
    }

    if(FileDespues != ''){   
      downloadDespues = "<a href='../Public/filesSpecs/"+code+fileNameDespues+"' download> <i class='fa fa-download' aria-hidden='true'></i> </a>"; 
    }else{
      downloadDespues = "";
    }

    if (Bolet == 1) {
      waste = '<i class="fa fa-retweet" aria-hidden="true"></i>';
    }else{
      waste = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    }

    if (DesPrev != 'NA') {
      SPrev = "<a class='tooltip2'> <i class='fa fa-commenting-o' aria-hidden='true'></i><span class='tooltiptext2'><p style='text-align: justify'>"+DesPrev+"</p> </span> </a>";

    }else{
      SPrev = "";
    }

    if (DesMain != '') {
      SMain = "<a class='tooltip2'> <i class='fa fa-commenting-o' aria-hidden='true'></i><span class='tooltiptext2'><p style='text-align: justify'>"+DesMain+"</p> </span> </a>";

    }else{
      SMain = "";
    }


    if (DesPost != 'NA') {
      SPost = "<a class='tooltip2'> <i class='fa fa-commenting-o' aria-hidden='true'></i><span class='tooltiptext2'><p style='text-align: justify'>"+DesPost+"</p> </span> </a>";

    }else{
      SPost = "";
    }


   document.getElementById('PNSugerido'+count).innerHTML=OtherPartNumber;
   document.getElementById('basura'+count).innerHTML=waste;
   document.getElementById('idtable'+count).innerHTML=count - 1;
   document.getElementById('partnumber'+count).innerHTML=id_assy;
   document.getElementById('model'+count).innerHTML=partnumber;
   document.getElementById('totalS'+count).innerHTML=total;
   document.getElementById('datecode'+count).innerHTML=datecode;
   document.getElementById('lineshift'+count).innerHTML=lineshift;
   document.getElementById('test1'+count).innerHTML=test1 + "<input type='text' id='inputTest1"+count+"' class='inputTestPrev' style='display: none' value=''> <input type='text' id='inputFileTest1"+count+"' class='SFileTestPrev' style='display: none' value=''> <input type='text' name='DesPrevSpecs' id='DesPrevSpecs"+count+"' style='display: none' value='' class='inputPrevSpecs'> "+ SPrev + downloadAntes+" ";
   document.getElementById('test2'+count).innerHTML=test2 + "<input type='text' id='inputTest2"+count+"' class='inputTestMain' style='display: none' value=''> <input type='text' id='inputFileTest2"+count+"' class='SFileTestMain' style='display: none' value=''> <input type='text' name='DesMainSpecs' id='DesMainSpecs"+count+"' style='display: none' value='' class='inputMainSpecs'> "+ SMain + downloadPrincipal+"  ";
   document.getElementById('test3'+count).innerHTML=test3 + "<input type='text' id='inputTest3"+count+"' class='inputTestPost' style='display: none' value=''> <input type='text' id='inputFileTest3"+count+"' class='SFileTestPost' style='display: none' value=''> <input type='text' name='DesPostSpecs' id='DesPostSpecs"+count+"' style='display: none' value='' class='inputPostSpecs'> "+ SPost + downloadDespues+"  ";

   
   $("#inputTest1"+count).val(test1);
   $("#inputTest2"+count).val(test2);
   $("#inputTest3"+count).val(test3);

   $("#DesPrevSpecs"+count).val(DesPrev);
   $("#DesMainSpecs"+count).val(DesMain);
   $("#DesPostSpecs"+count).val(DesPost);

   if (fileNameAntes != '') {
    $("#inputFileTest1"+count).val(code+fileNameAntes);
   }

   if (fileNamePrincipal != '') {
    $("#inputFileTest2"+count).val(code+fileNamePrincipal);
   }

   if (fileNameDespues != '') {
    $("#inputFileTest3"+count).val(code+fileNameDespues);
   }



                      if (test1 != '' && FileAntes != '') {
                        var formData = new FormData($(".testAntes")[0]);
                        $.ajax({
                            url: '../Controlador/Controller-upload.php?page=1&code='+code+'',  
                            type: 'POST',
                            data: formData,
                            cache: false,
                            contentType: false,
                            processData: false,
                        });
                      }

                      if (test3 != '' && FileAntes != '') {
                        var formDataDespues = new FormData($(".testDespues")[0]);
                        $.ajax({
                            url: '../Controlador/Controller-upload.php?page=2&code='+code+'',  
                            type: 'POST',
                            data: formDataDespues,
                            cache: false,
                            contentType: false,
                            processData: false,
                        });
                      }

                      if (test2 != '' && FilePrincipal != '') {
                        var formDataPrincipal = new FormData($(".testPrincipal")[0]);
                        $.ajax({
                            url: '../Controlador/Controller-upload.php?page=3&code='+code+'',  
                            type: 'POST',
                            data: formDataPrincipal,
                            cache: false,
                            contentType: false,
                            processData: false,
                        });
                      }


                        $("#cbo_test1").val('');
                        $("#cbo_test2").val('');
                        $("#cbo_test3").val('');
                        $("#DesPrev").val('');
                        $("#DesMain").val('');
                        $("#DesPost").val('');
                        $("#FileAntes").val('');
                        $("#FilePrincipal").val('');
                        $("#FileDespues").val('');
                        $("#samples").val('');
                        $("#txt_assy").val('');
                        $("#txt_partnumber").val('');
                        $("#txt_totalsamples").val('');
                        $("#txt_datecode").val('');
                        $("#cbo_line").val('');
                        $("#cbo_shift").val(0);

                        //$("#txt_producto").val('');
                        $("#OtherPartNumber").val('');

                        //$("#radio-1").attr("checked", false);

                        $('#alertaTblSample').fadeIn();     
                        setTimeout(function() {
                          $("#alertaTblSample").fadeOut();           
                        },3000);

          

                          }else{
                            alert('Write specs for post');
                          } 
                        }else{
                          alert('Write specs for prev');
                        }   
                      }else{
                        alert('Select return or throw');
                      }
                    }else{
                      alert('Write the specs for main test');
                    }  
                  }else{
                    alert('Write the Main Test');
                  }
                }else{
                  alert('Select the shift');
                }
              }else{
                alert('Insert the line');
              }
            }else{
              alert('Insert Date Code');
            }
          }else{
            alert('You must insert a positive number greater than 0');
          }
        }else{
          alert('Insert Total Samples');
        }    
      }else{
        alert('Insert the Part Number');
      }
    }else{
      alert('Select an Assy Number');
    }

  });

  $(".btn-send-solicitud").off("click");
  $(".btn-send-solicitud").on("click", function(e) {
    var usuario = $("#id_usuario").val().trim();
    var issuedate = $("#issuedate").val().trim();
    var required_due_date = $("#required-due-date").val().trim();
    var coment = $("#coment").val().trim();
    var reason = $("#reason").val().trim();
    var aprover = $("#aprover").val().trim();
    var Sample_availability = $("#sample-availability").val().trim();
    var producto = $("#txt_producto").val().trim();

    var partnumber = [];
    var model = [];
    var totalS = [];
    var datecode = [];
    var lineshift = [];
    var Before = [];
    var Main = [];
    var After = [];
    var SpecsBefore = [];
    var SpecsMain = [];
    var SpecsAfter = [];
    var SFileTestPrev = [];
    var SFileTestMain = [];
    var SFileTestPost = [];
    var PNSugerido = [];

    
    $('.partnumber').each(function(){
      partnumber.push($(this).text());
    });

    $('.model').each(function(){
      model.push($(this).text());
    });

    $('.totalS').each(function(){
      totalS.push($(this).text());
    });

    $('.datecode').each(function(){
      datecode.push($(this).text());
    });

    $('.lineshift').each(function(){
      lineshift.push($(this).text());
    });

    $('.inputTestPrev').each(function(){
      Before.push($(this).val());
    });

    $('.inputTestMain').each(function(){
      Main.push($(this).val());
    });

    $('.inputTestPost').each(function(){
      After.push($(this).val());
    });

    //#########
     $('.inputPrevSpecs').each(function(){
      SpecsBefore.push($(this).val());
    });

    $('.inputMainSpecs').each(function(){
      SpecsMain.push($(this).val());
    });

    $('.inputPostSpecs').each(function(){
      SpecsAfter.push($(this).val());
    });

    //#########

    $('.SFileTestPrev').each(function(){
      SFileTestPrev.push($(this).val());
    });

    $('.SFileTestMain').each(function(){
      SFileTestMain.push($(this).val());
    });

    $('.SFileTestPost').each(function(){
      SFileTestPost.push($(this).val());
    });

    $('.sugerido').each(function(){
      PNSugerido.push($(this).text());
    });


    if(usuario!=''){
      if(issuedate!=''){
        if(required_due_date!=''){
          if(Sample_availability!=''){
            if(reason!=0){
              if (partnumber != '') {
                if(aprover!=0){

                    $.ajax({
                      url:"../Controlador/Request_controller.php?page=3",
                      method:"POST",
                      data:{
                        usuario:usuario,
                        issuedate:issuedate,
                        required_due_date:required_due_date,
                        coment:coment,
                        reason:reason,
                        aprover:aprover,
                        Sample_availability:Sample_availability,
                        partnumber:partnumber,
                        model:model,
                        totalS:totalS,
                        datecode:datecode,
                        lineshift:lineshift,
                        Before:Before,
                        Main:Main,
                        After:After,
                        SpecsBefore:SpecsBefore,
                        SpecsMain:SpecsMain,
                        SpecsAfter:SpecsAfter,
                        SFileTestPrev:SFileTestPrev,
                        SFileTestMain:SFileTestMain,
                        SFileTestPost:SFileTestPost,
                        producto:producto,
                        PNSugerido:PNSugerido
                      }, 
                      
                      success:function(data){
                        alert(data);
                        location.href='Request.php'
                        //fetch_item_data();
                      }
                    });
                                                    

                              
                }else{
                  alert('Select approver');
                }                  
              }else{
                alert('Add samples');
              }           
            }else{
              alert('Select a reason');
            }
          }else{
            alert('Select sample availability');
          }
        }else{
          alert('Select required due date');
        }
      }else{
        alert('The issue date is empty');
      }
    }else{
      alert('The name is empty');
    }

  //alert(partnumber[0]);
  });

//######################Delete###############################
$(document).on('click', '.removeMaq', function(){
    var delete_row = $(this).data("row");
    $('#' + delete_row).remove();
});

$(document).on('click', '.removeMesurement', function(){
  var delete_row2 = $(this).data("row");
  $('#' + delete_row2).remove();
});

$(document).on('click', '.removeConsumables', function(){
  var delete_row3 = $(this).data("row");
  $('#' + delete_row3).remove();
});

$(document).on('click', '.removeActivities', function(){
  var delete_row4 = $(this).data("row");
  $('#' + delete_row4).remove();
});

$(document).on('click', '.remove', function(){
    var delete_row5 = $(this).data("row");
    $('#' + delete_row5).remove();
});


  $(".btn-add-tester").off("click");
  $(".btn-add-tester").on("click", function(e) {
    var idsample=$(this).data("idsample");

    window.location.href = "AddUser.php?id="+idsample+"";
                
  });

  $(".btn-details-sample").off("click");
  $(".btn-details-sample").on("click", function(e) {
    var idsample=$(this).data("sampleid");

    //if (idSample != '') {
      //alert(idsample);

      $.ajax({
        url:"../Controlador/Request_controller.php?page=28",
        method:"POST",
        data:{
          idsample:idsample
        },
        success:function(respuesta){
          $('#sampleDetails').modal('show');
          //alert(respuesta);
          //$("#qwerty").val(idsample);
          $( '#Details_sample' ).html( respuesta );
        }
      });

    //}
    //window.location.href = "AddUser.php?id="+idsample+"";           
  });

  


  $('#indertificador').change(function(){ 
    var indentify = $(this).val();
    /*if (indentify != 0) {
      document.getElementById('tester').disabled = false;
    }else{
      document.getElementById('tester').disabled = true;
    } */
    $.post( '../Controlador/ControllerCargarSelects.php?page=7', { indentify: indentify} ).done( function( respuesta )
    {
      $( '#test' ).html( respuesta );
    });
  }); 


  $('#usersLDBSystem').change(function(){ 
    var id_user = $(this).val();

    $.post( '../Controlador/Request_controller.php?page=8', { id_user: id_user} ).done( function( respuesta )
    {
      $( '#PaneltesterLDB' ).html( respuesta );
    });
  }); 


  $('#tester').change(function()
  { 
    var test = $('#test').val();
    var id_tester = $(this).val(); 
    //var ide = $("#ide").val();
 
    //$('.nav-tabs > .active').next('li').find('a').trigger('click');

    $('.nav-tabs a[href="#default-tab-2"]').tab('show');


    if (id_tester != 0) {
      if (test != 0) {
      //document.getElementById('indertificador').disabled = true;
      //document.getElementById('tester').disabled = false;
        $.post( 'trainingMatrix.php', { id_tester: id_tester, test: test } ).done( function( respuesta ){
          $( '#Paneltester' ).html( respuesta );
        });
      }
      else{
        $("#tester").val("0");
        alert("Insert the test");
      }
    
    }else{
      alert("Select tester");
      //document.getElementById('indertificador').disabled = false;
      //document.getElementById('tester').disabled = true;
    }


    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      navLinks: true, // can click day/week names to navigate views
      eventLimit: true, // allow "more" link when too many events


      businessHours: {
          // days of week. an array of zero-based day of week integers (0=Sunday)
          dow: [ 1, 2, 3, 4, 5 ], // Monday - Thursday
          start: '06:00', // a start time (10am in this example)
          end: '18:00', // an end time (6pm in this example)
      },

      events: {
        url: 'dailyActivities.php',
        cache: true
      }
      /*events : [
        {
            title  : 'event1',
            start  : '2019-05-01'
        },
        {
            title  : 'A-1905-07',
            start  : '2019-05-05',
            end    : '2019-05-07'
        },
        {
            title  : 'event3',
            start  : '2019-01-09 06:00:00',
            end    : '2019-01-09 08:00:00'
            //allDay : false // will make the time show
        }
    ],*/
    }); 




  }); 

  $('#test').change(function(){ 
    $("#tester").select2("val", "0");
  }); 

  // ##################### ADD MACHINE #########################################
var count = 1;
  $(".btn-addMachine").off("click");
  $(".btn-addMachine").on("click", function(e) {
    count = count + 1;
    var Machines = $("#Machines").val().trim();
    var id_tester = $("#tester").val().trim();

    datos = {"Machines":Machines, "id_tester":id_tester, "count":count};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=4',
      type:'POST', 
      data:datos, 
    }).done(function(msg){

      document.getElementById('PanelMachine').style.display = 'block';
      $("#tbl_machine").append(msg);

    });   
  });


// ##################### ADD PART NUMBER #########################################

  $(".btn-addpartnumber").off("click");
  $(".btn-addpartnumber").on("click", function(e) {

    var selpartnumber = $("#selpartnumber").val().trim();
    count = count + 1;

    if (selpartnumber != 0) {
      datos = {"selpartnumber":selpartnumber, "count":count};
      $.ajax({
        url:'../Controlador/Request_controller.php?page=25',
        type:'POST', 
        data:datos, 
      }).done(function(msg){

      document.getElementById('tbl_parts').style.display = 'block';
      $("#Tr_partNumber").append(msg);

      }); 
    }else{
      alert("Hola");
    }  
  });

   // ##################### ADD MACHINE #########################################

  $(".btn-addMesurement").off("click");
  $(".btn-addMesurement").on("click", function(e) { 
    var Mesurement = $("#Mesurement").val().trim();
    var id_tester = $("#tester").val().trim();

    datos = {"Mesurement":Mesurement, "id_tester":id_tester};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=5',
      type:'POST', 
      data:datos, 
    }).done(function(msg){

      document.getElementById('Panelmesurement').style.display = 'block';
      $("#tbl_mesurement").append(msg);
    });   
  });

 // ##################### ADD user for tariner #########################################


//#########################################################################################


  $(".btn-Consumables").off("click");
  $(".btn-Consumables").on("click", function(e) { 
    var Consumables = $("#Consumables").val().trim();

    datos = {"Consumables":Consumables};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=6',
      type:'POST', 
      data:datos, 
    }).done(function(msg){

      document.getElementById('PanelConsumables').style.display = 'block';
      $("#tbl_consumables").append(msg);
    });   
  }); 


  $(".btn-testactivities").off("click");
  $(".btn-testactivities").on("click", function(e) { 
    var testactivities = $("#testactivities").val().trim();
    count = count + 1;
    datos = {"testactivities":testactivities, "count":count};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=12',
      type:'POST', 
      data:datos, 
    }).done(function(msg){

      document.getElementById('PanelTestActivities').style.display = 'block';
      $("#tbl_testActivities").append(msg);
    });   
  }); 


  $(".btn-save-initial-trining").off("click");
  $(".btn-save-initial-trining").on("click", function(e) {
    var usersLDBSystem = $("#usersLDBSystem").val().trim();
    var typeTraining = $("#typeTraining").val().trim();
    var item = $("#item").val().trim();
    var InLevel = $("#InLevel").val().trim();

      $.ajax({
        url:"../Controlador/Request_controller.php?page=7",
        method:"POST",
        data:{
          usersLDBSystem:usersLDBSystem,
          typeTraining:typeTraining,
          item:item,
          InLevel:InLevel
        },

        beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              }, 
        
        success:function(data){
          alert(data);
          location.href='AssignTraining.php'
          //fetch_item_data();
        }
      });

  });

// ==============================================================================================

  $(".btn-saveAsignador").off("click");
  $(".btn-saveAsignador").on("click", function(e) {
    var start = $("#start").val().trim();
    var finish = $("#finish").val().trim();
    var indertificador = $("#indertificador").val().trim();
    var test = $("#test").val().trim();
    var tester = $("#tester").val().trim();
    var id_sample = $("#id_sample").val().trim();
    var trainers = [];
    var id_requisicion = $("#id_requisicion").val().trim();

    // defines un arreglo checkbox
    var trainertets = [];
    $(":checkbox[name=addTrainer]").each(function() {
      if (this.checked) {
        // agregas cada elemento.
          trainertets.push($(this).val());
      }
    });

    // obtener tester for trainer
    var userVal = [];
    $("#tbl_trainer tr").each(function() { 
      var id_tester = $(this).find("td").eq(0).text().trim();
      userVal.push(id_tester);
    });

  
if (start != '') {
  if (finish != '') {
    if (start <= finish) {
      if (indertificador != 0) {
        if (test != 0) {
          if (tester != 0) {

    $.ajax({
      url:"../Controlador/Request_controller.php?page=9",
      method:"POST",
      data:{
        start:start,
        finish:finish,
        indertificador:indertificador,
        test:test,
        tester:tester,
        id_sample:id_sample,
        trainers:trainers,
        trainertets:trainertets,
        userVal:userVal
      },
                      
      success:function(data){
        alert(data);
        if (data != 2) {
          alert(data);
          location.href='ApprovalRequest.php?id='+id_requisicion+'';
        }else{
          alert("The training level of the user you chose is very low, please add a responsible person");
        }


        
                        //fetch_item_data();
      }
    });

          }else{
            alert("Select tester");
          }
        }else{
          alert("Select test");
        }
      }else{
        alert("Select identifiier");
      }
    }else{
      alert("Start date have to be less to the finish date");
    }
  }else{
    alert("Finish date is empty");
  }
}else{
  alert("Start date is empty");
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
if (start != '') {
  if (finish != '') {
    if (indertificador != 0) {
      if (test != 0) {
        if (tester != 0) {

   $.ajax({
      url:"../Controlador/Request_controller.php?page=9",
      method:"POST",
      data:{
        start:start,
        finish:finish,
        indertificador:indertificador,
        test:test,
        tester:tester,
        id_sample:id_sample,
        trainers:trainers
        //Mesurement:Mesurement,
        //Consumables:Consumables,
        //startDayMaq:startDayMaq,
        //FinishDayMaq:FinishDayMaq
      },

      beforeSend: function () { 
        $("#loadMe").modal({
           backdrop: "static", 
           keyboard: false, 
           show: true 
           });
      }, 
                      
      success:function(data){
        alert(data);
        location.href='ApprovalRequest.php?id='+data+'';
                        //fetch_item_data();
      }
    });

        }else{
          alert("Select tester");
        }
      }else{
        alert("Select test");
      }
    }else{
      alert("Select identificador");
    }
  }else{
    alert("Insert finish date");
  }
}else{
  alert("Insert start date");
}
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

});

// ==================================== Aprobar asignador ==================================================

  $(".btn-aproval-asig").off("click");
  $(".btn-aproval-asig").on("click", function(e) {
    var tdStartDate = $("#tdStartDate").text().trim();
    var tdFinisDate = $("#tdFinisDate").text().trim();
    var aprover2 = $("#aprover2").val().trim();
    var id_requi = $("#idRequi").val();

    if(tdStartDate!='Pending'){ 
      if(tdFinisDate!='Pending'){
        if(aprover2 != 0){
          if(id_requi != ''){

            $.ajax({
              url:"../Controlador/Request_controller.php?page=11",
              method:"POST",
              data:{
                tdStartDate:tdStartDate,
                tdFinisDate:tdFinisDate,
                aprover2:aprover2,
                id_requi:id_requi
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                //alert(data);
                location.href='AppRequest.php'
              }
            });

          }else{
            alert("Error ID Requisition");
          }
        }else{
          alert("Select approver");
        }
      }else{
        alert("You must approve all the samples");
      }
    }else{
      alert("You must approve all the samples");
    }

});
                  
// ================================= Aprobar aprobador ==============================================

  $(".btn-aproval-apro").off("click");
  $(".btn-aproval-apro").on("click", function(e) {
    var aprover3 = $("#aprover3").val();
    var id_requi = $("#idRequi").val();

   if(aprover3!=0){
      
        $.ajax({
              url:"../Controlador/Request_controller.php?page=13",
              method:"POST",
              data:{
                aprover3:aprover3,
                id_requi:id_requi
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                //alert(data);
                location.href='AppRequest.php'
              }
            });  

    }else{
      alert('You need to select the next approver');
    }
                
  });

  //####################################################################################################

  $(".btn-aproval-aprofin").off("click");
  $(".btn-aproval-aprofin").on("click", function(e) {

    var id_requi = $("#idRequi").val();


        $.ajax({
              url:"../Controlador/Request_controller.php?page=14",
              method:"POST",
              data:{
                id_requi:id_requi
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                //alert(data);
                location.href='AppRequest.php'
              }
        });  
                       
  });       

  //####################################################################################################
  $(".btn-start").off("click");
  $(".btn-start").on("click", function(e) {
    var sampleID = $("#sampleID").val().trim();
    var dateStartSample = $("#dateStartSample").val().trim();
    var idRequi = $("#idRequi").val().trim();



    if(sampleID!=0){
      if (dateStartSample){
      
        $.ajax({
              url:"../Controlador/Request_controller.php?page=15",
              method:"POST",
              data:{
                sampleID:sampleID,
                dateStartSample:dateStartSample
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                //alert(data);
                location.href='PendingTest.php?id='+idRequi+''
              }
            });
      }else{
        alert('If you want start the test, choose a date.');
      }  
    }else{
      alert('Error: Constact the administrador system');
    }

                       
  });

    //####################################################################################################
  $(".btn-finish").off("click");
  $(".btn-finish").on("click", function(e) {
    var sampleID = $("#sampleID").val().trim();
    var ReportxSample = $("#ReportxSample").val().trim();
    var idRequi = $("#idRequi").val().trim();
    var reason = $("#reason").val().trim();    
    var TesterID = $("#id_usuario").val().trim();
    var RepAprobador = $("#ReportAprover").val().trim();

    if (ReportxSample!='') {
      var file = $("#ReportxSample")[0].files[0];
      var ReportName = file.name;
    }else{
      var ReportName = '';
    }

    if (ReportName != '') { 
      if (RepAprobador != 0) {
        if (reason != 0) {
      var formData = new FormData($(".SampleReport")[0]);
      $.ajax({
          url: '../Controlador/Controller-upload.php?page=4&SampleID='+sampleID+'&TesterID='+TesterID+'&RepAprobador='+RepAprobador+'&reason='+reason+'&idRequi='+idRequi+'',


          type: 'POST',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,

          success:function(data){
            //alert(data);
            location.href='PendingTest.php?id='+idRequi+''
          }
      });
        }else{
          alert("Select Judment");
        }
      }else{
        alert("Select approver");
      }
    }else{
      alert("Attach report");
    } 

    //alert("success");




   /* if(sampleID!=0){
      if (dateStartSample){
      
        $.ajax({
              url:"../Controlador/Request_controller.php?page=15",
              method:"POST",
              data:{
                sampleID:sampleID,
                dateStartSample:dateStartSample
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                alert(data);
                location.href='PendingTest.php?id='+idRequi+''
              }
            });
      }else{
        alert('If you want start the test, choose a date.');
      }  
    }else{
      alert('Error: Constact the administrador system');
    }
*/
                       
  });

  //####################################################################################################

  $(".btn-approvalReport").off("click");
  $(".btn-approvalReport").on("click", function(e) {

    var id_sample = $(this).data("idsample");
    $("#sampleIDReport").val(id_sample);

    $("#ApprovalReport").modal({ 
      backdrop: "static", 
      keyboard: false, 
      show: true 
    });

    datos = {"id_sample":id_sample};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=17',
      type:'POST', 
      data:datos, 
    }).done(function(msg){
      $("#tableReport").html(msg);
    });   


                       
  });

  $(".btn-modalID").off("click");
  $(".btn-modalID").on("click", function(e) {

    var id_sample = $(this).data("idsample");
    $("#sampleID").val(id_sample);

    $("#startSample").modal({
      backdrop: "static", 
      keyboard: false, 
      show: true 
    });


                       
  }); 

   //####################################################################################################

  $(".btn-modalID-end").off("click");
  $(".btn-modalID-end").on("click", function(e) {

    var id_sample = $(this).data("idsample");
    $("#sampleID").val(id_sample);

    $("#finihSample").modal({
      backdrop: "static", 
      keyboard: false, 
      show: true 
    });


                       
  });

  // !!!!!!!!!!!!!!!!!!!!! RECHAZAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  $(".btn-reject-apro").off("click");
  $(".btn-reject-apro").on("click", function(e) {
    //var id_requi = 35;
    var id_requi = $("#idRequi").val();
    var comentreject_1 = $("#comentreject2").val().trim();


    if (comentreject_1 != '') {
      if(confirm("Are you sure you want reject this?")){

        $.ajax({
              url:"../Controlador/Request_controller.php?page=21'",
              method:"POST",
              data:{
                id_requi:id_requi,
                comentreject_1:comentreject_1
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                alert(data);
                location.href='AppRequest.php'
              }
            });
      }
    }else{
      alert('insert comment');
    }                   
  });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  $(".btn-reject-apro2").off("click");
  $(".btn-reject-apro2").on("click", function(e) {
    //var id_requi = 35;
    var id_requi = $("#idRequi").val();
    var comentreject_2 = $("#comentrejectApproval").val().trim();

    if (comentreject_2 != '') {
      if(confirm("Are you sure you want reject this?")){

        $.ajax({
              url:"../Controlador/Request_controller.php?page=22'",
              method:"POST",
              data:{
                id_requi:id_requi,
                comentreject_2:comentreject_2
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                alert(data);
                location.href='AppRequest.php'
              }
            });
      }
    }else{
      alert('insert comment');
    }                   
  });

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
  $(".btn-reject-apro3").off("click");
  $(".btn-reject-apro3").on("click", function(e) {
    //var id_requi = 35;
    var id_requi = $("#idRequi").val();
    var comentreject_3 = $("#comentrejectApprovalFinal").val().trim();

    if (comentreject_3 != '') {
      if(confirm("Are you sure you want reject this?")){

        $.ajax({
              url:"../Controlador/Request_controller.php?page=23'",
              method:"POST",
              data:{
                id_requi:id_requi,
                comentreject_3:comentreject_3
              },

              beforeSend: function () { 
                $("#loadMe").modal({
                  backdrop: "static", 
                  keyboard: false, 
                  show: true 
                  });
              },

              success:function(data){
                alert(data);
                location.href='AppRequest.php'
              }
            });
      }
    }else{
      alert('insert comment');
    }                   
  });

//==============================================================================================================

  $(".btn-register-cc").off("click");
  $(".btn-register-cc").on("click", function(e) {

    var optionTexts = [];
      $("#jquery-tagIt-default-Denso").each(function(){ 
        optionTexts.push($(this).text()) 
      });

      alert(optionTexts);

  });

//=========================Report approval asignador=======================================================================

  $(".btn-aproval-report").off("click");
  $(".btn-aproval-report").on("click", function(e) {

    var id_sample = $("#id_sample").val();
    var tester = $("#tester").val();
    var aprover2 = $("#aprover2").val();

    if (aprover2 != 0) {

    $.ajax({
      url:"../Controlador/Request_controller.php?page=26'",
      method:"POST",
      data:{
        id_sample:id_sample,
        tester:tester,
        aprover2:aprover2
      },

      success:function(data){
        alert(data);
        //location.href='AppRequest.php'
      }
    });

  }else{
    alert("Select approver");
  }

  });

//=========================Report approval Approvador=======================================================================

  $(".btn-aproval-report2").off("click");
  $(".btn-aproval-report2").on("click", function(e) {

    var id_sample = $("#id_sample").val();
    var tester = $("#tester").val();
    var aprover3 = $("#aprover3").val();

    if (aprover3 != 0) {

    $.ajax({
      url:"../Controlador/Request_controller.php?page=27'",
      method:"POST",
      data:{
        id_sample:id_sample,
        tester:tester,
        aprover3:aprover3
      },

      success:function(data){
        alert(data);
        //location.href='AppRequest.php'
      }
    });

  }else{
    alert("Select approver");
  }

  });  

//=========================Report approval Approvador Final =================================================================

  $(".btn-aproval-report3").off("click");
  $(".btn-aproval-report3").on("click", function(e) {

    var id_sample = $("#id_sample").val();
    var tester = $("#tester").val();
    var aprover3 = $("#aprover3").val();

    if (aprover3 != 0) {

    $.ajax({
      url:"../Controlador/Request_controller.php?page=28'",
      method:"POST",
      data:{
        id_sample:id_sample,
        tester:tester,
        aprover3:aprover3
      },

      success:function(data){
        alert(data);
        //location.href='AppRequest.php'
      }
    });

  }else{
    alert("Select approver");
  }

  });  


//=========================Report approval Approvador Final =================================================================

  $(".btn-savePN").off("click");
  $(".btn-savePN").on("click", function(e) {

    var partnumber = $("#partnumber").val().trim();
    var model = $("#model").val().trim();
    var customer = $("#customer").val().trim();
    var Producto = $("#Producto").val().trim();

    if (partnumber != '') {
      if (model != '') {
        if (customer != 0) {
          if (Producto != 0) {

            $.ajax({
              url:"../Controlador/Request_controller.php?page=30'",
              method:"POST",
              data:{
                partnumber:partnumber,
                model:model,
                customer:customer,
                Producto:Producto
              },

              beforeSend: function(){
                //alert("Cargando...");
                $('#labelLoading').text('Adding');
              },

              success:function(data){

                if (data != 1) {
                  document.getElementById("labelLoading").style.color = "green";
                  $('#labelLoading').text('Added correctly');

                  setTimeout(function(){ 
                    $('#labelLoading').text('');
                    document.getElementById("labelLoading").style.color = "black";
                  },2000);

                  $("#partnumber").val('');
                  $("#model").val('');
                  $("#customer").val('');
                  $("#Producto").val('');

                  //$("#changePartNumber").load("#changePartNumber");
                  //location.reload();
                }else{
                  $("#partnumber").val('');
                  $("#model").val('');
                  $("#customer").val(0);
                  $("#Producto").val(0);

                  document.getElementById("labelLoading").style.color = "red";
                  $('#labelLoading').text('Part number alredy registered');

                  setTimeout(function(){ 
                    $('#labelLoading').text('');
                    document.getElementById("labelLoading").style.color = "black";
                  },7000);


                }

                alert(data);
                //location.href='AppRequest.php'
              }
            });

            
      
          }else{
            alert('Select the product');
          }
        }else{
          alert('Select the customer');  
        }
      }else{
        alert('insert the model');
      }
    }else{
      alert('Insert the part number');
    }
    


  });

//=========================Report approval Approvador Final =================================================================

  $(".btn-update-PN").off("click");
  $(".btn-update-PN").on("click", function(e) {

    var sampleID = $("#sampleID").val().trim();
    var changePartNumber = $("#changePartNumber").val().trim();

    if (sampleID != '') {
      if (changePartNumber != 122) {

          $.ajax({
              url:"../Controlador/Request_controller.php?page=31'",
              method:"POST",
              data:{
                sampleID:sampleID,
                changePartNumber:changePartNumber
              },

              success:function(data){
                
                //$("#changePartNumber").load("#changePartNumber");
                //location.reload();

                alert(data);
                $('#UpdatePartNumber').modal('hide');
                //location.href='AppRequest.php'
              }
            });




      }else{
        alert("Select a part number");
      }
    }else{
      alert("ID no register");
    }


  });    

},



buscarPartNumber=function(){
  $('button[id=BTNPARTESBUSCAR]').on('click',function () {
     var Num = $("#Numoerdeparteparabuscar").val().trim();

     datos = {"Num":Num};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=1',
      type:'POST', 
      data:datos, 
    }).done(function(msg){
      $("#tableACAR2").html(msg);
    });   

  document.getElementById("tablaresultados").style.display = "block";
  });
},

AddTblMachine=function(){
  $('button[id=detailsSample]').on('click',function () {
    var idSample = $(this).data("idsample");
     //var Num = $("#Numoerdeparteparabuscar").val().trim();

     datos = {"idSample":idSample};
    $.ajax({
      url:'../Controlador/Request_controller.php?page=10',
      type:'POST', 
      data:datos, 
    }).done(function(msg){
      $("#detailsSampleDenso").html(msg);
    });   

    $('#details').modal('show'); 
  //document.getElementById("tablaresultados").style.display = "block";
  });

},

handleSelectpicker=function(){
  $('.selectpicker').selectpicker();

}






  ActionsRequest=function(){
    "use strict";
    return{
      init:function(){
        SendRequest(),
        buscarPartNumber(),
        handleSelectpicker(),
        AddTblMachine()
        
      }
    }
  }();