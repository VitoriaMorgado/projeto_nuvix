<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "games";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/games/get.php");
    if (isset($response["data"]) && !empty($response["data"])) {
        $games = $response["data"][0];
    } else {
        $games = null;
    }
}
$key = null;
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

    <!-- Conteúdo principal -->
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="mb-0">Cadastrar Jogos</h2>
                        <a href="/games/index.php" class="btn btn-primary">Cadastrar Jogo</a>
                    </div>
                    <form id="gamesForm" action="/games/cadastrar.php" method="POST" enctype="multipart/form-data">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="id_game" class="form-label">Código do Jogo</label>
                                    <input type="text" class="form-control" id="id_game" name="id_game" readonly value="<?php echo isset($games) ? $games["id_game"] : ""; ?>">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="imagem" class="form-label">Imagem</label>
                                    <input type="file" class="form-control" id="imagem" name="imagem" accept="image/*">
                                </div>
                                <div class="col-md-4">
                                    <?php
                                    if (isset($games["imagem"])) {
                                        echo '
                                        <input type="hidden" name="currentGameImage" value="' . $games["imagem"] . '">
                                        <img width="100" src="imagens/' . $games["imagem"] . '" class="img-thumbnail mt-4">
                                        ';
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="titulo" class="form-label">Título do Jogo</label>
                                    <input  type="text" class="form-control" id="titulo" name="titulo" required value="<?php echo isset($games) ? $games["titulo"] : ""; ?>">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="descricao" class="form-label">Descrição</label>
                                    <textarea class="form-control" id="descricao" name="descricao" rows="3" required><?php echo isset($games) ? $games["descricao"] : ""; ?></textarea>
                                </div>
                                <div class="col-md-4">
                                    <label for="desenvolvedora" class="form-label">Desenvolvedora</label>
                                    <input type="text"  class="form-control" id="desenvolvedora" name="desenvolvedora" required value="<?php echo isset($games) ? $games["desenvolvedora"] : ""; ?>">

                                </div>
                                <div class="col-md-4">
                                    <label for="preco" class="form-label">Preço</label>
                                    <input type="text" class="form-control" id="preco" name="preco" required value="<?php echo isset($games) ? $games["preco"] : ""; ?>">
                                </div>
                                <script>
                                    $(document).ready(function(){
                                        $('#preco').mask('000.000.000,00', {reverse: true});
                                    });
                                </script>
                                <div class="col-md-4">
                                    <label for="categoria" class="form-label">Categoria</label>
                                    <select class="form-select" id="categoria" name="categoria" required value="<?php echo isset($games) ? $games["categoria"] : ""; ?>">
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
                                            $selected = (isset($games) && $games["categoria"] == $categoria) ? "selected" : "";
                                            echo "<option value=\"$categoria\" $selected>$categoria</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="data_lancamento" class="form-label">Data de Lançamento</label>
                                    <input type="text"  class="form-control" id="data_lancamento" name="data_lancamento" required value="<?php echo isset($games) ? $games["data_lancamento"] : ""; ?>">
                                </div>
                            </div>
                            <div class="row mb-3">
                            
                                <div class="col-md-4"></div>
                            </div>
                        </div>
                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS (opcional, para funcionalidades como o menu hamburguer) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- jQuery Mask Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

</body>
</html>