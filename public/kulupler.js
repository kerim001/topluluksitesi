document.addEventListener("DOMContentLoaded", function() {
    fetch('kulupler.json')
        .then(response => response.json())
        .then(data => {
            const clubSelect = document.getElementById('club');
            data.kulupler.forEach(club => {
                const option = document.createElement('option');
                option.value = club;
                option.textContent = club;
                clubSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching the kulpler:', error));
});
