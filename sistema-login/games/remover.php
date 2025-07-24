<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

try {
    // Verificar se a key foi fornecida
    if (!isset($_GET["key"]) || empty($_GET["key"])) {
        throw new Exception("ID do jogo não foi fornecido.");
    }
    
    $key = $_GET["key"];
    
    // Verificar se a key é um número válido
    if (!is_numeric($key)) {
        throw new Exception("ID do jogo deve ser um número válido.");
    }
    
    // Antes de excluir, vamos buscar os dados do jogo para pegar a imagem
    require("../requests/games/get.php");
    $game_to_delete = null;
    
    if (isset($response["data"]) && !empty($response["data"])) {
        if (is_array($response["data"]) && count($response["data"]) > 0) {
            // Procurar o jogo com o ID correto
            foreach ($response["data"] as $game) {
                if ($game["id_game"] == $key) {
                    $game_to_delete = $game;
                    break;
                }
            }
            
            // Se não encontrou pelo loop, pegar o primeiro (caso a API já filtre)
            if ($game_to_delete === null && count($response["data"]) == 1) {
                $game_to_delete = $response["data"][0];
            }
        } else if (isset($response["data"]["id_game"])) {
            $game_to_delete = $response["data"];
        }
    }
    
    // Agora fazer o DELETE
    require("../requests/games/delete.php");
    
    // Se a exclusão foi bem-sucedida e havia uma imagem, excluir o arquivo
    if (isset($response["success"]) && $response["success"] && $game_to_delete && isset($game_to_delete["imagem"]) && !empty($game_to_delete["imagem"])) {
        $arquivo_imagem = "imagens/" . $game_to_delete["imagem"];
        if (file_exists($arquivo_imagem)) {
            unlink($arquivo_imagem);
        }
    }
    
    // Definir mensagem de sucesso/erro
    if (isset($response["message"])) {
        $_SESSION["msg"] = $response["message"];
    } else {
        $_SESSION["msg"] = "Jogo excluído com sucesso!";
    }
    
} catch (Exception $e) {
    $_SESSION["msg"] = "Erro: " . $e->getMessage();
} finally {
    header("Location: ./");
    exit();
}
?>