<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";
try{


    
    if(!$_POST){
        throw new Exception("Acesso indevído! Tente novamente.");
    }

    // VERIFICAR SE O ARQUIVO FOI ENVIADO
    if ($_FILES["imagem"]["name"] != "") {
        // PEGAR A EXTENSÃO DO ARQUIVO
        $extensao = pathinfo($_FILES["imagem"]["name"], PATHINFO_EXTENSION);
        // GERAR UM NOVO NOME PARA O ARQUIVO
        $novo_nome = md5(uniqid() . microtime()) . ".$extensao";
        // MOVER O ARQUIVO PARA A PASTA DE IMAGENS
        move_uploaded_file($_FILES["imagem"]["tmp_name"], "imagens/$novo_nome");
        // ADICIONAR O NOME DO ARQUIVO NO POST
        $_POST["imagem"] = $novo_nome;

        // SE JÁ EXISTIR UMA IMAGEM, DELETAR A IMAGEM
        if ($_POST["currentGameImage"] != "") {
            // UNLINK = DELETAR ARQUIVOS
            unlink("imagens/" . $_POST["currentGameImage"]);
        }

    } else {
        // SE NÃO FOI ENVIADO ARQUIVO, PEGAR O NOME DO ARQUIVO ATUAL
        $_POST["imagem"] = $_POST["currentGameImage"];
    }


    $msg = '';

    
    if ($_POST["id"] == "") {
        $postfields = array(
            "titulo" => $_POST["titulo"],
            "descricao" => $_POST["descricao"],
            "desenvolvedora" => $_POST["desenvolvedora"],
            "preco" => $_POST["preco"],
            "categoria" => $_POST["categoria"],
            "data_lancamento" => $_POST["data_lancamento"],
            "imagem" => $_POST["imagem"],
            
        
        );
        
        require("../requests/games/post.php");

    } else {

        $postfields = array(
            "id_game" => $_POST["id_game"],
            "titulo" => $_POST["titulo"],
            "descricao" => $_POST["descricao"],
            "desenvolvedora" => $_POST["desenvolvedora"],
            "preco" => $_POST["preco"],
            "categoria" => $_POST["categoria"],
            "data_lancamento" => $_POST["data_lancamento"],
            "imagem" => $_POST["imagem"],
            
            );
        
        // SENÃO, SIGNIFICA QUE É UM JOGO JÁ CADASTRADO
        require("../requests/games/put.php");
    }
    $_SESSION["msg"] = $response["message"];

}catch(Exception $e){
    $_SESSION["msg"] = $e->getMessage();
}finally{
    header("Location: ./");
}
