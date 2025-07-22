<?php

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if(!empty($postfields)) {
        $nome = $postfields['nome'] ?? null;
        $email = $postfields['email'] ?? null;
        $senha = $postfields['senha'] ?? null;
        $tipo_usuario = $postfields['tipo_usuario'] ?? null;
        $data_criacao = date('Y-m-d H:i:s');
        // Verifica campos obrigatórios
        if (empty($nome)) {
            http_response_code(400);
            throw new Exception('Nome é obrigatório');
        }

        $sql = "
        INSERT INTO usuarios (nome, email, senha, tipo_usuario, data_criacao ) VALUES 
        (
            :nome,
            :email,
            :senha,
            :tipo_usuario,
            :data_criacao 
            
        )";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, is_null($email) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':senha', $senha, is_null($senha) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':tipo_usuario', $tipo_usuario, is_null($tipo_usuario) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':data_criacao', $data_criacao, PDO::PARAM_STR);

        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => 'Usuário cadastrado com sucesso!'
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
