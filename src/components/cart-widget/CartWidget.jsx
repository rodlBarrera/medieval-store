import cart from '../../assets/cart.svg';
import './CartWidget.css';

function CartWidget() {
    return (
        <div className='cartWidget'>
            <img className='cartIcon' src={cart} alt="cart" />
            <span className='itemInCart'>5</span>
        </div>
    );
}

export default CartWidget;