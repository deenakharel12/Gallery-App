// Sample gallery data
const galleryItems = [
    { id: 1, category: 'nature', title: 'Mountain View', url: 'https://source.unsplash.com/random/600x400?mountain' },
    { id: 2, category: 'tech', title: 'Modern Laptop', url: 'https://source.unsplash.com/random/600x400?laptop' },
    { id: 3, category: 'art', title: 'Colorful Painting', url: 'https://source.unsplash.com/random/600x400?painting' },
    { id: 4, category: 'nature', title: 'Serene Lake', url: 'https://source.unsplash.com/random/600x400?lake' },
    { id: 5, category: 'tech', title: 'Smartphone', url: 'https://source.unsplash.com/random/600x400?smartphone' },
    { id: 6, category: 'art', title: 'Urban Graffiti', url: 'https://source.unsplash.com/random/600x400?graffiti' },
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
            <img src="${item.url}" alt="${item.title}">
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