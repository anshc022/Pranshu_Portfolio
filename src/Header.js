import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pranshu's Portfolio</h1>
        <nav className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li className="my-2 md:my-0">
              <a href="#about" className="text-lg hover:text-purple-500">About</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#projects" className="text-lg hover:text-purple-500">Projects</a>
            </li>
            <li className="my-2 md:my-0">
              <a href="#contact" className="text-lg hover:text-purple-500">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Header;
