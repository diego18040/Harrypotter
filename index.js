export function loadNavbar() {
    const Navbar = `
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand col-4 col-sm-2 col-md-1" href="./Home.html">
                <img src="./Recursos_Amazing_Events_Task_1/amazing_brand.png" alt="Bootstrap" width="100" height="24">
              </a>
              <button class="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a class="nav-link" href="./Home.html">Home</a>
                  <a class="nav-link" href="./UpcomingEvents.html">Upcoming Events</a>
                  <a class="nav-link" href="./PastEvents.html">Past Events</a>
                  <a class="nav-link" href="./Contact.html">Contact</a>
                  <a class="nav-link" href="./Stats.html">Stats</a>
                </div>
              </div>
          </div>
          </nav>
    `;
    const navbarContainer = document.getElementById('navbar');
    navbarContainer.innerHTML = Navbar;
}