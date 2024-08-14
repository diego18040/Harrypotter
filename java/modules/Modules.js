export function loadNavbar() {
    const Navbar = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary>
            <div class="container-fluid">
                <a class="navbar-brand col-4 col-sm-2 col-md-1" href="../index.html">
                    <img src="../assets/imgs/logo.png" alt="Logo">
                </a>
                <button class="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link" href="../index.html">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">INFO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/Stats.html">STATS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/spells.html">SPELLS</a>
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
            <div class="" id="containerButton">
              <a href="../pages/details.html?id=${character.id}" class="text-decoration-none"><p class="text-overlay">Details</p></a>
            </div>
          </div>
        </div>
      </div>
    `).join("");
}
