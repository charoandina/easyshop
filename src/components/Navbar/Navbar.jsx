import classes from './Navbar.module.css'
import logo from '../../img/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <a href="#"><img src={logo} alt="" className={classes.imagen}/></a>
                <nav className={classes.nav}>
                    <a href="#" className={classes.a}>BEBIDAS</a>
                    <a href="#" className={classes.a}>FRUTAS & VERDURAS</a>
                    <a href="#" className={classes.a}>GOLOSINAS</a>
                    <a href="#" className={classes.a}>PERFUMERIA</a>
                </nav>
                <CartWidget/>
        </header>
    )
}

export default Navbar