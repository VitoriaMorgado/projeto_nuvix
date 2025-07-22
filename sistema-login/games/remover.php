<?php

// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

if(isset($_GET["key"])) {
    $key = $_GET["key"];

    
    // EXCLUIR IMAGEM DO ITEM
    // if (file_exists("imagens/" . $_SESSION["clientes"][$key]["clientImage"])) {
    //     unlink("imagens/" . $_SESSION["clientes"][$key]["clientImage"]);
    // }


    // // UNSET = REMOVE UM ITEM DE UM ARRAY
    // unset($_SESSION["clientes"][$key]);
    // // ARRAY_VALUES = REORGANIZA OS ÍNDICES DO ARRAY
    // $_SESSION["clientes"] = array_values($_SESSION["clientes"]);
    // $_SESSION["msg"] = "Jogo removido com sucesso!";
    require("../requests/games/delete.php");
    $_SESSION["msg"] = $response["message"];


}
header("Location: ./");
exit;