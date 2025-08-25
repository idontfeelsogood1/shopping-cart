import { Link } from "react-router"

function Home() {
    return (
        <main>
            <header>
                <h1>Welcome to Our Shop</h1>
                <p>Discover our amazing products with the best quality and prices.</p>
            </header>
            <button>
                <Link to={{pathname: "/shop"}}>Shop Now</Link>
            </button>
            <div className="container">
                <div className="info-box">
                    <h2>Quality Products</h2>
                    <p>All our products are carefully selected to ensure the highest quality.</p>
                </div>
                <div className="info-box">
                    <h2>Fast Shipping</h2>
                    <p>We deliver your orders quickly and safely to your doorstep.</p>
                </div>
                <div className="info-box">
                    <h2>24/7 Support</h2>
                    <p>Our customer service team is always ready to assist you.</p>
                </div>
            </div>
        </main>
    )
}

export default Home