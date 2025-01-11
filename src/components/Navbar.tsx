import { Link } from "react-router";
import { ShoppingCart, User } from "lucide-react";

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
  return (
    <nav className="flex flex-row justify-between items-center p-4">
      {/* Logo */}
      <div className="text-2xl font-bold">TAMITI</div>
      {/* navItemList */}
      <div className="flex flex-row flex-wrap justify-center text-xl">
        {navItems.map((navItem) => (
          <div
            key={navItem.id}
            className="px-4 py-2 text-[var(--primary)] hover:text-[var(--primary-hover)]"
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
    </nav>
  );
};
