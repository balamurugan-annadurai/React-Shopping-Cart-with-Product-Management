import React, { useContext, useEffect, useState } from 'react'
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

//Header Component
const CartPageHeader = () => {
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
    const handleClick = () => {
        navigate('/');
    }

    return (
        <header className={isScroll ? 'scrolled' : ""}>
            <div className='header'>
                <div className="left">
                    <h1>logo</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li className="nav-item dropdown">

                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All watches</a></li>
                                <li><a className="dropdown-item" href="#!">Apple watches</a></li>
                                <li><a className="dropdown-item" href="#!">Latest launch</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='cart custom-for-cart' onClick={handleClick}>
                    <span className='cart-icon'><i className='bx bxs-chevrons-left' ></i></span>
                    <p className='cart-title'>Products</p>
                </div>
            </div>
        </header>

    )
}

export default CartPageHeader