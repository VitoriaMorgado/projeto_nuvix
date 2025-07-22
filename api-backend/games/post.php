<?php

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if(!empty($postfields)) {
        $titulo = $postfields['titulo'] ?? null;
        $descricao = $postfields['descricao'] ?? null;
        $desenvolvedora = $postfields['desenvolvedora'] ?? null;
        $preco = $postfields['preco'] ?? null;
        $datalancamento = $postfields['data_lancamento'] ?? null;
        $categoria = $postfields['categoria'] ?? null;
        $imagem = $postfields['imagem'] ?? null;
        


        // Verifica campos obrigatórios
        if (empty($titulo)) {
            http_response_code(400);
            throw new Exception('Título obrigatórios');
        }

        $sql = "
        INSERT INTO games (titulo, descricao, desenvolvedora, preco, data_lancamento, categoria, imagem) VALUES 
        (
            :titulo,
            :descricao,
            :desenvolvedora,
            :preco,
            :data_lancamento,
            :categoria,
            :imagem
            
        )";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':titulo', $titulo, PDO::PARAM_STR);
        $stmt->bindParam(':descricao', $descricao, is_null($descricao) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':desenvolvedora', $desenvolvedora, is_null($desenvolvedora) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':preco', $preco, is_null($preco) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':data_lancamento', $datalancamento, is_null($datalancamento) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':categoria', $categoria, is_null($categoria) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':imagem', $imagem, is_null($imagem) ? PDO::PARAM_NULL : PDO::PARAM_STR);



        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => 'Jogos cadastrado com sucesso!'
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
