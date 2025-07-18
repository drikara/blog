import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [blogs, setBlog] = useState([
      {
      id: 1,
      titre: "Découverte de shadcn/ui - La révolution des composants React",
      description: "Shadcn/ui apporte une nouvelle approche des composants UI pour React. Contrairement à une bibliothèque traditionnelle, il vous donne un contrôle total en générant du code que vous pouvez modifier directement. Cet article explore comment cette approche diffère des solutions comme Material UI ou Tailwind UI.",
      date: "18/07/2025",
     
    },
    {
      id: 2,
      titre: "Configurer shadcn/ui dans votre projet Next.js",
      description: "Apprenez à intégrer shadcn/ui dans un projet Next.js étape par étape. Nous couvrirons l'installation, la configuration de Tailwind CSS, et comment personnaliser les thèmes. Découvrez aussi comment cela s'intègre avec les nouvelles fonctionnalités de Next.js 14.",
      date: "19/07/2025",
      photo: "shadcn-setup.jpg"
    },
    {
      id: 3,
      titre: "Créer un système de thème avec shadcn/ui",
      description: "Shadcn/ui rend incroyablement simple l'implémentation du dark mode dans vos applications. Cet article détaille comment utiliser les variables CSS modernes avec Tailwind pour créer un système de thème personnalisable, avec bascule entre light/dark mode et prise en charge du système d'exploitation.",
      date: "20/07/2025",
      
    },
    {
      id: 4,
      titre: "Comparatif : shadcn/ui vs Radix UI vs Tailwind UI",
      description: "Analyse approfondie des différences entre ces trois approches des composants UI. Nous examinerons les cas d'usage idéaux pour chaque solution, les compromis en termes de personnalisation, performances, et maintenance à long terme. Quel choix est le meilleur pour votre prochain projet?",
      date: "21/07/2025",
    
    }, 
    ])
    return (
        <div className='space-y-5 leading-9 mb-10'>
            {blogs.map((blog)=>(
                <div key={blog.id} className='hover:bg-gray-800 hover:cursor-pointer p-5 hover:text-white'>
                    <h1 className='text-2xl font-bold'>{blog.titre}</h1>
                    <p>{blog.description}</p>
                    <small>{blog.date}</small>
                   
                  


                </div>
            ))}
            
            
        </div>
    );
}

export default Home;
