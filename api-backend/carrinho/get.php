<?php
require_once '../headers.php';

if (isset($_GET['id_usuario']) && is_numeric($_GET['id_usuario'])) {
    $id_usuario = $_GET['id_usuario'];
    $sql = "SELECT carrinho.id_carrinho, carrinho.data_criacao, carrinho.id_usuario, usuario.nome AS nome, 
            itens_carrinho.id, itens_carrinho.id_game, itens_carrinho.quantidade, games.preco,
            games.titulo, games.descricao, games.desenvolvedora, games.imagem, games.desenvolvedora,
            FROM carrinho AS carrinho
            JOIN usuario AS usuario ON carrinho.id_usuario = usuario.id_usuario
            JOIN itens_carrinho AS itens_carrinho ON itens_carrinho.id_carrinho = carrinho.id_carrinho
            JOIN games AS games ON games.id_game = itens_carrinho.id_game
            WHERE carrinho.id_usuario = :id_usuario";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
} elseif (!isset($_GET['id_usuario']) || $_GET['id_usuario'] === 'all') {
    $sql = "SELECT carrinho.id_carrinho, carrinho.data_cracao, carrinho.id_usuario, usuario.nome AS nome, 
            itens_carrinho.id, itens_carrinho.id_game, itens_carrinho.quantidade, games.preco,
            games.titulo, games.descricao, games.desenvolvedora, games.imagem, games.desenvolvedora,
            FROM carrinho AS carrinho
            JOIN usuario AS usuario ON carrinho.id_usuario = usuario.id_usuario
            JOIN itens_carrinho AS itens_carrinho ON itens_carrinho.id_carrinho = c.id_carrinho
            JOIN games AS games ON games.id_game = itens_carrinho.id_game";
    $stmt = $conn->prepare($sql);
} else {
    $data = [];
    $total = 0;
    $result = [
        'status' => 'error',
        'message' => 'ID do cliente inválido',
        'data' => ['items' => $data, 'total' => $total]
    ];
    echo json_encode($result);
    $conn = null;
    exit;
}

$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_OBJ);

$carrinho = [];
foreach ($rows as $row) {
    $id_carrinho = $row->id_carrinho;
    if (!isset($carrinho[$id_carrinho])) {
        $carrinho[$id_carrinho] = [
            'id_carrinho' => $row->id_carrinho,
            'data_criacao' => $row->data_criacao,
            'id_cliente' => $row->id_cliente,
            'nome' => $row->nome,
            'games' => [],
            'preco_total' => 0,
        ];
    }
    $id_game = $row->id_game;
    if (!isset($carrinho[$id_carrinho]['games'][$id_game])) {
        $carrinho[$id_carrinho]['games'][$id_game] = [
            'id' => $row->id,
            'id_game' => $row->id_game,
            'titulo' => $row->titulo,
            'quantidade' => 0,
            'preco' => $row->preco,
            'descricao' => $row->descricao,
            'desenvolvedora' => $row->desenvolvedora,
            'imagem' => $row->imagem,
        ];
    }
    $carrinho[$id_carrinho]['games'][$id_produto]['quantidade'] += $row->quantidade;
    $carrinho[$id_carrinho]['preco_total'] += $row->preco * $row->quantidade;
}

$data = array_values(array_map(function($carrinho) {
    return [
        'id_carrinho' => $carrinho['id_carrinho'],
        'data' => $carrinho['data'],
        'id_cliente' => $carrinho['id_cliente'],
        'nome' => $carrinho['nome'],
        'games' => array_values($carrinho['games']),
        'preco_total' => $carrinho['preco_total'],
    ];
}, $carrinho));
$total = array_sum(array_column($data, 'preco_total'));

$result = [
    'status' => 'success',
    'message' => 'Cart data found',
    'data' => ['items' => $data, 'total' => $total]
];
echo json_encode($result);
$conn = null;
?>