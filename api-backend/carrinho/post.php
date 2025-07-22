<?php
require_once '../headers.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$postfields = json_decode(file_get_contents('php://input'), true);
$id_usuario = $postfields['id_usuario'] ?? null;
$id_ = $postfields['id_game'] ?? null;
$quantidade = $postfields['quantidade'] ?? null;

if (empty($id_usuario) || empty($id_game) || empty($quantidade) || !is_numeric($id_usuario) || !is_numeric($id_game) || !is_numeric($quantidade)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing or invalid required fields']);
    exit;
}

$sql_check = "SELECT id_carrinho FROM carrinho WHERE id_usuario = :id_usuario";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
$stmt_check->execute();
$carrinho = $stmt_check->fetch(PDO::FETCH_OBJ);

if (!$carrinho) {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Cart not found for this client']);
    exit;
}

$id_carrinho = $carrinho->id_carrinho;

$sql_get_qty = "SELECT COALESCE(SUM(quantidade), 0) as quantidade FROM itens_carrinho WHERE id_carrinho = :id_carrinho AND id_game = :id_game";
$stmt_get_qty = $conn->prepare($sql_get_qty);
$stmt_get_qty->bindParam(':id_carrinho', $id_carrinho, PDO::PARAM_INT);
$stmt_get_qty->bindParam(':id_game', $id_game, PDO::PARAM_INT);
$stmt_get_qty->execute();
$total_atual = $stmt_get_qty->fetchColumn();

$nova_quantidade = $total_atual + $quantidade;

$sql_update = "UPDATE itens_carrinho SET quantidade = :quantidade WHERE id_carrinho = :id_carrinho AND id_game = :id_game";
$stmt_update = $conn->prepare($sql_update);
$stmt_update->bindParam(':id_carrinho', $id_carrinho, PDO::PARAM_INT);
$stmt_update->bindParam(':id_game', $id_game, PDO::PARAM_INT);
$stmt_update->bindParam(':quantidade', $nova_quantidade, PDO::PARAM_INT);

if ($stmt_update->execute() && $stmt_update->rowCount() > 0) {
    $result = ['status' => 'success', 'message' => 'Item updated in cart'];
} else {
    $sql_insert = "INSERT INTO itens_carrinho (id_carrinho, id_game, quantidade, preco) SELECT :id_carrinho, :id_game, :quantidade, preco FROM games WHERE id_game = :id_game";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bindParam(':id_carrinho', $id_carrinho, PDO::PARAM_INT);
    $stmt_insert->bindParam(':id_game', $id_game, PDO::PARAM_INT);
    $stmt_insert->bindParam(':quantidade', $nova_quantidade, PDO::PARAM_INT);
    $stmt_insert->execute();
    $result = ['status' => 'success', 'message' => 'Item added to cart'];
}

echo json_encode($result);
$conn = null;
?>

