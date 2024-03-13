import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredcart,  removeFromLS } from "../../../utility/localStorage";
import Cart from "./cart/Cart";
const Bottles = () => {

    const [bottle,setBottle] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('Bottles.json')
        .then(res=>res.json())
        .then(data=>setBottle(data));
    },[])
    // load cart from local storage
    useEffect(()=>{
        console.log(bottle.length);
       
        if(bottle.length){
            const storedCart = getStoredcart();
            console.log(storedCart,bottle);
            const saveCart = [];
             for(const id of storedCart){
                console.log(id);
                const foundbottle = bottle.find(bottle=>bottle.id===id);
                if(foundbottle){
                      saveCart.push(id);
                }
             }
             console.log(saveCart);
             setCart(saveCart);
        }
    },[bottle])
    const handleAddToCart = bottle=>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    const handleRemoveFromCart = id=>{
            //  visual cart remove
            const remainingCart = cart.filter(bottle=>bottle.id!==id);
            setCart(remainingCart);
            // remove from localstorage
            removeFromLS(id);
          
    }
    return (
        <div>
           <h2>Bottles:{bottle.length}</h2> 
           
           <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

          <div className="bottle-container">
          {
            bottle.map(bottle=><Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottles;