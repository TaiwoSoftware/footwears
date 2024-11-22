import { Link } from "react-router-dom";
const NavLinks: React.FC = () => {
  return (
    <div className="font-customNunito text-white">
      <Link to="/" className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange">
        Home
      </Link>
      <Link to="/about" className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange">
        About Us
      </Link>
      <Link to="/shop" className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange">
        Shop Now
      </Link>
      <Link to="/contact" className="mr-4 text-[1.2rem] hover:underline hover:text-logo-orange">
        Contact Us
      </Link>
      <Link to="/search" className="mr-4  items-center gap-2 text-[1.2rem] hover:underline hover:text-logo-orange">
          Search 
      </Link>
    </div>
  );
};

export default NavLinks;
