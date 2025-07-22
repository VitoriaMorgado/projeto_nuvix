<?php
// INICIAR SESSÃO GLOBAL
session_start(); // PERMITE TRABALHAR COM VARIÁVEIS GLOBAIS

// EXIBIR DADOS DO ARRAY (vetor)
// var_dump($_POST);exit;

if($_POST) {
    // ARMAZENA OS DADOS DIGITADOS NA TELA DE LOGIN
    $email = $_POST["email"];
    echo $email; // DEBUG
    $senha = $_POST["senha"];
    $remember = $_POST["remember"] ?? "off";

    // VERIFICA SE O EMAIL E SENHA ESTÃO CORRETOS
    require("requests/login/get.php");
    // var_dump($response);exit;
    if ($response['status'] == "success") {
        $_SESSION["autenticado"] = true; // CRIA VARIÁVEL GLOBAL
        $_SESSION["tempo_login"] = time(); // CRIA VARIÁVEL COM TEMPO DE LOGIN

        // VERIFICAR SE É NECESSÁRIO GRAVAR EMAIL E SENHA
        if($remember == "on") {
            setcookie("email", $email);
            setcookie("senha", $senha);
            setcookie("remember", $remember);
        } else {
            setcookie("email");
            setcookie("senha");
            setcookie("remember");
        }

        $_SESSION['url'] = "http://localhost:8081";
        header("Location: ./index.php");
    } else {
        $_SESSION['msg'] = "E-mail ou senha incorretos!";
        header("Location: ./tela-login.php");
    }

} else {
    // REDIRECIONA PARA A TELA DE LOGIN
    header("Location: ./tela-login.php");
}
