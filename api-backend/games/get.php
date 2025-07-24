<?php
try {

    // Verifica se há um ID na URL para consulta específica
    if(isset($_GET["id_game"]) && is_numeric($_GET["id_game"])) {
        $id = $_GET["id_game"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM games
            WHERE id_game = :id
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :id com o valor da variável $id
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    }


    // Verifica se há um TITULO na URL para consulta
    elseif (isset($_GET["titulo"]) && is_string($_GET["titulo"])) {
        $titulo = $_GET["titulo"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM games
            WHERE titulo LIKE :titulo
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :titulo com o valor da variável $titulo
        $stmt->bindValue(':titulo', '%' . $titulo . '%', PDO::PARAM_STR);
    }
    // Verifica se há uma CATEGORIA na URL para consulta
    elseif (isset($_GET["categoria"]) && is_string($_GET["categoria"])) {
        $categoria = $_GET["categoria"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM games
            WHERE categoria LIKE :categoria
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :categoria com o valor da variável $categoria
        $stmt->bindValue(':categoria', '%' . $categoria . '%', PDO::PARAM_STR);
    }
    // Verifica se há uma DESENVOLVEDORA na URL para consulta
    elseif (isset($_GET["desenvolvedora"]) && is_string($_GET["desenvolvedora"])) {
        $desenvolvedora = $_GET["desenvolvedora"];

        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM games
            WHERE desenvolvedora LIKE :desenvolvedora
        ";

        // Preparar a sintaxe SQL
        $stmt = $conn->prepare($sql);
        // Vincular o parâmetro :desenvolvedora com o valor da variável $desenvolvedora
        $stmt->bindValue(':desenvolvedora', '%' . $desenvolvedora . '%', PDO::PARAM_STR);
    }
    
    else {
        // Monta a sintaxe SQL de busca
        $sql = "
            SELECT * 
            FROM games
            ORDER BY titulo
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


// // VERIFICAR SE O ID FOI PASSADO NA URL E SE É UM NÚMERO
// if (isset($_GET["id_game"]) && is_numeric($_GET["id_game"])) {
//     $id = $_GET["id_game"];
//     // BUSCAR O jogo COM O ID PASSADO NA URL
//     $found = false;
//     foreach ($data as $games) {
//         if ($games->id == $id) {
//             $data = $games;
//             $found = true;
//             break;
//         }
//     }
//     // SE O Jogo NÃO FOI ENCONTRADO, RETORNAR UM ERRO
//     // $data = $found ? $data : null;
//     if(!$found) {
//         http_response_code(204);
//     }
// } elseif (isset($_GET["titulo"]) && is_string($_GET["titulo"])) {
//     $titulo = $_GET["titulo"];
//     $result = array();
//     // BUSCAR O titulo COM O ID PASSADO NA URL
//     $found = false;
//     foreach ($data as $games) {
//         if (stripos($games->titulo, $titulo) !== false) {
//             $result[] = $games;
//             $found = true;
//         }
//     }
//     // SE O titulo NÃO FOI ENCONTRADO, RETORNAR UM ERRO
//     // $data = $found ? $data : null;
//     if(!$found) {
//         http_response_code(204);
//     } else {
//         $data = $result;
//     }
// }

// echo json_encode(
//     array(
//         'status' => 'success',
//         'message' => 'GET method called',
//         'data' => $data
//     )
// );