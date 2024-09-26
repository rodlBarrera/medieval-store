import './NavBar.css';
import logo from '../../assets/logo.jpg';
import CartWidget from '../cart-widget/CartWidget';

function NavBar() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo del mercadillo medieval" />
                <span>Mercadillo Medieval</span>
            </div>
            <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#merchants">Mercaderes</a></li>
                <li><a href="#events">Eventos</a></li>
            </ul>
            <CartWidget />

          </nav>
        </header>
        
    )
}

export default NavBar;