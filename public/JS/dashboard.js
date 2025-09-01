document.addEventListener("DOMContentLoaded", function () {
  const userCardTemplate = document.querySelector("[data-user-template]");
  const userCardContainer = document.querySelector("[data-user-cards-container]");
  const searchInput = document.querySelector("[data-search]");
  const searchButton = document.querySelector("[data-search-button]");

  let users = [];

  // Function to filter search results
  function filterResults(value) {
      userCardContainer.innerHTML = ""; // Clear displayed results

      if (value === "") {
          users.forEach((user) => userCardContainer.append(user.element)); // Show all if empty search
          return;
      }

      users.forEach((listing) => {
          if (
              listing.name.toLowerCase().includes(value) ||
              listing.description.toLowerCase().includes(value) ||
              listing.city.toLowerCase().includes(value) ||
              listing.state.toLowerCase().includes(value)
            //   listing.price_per_slot.includes(value)
          ) {
              userCardContainer.append(listing.element);
          }
      });
  }

  //Fetch listings from backend API
  fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => {
          users = data.map((listing) => {
              const card = userCardTemplate.content.cloneNode(true).children[0];
              const image = card.querySelector("[data-image]");
              const header = card.querySelector("[data-header]");
              const body = card.querySelector("[data-body]");
              const footer = card.querySelector("[data-footer]");

              //Set station details dynamically
              image.src = listing.image || "/images/default-placeholder.png"; // Use a default image if missing
              image.alt = listing.title;
              header.textContent = listing.title;
              body.textContent = listing.description;
              footer.textContent = `${listing.city}, ${listing.state}`;
              
              // Store station ID in data attribute
              card.setAttribute("data-id", listing._id);

              // Add click event to navigate when clicking the card
              card.addEventListener("click", function () {
                  window.location.href = `/stations/${listing._id}`;
              });

              userCardContainer.appendChild(card); // Append to container

              return {
                  name: listing.title,
                  description: listing.description,
                  state: listing.state,
                  city: listing.city,
                  slots: listing.available_slots,
                  element: card,
              };
          });

          // Check for search query in URL and auto-search
          const urlParams = new URLSearchParams(window.location.search);
          const searchQuery = urlParams.get("query");

          if (searchQuery) {
              searchInput.value = searchQuery; // Fill input with search query
              filterResults(searchQuery.toLowerCase()); // Auto-perform search
          }
      })
      .catch((error) => {
          console.error("Error fetching listings:", error);
      });

      document.addEventListener("DOMContentLoaded", () => {
        const storedQuery = localStorage.getItem("pendingSearchQuery");
    
        if (storedQuery) {
            searchInput.value = storedQuery;  // Fill input with the stored query
            filterResults(storedQuery);       // Auto-perform search
    
            localStorage.removeItem("pendingSearchQuery"); // Clear after use
        }
    });

  // Ensure search button works correctly
  searchButton.addEventListener("click", (event) => {
    //   event.preventDefault(); // Prevent page reload
      const value = searchInput.value.trim().toLowerCase();
       // Save search query before redirecting
    localStorage.setItem("pendingSearchQuery", value);
      filterResults(value);
  });

  
  // Enable real-time search as user types
  searchInput.addEventListener("input", () => {
      const value = searchInput.value.trim().toLowerCase();
      filterResults(value);
  });
});

