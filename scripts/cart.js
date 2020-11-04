const clearCart = document.getElementById('clear__cart');

clearCart.addEventListener("click", ()=>{
    window.localStorage.removeItem('cart');
});