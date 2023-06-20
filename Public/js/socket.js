$(document).ready(function(){
    addNotificationEvent();
});
var idsocket = +$("#idsocket").val();
var socket = io('http://localhost',{
    query:'loggeduser='+idsocket, 
    path: "/node/dna/socket.io", 
    resource: '/node/dna/socket.io',
    transports : [ 'xhr-polling','websocket', 'polling']
});
//var socket = io('http://localhost:3000',{query:'loggeduser='+idsocket});
socket.on('dna:notification', function(data){
    getNotifications(data,1);
});
var intent = 0;
socket.io.on("error", (error) => {
    if(intent == 0){
        console.log("Could not connect with the socket");
    }else{
        console.log("Could not connect with the socket, intent: "+intent);
    }
    intent++;
    if(intent>3){
        console.log("Close socket connect");
        socket.disconnect();
    }
});

function getNotifications(data, flg_alert = 0){
    $.ajax({
        url:"../Controlador/contrlNotification.php?page=getLastNotifications",
        type:"POST",
        data: data,
        success:function(response){
            var data = JSON.parse(response);
            if(data['iderror'] == 0){
                $("#container_noti").html(data['result']);
                $("#numnoti").text(data['quantity']);
                addNotificationEvent();
                if(flg_alert == 1){
                    notifyMe();
                }
            }else{
                console.error("No data response");
            }
        }
    });
}

function addNotificationEvent(){
    $(".item-notification").on('click', function(){
        var id = $(this).data('id');
        var idsocket = +$("#idsocket").val();
        $.ajax({
            url:"../Controlador/contrlNotification.php?page=readNotification",
            type:"POST",
            data: {id_notificacion: id},
            success:function(response){
                var data = JSON.parse(response);
                if(data['iderror'] == 0){
                    getNotifications({user_id: idsocket});
                    showNotification(id);
                }else{
                    console.error(data['msgerror']);
                }
            }
        });
    });
    $(".item-notification-view").on('click', function(){
        var id = $(this).data('id');
        // obtenemos los datos de la notificacion para pintarlo en el modal
        showNotification(id);
    });

    $(".show-all").click(function(){
        var user = +$("#idsocket").val();
        $.ajax({
            url:"../Controlador/contrlNotification.php?page=readAllNotifications",
            type:"POST",
            data: {user_id: user},
            success:function(response){
                var data = JSON.parse(response);
                if(data['iderror'] == 0){
                    $("#container_noti").html(data['result']);
                    $("#numnoti").text(data['quantity']);
                    addNotificationEvent();
                    if(flg_alert == 1){
                        notifyMe();
                    }
                }else{
                    console.error("No data response");
                }
            }
        });
    });
}

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    else if(Notification.permission === 'default'){
        $('#allow-push-notification-bar').show();
        $("#npermission").modal('show');
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("DNAds, Existen nuevas notificaciones");
    }
    
    $('#allow-push-notification').click(function () {
        $('#allow-push-notification-bar').hide();
        $("#npermission").modal('hide');
        Notification.requestPermission().then(function (status) {
            if (status === 'denied') {
                //do something
            } else if (status === 'granted') {
                //do something
                var notification = new Notification("DNAds, Existen nuevas notificaciones");
            }
        });
    });
  }

function showNotification(id){
    $.ajax({
        url:"../Controlador/contrlNotification.php?page=getNotificationDetail",
        type:"POST",
        data: {id_notificacion: id},
        success:function(response){
            var data = JSON.parse(response);
            if(data['iderror'] == 0){
                $("#noti_tittle").text(data['detail']['tittle']);
                $("#noti_comment").text(data['detail']['comentario']);
                $("#noti_path").attr('href', data['detail']['path']);
                $("#detail_noti").modal('show');
            }else{
                console.error("Error al obtener los datos de la notificacion");
            }
        }
    });
}