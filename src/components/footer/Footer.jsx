import React from 'react';

const Footer = () => {
    const date = new Date();
    const annee = date.getFullYear()

    return (
        <div className=' text-center border-b-2 border-gray-700  mb-5'>
          <p className='mb-2'> ©  copytight - {annee} Mon Application. Tous droits réservés.</p>
            
        </div>
    );
}

export default Footer;
