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
            <p class="quantity" >Quantity: <span id="${productDetails.id}"> ${productDetails.quantity}</span> </p>
            <p class="price">GHC :   ${productDetails.productPrice}</p>
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
document.addEventListener("click", function(e) {
    if (e.target.dataset.add) {
        let itemId = e.target.dataset.add;
        addQuantity(itemId);
        showOrder()
    }
    if (e.target.dataset.remove) {
        removeQuantity(e.target.dataset.remove);
    }
});

function addQuantity(itemId) {
     updateQuantity(itemId, true);
}

function removeQuantity(itemId) {
    updateQuantity(itemId, false)
}
//update quantity functionality
function updateQuantity(itemId, isAdding) {
    let updatedQuantity = 0;

    products.forEach(function(product) {
        product.items.forEach(function(item) {
            if (item.productDetails.id === itemId) {
                if (isAdding) {
                  item.productDetails.isBought = true
                    item.productDetails.quantity++;
                } else if (item.productDetails.quantity > 0) {
                  item.productDetails.isBought = false
                    item.productDetails.quantity--;
                }
                updatedQuantity = item.productDetails.quantity;
                // Update the displayed quantity if the element exists
                const itemElement = document.getElementById(itemId);
                if (itemElement) {
                    itemElement.textContent = `${updatedQuantity}`;
                }
            }
        });
    });

    return updatedQuantity;
}
let items = []
 let total = []

//showOrder functionality
function showOrder(){
  document.getElementById("order").classList.remove("hidden")
  products.forEach(function(product){
   product.items.map(function (item){

    if(item.productDetails.quantity >= 1){

      if(!items.includes(item.productDetails.productName)){
       items.push(item.productDetails.productName)
       console.log(items)
     
      }
      if(item.productDetails.quantity){
        console.log(items)
        total.push(item.productDetails.productPrice * item.productDetails.quantity)
        console.log(total)
      }
   let html = `
       <div class="newOrder">
       <p>${item.productDetails.productName}<span id="remove"> remove </span></p>
       <p id="total">${total}</p>
       </div>

       `
       document.getElementById("order-details").innerHTML += html
      
      }
      
  
    })
 
})

}
