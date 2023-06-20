<?php

   try {

      $con = new PDO('mysql:host=localhost; dbname=dnmx-lotcontrol', "root", "");
      $con->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION ); 
   }

   catch( PDOException $e ) {
    	die( "Error connecting to SQL Server: " . $e->getMessage());
   }

?>