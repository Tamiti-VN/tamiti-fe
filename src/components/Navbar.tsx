import { Link } from "react-router";
import { List, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Cakes by Object", path: "" },
  { id: 3, name: "Cakes by Theme", path: "" },
  { id: 4, name: "Cakes by Holiday", path: "" },
  { id: 5, name: "Offering Cakes", path: "" },
  { id: 6, name: "Party Cake Set", path: "" },
  { id: 7, name: "Mini Gift Cakes", path: "" },
  { id: 8, name: "Daily Cakes", path: "" },
  { id: 9, name: "Decorative Accessories", path: "" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative flex flex-row justify-between items-center p-4 gap-6">
      {/* Menu Button for Small Screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[var(--primary)]">
          <List className="size-6" />
        </button>
      </div>
      {/* Logo */}
      <div className="text-2xl font-bold">TAMITI</div>
      {/* navItemList */}
      <div className="max-lg:hidden flex flex-row flex-wrap justify-center text-xl max-w-screen-xl">
        {navItems.map((navItem) => (
          <div
            key={navItem.id}
            className="p-4 text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            <Link to={navItem.path}>{navItem.name}</Link>
          </div>
        ))}
      </div>
      {/* Cart/Login */}
      <div className="flex flex-row items-center space-x-4 text-gray-700">
        <Link to="" className="flex items-center space-x-2 ">
          <User />
        </Link>
        <Link to="" className="flex items-center space-x-2 ">
          <ShoppingCart />
        </Link>
      </div>
      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white  z-50">
          {navItems.map((navItem) => (
            <div key={navItem.id} className="p-4">
              <Link
                className="text-[var(--primary)] "
                to={navItem.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.name}
              </Link>
              <hr className="border-[var(--border)]" />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
