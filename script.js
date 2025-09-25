//imports
import products from "/data.js"

// DOM elements
const storeItems = document.getElementById("items")


// display categories

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
// display products
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
            <button class="increment" data-action="increment"> + </button>
            <button class="decrement"> - </button>
          </div>
        </div>
        <hr>`
     }).join("")
     }
// increment and decrement functions
const increment = document.querySelectorAll(".increment")
const decrement = document.querySelectorAll(".decrement")

function addQuantity(){
    console.log("increment")
}
addQuantity()
function removeQuantity(){
    console.log("decrement")
}

removeQuantity()
