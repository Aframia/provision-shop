//imports
import products from "/data.js"

// DOM elements
const storeItems = document.getElementById("items")


// display categories

products.map( product => {
    const {name} = product

     storeItems.innerHTML +=`
     <section id="${product.id}">
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
            <p class="quantity" id="${productDetails.id}">Quantity: ${productDetails.quantity}</p>
            <p class="price">GHC : ${productDetails.productPrice}</p>
            </div>
          </div>
          <div class="product-buttons">
            <button class="increment" data-add="${productDetails.id}"> + </button>
            <button class="decrement" data-remove="${productDetails.id}"> - </button>
          </div>
        </div>
        <hr>`
     }).join("")
     }
// increment and decrement functions

document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        findParent(e.target.dataset.add)
        addQuantity(e.target.dataset.add)
    
    }
   // if(e.target.dataset.remove){
     //   removeQuantity(e.target.dataset.remove)
    //}
})
function addQuantity(itemId){
    const quantity= findProduct(itemId)
    console.log(quantity)

}
function findParent(itemId){
   products.filter(function(product){
      return product.items.filter(function(item){
        return item.items.filter(function(item){
       if(item.productDetails.id === itemId){
        return item.productDetails.quantity ++;
       }
    })
}
})
}


