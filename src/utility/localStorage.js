const getStoredcart=()=>{
    const storedCartString =  localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];

}
const SaveCartToLs=cart=>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}
const addToLS=id=>{
    const cart = getStoredcart();
    cart.push(id);
    // save to local storage
    SaveCartToLs(cart);
}
const removeFromLS = id=>{
    const cart = getStoredcart();
    // removing every id
    const remaining = cart.filter(idx=> idx!==id);
    SaveCartToLs(remaining);
}
export {addToLS,getStoredcart,removeFromLS};