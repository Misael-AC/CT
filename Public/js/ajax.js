
$(function(){
	var ENV_WEBROOT = "../";
	
	$(".btn-agregar-producto").off("click");
	$(".btn-agregar-producto").on("click", function(e) {
		
		var partnumber = $("#txt_partnumber").val().trim();
		var id_assy = $("#txt_assy").val().trim();
		var total = $("#txt_totalsamples").val().trim(); 
		var datecode = $("#txt_datecode").val().trim();
		var line = $("#cbo_line").val().trim();
		var shift = $("#cbo_shift").val().trim();
		var test1 = $("#cbo_test1").val().trim();
		var test2 = $("#cbo_test2").val().trim();
		var test3 = $("#cbo_test3").val().trim();
		var archivosrequi = $("#archivosrequi").val().trim();
		var Bolet = $('input:radio[name=wastebolet]:checked').val();
		var DesPrev = $("#DesPrev").val().trim();
		var DesMain = $("#DesMain").val().trim();
		var DesPost = $("#DesPost").val().trim();

		var contScrap = $("#contScrap").val().trim();
		var formData = new FormData($(".formulario")[0]);

		if (test2 == 9999 && archivosrequi != ''){
			var value = 1;
		}else if(test2 == 9999 && archivosrequi == ''){
			var value = 0;
		}

		if (archivosrequi!='') {
			var file = $("#archivosrequi")[0].files[0];
			var fileName = file.name;
		}else{
			var fileName = '';
		}

		if(id_assy!=0){
			if(partnumber!=''){
				//if(model!=''){
					if(total!= ''){
						if(total > 0){
						if(datecode!=''){
							if(line!=''){
								if(shift!=0){
									if(test2!=0){
										
													if(value!=0){
															if( $('input:radio[name=wastebolet]:checked').is(':checked')) {

																if (Bolet == 2 ) {
																	var contScrap = parseInt(contScrap) + 1;
																}
																$("#contScrap").val('');
																$("#contScrap").val(contScrap);

																

										$.ajax({
											url: 'Controller/ProductoController.php?page=1',
											type: 'post',
											data: {'Bolet':Bolet, 'fileName':fileName, 'id_assy':id_assy, 'partnumber':partnumber, 'total':total, 'datecode':datecode, 'line':line, 'shift':shift, 'test1':test1, 'test2':test2, 'test3':test3, 'DesPrev':DesPrev, 'DesMain':DesMain, 'DesPost':DesPost},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#txt_partnumber").val('');
												$("#txt_totalsamples").val('');
												$("#txt_datecode").val('');
												$("#archivosrequi").val('');
												$("#DesPrev").val('');
												$("#DesMain").val('');
												$("#DesPost").val('');
												$("#cbo_test1").val('');
												$("#cbo_test2").val('');
												$("#cbo_test3").val('');
												$("#txt_assy").val('');

												alertify.success(data.msj);
												$(".detalle-producto").load('detalle.php');
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});

										//información del formulario
        								var formData = new FormData($(".formulario")[0]);
        								//hacemos la petición ajax  
        								$.ajax({
            								url: 'upload.php',  
            								type: 'POST',
            								// Form data
            								//datos del formulario
            								data: formData,
            								//necesario para subir archivos via ajax
            								cache: false,
            								contentType: false,
           	 								processData: false,
            								//una vez finalizado correctamente
            								//si ha ocurrido un error
        								});
											
											}else{
												alertify.error('Select return or throw');
											}	
										}else{
										alertify.error('attach files');
									}		
									
													
									}else{
										alertify.error('Select the Main Test');
									}
								}else{
									alertify.error('Select the shift');
								}
							}else{
								alertify.error('Insert the line');
							}
						}else{
							alertify.error('Insert Date Code');
						}
						}else{
						alertify.error('You must insert a positive number greater than 0');
					}
					}else{
						alertify.error('Insert Total Samples');
					}
				//}else{
				//alertify.error('Insert the model');
			//}				
			}else{
				alertify.error('Insert the Part Number');
			}
		}else{
			alertify.error('Select an Assy Number');
		}
	});


	$(".btn-send-solicitud").off("click");
	$(".btn-send-solicitud").on("click", function(e) {
		var usuario = $("#id_user").val().trim();
		var section = $("#section").val().trim();
		var depto = $("#depto").val().trim();
		var ext_tel = $("#ext_tel").val().trim();
		var issuedate = $("#issuedate").val().trim();

		var producto = $("#txt_producto").val().trim();

		var required_due_date = $("#required-due-date").val().trim();
		var coment = $("#coment").val().trim();
		var reason = $("#reason").val().trim();
		var aprover = $("#aprover").val().trim();
		//var archivo1 = $("#archivo1").val();
		var archivo = $("#archivosrequi").val();
		var Sample_availability = $("#sample-availability").val().trim();

		/*if (archivo1!='') {
			var file = $("#archivo1")[0].files[0];
			var fileName = file.name;
        	var fileSize = file.size;
		}else{
			var fileName = '';
        	var fileSize = '';
		}	*/	

		if (archivo!='') {
			var file2 = $("#archivosrequi")[0].files[0];
			var fileName2 = file2.name;
        	var fileSize2 = file2.size;
		}else{
			var fileName2 = '';
        	var fileSize2 = '';
		}


		if(usuario!=''){
			if(section!=''){
				if(depto!=''){
					if(ext_tel!=''){
						if(issuedate!=''){
										if(required_due_date!=''){
											if(Sample_availability!=''){
											if(reason!=0){
												if(aprover!=0){
																										
													$.ajax({
														url: 'Controlador/LDBSystem-controlador.php?page=3',
														type: 'post',
														data: {'Sample_availability':Sample_availability, 'fileName2':fileName2,'fileSize2':fileSize2, 'usuario':usuario, 'issuedate':issuedate, 'required_due_date':required_due_date, 'reason':reason, 'coment':coment, 'producto':producto, 'aprover':aprover},
														dataType: 'json',
														success: function(data) {
														if(data.success==true){
															$("#coment").val('');
															$('#main').load("carrucel.php");
															alertify.success(data.msj);
														}else{
															alertify.error(data.msj);
														}
														},
														error: function(jqXHR, textStatus, error) {
														alertify.error(error);
														}
													});
															
															
												}else{
												alertify.error('Select approver');
											}						
											}else{
												alertify.error('Select a reason');
											}
											}else{
												alertify.error('Select sample availability');
											}
										}else{
											alertify.error('Select required due date');
										}
						}else{
							alertify.error('The issue date is empty');
						}
					}else{
						alertify.error('The extension is empty');
					}
				}else{
					alertify.error('The department is empty');
				}
			}else{
				alertify.error('The section is empty');
			}
		}else{
			alertify.error('The name is empty');
		}
	});


	$(".eliminar-producto").off("click");
	$(".eliminar-producto").on("click", function(e) {
		var id = $(this).attr("id");
		//svar id_sample = $("#id_sam").val();
		//alert(id_sample);
		$.ajax({
			url: 'Controller/ProductoController.php?page=2',
			type: 'post',
			data: {'id':id},
			dataType: 'json'
		}).done(function(data){
			if(data.success==true){
				alertify.success(data.msj);
				$(".detalle-producto").load('detalle.php');


			}else{
				alertify.error(data.msj);
			}
		})
	});



	    //  $(document).on('click', '.ver_btn', function(){  
        //   var id_req=$(this).data("id_req");

        //    alert(id_req); 

      //});
//#################################################################################################
	$(".btn-ver-sampleid").off("click");
	$(".btn-ver-sampleid").on("click", function(e) {
		var id_sample=$(this).data("id");

                $.get("formularioVerIdSamples.php", {parametro:id_sample}).done(function(data){ $("#main").html(data);
            });
      });  
//#################################################################################################
   	$(".btn-ver").off("click");
	$(".btn-ver").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formulario2.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
      });

//#################################################################################################
   	$(".btn-ver-report").off("click");
	$(".btn-ver-report").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formularioReport.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
      });

//#################################################################################################
   	$(".btn-verCC").off("click");
	$(".btn-verCC").on("click", function(e) {
		var idreq=$(this).data("idreq");

                $.get("formularioCC.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
      });

//#################################################################################################
   	$(".btn-ver-id_test").off("click");
	$(".btn-ver-id_test").on("click", function(e) {
		var id_sample=$(this).data("id_sample");
		var idreq = $("#idreq").val();
		//alert(idreq);
			$.get("modal_ver_specs.php", {id_sample:id_sample,idreq:idreq}).done(function(data){ $("#main").html(data);
            });
          	
      });    

//####################################################################################################
    $(".btn-ver-aproval").off("click");
	$(".btn-ver-aproval").on("click", function(e) {
		var idreq=$(this).data("idreq"); 
                $.get("formularioAprobador.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
	});

//####################################################################################################
    $(".btn-ver-aproval2").off("click");
	$(".btn-ver-aproval2").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formulario_Aprobador2.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
	});

//####################################################################################################
    $(".btn-ver-aproval3").off("click");
	$(".btn-ver-aproval3").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formulario_Aprobador3.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
	});


//#############################################################################################################################
	$(".btn-aproval-asig").off("click");
	$(".btn-aproval-asig").on("click", function(e) {
		var aprover2 = $("#aprover2").val();
		//var tester = $("#tester").val();
		var id_requi = $("#idreq").val();
		var start = $("#start").val();
		var finish = $("#finish").val();
		var labortime = $("#labortime").val();
		var auxOther = $("#auxOther").val();
		var id_sample = $("#id_sample").val();
		var auxUser = $("#auxUser").val();


if (auxUser == 0){		
	if (auxOther != 1){
		if(aprover2!=0){
			//if(tester!=0){
				if(start!=''){ 
					if(finish!=''){
						if(start <= finish){
							if(labortime != 0){
								if(labortime > 0){
				$.ajax({
					url: 'Controller/ProductoController.php?page=4',
					type: 'post',
					data: {'id_sample':id_sample, 'aprover2':aprover2, 'id_requi':id_requi, 'start':start, 'finish':finish, 'labortime':labortime},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});
							}else{
								alertify.error('The labor time has to be greater than 0');
							}
						}else{
							alertify.error('The labor time is empty');
						}
						}else{
						alertify.error('The start date must not be longer than the end date');
					}
					}else{
						alertify.error('Select finish date');
					}	
				}else{
					alertify.error('Select start date');
				}					
			//}else{
			//	alertify.error('You need to select a tester');
			//}
		}else{
			alertify.error('You need to select the next approver');
		}
	}else{
			alert('It is necessary to choose a validated test');
	}
}else{
	alertify.error('You need to select a tester');
}	

});


//####################################################################################################


	$(".btn-aproval-apro").off("click");
	$(".btn-aproval-apro").on("click", function(e) {
		var aprover3 = $("#aprover3").val();
		//var id_requi = 35;
		var id_requi = $("#idreq").val();

		if(aprover3!=0){
			
				$.ajax({
					url: 'Controller/ProductoController.php?page=5',
					type: 'post',
					data: {'aprover3':aprover3, 'id_requi':id_requi},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});					
		}else{
			alertify.error('You need to select the next approver');
		}
								
	});

//####################################################################################################

	$(".btn-aproval-aprofin").off("click");
	$(".btn-aproval-aprofin").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		
		
				$.ajax({
					url: 'Controller/ProductoController.php?page=6',
					type: 'post',
					data: {'id_requi':id_requi},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});											
	});

//####################################################################################################

	$(".btn-reject-asig").off("click");
	$(".btn-reject-asig").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		var comentreject_1 = $("#comentreject").val().trim();
		if (comentreject_1 != '') {
			if(confirm("Are you sure you want reject this?"))  
           { 
				$.ajax({
					url: 'Controller/ProductoController.php?page=7',
					type: 'post',
					data: {'id_requi':id_requi, 'comentreject_1':comentreject_1},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$("#modalReject .close").click();
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	
			}
		}else{
			alertify.error('insert comment');
		}										
	});

//####################################################################################################

	$(".btn-reject-apro").off("click");
	$(".btn-reject-apro").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		var comentreject_2 = $("#comentreject2").val().trim();
		if (comentreject_2 != '') {
			if(confirm("Are you sure you want reject this?"))  
           { 
				$.ajax({
					url: 'Controller/ProductoController.php?page=8',
					type: 'post',
					data: {'id_requi':id_requi,'comentreject_2':comentreject_2},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$("#modalReject2 .close").click();
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	
			}
		}else{
			alertify.error('insert comment');
		}										
	});

//####################################################################################################

	$(".btn-reject-aprofin").off("click");
	$(".btn-reject-aprofin").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		var comentreject_3 = $("#comentreject3").val().trim();
		if (comentreject_3 != '') {
		alert(comentreject_3);
			if(confirm("Are you sure you want reject this?"))  
           { 
				$.ajax({
					url: 'Controller/ProductoController.php?page=9',
					type: 'post',
					data: {'id_requi':id_requi, 'comentreject_3':comentreject_3},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$("#modalReject3 .close").click();
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	
			}
		}else{
			alertify.error('insert comment');
		}											
	});

//####################################################################################################
    $(".btn-ver-pendingTest").off("click");
	$(".btn-ver-pendingTest").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formularioPendingTest.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
	});

//####################################################################################################
    $(".btn-ver-TestFinished").off("click");
	$(".btn-ver-TestFinished").on("click", function(e) {
		var idreq=$(this).data("idreq");
                $.get("formularioTestFinished.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
            });
	});
//####################################################################################################
    $(".btn-update-test").off("click");
	$(".btn-update-test").on("click", function(e) {
		var idsample=$(this).data("idsample");
		var idcliente=$(this).data("idcliente");
		var idproducto=$(this).data("idproducto");
		var idreq = $("#idreq").val();


		$.get("updateTest.php", {idproducto:idproducto, idcliente:idcliente, idsample:idsample, idreq:idreq}).done(function(data){ $("#main").html(data);
		});
		            
	});

//####################################################################################################

	$(".btn-start-test").off("click");
	$(".btn-start-test").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		var nameUser = $("#nameUser").val();
		var DeliveryDateSamples = $("#DeliveryDateSamples").val();

			if (DeliveryDateSamples != '0000-00-00'){

				$.ajax({
					url: 'Controller/ProductoController.php?page=10',
					type: 'post',
					data: {'id_requi':id_requi, 'nameUser':nameUser},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");

							$(this).prop('disabled', false);

						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});

			}else{
				alert('It not parts have been delivered, you can don´t start');
			}	
													
	});




//####################################################################################################

	$(".btn_cancel").off("click");
	$(".btn_cancel").on("click", function(e) {
		var idreq=$(this).data("idreq");
		//alert(idreq);

		if(confirm("Are you sure you want cancel request?"))  
           { 
				$.ajax({
					url: 'Controller/ProductoController.php?page=12',
					type: 'post',
					data: {'idreq':idreq},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	
			}										
	});


//####################################################################################################
    $(".btn-return-form-asig").off("click");
	$(".btn-return-form-asig").on("click", function(e) {
		var idreq = $("#idreq").val();
              //alert(idreq);
              $.get("formularioAprobador.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             	});
	});
//####################################################################################################
    $(".btn-save-changes-asig").off("click");
	$(".btn-save-changes-asig").on("click", function(e) {
		var PrevTest = $("#PrevTest").val();
		var MainTest = $("#MainTest").val();
		var PostTest = $("#PostTest").val();
		var idsample = $("#idsample").val();
		var idreq = $("#idreq").val();

		if (MainTest != 0) {
			if (MainTest != 9999) {
				$.ajax({
					url: 'Controller/ProductoController.php?page=13',
					type: 'post',
					data: {'PrevTest':PrevTest, 'MainTest':MainTest, 'PostTest':PostTest , 'idsample':idsample},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							//$('#main').load("updateTest.php");
							$.get("formularioAprobador.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             					});
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});
			}else{
				alertify.error('You need select valid test');
			}
		}else{
			alertify.error('You need select valid test');
		}
	});

//####################################################################################################
	$(".btn-new-test").off("click");
	$(".btn-new-test").on("click", function(e) {

		$("#cuadro2").slideDown("slow");
		$("#cuadro1").slideUp("slow");

        var save = document.getElementById('save');
        var update = document.getElementById('update');
        save.style.display = 'inline';
        update.style.display = 'none';
		
	});

//####################################################################################################
	$(".btn-new-PartNumber").off("click");
	$(".btn-new-PartNumber").on("click", function(e) {

		$("#cuadro2").slideDown("slow");
		$("#cuadro1").slideUp("slow");

        var save = document.getElementById('savePartNumber');
        var update = document.getElementById('updatePartNumber');
        save.style.display = 'inline';
        update.style.display = 'none';
		
	});	

//####################################################################################################
	$(".btn-new-department").off("click");
	$(".btn-new-department").on("click", function(e) {

		$("#cuadro2").slideDown("slow");
		$("#cuadro1").slideUp("slow");
		$("#cuadro5").slideUp("slow");
		$("#cuadro6").slideUp("slow");

        var save = document.getElementById('save');
        var update = document.getElementById('update');
        save.style.display = 'inline';
        update.style.display = 'none';
		
	});
//####################################################################################################

	$(".btn-save-test").off("click");
	$(".btn-save-test").on("click", function(e) {

		var identificador = $("#identificador").val().trim();
		var testname = $("#testname").val().trim();
		var performance = $("#performance").val().trim();
		var specs = $("#specs").val().trim();
		var labortime = $("#labortime").val().trim();
		var id_producto = $("#idproducto").val();
		var id_provedor = $("#idprovedor").val();
		var formData = new FormData($(".formularioFileSpecs")[0]);
		var filetest = $("#specsfile").val();
		
		if(identificador!=''){
			if(testname!=''){
				if(performance!= 2){
						if(id_producto!=0){
							if(id_provedor!=0){
								if(filetest!=''){
				
										$.ajax({
											url: 'Controller/ProductoController.php?page=14',
											type: 'post',
											data: {'identificador':identificador, 'testname':testname, 'performance':performance, 'specs':specs, 'labortime':labortime, 'id_producto':id_producto, 'id_provedor':id_provedor},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#identificador").val('');
												$("#testname").val('');
												$("#performance").val('');
												$("#specs").val('');
												$("#labortime").val('');

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableTest.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});

										var formData = new FormData($(".formularioFileSpecs")[0]);
        								//hacemos la petición ajax  
        								$.ajax({
            								url: 'uploadSpecs.php',  
            								type: 'POST',
            								// Form data
            								//datos del formulario
            								data: formData,
            								//necesario para subir archivos via ajax
            								cache: false,
            								contentType: false,
           	 								processData: false,
            								//una vez finalizado correctamente
            								//si ha ocurrido un error
        								});
								}else{
									alertify.error('Attach Specs file');
								}
							}else{
								alertify.error('Choose an provedor');
							}
						}else{
							alertify.error('Choose an producto');
						}
						}else{
						alertify.error('Insert Performance');
					}
					}else{
						alertify.error('Insert test name');
					}		
			}else{
				alertify.error('Insert the identificador');
			}
	});

	//####################################################################################################

	$(".btn-save-Dep").off("click");
	$(".btn-save-Dep").on("click", function(e) {

		var depnumber = $("#depnumber").val().trim();
		var depname = $("#depname").val().trim();
		var location = $("#location").val().trim();

		
		if(depnumber!=''){
			if(depname!=''){
					$.ajax({
						url: 'Controller/ProductoController.php?page=30',
						type: 'post',
						data: {'depnumber':depnumber, 'depname':depname, 'location':location},
						dataType: 'json',
						success: function(data) {
							if(data.success==true){
								$("#depnumber").val('');
								$("#depname").val('');
								$("#location").val('');

								$("#cuadro1").slideDown("slow");
								$("#cuadro5").slideDown("slow");
								$("#cuadro6").slideDown("slow");
								$("#cuadro2").slideUp("slow");
								$("#cuadro3").slideUp("slow");
								$("#cuadro4").slideUp("slow");


								$('#main').load("DatatableCatalogs.php");

								alertify.success(data.msj);
							}else{
								alertify.error(data.msj);
							}
						},
						error: function(jqXHR, textStatus, error) {
							alertify.error(error);
						}
					});

					}else{
						alertify.error('Insert department name');
					}		
			}else{
				alertify.error('Insert department number');
			}
	});
//####################################################################################################



	$(".btn-update-datatable-test").off("click");
	$(".btn-update-datatable-test").on("click", function(e) {

		var idprueba = $("#idprueba").val().trim();
		var identificador = $("#identificador").val().trim();
		var testname = $("#testname").val().trim();
		var performance = $("#performance").val().trim();
		var specs = $("#specs").val().trim();
		var labortime = $("#labortime").val().trim();
		var id_producto = $("#idproducto").val();
		var id_provedor = $("#idprovedor").val();

		if(identificador!=''){
			if(testname!=''){
				if(performance!= ''){
						if(id_producto!=0){
							if(id_provedor!=0){
			
										$.ajax({
											url: 'Controller/ProductoController.php?page=15',
											type: 'post',
											data: {'idprueba':idprueba, 'identificador':identificador, 'testname':testname, 'performance':performance, 'specs':specs, 'labortime':labortime, 'id_producto':id_producto, 'id_provedor':id_provedor},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#identificador").val('');
												$("#testname").val('');
												$("#performance").val('');
												$("#specs").val('');
												$("#labortime").val('');

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableTest.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
			
							}else{
								alertify.error('Choose an customer');
							}
						}else{
							alertify.error('Choose an producto');
						}
						}else{
						alertify.error('Insert Performance');
					}
					}else{
						alertify.error('Insert test name');
					}		
			}else{
				alertify.error('Insert the identificador');
			}
	});


//###########################################################################################################################

//####################################################################################################


	$(".btn-delete-datatable-test").off("click");
	$(".btn-delete-datatable-test").on("click", function(e) {
		var idprueba = $("#idpruebaEliminar").val().trim();
		
		$.ajax({
					url: 'Controller/ProductoController.php?page=16',
					type: 'post',
					data: {'idprueba':idprueba},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("DatatableTest.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	

										
	});
//#####################################################################################################################

$(".btn-delete-datatable-test").off("click");
$(".btn-delete-datatable-test").on("click", function(e) {
		var idprueba = $("#idpruebaEliminar").val().trim();
		
		$.ajax({
					url: 'Controller/ProductoController.php?page=16',
					type: 'post',
					data: {'idprueba':idprueba},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("DatatableTest.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	

										
	});
//#####################################################################################################################
$(".btn-save-pasword").off("click");
$(".btn-save-pasword").on("click", function(e) {
		var password = $("#Password").val().trim();
		var NewPassWord = $("#NewPassWord").val().trim();
		var ConfirmPassword = $("#ConfirmPassword").val().trim();
		var iduser = $("#iduser").val().trim();
		var passwordActual = $("#passact").val().trim();
		
		
		if (password == '') {
			document.getElementById('msgpass').style.display = 'block';
			value = 0;
		}else{
			value = 1;
		}
		if (NewPassWord == '') {
			document.getElementById('msgnewpass').style.display = 'block';
			value2 = 0;
		}else{
			value2 = 1;
		}
		if (ConfirmPassword == '') {	
			document.getElementById('msgconfirmpass').style.display = 'block';
			value3 = 0;
		}else{
			value3 = 1;
		}

		if (value == 1 && value2 == 1 && value3 == 1) {
				$.ajax({
					url: 'Controller/ProductoController.php?page=17',
					type: 'post',
					data: {'iduser':iduser, 'password':password, 'NewPassWord':NewPassWord, 'ConfirmPassword':ConfirmPassword},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							$("#Password").val('');
							$("#NewPassWord").val('');
							$("#ConfirmPassword").val('');
							$('#main').load("myaccount.php");

							alertify.success(data.msj);
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});
		}else{
			alertify.error('Complete all the fields');
		}
				
	});



//####################################################################################################
    $(".btn-return-form2").off("click");
	$(".btn-return-form2").on("click", function(e) {
		var idreq = $("#idreq").val();
              //alert(idreq);
              $.get("formulario2.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             	});
	});
//#####################################################################################################################
   	$(".btn-ver-specs2").off("click");
	$(".btn-ver-specs2").on("click", function(e) {
		var id_sample=$(this).data("id_sample");
		var idreq = $("#idreq").val();
			$.get("verSpecsAprobador2.php", {id_sample:id_sample,idreq:idreq}).done(function(data){ $("#main").html(data);
            });
          	
      });

//####################################################################################################
    $(".btn-return-form-aprob").off("click");
	$(".btn-return-form-aprob").on("click", function(e) {
		var idreq = $("#idreq").val();
              //alert(idreq);
              $.get("formularioAprobador.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             	});
	});
//####################################################################################################
    $(".btn-return-form-aprob2").off("click");
	$(".btn-return-form-aprob2").on("click", function(e) {
		var idreq = $("#idreq").val();
              //alert(idreq);
              $.get("formulario_Aprobador2.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             	});
	});

//####################################################################################################
    $(".btn-return-form-aprob3").off("click");
	$(".btn-return-form-aprob3").on("click", function(e) {
		var idreq = $("#idreq").val();
              //alert(idreq);
              $.get("formulario_Aprobador3.php", {parametro:idreq}).done(function(data){ $("#main").html(data);
             	});
	});
//####################################################################################################
	$(".btn-print-request").off("click");
	$(".btn-print-request").on("click", function(e) {
		var idreq = $("#idreq").val();
		//alert(idreq);
		window.open('requestPDF.php?id='+idreq, '_blank');
	});

//####################################################################################################

//####################################################################################################
	$(".btn-update-datatable-partnumber").off("click");
	$(".btn-update-datatable-partnumber").on("click", function(e) {

		var idpieza = $("#idpieza").val().trim();
		var partnumber = $("#partnumber").val().trim();
		var model = $("#model").val().trim();
		var idproductoPartNumber = $("#idproductoPartNumber").val().trim();
		var idprovedorPartNumber = $("#idprovedorPartNumber").val().trim();
		
		if(partnumber!=''){
				if(model!= ''){
						if(idproductoPartNumber!=0){
							if(idprovedorPartNumber!=0){
			
										$.ajax({
											url: 'Controller/ProductoController.php?page=18',
											type: 'post',
											data: {'idpieza':idpieza, 'partnumber':partnumber, 'model':model, 'idprovedorPartNumber':idprovedorPartNumber, 'idproductoPartNumber':idproductoPartNumber},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){

												$("#partnumber").val('');
												$("#model").val('');

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatablePartNumber.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
			
							}else{
								alertify.error('Choose an customer');
							}
						}else{
							alertify.error('Choose an producto');
						}
						}else{
						alertify.error('Insert model');
					}
					}else{
						alertify.error('Insert part number');
					}		


																									
								
	});
//####################################################################################################

	$(".btn-save-partnumber").off("click");
	$(".btn-save-partnumber").on("click", function(e) {

		var idpieza = $("#idpieza").val().trim();
		var partnumber = $("#partnumber").val().trim();
		var model = $("#model").val().trim();
		var idproductoPartNumber = $("#idproductoPartNumber").val();
		var idprovedorPartNumber = $("#idprovedorPartNumber").val();

			if(partnumber!=''){
				if(model!= ''){
					if(idproductoPartNumber!=0){
						if(idprovedorPartNumber!=0){
			
										$.ajax({
											url: 'Controller/ProductoController.php?page=19',
											type: 'post',
											data: {'idpieza':idpieza, 'partnumber':partnumber, 'model':model, 'idprovedorPartNumber':idprovedorPartNumber, 'idproductoPartNumber':idproductoPartNumber},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){

												$("#partnumber").val('');
												$("#model").val('');

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatablePartNumber.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
			
							}else{
								alertify.error('Choose an customer');
							}
						}else{
							alertify.error('Choose an producto');
						}
						}else{
						alertify.error('Insert model');
					}
					}else{
						alertify.error('Insert part number');
					}		
			
	});
//#####################################################################################################################

$(".btn-delete-datatable-partnumber").off("click");
$(".btn-delete-datatable-partnumber").on("click", function(e) {
		var idpartnumber = $("#idPartNumberEliminar").val().trim();
		
		$.ajax({
					url: 'Controller/ProductoController.php?page=20',
					type: 'post',
					data: {'idpartnumber':idpartnumber},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("DatatablePartNumber.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	

										
	});
//####################################################################################################
	$(".btn-update-datatable-equipment").off("click");
	$(".btn-update-datatable-equipment").on("click", function(e) {

		var id_equipo = $("#id_equipo").val().trim();
		var EquipoID = $("#EquipoID").val().trim();
		var NameEquipo = $("#NameEquipo").val().trim();
		var cantidad = $("#cantidad").val().trim();
		var marca = $("#marca").val().trim();
		var serialnumber = $("#serialnumber").val().trim();
		var Location = $("#Location").val().trim();
		var datecalibration = $("#datecalibration").val().trim();
		
		if(NameEquipo!=''){
			if(cantidad!=''){
				if(cantidad > 0){
					if(marca!= ''){
						if(Location!=''){
			
										$.ajax({
											url: 'Controller/ProductoController.php?page=21',
											type: 'post',
											data: {'cantidad':cantidad, 'id_equipo':id_equipo, 'EquipoID':EquipoID, 'NameEquipo':NameEquipo, 'marca':marca, 'serialnumber':serialnumber, 'Location':Location, 'datecalibration':datecalibration},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){


												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableEquipment.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
			
							
									}else{
										alertify.error('Insert the Location of the equipment');
									}
								}else{
									alertify.error('Insert the brand of the equipment');
								}
							}else{
								alertify.error('The quantity has to be greater than 0');
							}
						}else{
							alertify.error('Insert the quantity of pieces');
						}
					}else{
						alertify.error('Insert the name equipment');
					}		
							
	});

//####################################################################################################
	$(".btn-save-equipment").off("click");
	$(".btn-save-equipment").on("click", function(e) {

		var id_equipo = $("#id_equipo").val().trim();
		var EquipoID = $("#EquipoID").val().trim();
		var NameEquipo = $("#NameEquipo").val().trim();
		var cantidad = $("#cantidad").val().trim();
		var marca = $("#marca").val().trim();
		var serialnumber = $("#serialnumber").val().trim();
		var Location = $("#Location").val().trim();
		var datecalibration = $("#datecalibration").val().trim();
		
		if(NameEquipo!=''){
			if(cantidad!=''){
				if(cantidad > 0){
					if(marca!= ''){
						if(Location!=''){
			
										$.ajax({
											url: 'Controller/ProductoController.php?page=22',
											type: 'post',
											data: {'cantidad':cantidad, 'id_equipo':id_equipo, 'EquipoID':EquipoID, 'NameEquipo':NameEquipo, 'marca':marca, 'serialnumber':serialnumber, 'Location':Location, 'datecalibration':datecalibration},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){

												$("#datecalibration").val('');
												$("#EquipoID").val('');
												$("#NameEquipo").val('');
												$("#marca").val('');
												$("#serialnumber").val('');
												$("#Location").val('');

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableEquipment.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
			
							
									}else{
										alertify.error('Insert the Location of the equipment');
									}
								}else{
									alertify.error('Insert the brand of the equipment');
								}
							}else{
								alertify.error('The quantity has to be greater than 0');
							}
						}else{
							alertify.error('Insert the quantity of pieces');
						}
					}else{
						alertify.error('Insert the name equipment');
					}							
	});

//#####################################################################################################################

$(".btn-delete-datatable-equipment").off("click");
$(".btn-delete-datatable-equipment").on("click", function(e) {
		var idequipment = $("#idequipmentEliminar").val().trim();
		
		$.ajax({
					url: 'Controller/ProductoController.php?page=23',
					type: 'post',
					data: {'idequipment':idequipment},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("DatatableEquipment.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});										
		});

//#####################################Save CC#############################################################

	$(".btn-save-CC").off("click");
	$(".btn-save-CC").on("click", function(e) {
		var usuario = $("#id_user").val().trim();
		var section = $("#section").val().trim();
		var depto = $("#depto").val().trim();
		var ext_tel = $("#ext_tel").val().trim();
		var issuedate = $("#issuedate").val().trim();
		var divi = $("#divi").val().trim();
		var producto = $("#producto").val().trim();
		var costumer = $("#costumer").val().trim();
		var coment = $("#coment").val().trim();
		var reason = $("#reason").val().trim();
		var startdate = $("#startdate").val().trim();
		var finishdate = $("#finishdate").val().trim();

		if(usuario!=''){
			if(section!=''){
				if(depto!=''){
					if(ext_tel!=''){
						if(issuedate!=''){
							if(divi!=0){
								if(producto!=0){
									if(costumer!=0){
										if(reason!=0){
											if(startdate!=''){
												if(finishdate!=''){
									
													$.ajax({
														url: 'Controller/ProductoController.php?page=25',
														type: 'post',
														data: {'startdate':startdate, 'finishdate':finishdate, 'usuario':usuario, 'issuedate':issuedate, 'reason':reason, 'coment':coment, 'producto':producto},
														dataType: 'json',
														success: function(data) {
														if(data.success==true){
															$("#coment").val('');
															$('#main').load("carrucel.php");
															alertify.success(data.msj);
														}else{
															alertify.error(data.msj);
														}
														},
														error: function(jqXHR, textStatus, error) {
														alertify.error(error);
														}
													});

												}else{
													alertify.error('Select a finishdate');
												}	
											}else{
												alertify.error('Select startdate');
											}																		
										}else{
											alertify.error('Select a reason');
										}	
									}else{
										alertify.error('Select costumer');
									}
								}else{
									alertify.error('Select product');
								}
							}else{
								alertify.error('Select division');
							}
						}else{
							alertify.error('The issue date is empty');
						}
					}else{
						alertify.error('The extension is empty');
					}
				}else{
					alertify.error('The department is empty');
				}
			}else{
				alertify.error('The section is empty');
			}
		}else{
			alertify.error('The name is empty');
		}
	});

//################################################Boton agregar CC###########################################

$(".btn-agregar-CC").off("click");
$(".btn-agregar-CC").on("click", function(e) {
		var partnumber = $("#txt_partnumber").val().trim();
		var id_assy = $("#cbo_assy").val().trim();
		var total = $("#txt_totalsamples").val().trim();
		var datecode = $("#txt_datecode").val().trim();
		var line = $("#cbo_line").val().trim();
		var shift = $("#cbo_shift").val().trim();
		var test1 = $("#cbo_test1").val().trim();
		var test2 = $("#cbo_test2").val().trim();
		var test3 = $("#cbo_test3").val().trim();
		var divi = $("#divi").val().trim();
		var producto = $("#producto").val().trim();
		var costumer = $("#costumer").val().trim();

		if(id_assy!=0){
			if(partnumber!=''){
				//if(model!=''){
					if(total!= ''){
						if(total > 0){
						if(datecode!=''){
							if(line!=''){
								if(shift!=0){
									if(test2!=0){
										if(divi!=0){
											if(producto!=0){
												if(costumer!=0){


										$.ajax({
											url: 'Controller/ProductoController.php?page=24',
											type: 'post',
											data: {'id_assy':id_assy, 'partnumber':partnumber, 'total':total, 'datecode':datecode, 'line':line, 'shift':shift, 'test1':test1, 'test2':test2, 'test3':test3},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#txt_partnumber").val('');
												$("#txt_totalsamples").val('');
												$("#txt_datecode").val('');
						

												document.getElementById("divi").disabled=true;
												document.getElementById("producto").disabled=true;
												document.getElementById("costumer").disabled=true;

												alertify.success(data.msj);
												$(".detalle-producto").load('detalleCC.php');
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});


																										
										}else{
										alertify.error('Select costumer');
									}	
										}else{
										alertify.error('Select product');
									}	
										}else{
										alertify.error('Select division');
									}					
									}else{
										alertify.error('Select the Main Test');
									}
								}else{
									alertify.error('Select the shift');
								}
							}else{
								alertify.error('Insert the line');
							}
						}else{
							alertify.error('Insert Date Code');
						}
						}else{
						alertify.error('You must insert a positive number greater than 0');
					}
					}else{
						alertify.error('Insert Total Samples');
					}
				//}else{
				//alertify.error('Insert the model');
			//}				
			}else{
				alertify.error('Insert the Part Number');
			}
		}else{
			alertify.error('Select an Assy Number');
		}
	});


//###################################Boton Eliminar#############################

$(".eliminar-productoCC").off("click");
$(".eliminar-productoCC").on("click", function(e) {
		var id = $(this).attr("id");
		//svar id_sample = $("#id_sam").val();
		//alert(id_sample);
		$.ajax({
			url: 'Controller/ProductoController.php?page=2',
			type: 'post',
			data: {'id':id},
			dataType: 'json'
		}).done(function(data){
			if(data.success==true){
				alertify.success(data.msj);
				$(".detalle-producto").load('detalleCC.php');

			if(id == 1 ){		
				document.getElementById("divi").disabled=false;
				document.getElementById("producto").disabled=false;
				document.getElementById("costumer").disabled=false;
			}

			}else{
				alertify.error(data.msj);
			}
		})
	});

//####################################################################################################

	$(".btn-pause-test").off("click");
	$(".btn-pause-test").on("click", function(e) {
		var id_requi = $("#idreq").val();
		var commentpause = $("#commentpause").val().trim();
		var nameUser = $("#nameUser").val();
		if (commentpause != '') {
				$.ajax({
					url: 'Controller/ProductoController.php?page=26',
					type: 'post',
					data: {'id_requi':id_requi,'commentpause':commentpause, 'nameUser':nameUser },
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#modalpause').modal('hide');
							if ($('.modal-backdrop').is(':visible')) {
  								$('body').removeClass('modal-open'); 
  								$('.modal-backdrop').remove(); 
							};
							$('#main').load("carrucel.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	
		}else{
			alertify.error('Insert comment');
		}										
	});
//#########################################################################################
//####################################################################################################

	$(".btn-save-user").off("click");
	$(".btn-save-user").on("click", function(e) {

		var name = $("#name").val().trim();
		var ap = $("#ap").val().trim();
		var am = $("#am").val().trim();
		var nomina = $("#Nomina").val().trim();
		var password = $("#password").val().trim();
		var mail = $("#mail").val().trim();
		var ext = $("#ext").val().trim();
					
		var idtipo = $("#Type").val();
		var idDep = $("#Department").val();
		
		if(name!=''){
			if(ap!=''){
				if(am!= ''){
					if(nomina!=''){
						if(password!=''){
							if(mail!=''){
								if(ext!=''){
									if(idtipo!=''){
										if(idDep!=''){
				
										$.ajax({
											url: 'Controller/ProductoController.php?page=27',
											type: 'post',
											data: {'name':name, 'ap':ap, 'am':am, 'nomina':nomina, 'password':password, 'mail':mail, 'ext':ext, 'idtipo':idtipo, 'idDep':idDep},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#name").val('');
												$("#ap").val('');
												$("#am").val('');
												$("#nomina").val('');
												$("#password").val('');
												$("#mail").val('');
												$("#ext").val('');
												$("#Type").val(0);
												$("#Department").val(0);

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableUser.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
											}else{
												alertify.error('Select a department');
											}
										}else{
											alertify.error('Select type of user');
										}
									}else{
										alertify.error('Enter the ext-tel');
									}
										
								}else{
									alertify.error('Enter the email');
								}
							}else{
								alertify.error('Enter the password');
							}
						}else{
							alertify.error('Enter nomina');
						}
						}else{
						alertify.error('Enter the last name');
					}
					}else{
						alertify.error('Enter the last name');
					}		
			}else{
				alertify.error('Enter the name');
			}
	});
//#################################################################################
//####################################################################################################

	$(".btn-update-datatable-user").off("click");
	$(".btn-update-datatable-user").on("click", function(e) {

		var name = $("#name").val().trim();
		var ap = $("#ap").val().trim();
		var am = $("#am").val().trim();
		var nomina = $("#Nomina").val().trim();
		var password = $("#password").val().trim();
		var mail = $("#mail").val().trim();
		var ext = $("#ext").val().trim();
		var idUser = $("#idusuario").val().trim();
					
		var idtipo = $("#Type").val();
		var idDep = $("#Department").val();
		
		if(name!=''){
			if(ap!=''){
				if(am!= ''){
					if(nomina!=''){
						if(password!=''){
							if(mail!=''){
								if(ext!=''){
									if(idtipo!=''){
										if(idDep!=''){
				
										$.ajax({
											url: 'Controller/ProductoController.php?page=28',
											type: 'post',
											data: {'idUser':idUser, 'name':name, 'ap':ap, 'am':am, 'nomina':nomina, 'password':password, 'mail':mail, 'ext':ext, 'idtipo':idtipo, 'idDep':idDep},
											dataType: 'json',
											success: function(data) {
												if(data.success==true){
												$("#name").val('');
												$("#ap").val('');
												$("#am").val('');
												$("#nomina").val('');
												$("#password").val('');
												$("#mail").val('');
												$("#ext").val('');
												$("#Type").val(0);
												$("#Department").val(0);

												$("#cuadro1").slideDown("slow");
												$("#cuadro2").slideUp("slow");

												$('#main').load("DatatableUser.php");

												alertify.success(data.msj);
												}else{
													alertify.error(data.msj);
												}
											},
											error: function(jqXHR, textStatus, error) {
												alertify.error(error);
											}
										});
											}else{
												alertify.error('Select a department');
											}
										}else{
											alertify.error('Select type of user');
										}
									}else{
										alertify.error('Enter the ext-tel');
									}
										
								}else{
									alertify.error('Enter the email');
								}
							}else{
								alertify.error('Enter the password');
							}
						}else{
							alertify.error('Enter nomina');
						}
						}else{
						alertify.error('Enter the last name');
					}
					}else{
						alertify.error('Enter the last name');
					}		
			}else{
				alertify.error('Enter the name');
			}
	});
//####################################################################################################
//#####################################################################################################################

$(".btn-delete-datatable-user").off("click");
$(".btn-delete-datatable-user").on("click", function(e) {
		var iduser = $("#iduserEliminar").val().trim();
		$.ajax({
					url: 'Controller/ProductoController.php?page=29',
					type: 'post',
					data: {'iduser':iduser},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("DatatableUser.php");
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});	

										
	});

//####################################################################################################
    $(".btn-accept-samples").off("click");
	$(".btn-accept-samples").on("click", function(e) {
		var idreq=$(this).data("idreq");

		if(idreq!=''){
			$.ajax({
				url: 'Controller/ProductoController.php?page=31',
				type: 'post',
				data: {'idreq':idreq},
				dataType: 'json',
				success: function(data) {
					if(data.success==true){
						alertify.success(data.msj);
						$('#main').load("panelPendingTest.php");
					}else{
						alertify.error(data.msj);						}
						},
				error: function(jqXHR, textStatus, error) {
					alertify.error(error);
				}
			});
		}else{
			alertify.error('Error when saving the date, the request id does´not exist');
		}
          
	});
//#####################################################################################################################
//#####################################################################################################################
    $(".btn-Subir-File").off("click");
	$(".btn-Subir-File").on("click", function(e) {
		var idreq = $("#idreq").val().trim();
		var archivoReport = $("#archivoReport").val().trim();
		//var fileReport = $("#archivoReport").val();
		var nameUser = $("#nameUser").val();
		var samplesID = $("#samplesID").val();
		var aux = $("#aux").val().trim();

		if (archivoReport!='') {
			var file = $("#archivoReport")[0].files[0];
			var fileName = file.name;
			var fileSize = file.size;

		}else{
			var fileName = '';
			var fileSize = '';

		}

		if(idreq!=''){
			if(archivoReport!=''){

				$.ajax({
					url: 'Controller/ProductoController.php?page=32',
					type: 'post',
					data: {'idreq':idreq, 'fileName':fileName, 'fileSize':fileSize, 'nameUser':nameUser, 'aux':aux, 'samplesID':samplesID},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#modalAdjuntarReport').modal('hide');
							if ($('.modal-backdrop').is(':visible')) {
  								$('body').removeClass('modal-open'); 
  								$('.modal-backdrop').remove(); 
							};
							$('#main').load("panelPendingTest.php");
						}else{
							alertify.error(data.msj);						}
						},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});

				var formData = new FormData($(".formularioReport")[0]);
        		//hacemos la petición ajax  
        		$.ajax({
            		url: 'uploadReport.php',  
            		type: 'POST',
            		// Form data
            		//datos del formulario
            		data: formData,
            		//necesario para subir archivos via ajax
            		cache: false,
            		contentType: false,
           	 		processData: false,
            		//una vez finalizado correctamente
            		//si ha ocurrido un error
        		});


			}else{
				alertify.error('Attach file');
			}
		}else{
			alertify.error('Error when saving the date, the request id does´not exist');
		}
          
	});

//#####################################################################################################################
//#####################################################################################################################

	$(".btn-fin-test").off("click");
	$(".btn-fin-test").on("click", function(e) {
		//var id_requi = 35;
		var id_requi = $("#idreq").val();
		var nameUser = $("#nameUser").val();
		var DeliveryDateSamples = $("#DeliveryDateSamples").val();
		var suma = $("#suma").val().trim();
		var Trow = $("#Tfile").val().trim();

		if (suma == Trow) {
		
				$.ajax({
					url: 'Controller/ProductoController.php?page=11',
					type: 'post',
					data: {'id_requi':id_requi,'nameUser':nameUser},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");

							$(this).prop('disabled', false);

						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					} 
				});
		}else{
			alert("You need to attach all reports");
		}	
													
	});



	//####################################################################################################
    $(".btn-add-tester").off("click");
	$(".btn-add-tester").on("click", function(e) {
		var idsample=$(this).data("idsample");
		var idcliente=$(this).data("idcliente");
		var idproducto=$(this).data("idproducto");
		var ide=$(this).data("ide");
		var idreq = $("#idreq").val();

		$.get("addtester.php", {idproducto:idproducto, idcliente:idcliente, idsample:idsample, idreq:idreq, ide:ide}).done(function(data){ $("#main").html(data);
		});
		            
	});

	//####################################################################################################

	$(".btn-save-changes-tester").off("click");
	$(".btn-save-changes-tester").on("click", function(e) {
		var id_tester = $("#tester").val();
		var idsample = $("#idsample").val();

		if (id_tester != 0) {
		
				$.ajax({
					url: 'Controller/ProductoController.php?page=33',
					type: 'post',
					data: {'id_tester':id_tester,'idsample':idsample},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#main').load("carrucel.php");
							//$(this).prop('disabled', false);
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});

		}else{
			alert("You need select a tester");
		}
													
	});

	//####################################################################################################

	$(".btn-Delete-Report").off("click");
	$(".btn-Delete-Report").on("click", function(e) {

		var urlReport = $("#urlReport").val();
		var id_report = $("#id_report").val();
		
		$.ajax({
					url: 'Controller/ProductoController.php?page=34',
					type: 'post',
					data: {'urlReport':urlReport,'id_report':id_report},
					dataType: 'json',
					success: function(data) {
						if(data.success==true){
							alertify.success(data.msj);
							$('#eliminarFile').modal('hide');
							if ($('.modal-backdrop').is(':visible')) {
  								$('body').removeClass('modal-open'); 
  								$('.modal-backdrop').remove(); 
							};
							$('#main').load("panelPendingTest.php");
							
						}else{
							alertify.error(data.msj);
						}
					},
					error: function(jqXHR, textStatus, error) {
						alertify.error(error);
					}
				});
										
	});




});


