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
                            <a class="nav-link" href="./pages/spells.html">SPELLS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    const navbarContainer = document.getElementById('navbar');
    navbarContainer.innerHTML = Navbar;
}
export function renderCharacters(characters) {
    const cardContainer = document.getElementById('card-temple');
    if (characters.length === 0) {
        cardContainer.innerHTML = `
          <div class="no-results text-center">
            <h3>"UPSS.... " Lo sentimos, no hay coincidencias para tu búsqueda.</h3>
            <ul class="list-unstyled">
              <li>Revisa la ortografía del nombre.</li>
              <li>Asegúrate de escribir sin caracteres especiales.</li>
              <li>Prueba con otro nombre.</li>
            </ul>
          </div>
        `;
        return;
    }
    cardContainer.innerHTML = characters.map(character => `
      <div class="col-11 col-md-5 col-lg-2 p-0 m-3">
        <div class="card mx-auto h-100">
          <img src="${character.image}" class="card-img-top img-fluid" alt="${character.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">${character.name}</h5>
            <p class="card-text text-center">House: ${character.house || 'Unknown'}</p>
            <div class="containerButton">
           <img src="./assets/icons/isolated_old.png" alt="Descripción de la imagen" class="image">
             <a href="../pages/details.html?id=${character.id}"><p class="text-overlay">Details</p></a>
        </div>
          </div>
        </div>
      </div>
    `).join("");
}

