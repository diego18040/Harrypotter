import { loadNavbar, renderCharacters } from "./modules/Modules.js";

document.addEventListener("DOMContentLoaded", function() {
    loadNavbar();


    const filterStudentsButton = document.getElementById('filter-students');
    const filterStaffButton = document.getElementById('filter-staff');
    const searchBar = document.getElementById('search-bar');
    const searchForm = document.getElementById('search-form');
    const cardContainer = document.getElementById('card-temple');
    const paginationContainer = document.getElementById('pagination');

    let currentPage = 1;
    const cardsPerPage = 10;
    let filteredData = [];

    const fetchData = async (role) => {
        try {
            const response = await fetch('https://hp-api.onrender.com/api/characters');
            const data = await response.json();
            filteredData = data.filter(character => character[role] === true);
            currentPage = 1; // Reset to the first page when filtering
            renderPage();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderPage = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const paginatedData = filteredData.slice(startIndex, startIndex + cardsPerPage);
        renderCharacters(paginatedData);

        renderPagination();
    };

    const renderPagination = () => {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(filteredData.length / cardsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = 'page-item' + (i === currentPage ? ' active' : '');
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderPage();
            });
            paginationContainer.appendChild(li);
        }
    };

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchBar.value.toLowerCase();
        filteredData = filteredData.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderPage();

        if (filteredData.length === 0) {
            cardContainer.innerHTML = `
                <div class="no-results">
                    <h3>"UPSS.... " Lo sentimos al parecer, no hay buenas coincidencias para tu búsqueda.</h3>
                    <ul>
                        <li>Revisa la ortografía de la palabra.</li>
                        <li>Asegurate de escribir sin carácteres especiales.</li>
                        <li>Desactiva las casillas para mayores resultados.</li>
                    </ul>
                </div>
            `;
        }
    });


    filterStudentsButton.addEventListener('click', () => fetchData('hogwartsStudent'));
    filterStaffButton.addEventListener('click', () => fetchData('hogwartsStaff'));

    // Load students by default
    fetchData('hogwartsStudent');
});


