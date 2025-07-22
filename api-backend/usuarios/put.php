<?php

try {
    // Recuperar informações de formulário vindo do Frontend
    $postfields = json_decode(file_get_contents('php://input'), true);

    // Verificar se existe informações de formulário
    if(!empty($postfields)) {
        $id = $postfields['id_usuario'];
        $nome = $postfields['nome'] ?? null;
        $email = $postfields['email'] ?? null;
        $senha = $postfields['senha'] ?? null;
        $tipo_usuario = $postfields['tipo_usuario'] ?? null;
        
        
        

        // Verifica campos obrigatórios
        if(empty($id)) {
            http_response_code(400);
            throw new Exception('ID do cliente é obrigatório');
        }
        if (empty($nome)) {
            http_response_code(400);
            throw new Exception('Nome e Endereço são obrigatórios');
        }

        $sql = "
        UPDATE usuarios SET 
            nome = :nome,
            email = :email,
            senha = :senha,
            tipo_usuario = :tipo_usuario
            WHERE id_usuario = :id_usuario
        ";
        // $sql = "UPDATE usuarios SET nome = :nome, email = :email, senha = :senha, tipo_usuario = :tipo_usuario WHERE id = :id";

        // Supondo que $conn já está definido e conectado ao banco de dados
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id_usuario', $id, PDO::PARAM_INT);
        $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, is_null($email) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':senha', $senha, is_null($senha) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        $stmt->bindParam(':tipo_usuario', $tipo_usuario, is_null($tipo_usuario) ? PDO::PARAM_NULL : PDO::PARAM_STR);
        

        $stmt->execute();

        $result = array(
            'status' => 'success',
            'message' => 'Usuário alterado com sucesso!'
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
