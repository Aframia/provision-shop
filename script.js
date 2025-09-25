import products from "/data.js"
const storeItems = document.getElementById("items")



products.map( product => {
    const {name} = product

     storeItems.innerHTML +=`
     <section id="${name}">
        <h2>${name}</h2>
        <div class="products" id="products">
        ${displayProducts(product)}
        </div>
      </section>

    `
})

function displayProducts(product){
     return product.items.map( item => {
    const {image,productDetails} = item
    return `
     <div class="product" id="product">
        <img src="${image}" alt="${productDetails.productName}" class="product-image"/>
        <div class="product-details">
            <p class="product-name">${productDetails.productName}</p>
            <div class="price-quantity">
            <p class="quantity">Quantity: ${productDetails.quantity}</p>
            <p class="price">GHC : ${productDetails.productPrice}</p>
            </div>
          </div>
          <div class="product-buttons">
            <button class="increment"> + </button>
            <button class="decrement"> - </button>
          </div>
        </div>
        <hr>`
     }).join("")
     }