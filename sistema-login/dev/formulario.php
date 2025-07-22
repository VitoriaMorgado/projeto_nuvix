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
                        <h2 class="mb-0">Cadastrar Desenvolvedores</h2>
                        <a href="/dev/index.php" class="btn btn-primary">Cadastrar Dev</a>
                    </div>
                    <form id="devsForm" action="/dev/cadastrar.php" method="POST" enctype="multipart/form-data">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="id" class="form-label">Código do Desenvolvedores</label>
                                    <input type="text" class="form-control" id="id" name="id" readonly value="<?php echo isset($dev) ? $dev["id"] : ""; ?>">
                                </div>   
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="nome" class="form-label">Nome</label>
                                    <input  type="text" class="form-control" id="nome" name="nome" required value="<?php echo isset($dev) ? $dev["nome"] : ""; ?>">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="email" class="form-label">Email</label>
                                    <input class="form-control" id="email" name="email" rows="3" required><?php echo isset($dev) ? $dev["email"] : ""; ?></input>
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <label for="senha" class="form-label">Senha</label>
                                    <input class="form-control" id="senha" name="senha" rows="3" required><?php echo isset($dev) ? $dev["senha"] : ""; ?></input>
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