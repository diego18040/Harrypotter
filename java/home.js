import { loadNavbar, renderCharacters } from "./modules/Modules.js";

document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();

    const filterStudentsButton = document.getElementById('filter-students');
    const filterStaffButton = document.getElementById('filter-staff');
    const searchBar = document.getElementById('search-bar');
    const cardContainer = document.getElementById('card-temple');
    const paginationContainer = document.getElementById('pagination');

    let currentPage = 1;
    const cardsPerPage = 10;
    let filteredData = [];
    let displayedData = [];

    const fetchData = async (role) => {
        try {
            const response = await fetch('https://hp-api.onrender.com/api/characters');
            const data = await response.json();
            filteredData = data.filter(character => character[role] === true);
            currentPage = 1; // Reinicia a la primera página cuando se filtra
            applySearchFilter();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const applySearchFilter = () => {
        const searchTerm = searchBar.value.toLowerCase();
        displayedData = filteredData.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderPage();
    };

    const renderPage = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const paginatedData = displayedData.slice(startIndex, startIndex + cardsPerPage);
        renderCharacters(paginatedData);

        if (displayedData.length === 0) {
            cardContainer.innerHTML = `
                <div class="no-results">
                    <h3>"UPSS.... "Sorry, no match found for your search.</h3>
                    <ul>
                        <li>Check the spelling of the name.</li>
                        <li> Make sure you write without special characters.</li>
              <li> That wizard does not go to Hogwarts.</li>
                    </ul>
                </div>
            `;
        }

        renderPagination();
    };

    const renderPagination = () => {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(displayedData.length / cardsPerPage);

        if (totalPages > 1) {
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
        }
    };

    searchBar.addEventListener('input', applySearchFilter);

    filterStudentsButton.addEventListener('click', () => fetchData('hogwartsStudent'));
    filterStaffButton.addEventListener('click', () => fetchData('hogwartsStaff'));

    // Cargar estudiantes por defecto
    fetchData('hogwartsStudent');
});
