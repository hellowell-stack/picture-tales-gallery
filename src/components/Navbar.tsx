
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="text-2xl font-medium font-serif">Picture Tales</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <Link to="/albums" className="hover:text-gray-600 transition-colors">Albums</Link>
      </div>
    </nav>
  );
};

export default Navbar;
