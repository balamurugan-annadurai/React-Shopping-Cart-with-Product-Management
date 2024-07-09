import React, { useContext, useEffect, useState } from 'react'
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

//Header Component
const Header = () => {
    // Initialize 'isScroll' state variable to false and provide 'setIsScroll' function to update it.
    const [isScroll, setIsScroll] = useState(false);
    const { productCount } = useContext(MyContext);
    
    // Add an event listener to update 'isScroll' state based on window scroll position
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScroll(true);
            }
            else {
                setIsScroll(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []) // Empty dependency array ensures this effect runs only once
    
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate('/cart');
    }

    return (
        <header className={isScroll ? 'scrolled' : ""}>
            <div className='header'>
                <div className="left">
                    <h1>logo</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className='cart' onClick={handleCartClick}>
                    <span className='icon'><i className='bx bxs-cart'></i></span>
                    <p className='cart-title'>Cart</p>
                    <p className='count'>{productCount}</p>
                </div>
            </div>
        </header>

    )
}

export default Header