import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center text-white text-xl font-bold">
          <img 
            src="/src/assets/logo.png" 
            alt="Logo" 
            height={100} 
            width={100} 
            className="mr-2" // Logo ve metin arasına boşluk ekler
          />
          <Link to="/">Yigit Bayrak</Link>
        </div>
        
        {/* Menü Links */}
        <div className="flex-1 flex justify-center">
          <div className="space-x-8">
            <Link to="/" className="text-white hover:text-gray-400"> Hakkımda </Link>
            <Link to="/projects" className="text-white hover:text-gray-400"> Projelerim </Link>
            <Link to="/contacts" className="text-white hover:text-gray-400"> İletişim </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
