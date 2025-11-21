// Sample gallery data with direct, reliable image URLs
const galleryItems = [
    { 
        id: 1, 
        category: 'nature', 
        title: 'Mountain View', 
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
    },
    { 
        id: 2, 
        category: 'tech', 
        title: 'Modern Laptop', 
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80' 
    },
    { 
        id: 3, 
        category: 'art', 
        title: 'Colorful Painting', 
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
    },
    { 
        id: 4, 
        category: 'nature', 
        title: 'Serene Lake', 
        url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' 
    },
    { 
        id: 5, 
        category: 'tech', 
        title: 'Smartphone', 
        url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
    },
    { 
        id: 6, 
        category: 'art', 
        title: 'Urban Graffiti', 
        url: 'https://images.unsplash.com/photo-1509909756405-bea988e16b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
    },
];

const galleryContainer = document.querySelector('.gallery-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to display gallery items
function displayItems(items) {
    galleryContainer.innerHTML = ''; // Clear the container
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('gallery-item');
        itemElement.setAttribute('data-category', item.category);
        itemElement.innerHTML = `
            <img src="${item.url}" alt="${item.title}" loading="lazy">
            <div class="item-info">
                <h3>${item.title}</h3>
                <p>Category: <strong>${item.category}</strong></p>
            </div>
        `;
        galleryContainer.appendChild(itemElement);
    });
}

// Function to handle filtering
function filterItems(category) {
    if (category === 'all') {
        displayItems(galleryItems);
    } else {
        const filteredItems = galleryItems.filter(item => item.category === category);
        displayItems(filteredItems);
    }
}

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Filter the items
        const filter = button.getAttribute('data-filter');
        filterItems(filter);
    });
});

// Initialize the gallery by displaying all items
displayItems(galleryItems);