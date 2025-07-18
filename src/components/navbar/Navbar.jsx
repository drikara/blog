import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='py-7 border-b-2'>
        <ul className='flex justify-between'>
          <li>
            <Link to="/" className='hover:text-orange-400 font-bold'>
              Ouattara <span className='text-amber-600 hover:text-orange-400'>Dev</span>
            </Link>
          </li>
          <div className='flex gap-5'>
            <li>
              <Link to="/accueil" className='hover:text-orange-400'>Accueil</Link>
            </li>
            <li>
              <Link 
                to="/create-article" 
                className='bg-blue-500 p-2 text-white rounded hover:bg-amber-600'
              >
                Créer un article
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;