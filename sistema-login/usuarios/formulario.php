<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "usuarios";

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/usuarios/get.php");
    if (isset($response["data"]) && !empty($response["data"])) {
        $usuarios = $response["data"][0];
    } else {
        $usuarios = null;
    }
}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Cadastro de Usuários</title>
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
        <div class="row">
            <div class="col-md">
                <!-- Formulário de cadastro de usuarios -->

                <div class="card">
                    
                </div>
                <h2>
                    Cadastrar Usuários
                    <a href="/usuarios/index.php" class="btn btn-primary btn-sm">Usuários Cadastrados</a>
                </h2>
                <form id="userForm" action="/usuarios/cadastrar.php" method="POST" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="id_usuario" class="form-label">Código do Usuário</label>
                        <input type="text" class="form-control" id="id_usuario" name="id_usuario" readonly value="<?php echo isset($usuarios) ? $usuarios["id_usuario"] : ""; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" name="nome" required value="<?php echo isset($usuarios) ? $usuarios["nome"] : ""; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input  type="text" class="form-control" id="email" name="email" required value="<?php echo isset($usuarios) ? $usuarios["email"] : ""; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="senha" class="form-control" id="senha" name="senha" required value="<?php echo isset($usuarios) ? $usuarios["senha"] : ""; ?>">
                    </div>
                    <div class="mb-3">
                        <label for="tipo_usuario" class="form-label">Tipo de Usuário</label>
                        <select class="form-select" id="tipo_usuario" name="tipo_usuario" required>
                            <option value="" disabled selected>Selecione o tipo de usuário</option>
                            <option value="admin" <?php echo (isset($usuarios) && $usuarios["tipo_usuario"] == "admin") ? "selected" : ""; ?>>Administrador</option>
                            <option value="user" <?php echo (isset($usuarios) && $usuarios["tipo_usuario"] == "user") ? "selected" : ""; ?>>Usuário (Cliente)</option>
                        </select>
                    
                    
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
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