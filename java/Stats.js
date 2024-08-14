import { loadNavbar } from "./modules/Modules.js";

document.addEventListener("DOMContentLoaded", async function() {
    loadNavbar();

    try {
        // Fetch data from the API
        const response = await fetch("https://hp-api.onrender.com/api/characters");
        const characters = await response.json();

        // Count characters by house
        const houseCounts = characters.reduce((acc, character) => {
            const house = character.house || 'Unknown';
            // Filter out empty or 'Unknown' house values
            if (house && house !== '302' && house !== 'Unknown') {
                acc[house] = (acc[house] || 0) + 1;
            }
            return acc;
        }, {});

        // Count characters by species
        const speciesCounts = characters.reduce((acc, character) => {
            const species = character.species || 'Unknown';
            acc[species] = (acc[species] || 0) + 1;
            return acc;
        }, {});

        // Count characters by alive status
        const aliveCounts = characters.reduce((acc, character) => {
            const status = character.alive ? 'Alive' : 'Deceased';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        // Filter out empty data for species
        const filteredSpeciesCounts = Object.fromEntries(
            Object.entries(speciesCounts).filter(([species, count]) => count > 1 && species !== 'Unknown')
        );

        // Populate houseStats table
        const houseStatsTable = document.getElementById('houseStats');
        for (const [house, count] of Object.entries(houseCounts)) {
            if (house && house !== 'Unknown') {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${house}</td><td>${count}</td>`;
                houseStatsTable.appendChild(row);
            }
        }

        // Populate speciesStats table with filter
        const speciesStatsTable = document.getElementById('speciesStats');
        for (const [species, count] of Object.entries(filteredSpeciesCounts)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${species}</td><td>${count}</td>`;
            speciesStatsTable.appendChild(row);
        }

        // Populate aliveStats table
        const aliveStatsTable = document.getElementById('aliveStats');
        for (const [status, count] of Object.entries(aliveCounts)) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${status}</td><td>${count}</td>`;
            aliveStatsTable.appendChild(row);
        }

        // Create charts
        const houseCtx = document.getElementById("houseChart").getContext("2d");
        const speciesCtx = document.getElementById("speciesChart").getContext("2d");
        const aliveCtx = document.getElementById("aliveChart").getContext("2d");

        new Chart(houseCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(houseCounts),
                datasets: [{
                    data: Object.values(houseCounts),
                    backgroundColor: ['#7F0909', '#2A623D', '#0E1A40', '#EEE117']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });

        new Chart(speciesCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(filteredSpeciesCounts),
                datasets: [{
                    data: Object.values(filteredSpeciesCounts),
                    backgroundColor: ['#f5dd8d', '#36A2EB', '#FFCE56', '#E0E0E0','#50a53fcb','#d6a915cb','#bf15d6cb',
                        '#000000cb','#219c82','#034403','#440303','#69500ac9']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });

        new Chart(aliveCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(aliveCounts),
                datasets: [{
                    data: Object.values(aliveCounts),
                    backgroundColor: ['#4CAF50', '#F44336']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
