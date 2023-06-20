$.widget('nt.dnafilter', {
    options:{
        nomina: {
            show: true,
            valid: false,
        },
        process:{
            show: false,
            valid: false,
        },
        fecha: {
            show: true,
            valid: false,
            startdate: false,
        },
        turno:{
            valid: false,
            show: true,
        },
        modelo:{
            valid: true,
            show: true,
        },
        button:{
            show: true,
        },
        flgtraining : false
    },
    _create: function (e) { 
        var _self = this;
        var $context = $(this)[0].element;
        var $plants = $context.find('select#plantaResult1');
        // cargamos las plantas
        $.post( '../Controlador/ControllerCargarSelects.php?page=2' ).done( function(respuesta){
            $plants.html( respuesta );
        });
        var $division  = $context.find('select#selectDiv');
        var $departamento  = $context.find('select#selectDep');
        var $area  = $context.find('select#selectArea');
        var $linea  = $context.find('select#lineaResult');
        var $modelo  = $context.find('select#modeloResult');
        var $nomina  = $context.find('input#nominaEmpleado');
        var $fecha  = $context.find('input#fecha');
        var $proceso  = $context.find('select#procesofilter');
        // cargamos la division
        $plants.on('change', function(){
            var dato = $(this).val();
            if(dato!=0){
                $.ajax({
                    url:"../Controlador/contrlDnaKouteipro.php?page=2",
                    method:"POST",
                    data:{
                        dato:dato
                    },
                    success: function(data){
                        $division.html(data);
                    }
                });
                //$division.select2();
            }else{
                $division.html("<option value= '0'>Seleccione una planta</option>");
                $departamento.html("<option value= '0'>Seleccione una división antes</option>");
                $area.html("<option value= '0'>Seleccione una departamento antes</option>");
                $linea.html("<option value= '0'>Seleccione una área antes</option>");
                $modelo.html("<option value = '0' >Seleccione una modelo </option>");
            }
        });
        // cargadmos los departamentos
        $division.on('change', function(){
            var dato = $(this).val();
            if(dato!=0){
                $.ajax({
                    url:"../Controlador/contrlDnaKouteipro.php?page=3",
                    method:"POST",
                    data:{
                        dato:dato
                    },
                    success: function(data){
                        $departamento.html(data);
                    }
                });
                //$departamento.select2();
            }else{
                $departamento.html("<option value= '0'>Seleccione una división </option>");
                $area.html("<option value = '0'>Seleccione una división antes </option>");
                $linea.html("<option value = '0' >Seleccione una área antes </option>");
                $modelo.html("<option value = '0' >Seleccione una modelo </option>");
            }  
        });
        var flgentrenar = _self.options.flgtraining;
        // generamos la area
        $departamento.on('change', function(){
            var dato = $(this).val();
            if(dato!=0){
                $.ajax({
                    url:"../Controlador/contrlDnaKouteipro.php?page=4",
                    method:"POST",
                    data:{
                        dato:dato
                    },
                    success: function(data){
                        $area.html(data);
                        if(true === flgentrenar){
                            $("#newArea").html(data);
                        }
                    }
                });
                //$area.select2();
            }else{
                $area.html("<option value = '0'>Seleccione una división antes </option>");
                $linea.html("<option value = '0' >Seleccione una área antes </option>");
                $modelo.html("<option value = '0' >Seleccione una modelo </option>");
            }  
        });

        // Generamos la Línea
        $area.on('change', function(){
            var dato = $(this).val();
            if(dato!=0){
                $.ajax({
                    url:"../Controlador/contrlDnaKouteipro.php?page=5",
                    method:"POST",
                    data:{
                        dato:dato
                    },
                    success: function(data){
                        $linea.html(data);
                        if(true === flgentrenar){
                            $("#newLinea").html(data);
                        }
                    }
                });
                //$linea.select2();
            }else{
                $linea.html("<option value = '0' >Seleccione una área antes </option>");
                $modelo.html("<option value = '0' >Seleccione una modelo </option>");
            }  
        });

        // Generamos el modelo
        $linea.on('change', function(){
            var dato = $(this).val();
            if(dato!=0){
                $.ajax({
                    url:"../Controlador/contrlDnaKouteipro.php?page=17",
                    method:"POST",
                    data:{
                        id_linea:dato
                    },
                    success: function(data){
                        $modelo.html(data);
                    }
                });
                //$proceso.select2();
            }else{
                $modelo.html("<option value = '0' >Seleccione un modelo </option>");
            }  
        });

        $modelo.on('change', function(){
            var dato = $(this).val();
            if(dato != ""){
                $.ajax({
                    url:"../Controlador/Monitoreo.php?page=4",
                    data:{linea:$linea.val(), modelo:dato},
                    type:"POST",
                    success:function(response){
                      $("#procesofilter").html(response);
                        if(true === flgentrenar){
                            $("#newprocesos").html(response);
                        }
                    }
                });
            }else{
                $("#procesofilter").html("<option value = '' >Seleccione un proceso </option>");
                $("#newprocesos").html("<option value = '' >Seleccione un proceso </option>");
            }
        });

        // cargamos los turnos
        var $turno  = $context.find('select#turno');
        $.ajax({
            url:"../Controlador/asignacionLinea.php?page=9",
            type:"POST",
            success:function(response){
              $turno.html(response);
                if(true === flgentrenar){
                    $("#newTurno").html(response);
                    $("#Turno").html(response);
                }
            }
        });

        $button = $context.find('button#btn-generate');
        $button.click($.proxy(function(){
            //validador;
            var values = {};
            values['Planta'] = $plants.val();
            values['Division'] = $division.val();
            values['Departamento'] = $departamento.val(); 
            values['Area'] = $area.val();
            values['Lineas'] = $linea.val();
            // validacion del turno
            if(_self.options.turno.valid == true){
                values['Turno'] = $turno.val();
            }
            // validacion del proceso
            if(_self.options.process.valid == true){
                values['Proceso'] = $proceso.val();
            }
            // validacion del proceso
            if(_self.options.nomina.valid == true){
                values['Nomina'] = $nomina.val();
            }

            if(_self.options.modelo.valid == true){
                values['Modelo'] = $modelo.val();
            }

            data = this.validateSearching.call($(this),values);
            if(data != false){
                values['Turno'] = $turno.val();
                values['Modelo'] = $modelo.val();
                values['Nomina'] = $nomina.val();
                values['Fecha'] = $fecha.val();
                values['Proceso'] = $proceso.val();
                this.options.search.call($(this),values);
            }
        }, _self));
        if(_self.options.fecha.startdate == true){
            $fecha.datepicker({
                format:'mm/dd/yyyy',
            }).datepicker("setDate",'now');
        }else{
            $fecha.datepicker({
                format:'mm/dd/yyyy',
            });
        }
        // hide process
        if(_self.options.process.show !== true){
            $proceso.closest('div').hide();
        }
        // hide nomina
        if(_self.options.nomina.show !== true){
            $nomina.closest('div').hide();
        }
        // hide turno
        if(_self.options.turno.show !== true){
            $turno.closest('div').hide();
        }
        //hide fecha
        if(_self.options.fecha.show !== true){
            $fecha.closest('div.elements').hide();
        }
        //hide fecha
        if(_self.options.modelo.show !== true){
            $modelo.closest('div').hide();
        }

        if(_self.options.button.show !== true){
            $("#btn-generate").hide();
        }
    },
    _destroy:function(){ 
        // destory is here
    },
    validateSearching: function(values){
        var flgvalid = true;
        $.each(values, function(key, value){
            if(+value == 0 && key != 'Modelo'){
                swal("","Debe completar el campo "+key,"error");
                flgvalid = false;
                return false;
            }else if(value == ""){
                swal("","Debe completar el campo "+key,"error");
                flgvalid = false;
                return false;
            }
        });
        return flgvalid;
    }
});

;(function($) {
    $.fn.fixMe = function() {
       return this.each(function() {
          var $this = $(this),
             $t_fixed;
          function init() {
             $this.wrap('<div class="kutei-container" />');
             $t_fixed = $this.clone();
             $t_fixed.find("tbody>tr:not(.info)").remove().end().addClass("fixed").insertBefore($this);
             resizeFixed();
          }
          function resizeFixed() {
             $t_fixed.find("thead>tr").each(function(index) {
                $(this).css({"width": $this.find("thead>tr").eq(index).outerWidth()+"px", "display": "table"});
                var $tr = $(this).find('td');
                if($tr.length> 0){
                    $tr.each(function(i){
                        $td = $this.find("thead>tr").find('td:eq('+i+')');                    
                        $(this).css("width",$td.outerWidth()+"px");
                    });
                }else{
                    var $th = $(this).find('th');
                    $th.each(function(i){
                        $td = $this.find("thead>tr").find('th:eq('+i+')');
                        $(this).css("width",$td.outerWidth()+"px");
                    });
                }
            });
            $t_fixed.find("tbody .info").each(function(index) {
                $(this).css({"width": $this.find("tbody tr.info").eq(index).outerWidth()+"px", "display": "table"});
                var $tr = $(this).find('td');
                if($tr.length> 0){
                    $tr.each(function(i){
                        $td = $this.find("tbody tr.info").find('td:eq('+i+')');                    
                        $(this).css("width",$td.outerWidth()+"px");
                    });
                }else{
                    var $th = $(this).find('th');
                    $th.each(function(i){
                        $td = $this.find("tbody tr.info").find('th:eq('+i+')');
                        $(this).css("width",$td.outerWidth()+"px");
                    });
                }
            });
          }
          function scrollFixed() {
             var offset = $(this).scrollTop(),
             tableOffsetTop = $this.offset().top,
             tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
             if(offset < tableOffsetTop || offset > tableOffsetBottom)
                $t_fixed.hide();
             else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                $t_fixed.show();
          }
          $(window).resize(resizeFixed);
          $(window).scroll(scrollFixed);
          $(".table-responsive").scroll(function(){
            var offset = $(this).offset();	
            $(".fixed").offset({ left: offset['left']-this.scrollLeft });
            })
          init();
       });
    };
 })(jQuery);