<?php
 
try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if(!empty($postfields)) {
        $id = $postfields['id_game'] ?? null;
        $titulo = $postfields['titulo'] ?? null;
        $descricao = $postfields['descricao'] ?? null;
        $desenvolvedora = $postfields['desenvolvedora'] ?? null;
        $preco = $postfields['preco'] ?? null;
        $datalancamento = $postfields['data_lancamento'] ?? null;
        $categoria = $postfields['categoria'] ?? null;
        $imagem = $postfields['imagem'] ?? null;

        // Verifica campos obrigatórios
        if(empty($id)) {
            http_response_code(400);
            throw new Exception('ID é obrigatório');
        }
        if (empty($id) || empty($titulo)) {
            http_response_code(400);
            throw new Exception('todos os campos são obrigatórios');
        }

        $sql = "
        UPDATE games SET
        titulo = :titulo,
        descricao = :descricao,
        desenvolvedora = :desenvolvedora,
        preco = :preco,
        data_lancamento = :data_lancamento,
        categoria = :categoria,
        imagem = :imagem
        WHERE id_game = :id_game
        ";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id_game', $id, PDO::PARAM_INT);
        $stmt->bindParam(':titulo', $titulo, PDO::PARAM_STR);
        $stmt->bindParam(':descricao', $descricao, PDO::PARAM_STR);
        $stmt->bindParam(':desenvolvedora', $desenvolvedora, PDO::PARAM_STR);
        $stmt->bindParam(':preco', $preco, PDO::PARAM_STR);
        $stmt->bindParam(':data_lancamento', $datalancamento, PDO::PARAM_STR);
        $stmt->bindParam(':categoria', $categoria, PDO::PARAM_STR);
        $stmt->bindParam(':imagem', $imagem, PDO::PARAM_STR);


        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => ' alterado com sucesso!'
        );


    } else {
        http_response_code(400);
        // Se não existir dados, retornar erro
        throw new Exception('Nenhum dado foi enviado!');
    }

} catch (Exception $e) {
    // Se houver erro, retorna o erro
    $result = array(
        'status' => 'error',
        'message' => $e->getMessage(),
    );
} finally {
    // Retorna os dados em formato JSON
    echo json_encode($result);
    // Fecha a conexão com o banco de dados
    $conn = null;
}