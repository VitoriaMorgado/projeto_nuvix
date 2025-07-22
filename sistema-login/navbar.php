<!-- Barra de navegação -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?php echo $_SESSION["url"];?>/">Dashboard</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link <?php echo $pagina == "games" ? 'active' : ''; ?>"
                        href="<?php echo $_SESSION["url"];?>/games">Games</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo $pagina == "usuarios" ? 'active' : ''; ?>"
                        href="<?php echo $_SESSION["url"];?>/usuarios">Usuários</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo $pagina == "dev" ? 'active' : ''; ?>"
                        href="<?php echo $_SESSION["url"];?>/dev">Desenvolvedores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $_SESSION["url"];?>/encerrar-sessao.php">Sair</a>
                </li>
            </ul>
        </div>
    </div>
</nav>