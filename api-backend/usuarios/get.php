<?php
try {

    // Verifica se há um ID na URL para consulta específica
    if(isset($_GET["id_usuario"]) && is_numeric($_GET["id_usuario"])) {
        $id = $_GET["id_usuario"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM usuarios
            WHERE id_usuario = :id
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :id com o valor da variável $id
        $stmt->bindParam(':id_usuario', $id, PDO::PARAM_INT);
    }


    // Verifica se há um NOME na URL para consulta
    elseif (isset($_GET["nome"]) && is_string($_GET["nome"])) {
        $razaosocial = $_GET["nome"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM usuarios
            WHERE nome LIKE :nome
            
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :titulo com o valor da variável $titulo
        $stmt->bindValue(':nome', '%' . $nome . '%', PDO::PARAM_STR);

    }
    
    else {
        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM usuarios
            ORDER BY nome
        ";
        
        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
    }
    // Executar a sintaxe SQL
    $stmt->execute();
    // Obter os dados do banco de dados como objeto
    $data = $stmt->fetchAll(PDO::FETCH_OBJ);

    // Verifica se o resultado da pesquisa é vazio
    if (empty($data)) {
        // Se o resultado for vazio, retorna um erro
        http_response_code(204);
        exit;
    } else {
        // Organizar o endereço como objeto    
        // Se o resultado não for vazio, retorna os dados
        $result = array(
            'status' => 'success',
            'message' => 'Data found',
            'data' => $data
        );
    }
} catch (Exception $e) {
    // Se houver erro, retorna o erro
    $result = array(
        'status' => 'error',
        'message' => 'Error: ' . $e->getMessage()
    );
} finally {
    // Retorna os dados em formato JSON
    echo json_encode($result);
    // Fecha a conexão com o banco de dados
    $conn = null;
}
exit;


// VERIFICAR SE O ID FOI PASSADO NA URL E SE É UM NÚMERO
if (isset($_GET["id_usuario"]) && is_numeric($_GET["id_usuario"])) {
    $id = $_GET["id_usuario"];
    // BUSCAR O produto COM O ID PASSADO NA URL
    $found = false;
    foreach ($data as $usuarios) {
        if ($nome->id == $id) {
            $data = $usuarios;
            $found = true;
            break;
        }
    }
    // SE O usuario NÃO FOI ENCONTRADO, RETORNAR UM ERRO
    // $data = $found ? $data : null;
    if(!$found) {
        http_response_code(204);
    }
} elseif (isset($_GET["nome"]) && is_string($_GET["nome"])) {
    $nome = $_GET["nome"];
    $result = array();
    // BUSCAR O nome COM O ID PASSADO NA URL
    $found = false;
    foreach ($data as $usuarios) {
        if (stripos($usuarios->nome, $nome) !== false) {
            $result[] = $usuarios;
            $found = true;
        }
    }
    // SE O nome NÃO FOI ENCONTRADO, RETORNAR UM ERRO
    // $data = $found ? $data : null;
    if(!$found) {
        http_response_code(204);
    } else {
        $data = $result;
    }
}

echo json_encode(
    array(
        'status' => 'success',
        'message' => 'GET method called',
        'data' => $data
    )
);