import React, { useState } from "react";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Moon from "./assets/icons/moon.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./movies/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="p-[1.25rem] flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width={139} height={26} alt="" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width={24} height={24} alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width={24} height={24} alt="moon" />
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-[#00D991]/20 dark:bg-[#00D991]/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={ShoppingCart}
                width={24}
                height={24}
                alt="shopping cart"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
