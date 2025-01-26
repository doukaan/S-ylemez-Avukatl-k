import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState('bg-transparent');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollBackground('bg-[#212730]');
      } else {
        setScrollBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${scrollBackground} text-white py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300`}
    >
      <div className="flex items-center justify-between px-4 lg:px-8">
        <div>
          <img 
            src="/İmages/Logo.png"
            alt="Logo"
            className="md:w-1/5 w-1/2 p-5"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          <a href="#Hero" className="hover:text-gray-300 font-bold">Anasayfa</a>
          <a href="#About" className="hover:text-gray-300 font-bold">Hakkımızda</a>
          <a href="#Services" className="hover:text-gray-300 font-bold">Hizmetler</a>
          <a href="#Contact" className="hover:text-gray-300 font-bold">İletişim</a>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#212730] z-50">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#" className="hover:text-gray-300">Anasayfa</a>
              <a href="#" className="hover:text-gray-300">Hakkımızda</a>
              <a href="#" className="hover:text-gray-300">Hizmetler</a>
              <a href="#" className="hover:text-gray-300">İletişim</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;