    document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.querySelector(".prices button");
        const minPriceInput = document.querySelector(".prices input:nth-child(1)");
        const maxPriceInput = document.querySelector(".prices input:nth-child(2)");

        searchButton.addEventListener("click", function(event) {
            event.preventDefault();
            const minPrice = parseFloat(minPriceInput.value);
            const maxPrice = parseFloat(maxPriceInput.value);

            });
    });
