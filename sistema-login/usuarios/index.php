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
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h2>
                            Usuários Cadastrados
                            
                            <a href="/usuarios/formulario.php" class="btn btn-primary btn-sm float-left me-2">
                                <i class="bi bi-person-plus"></i> Formulário
                            </a>
                        </h2>
                    </div>
                        
                       <div class="card-body">
                           <!-- Tabela de usuarios cadastrados -->
                           <table id="myTable" class="table table-striped">
                               <thead>
                                   <tr>
                                       <th scope="col">#</th>
                                       <th scope="col">Nome</th>
                                       <th scope="col">Email</th>
                                       <th scope="col">Senha</th>
                                   </tr>
                               </thead>
                               <tbody id="userTableBody">
                                   <!-- Os clientes serão carregados aqui via PHP -->
                                   <?php
                                   // SE HOUVER CLIENTES NA SESSÃO, EXIBIR
                                   //limpar a variável $key para trazer todos os clientes
                                   $key = null;
                                   require("../requests/usuarios/get.php");
                                   if(!empty($response)) {
                                       foreach($response["data"] as $key => $usuarios) {
                                           echo '
                                           <tr>
                                               <th scope="row">'.$usuarios["id_usuario"].'</th>
                                               <td>'.$usuarios["nome"].'</td>
                                               <td>'.$usuarios["email"].'</td>
                                               <td>'.$usuarios["senha"].'</td>
                                               <td>'.$usuarios["tipo_usuario"].'</td>
                                               <td>
                                                   <a href="/usuarios/formulario.php?key='.$usuarios["id_usuario"].'" class="btn btn-warning">Editar</a>
                                                   <a href="/usuarios/remover.php?key='.$usuarios["id_usuario"].'" class="btn btn-danger">Excluir</a>
                                               </td>
                                           </tr>
                                           ';
                                       }
                                   } else {
                                       echo '
                                       <tr>
                                           <td colspan="7">Nenhum Usuário Cadastrado</td>
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
   
    

    
</body>
</html>