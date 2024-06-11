import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">Myntra Clone</div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart</a>
            </div>
        </nav>
    </header>
  )
}

export default Header;
