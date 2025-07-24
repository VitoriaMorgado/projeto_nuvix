<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "games";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/games/get.php");
    $games = (isset($response["data"]) && !empty($response["data"])) ? $response["data"][0] : null;
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
    <link href="http://cdn.datatables.net/2.3.2/css/dataTables.dataTables.min.css" rel="stylesheet">
</head>

<body>
    <?php
    include "../mensagens.php";
    include "../navbar.php";
    ?>

    <!-- Conteúdo principal -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-md">
                <div class="card">
                    <div class="card-body">
                        <!-- Tabela de jogos cadastrados -->
                        <h2>
                            Jogos Cadastrados
                            <a href="/games/formulario.php" class="btn btn-primary float-end">Cadastrar Jogo</a>
                        </h2>
                        <table id="myTable" class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Imagem</th>
                                    <th scope="col">Jogo</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Desenvolvedora</th>
                                </tr>
                            </thead>
                            <tbody id="gamesTableBody">
                                <!-- Os clientes serão carregados aqui via PHP -->
                                <?php
                                // SE HOUVER Jogos NA SESSÃO, EXIBIR
                                //limpar a variável $key para trazer todos os jogos
                                $key = null;
                                require("../requests/games/get.php");
                                if(!empty($response) && !empty($response["data"])) {
                                    foreach($response["data"] as $games) {
                                        echo '
                                        <tr>
                                            <th scope="row">'.$games["id_game"].'</th>
                                            <td>
                                                <img width="100" src="/games/imagens/'.$games["imagem"].'" class="img-thumbnail">
                                            <td>'.$games["titulo"].'</td>
                                            <td>'.$games["descricao"].'</td>                                    
                                            <td>'.$games["preco"].'</td>
                                            <td>'.$games["desenvolvedora"].'</td>
                                            <td>
                                                <a href="/games/formulario.php?key='.$games["id_game"].'" class="btn btn-warning">Editar</a>
                                                <a href="/games/remover.php?key='.$games["id_game"].'" class="btn btn-danger">Excluir</a>
                                            </td>
                                        </tr>
                                        ';
                                    }
                                } else {
                                    echo '
                                    <tr>
                                        <td colspan="6">Nenhum Jogo cadastrado</td>
                                    </tr>
                                    ';
                                }
                               
                                ?>
                            </tbody>
                        </table>
                    </div>
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




    </script>

</body>

</html>