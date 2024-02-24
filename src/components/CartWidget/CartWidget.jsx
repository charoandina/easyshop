import cart from './assets/shopping-cart.png'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" className={classes.img}/>
            0
        </div>
    )
}

export default CartWidget