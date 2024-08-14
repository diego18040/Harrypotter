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
                            <a class="nav-link" href="../index.html">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/wands.html">WANDS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./pages/spells.html">SPELLS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/Stats.html">STATS</a>
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
    cardContainer.innerHTML = characters.map(character => {
      
      const imageSrc = character.image 
          ? character.image 
          : (character.gender === 'male' 
              ? './assets/imgs/genericaMujer.jpeg' 
              : './assets/imgs/genericaHombre.jpeg');
      
      return `
          <div class="col-11 col-md-5 col-lg-2 p-0 m-3">
              <div class="card mx-auto h-100">
                  <img src="${imageSrc}" class="card-img-top img-fluid" alt="${character.name}">
                  <div class="card-body d-flex flex-column">
                      <h5 class="card-title text-center">${character.name}</h5>
                      <p class="card-text text-center">House: ${character.house || 'Unknown'}</p>
                      <div id="containerButton">
                          <a href="../pages/details.html?id=${character.id}" class="text-decoration-none"><p class="text-overlay">Details</p></a>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }).join("");
}
