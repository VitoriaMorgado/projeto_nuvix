<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "dev";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/dev/get.php");
    if (isset($response["data"]) && !empty($response["data"])) {
        $dev = $response["data"][0];
    } else {
        $dev = null;
    }
}
$key = null;
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Cadastro de Desenvolvedores</title>
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
                <!-- Tabela de clientes cadastrados -->
                <h2>
                    Desenvolvedores Cadastrados
                    <a href="/dev/formulario.php" class="btn btn-primary float-end">Cadastrar Desenvolvedor</a>
                        
                </h2>
                <table id="myTable" class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Senha</th>

                        </tr>
                    </thead>
                    <tbody id="devsTableBody">
                        <!-- Os clientes serão carregados aqui via PHP -->
                        <?php
                        // SE HOUVER Jogos NA SESSÃO, EXIBIR
                        //limpar a variável $key para trazer todos os clientes
                        $key = null;
                        require("../requests/dev/get.php");
                        if(!empty($response)) {
                            foreach($response["data"] as $key => $dev) {
                                echo '
                                <tr>
                                    <th scope="row">'.$dev["id"].'</th>
                                    <td>
                                    <td>'.$dev["nome"].'</td>
                                    <td>'.$dev["email"].'</td>                                    
                                    <td>'.$dev["senha"].'</td>
                                    <td>
                                        <a href="/dev/formulario.php?key='.$dev["id"].'" class="btn btn-warning">Editar</a>
                                        <a href="/dev/remover.php?key='.$dev["id"].'" class="btn btn-danger">Excluir</a>
                                    </td>
                                </tr>
                                ';
                            }
                        } else {
                            echo '
                            <tr>
                                <td colspan="6">Nenhum Desenvolvedor Cadastrado</td>
                            </tr>
                            ';
                        }
                        ?>
                    </tbody>
                </table>
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