<?php
// CHAMA O ARQUIVO ABAIXO NESTA TELA
include "../verificar-autenticacao.php";

// INDICA QUAL PÁGINA ESTOU NAVEGANDO
$pagina = "usuarios";

$usuarios = null; // Inicializa a variável

if (isset($_GET["key"])) {
    $key = $_GET["key"];
    require("../requests/usuarios/get.php");
    
    // CORREÇÃO: Verificar se a resposta contém dados E se o ID corresponde
    if (isset($response["data"]) && !empty($response["data"])) {
        // Se estamos buscando um ID específico, processar corretamente
        if (is_numeric($key)) {
            // Se a API retorna um array de objetos mesmo para busca específica
            if (is_array($response["data"]) && count($response["data"]) > 0) {
                // Procurar o usuário com o ID correto
                foreach ($response["data"] as $user) {
                    if ($user["id_usuario"] == $key) {
                        $usuarios = $user;
                        break;
                    }
                }
                
                // Se não encontrou pelo loop, pegar o primeiro (caso a API já filtre)
                if ($usuarios === null && count($response["data"]) == 1) {
                    $usuarios = $response["data"][0];
                }
            } 
            // Se a API retorna diretamente um objeto
            else if (isset($response["data"]["id_usuario"])) {
                $usuarios = $response["data"];
            }
        }
    }
    
    $key = null; // Limpa a variável $key
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
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2 class="mb-0">
                            <?php echo isset($usuarios) && $usuarios ? "Editar Usuário" : "Cadastrar Usuário"; ?>
                        </h2>
                        <a href="/usuarios/index.php" class="btn btn-secondary">Usuários Cadastrados</a>
                    </div>
                    <form id="userForm" action="/usuarios/cadastrar.php" method="POST" enctype="multipart/form-data"
                        autocomplete="off">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="id_usuario" class="form-label">Código do Usuário</label>
                                    <input type="text" class="form-control" id="id_usuario" name="id_usuario" readonly
                                        value="<?php echo isset($usuarios) && $usuarios ? $usuarios["id_usuario"] : ""; ?>">
                                </div>
                                <div class="col-md-6">
                                    <label for="tipo_usuario" class="form-label">Tipo de Usuário *</label>
                                    <select class="form-select" id="tipo_usuario" name="tipo_usuario" required>
                                        <option value="">Selecione o tipo de usuário</option>
                                        <option value="admin"
                                            <?php echo (isset($usuarios) && $usuarios && $usuarios["tipo_usuario"] == "admin") ? "selected" : ""; ?>>
                                            Administrador
                                        </option>
                                        <option value="user"
                                            <?php echo (isset($usuarios) && $usuarios && $usuarios["tipo_usuario"] == "user") ? "selected" : ""; ?>>
                                            Usuário (Cliente)
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="nome" class="form-label">Nome Completo *</label>
                                    <input type="text" class="form-control" id="nome" name="nome" required
                                        value="<?php echo isset($usuarios) && $usuarios ? htmlspecialchars($usuarios["nome"]) : ""; ?>"
                                        placeholder="Digite o nome completo">
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" class="form-control" id="email" name="email" required
                                        value="<?php echo isset($usuarios) && $usuarios ? htmlspecialchars($usuarios["email"]) : ""; ?>"
                                        placeholder="usuario@exemplo.com">
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="senha" class="form-label">
                                        <?php echo isset($usuarios) && $usuarios ? "Nova Senha (deixe vazio para manter atual)" : "Senha *"; ?>
                                    </label>
                                    <input type="password" class="form-control" id="senha" name="senha"
                                        <?php echo isset($usuarios) && $usuarios ? "" : "required"; ?>
                                        placeholder="Digite a senha" minlength="6">
                                    <div class="form-text">
                                        <?php if (isset($usuarios) && $usuarios): ?>
                                        Deixe em branco para manter a senha atual
                                        <?php else: ?>
                                        Mínimo de 6 caracteres
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="confirma_senha" class="form-label">
                                        <?php echo isset($usuarios) && $usuarios ? "Confirmar Nova Senha" : "Confirmar Senha *"; ?>
                                    </label>
                                    <input type="password" class="form-control" id="confirma_senha"
                                        name="confirma_senha"
                                        <?php echo isset($usuarios) && $usuarios ? "" : "required"; ?>
                                        placeholder="Confirme a senha" minlength="6">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <small class="text-muted">* Campos obrigatórios</small>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary">
                                <?php echo isset($usuarios) && $usuarios ? "Atualizar Usuário" : "Cadastrar Usuário"; ?>
                            </button>
                            <a href="/usuarios/index.php" class="btn btn-secondary">Cancelar</a>
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

    <script>
    $(document).ready(function() {
        // Validação de confirmação de senha
        $('#confirma_senha').on('keyup', function() {
            var senha = $('#senha').val();
            var confirmaSenha = $(this).val();

            if (senha !== confirmaSenha) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
            } else if (confirmaSenha.length > 0) {
                $(this).addClass('is-valid');
                $(this).removeClass('is-invalid');
            }
        });

        $('#senha').on('keyup', function() {
            var senha = $(this).val();
            var confirmaSenha = $('#confirma_senha').val();

            if (confirmaSenha.length > 0) {
                if (senha !== confirmaSenha) {
                    $('#confirma_senha').addClass('is-invalid');
                    $('#confirma_senha').removeClass('is-valid');
                } else {
                    $('#confirma_senha').addClass('is-valid');
                    $('#confirma_senha').removeClass('is-invalid');
                }
            }
        });

        // Validação do formulário antes do envio
        $('#userForm').on('submit', function(e) {
            var senha = $('#senha').val();
            var confirmaSenha = $('#confirma_senha').val();
            var isEdit = $('#id_usuario').val() !== '';

            // Se não é edição, senha é obrigatória
            if (!isEdit && senha.length === 0) {
                e.preventDefault();
                $('#senha').addClass('is-invalid');
                alert('A senha é obrigatória para novos usuários.');
                return false;
            }

            // Se preencheu senha, deve confirmar
            if (senha.length > 0 && senha !== confirmaSenha) {
                e.preventDefault();
                $('#confirma_senha').addClass('is-invalid');
                alert('As senhas não coincidem.');
                return false;
            }

            // Validação de email
            var email = $('#email').val();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                $('#email').addClass('is-invalid');
                alert('Por favor, insira um email válido.');
                return false;
            }
        });
    });
    </script>

</body>

</html>