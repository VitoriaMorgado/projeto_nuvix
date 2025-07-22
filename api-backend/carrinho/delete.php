<?php
require_once '../headers.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$id_usuario = $_GET['id_usuario'] ?? null;
$id_game = $_GET['id_game'] ?? null;

if (empty($id_usuario) || empty($id_game) || !is_numeric($id_usuario) || !is_numeric($id_game)) {
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

$sql = "DELETE FROM itens_carrinho WHERE id_carrinho = :id_carrinho AND id_game = :id_game";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id_carrinho', $id_carrinho, PDO::PARAM_INT);
$stmt->bindParam(':id_game', $id_game, PDO::PARAM_INT);
$stmt->execute();

$result = [
    'status' => 'success',
    'message' => 'Item removed from cart'
];
echo json_encode($result);
$conn = null;
?>