<?php
$pdo=new PDO("mysql:host=localhost;dbname=pdo","root","");
if ($pdo){
    echo "connexion réussie";
}
?>