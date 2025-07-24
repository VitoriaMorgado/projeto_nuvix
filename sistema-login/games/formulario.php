<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "games";

$games = null; // Inicializa a variável

// DEBUG: Mostrar informações recebidas
echo "<!-- DEBUG INFORMATION -->";
echo "<!-- GET key: " . (isset($_GET["key"]) ? $_GET["key"] : 'não definida') . " -->";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    echo "<!-- Valor da key antes do require: $key -->";
    
    require("../requests/games/get.php");
    
    echo "<!-- Resposta da API: " . print_r($response, true) . " -->";
    
    // Verificar se houve erro na resposta
    if (isset($response["error"])) {
        echo "<!-- ERRO: " . $response["error"] . " -->";
        $games = null;
    } else if (isset($response["data"]) && !empty($response["data"])) {
        // Para busca específica, a API deve retornar um único item
        if (is_numeric($key)) {
            // Se a API retorna um array de objetos mesmo para busca específica
            if (is_array($response["data"]) && count($response["data"]) > 0) {
                // Procurar o jogo com o ID correto
                $games = null;
                foreach ($response["data"] as $game) {
                    if ($game["id_game"] == $key) {
                        $games = $game;
                        break;
                    }
                }
                
                // Se não encontrou pelo loop, pegar o primeiro (caso a API já filtre)
                if ($games === null && count($response["data"]) == 1) {
                    $games = $response["data"][0];
                }
            } 
            // Se a API retorna diretamente um objeto
            else if (isset($response["data"]["id_game"])) {
                $games = $response["data"];
            }
        }
        
        echo "<!-- Jogo selecionado: " . print_r($games, true) . " -->";
    } else {
        echo "<!-- Nenhum dado encontrado na resposta -->";
        $games = null;
    }
    
    $key = null; // Limpa a variável $key
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Cadastro de Jogos</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <?php
    include "../mensagens.php";
    include "../navbar.php";
    ?>

    <!-- DEBUG VISUAL (remover depois) -->

    <!-- Conteúdo principal -->
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="mb-0">
                            <?php echo isset($games) && $games ? "Editar Jogo (ID: " . $games["id_game"] . ")" : "Cadastrar Jogo"; ?>
                        </h2>
                        <a href="/games/index.php" class="btn btn-secondary">Voltar para Lista</a>
                    </div>
                    <form id="gamesForm" action="/games/cadastrar.php" method="POST" enctype="multipart/form-data"
                        autocomplete="off">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="gameId" class="form-label">Código do Jogo</label>
                                    <input type="text" class="form-control" id="gameId" name="gameId" readonly
                                        value="<?php echo isset($games) && $games ? $games["id_game"] : ""; ?>">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="gameImagem" class="form-label">Imagem</label>
                                    <input type="file" class="form-control" id="gameImagem" name="gameImagem"
                                        accept="image/*">
                                </div>
                                <div class="col-md-4">
                                    <?php
                                    if (isset($games) && $games && isset($games["imagem"]) && $games["imagem"]) {
                                        echo '
                                        <input type="hidden" name="currentGameImage" value="' . htmlspecialchars($games["imagem"]) . '">
                                        <img width="100" src="/games/imagens/' . htmlspecialchars($games["imagem"]) . '" class="img-thumbnail mt-4">
                                        ';
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="Gametitulo" class="form-label">Título do Jogo</label>
                                    <input type="text" class="form-control" id="Gametitulo" name="Gametitulo" required
                                        value="<?php echo isset($games) && $games ? htmlspecialchars($games["titulo"]) : ""; ?>">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="Gamedescricao" class="form-label">Descrição</label>
                                    <textarea class="form-control" id="Gamedescricao" name="Gamedescricao" rows="3"
                                        required><?php echo isset($games) && $games ? htmlspecialchars($games["descricao"]) : ""; ?></textarea>
                                </div>
                                <div class="col-md-4">
                                    <label for="Gamedesenvolvedora" class="form-label">Desenvolvedora</label>
                                    <input type="text" class="form-control" id="Gamedesenvolvedora"
                                        name="Gamedesenvolvedora" required
                                        value="<?php echo isset($games) && $games ? htmlspecialchars($games["desenvolvedora"]) : ""; ?>">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4">
                                    <label for="Gamepreco" class="form-label">Preço</label>
                                    <input type="text" class="form-control" id="Gamepreco" name="Gamepreco" required
                                        value="<?php echo isset($games) && $games ? htmlspecialchars($games["preco"]) : ""; ?>">
                                </div>
                                <div class="col-md-4">
                                    <label for="Gamecategoria" class="form-label">Categoria</label>
                                    <select class="form-select" id="Gamecategoria" name="Gamecategoria" required>
                                        <option value="">Selecione uma Categoria</option>
                                        <?php
                                        $categorias = [
                                            "Ação",
                                            "Aventura",
                                            "RPG",
                                            "Estratégia",
                                            "Esporte",
                                            "Corrida",
                                            "Simulação",
                                            "Puzzle",
                                            "Terror",
                                            "Plataforma",
                                            "FPS"
                                        ];
                                        foreach ($categorias as $categoria) {
                                            $selected = (isset($games) && $games && isset($games["categoria"]) && $games["categoria"] == $categoria) ? "selected" : "";
                                            echo "<option value=\"" . htmlspecialchars($categoria) . "\" $selected>" . htmlspecialchars($categoria) . "</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="Gamedata_lancamento" class="form-label">Data de Lançamento</label>
                                    <input type="date" class="form-control" id="Gamedata_lancamento"
                                        name="Gamedata_lancamento" required
                                        value="<?php echo isset($games) && $games ? htmlspecialchars($games["data_lancamento"]) : ""; ?>">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary">
                                <?php echo isset($games) && $games ? "Atualizar" : "Salvar"; ?>
                            </button>
                            <a href="/games/index.php" class="btn btn-secondary">Cancelar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery Mask Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

    <script>
    $(document).ready(function() {
        // Máscara para o preço
        $('#Gamepreco').mask('000.000.000,00', {
            reverse: true
        });
    });
    </script>

</body>

</html>