document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.search-icon');
  const searchBar = document.querySelector('.search-bar');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  searchIcon.addEventListener('click', function () {
    searchBar.classList.toggle('active');
  });

  displayProducts();
});



async function displayProducts() {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    const productsContainer = document.querySelector('.products');

    productsContainer.innerHTML = ''; // Limpiar el contenedor de productos

    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      productElement.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <div class="product-info">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        </div>
      `;

      productsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}
