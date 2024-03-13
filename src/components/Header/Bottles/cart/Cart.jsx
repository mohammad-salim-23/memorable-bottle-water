import  PropTypes from 'prop-types'
import './cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>cart:{cart.length}</h4>
            <div className="cartContainer">
                {cart.map(bottle=><div key={bottle.id}>
                    <img key={bottle.id} src={bottle.img}></img>
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}
export default Cart;