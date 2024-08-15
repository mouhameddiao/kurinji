import React from 'react';

function About() {
  return (
    <div className="about-page bg-blend-soft-light text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-2xl font-extrabold mb-6 text-black underline">À Propos de Notre Boutique</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-black font-serif tracking-wide">
            Bienvenue dans notre univers où l'élégance rencontre l'originalité, où chaque pièce est soigneusement sélectionnée pour 
            incarner l'essence du style et de la sophistication. Notre boutique est bien plus qu'un simple magasin : c'est un havre 
            de créativité où chaque vêtement raconte une histoire, où la mode devient une forme d'expression artistique. Nous croyons 
            que chaque client est unique, c'est pourquoi nous nous efforçons de proposer une collection variée qui reflète diverses 
            personnalités et styles de vie. Depuis nos débuts, nous nous engageons à offrir une expérience d'achat exceptionnelle, 
            combinant une qualité inégalée, des designs exclusifs, et un service client irréprochable. Que vous recherchiez la pièce 
            parfaite pour une occasion spéciale ou une tenue décontractée pour le quotidien, vous trouverez toujours quelque chose 
            d'extraordinaire dans notre boutique. Rejoignez-nous dans cette aventure stylistique et découvrez ce que signifie véritablement 
            être à la mode avec passion et distinction.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/media/cache/tmb_gallery_option/rc/h1tlan2o/userfiles/81001/Vente%20des%20vetements%20%C3%80%20MAMETZ%C2%A0-1.png" 
               alt="Boutique Image" 
               className="rounded-lg shadow-xl w-full md:w-4/5 lg:w-3/4 transition-transform transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

export default About;
