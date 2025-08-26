import { Link } from "react-router"
import style from './Home.module.css'

function Home() {
    return (
        <main className={style.home}>
            <header>
                <h1>Welcome to Our Shop</h1>
                <p>Discover our amazing products with the best quality and prices.</p>
                <button>
                    <Link className={style.link} to={{pathname: "/shop"}}>Shop Now</Link>
                </button>
            </header>
            <div className={style.container}>
                <div className={style.infoBox}>
                    <h3>Quality Products</h3>
                    <p>All our products are carefully selected to ensure the highest quality.</p>
                </div>
                <div className={style.infoBox}>
                    <h3>Fast Shipping</h3>
                    <p>We deliver your orders quickly and safely to your doorstep.</p>
                </div>
                <div className={style.infoBox}>
                    <h3>24/7 Support</h3>
                    <p>Our customer service team is always ready to assist you.</p>
                </div>
            </div>
        </main>
    )
}

export default Home