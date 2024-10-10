const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// Cart functionality handle karne ke liye JavaScript code
document.querySelector('.navbar-cart').addEventListener('click', function() {
    // Code jo cart me items display karega
});


// Cart items ko store karne ke liye ek array
let cart = [];

// Add to Cart button ke click event ko handle karne ke liye
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// Product ko cart me add karne ka function
function addToCart(productId) {
    // Check karen ke product already cart me hai ya nahi
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex === -1) {
        // Agar product cart me nahi hai to add karen
        cart.push({ id: productId, quantity: 1 });
    } else {
        // Agar product already cart me hai to quantity increase karen
        cart[productIndex].quantity += 1;
    }
    updateCartDisplay();
}

// Cart ko update karne ka function
function updateCartDisplay() {
    // Cart ko display karne ka code yahan likhen
    console.log(cart);
}
