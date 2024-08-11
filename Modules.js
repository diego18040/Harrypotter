export function loadNavbar() {
    const Navbar = `
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./assets/imgs/logo.png" alt="Logo">
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">INFO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SHOP</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MORE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    const navbarContainer = document.getElementById('navbar');
    navbarContainer.innerHTML = Navbar;
}