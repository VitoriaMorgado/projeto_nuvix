<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

try {
    if (!$_POST) {
        throw new Exception("Acesso indevido! Tente novamente.");
    }

    $novo_nome = null;

    // VERIFICAR SE O ARQUIVO FOI ENVIADO
    if (isset($_FILES["gameImagem"]) && $_FILES["gameImagem"]["name"] != "") {
        // PEGAR A EXTENSÃO DO ARQUIVO
        $extensao = pathinfo($_FILES["gameImagem"]["name"], PATHINFO_EXTENSION);
        // GERAR UM NOVO NOME PARA O ARQUIVO
        $novo_nome = md5(uniqid() . microtime()) . ".$extensao";
        // MOVER O ARQUIVO PARA A PASTA DE IMAGENS
        if (!move_uploaded_file($_FILES["gameImagem"]["tmp_name"], "imagens/$novo_nome")) {
            throw new Exception("Erro ao fazer upload da imagem.");
        }

        // SE JÁ EXISTIR UMA IMAGEM, DELETAR A IMAGEM ANTERIOR
        if (isset($_POST["currentGameImage"]) && $_POST["currentGameImage"] != "") {
            $arquivo_antigo = "imagens/" . $_POST["currentGameImage"];
            if (file_exists($arquivo_antigo)) {
                unlink($arquivo_antigo);
            }
        }
    } else {
        // SE NÃO FOI ENVIADO ARQUIVO, USAR A IMAGEM ATUAL (SE EXISTIR)
        $novo_nome = isset($_POST["currentGameImage"]) ? $_POST["currentGameImage"] : null;
    }

    // VERIFICAR SE É CADASTRO NOVO OU ATUALIZAÇÃO
    if (empty($_POST["gameId"])) {
        // CADASTRO NOVO
        $postfields = array(
            "titulo" => $_POST["Gametitulo"],
            "descricao" => $_POST["Gamedescricao"],
            "desenvolvedora" => $_POST["Gamedesenvolvedora"],
            "preco" => $_POST["Gamepreco"],
            "categoria" => $_POST["Gamecategoria"],
            "data_lancamento" => $_POST["Gamedata_lancamento"],
            "imagem" => $novo_nome
        );
        
        require("../requests/games/post.php");
        
    } else {
        // ATUALIZAÇÃO
        $postfields = array(
            "id_game" => $_POST["gameId"],
            "titulo" => $_POST["Gametitulo"],
            "descricao" => $_POST["Gamedescricao"],
            "desenvolvedora" => $_POST["Gamedesenvolvedora"],
            "preco" => $_POST["Gamepreco"],
            "categoria" => $_POST["Gamecategoria"],
            "data_lancamento" => $_POST["Gamedata_lancamento"],
            "imagem" => $novo_nome
        );
        
        require("../requests/games/put.php");
    }
    
    // DEFINIR MENSAGEM DE SUCESSO
    if (isset($response["message"])) {
        $_SESSION["msg"] = $response["message"];
    } else {
        $_SESSION["msg"] = "Operação realizada com sucesso!";
    }

} catch (Exception $e) {
    $_SESSION["msg"] = "Erro: " . $e->getMessage();
} finally {
    // REDIRECIONAR PARA A LISTA DE JOGOS
    header("Location: ./");
    exit();
}
?>