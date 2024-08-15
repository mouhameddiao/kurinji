// src/components/OutfitsFemme.js
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const sections = [
  {
    id: 'tshirts',
    title: 'T-Shirts',
    products: [
      { id: 1, name: 'Oversized Female',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/b9/fb/3b/b9fb3b181c12c146f1e76aba8decd92c.jpg' },
      { id: 2, name: 'City of Dream',  price: 9250, imageUrl: 'https://i.pinimg.com/564x/2f/2a/ec/2f2aec33a79521f68c37ed06af2a7ae4.jpg' },
      { id: 3, name: 'T-Shirt Fashion', price: 5300, imageUrl: 'https://i.pinimg.com/564x/02/90/5c/02905cadb534edccb8cba44c7435dbe7.jpg' },
      { id: 4, name: 'T-Shirt Letters',  price: 6575, imageUrl: 'https://i.pinimg.com/564x/87/67/1f/87671f85536132a76193d18598900766.jpg' },
      { id: 5, name: 'T-Shirt Printed', price: 7450, imageUrl: 'https://i.pinimg.com/564x/17/5b/1b/175b1bcf355bbb0dd2381f9e94fb26d9.jpg' },
      { id: 6, name: 'Fashion Sierra',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/e1/0e/fe/e10efe08d8a7a5913e2d8c7ccfb9c201.jpg' },
      { id: 7, name: 'T-shirt Nostalgia',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/5e/c8/fa/5ec8fab407fc2724863be17f0119131e.jpg' },
      { id: 8, name: 'T-shirt Casual',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/0a/c7/ba/0ac7bac5c59090d24497586a1adc869a.jpg' },
    ],
  },
  {
    id: 'pulls',
    title: 'Pulls',
    products: [
      { id: 9, name: 'Pull Winter Fleece',  price: 9400, imageUrl: 'https://i.pinimg.com/564x/e2/9f/1c/e29f1cb28c386ebcc7b694eba3488eaf.jpg' },
      { id: 10, name: 'Pull sweather',  price: 6500, imageUrl: 'https://i.pinimg.com/564x/60/16/a0/6016a0df71ea2288ef5fdd169d9ba663.jpg' },
      { id: 11, name: 'Pull Skeleton',  price: 8000, imageUrl: 'https://i.pinimg.com/564x/9f/99/b5/9f99b5191cd663d2634e5b1127b355a7.jpg' },
      { id: 12, name: 'Pull black sunflower', price: 5500, imageUrl: 'https://i.pinimg.com/564x/bc/fe/0f/bcfe0f0eabaa8739173eeade86eb188b.jpg' },
      { id: 13, name: 'Pull knitted',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/4a/2c/0a/4a2c0aeb58ad588b509909598a12bc5d.jpg' },
      { id: 14, name: 'Autumn winter', price: 7200, imageUrl: 'https://i.pinimg.com/564x/78/d8/d0/78d8d0e267c4b2a16bb88d4a3c34e95d.jpg' },
      { id: 15, name: 'Pull Akatsuki',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/d5/72/f7/d572f7cbf0afcf6909088c0ad1472531.jpg' },
      { id: 16, name: 'Pull Grudge', price: 7200, imageUrl: 'https://i.pinimg.com/564x/8f/46/cc/8f46cc56f6459b1d0466acfc716ca873.jpg' },
    ],
  },
  {
    id: 'chemises',
    title: 'Chemises',
    products: [
      { id: 17, name: 'Chemise a carreau manche', price:8300, imageUrl: 'https://i.pinimg.com/564x/38/c7/82/38c782677b88fe0fed0a8adce5be0c7f.jpg' },
      { id: 18, name: 'Chemise Camisa Casual', price: 6500, imageUrl: 'https://i.pinimg.com/564x/de/d1/d7/ded1d7169a2150fcfec91bbac7678da9.jpg' },
      { id: 19, name: 'Chemise Cardigan', price: 7400, imageUrl: 'https://i.pinimg.com/736x/05/76/45/057645452ce1c250d2c378b93c41144e.jpg' },
      { id: 20, name: 'Chemise Breasted',  price: 9500, imageUrl: 'https://i.pinimg.com/564x/7f/6b/df/7f6bdf1bda7af33a4dae6de8ae27f407.jpg' },
      { id: 21, name: 'Oversized Female', price: 7200, imageUrl: 'https://i.pinimg.com/564x/b9/fb/3b/b9fb3b181c12c146f1e76aba8decd92c.jpg' },
      { id: 22, name: 'Oversized Female', price: 7200, imageUrl: 'https://i.pinimg.com/564x/b9/fb/3b/b9fb3b181c12c146f1e76aba8decd92c.jpg' },
      { id: 23, name: 'Oversized Female', price: 7200, imageUrl: 'https://i.pinimg.com/564x/b9/fb/3b/b9fb3b181c12c146f1e76aba8decd92c.jpg' },
      { id: 24, name: 'Oversized Female', price: 7200, imageUrl: 'https://i.pinimg.com/564x/b9/fb/3b/b9fb3b181c12c146f1e76aba8decd92c.jpg' },
    ],
  },
  {
    id: 'pantalons',
    title: 'Pantalons',
    products: [
      { id: 25, name: 'Pantalon Butterfly', price: 5000, imageUrl: 'https://i.pinimg.com/564x/d5/cc/e1/d5cce12566e8e6704167d2b20bf7e319.jpg' },
      { id: 26, name: 'Pantalon en denim',  price: 5500, imageUrl: 'https://i.pinimg.com/564x/f4/91/71/f491716675bebe35ddd2bb5273be3ec5.jpg' },
      { id: 27, name: 'Pantalon en jogging', price: 6000, imageUrl: 'https://i.pinimg.com/564x/2e/c8/b3/2ec8b3685afb48a082f7a3133449768b.jpg' },
      { id: 28, name: 'Pantalon Lavarro',  price: 6500, imageUrl:'https://i.pinimg.com/564x/49/55/ad/4955adae2b15232a213327e5d48c41b7.jpg' },
      { id: 29, name: 'Pantalon Casual', price: 7200, imageUrl: 'https://i.pinimg.com/564x/c0/0a/80/c00a802c74629bc01325783cef9c237b.jpg' },
      { id: 30, name: 'Jean ampale',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/28/3f/93/283f936b0dfd2c8a17c7824af33c2ab6.jpg' },
      { id: 31, name: 'Jean decontracté',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/52/0a/6c/520a6c2262680b7084dce06315b012df.jpg' },
      { id: 32, name: 'Jean Large', price: 7200, imageUrl: 'https://i.pinimg.com/564x/87/d1/49/87d14999633647bb02a89bc7d26c7081.jpg' },
    ],
  },
  {
    id: 'minijupes',
    title: 'Mini Jupes',
    products: [
      { id: 33, name: 'Mini Jupe cargo',  price: 5550, imageUrl: 'https://i.pinimg.com/564x/74/0b/07/740b07adb08a6c37a261574d0b890d1d.jpg' },
      { id: 34, name: 'Mini Jupe moulante taille haute',price: 7350, imageUrl: 'https://i.pinimg.com/564x/15/b9/ec/15b9ec68026fb92deb9d80c38f45eeea.jpg' },
      { id: 35, name: 'Mini Jupe croisé',  price: 5400, imageUrl: 'https://i.pinimg.com/564x/b9/30/03/b93003ceb4751a1e573b6966b105cd8f.jpg' },
      { id: 36, name: 'Mini Jupe denim', price: 6500, imageUrl: 'https://i.pinimg.com/564x/b2/23/3d/b2233d9c8337b0d8a8ee5b2e53e01c2e.jpg' },
      { id: 37, name: 'Jupe moulante', price: 7200, imageUrl: 'https://i.pinimg.com/564x/35/c8/57/35c857de560f9fc0be2c2f6337a82d89.jpg' },
      { id: 38, name: 'Jupe jean',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/ca/18/17/ca1817a8cb1409180848c40f31c2dd3d.jpg' },
      { id: 39, name: 'jupe long',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/dc/a7/72/dca772ed7c380b2f0993440dae082872.jpg' },
      { id: 40, name: 'jean mini',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/9f/16/ef/9f16efaef988f2679348fa87f66b36e3.jpg' },
    ],
  },
  {
    id: 'robes',
    title: 'Robes',
    products: [
      { id: 41, name: 'Robe Fashion',  price: 6000, imageUrl: 'https://i.pinimg.com/564x/ea/f5/3b/eaf53b82f93d3baa303780b5e2765c18.jpg' },
      { id: 42, name: 'Robe pull tricoté',  price: 6500, imageUrl: 'https://i.pinimg.com/564x/09/04/02/0904025e6c74dbfcaccbaeba5498d75c.jpg' },
      { id: 43, name: 'Robe en denim',  price: 7000, imageUrl: 'https://i.pinimg.com/564x/30/35/7a/30357a718ee2a0e65a2f5736359f0334.jpg' },
      { id: 44, name: 'Robe hazel blue',  price: 7500, imageUrl: 'https://i.pinimg.com/564x/b3/35/16/b33516215e2ca190affe6e5eb3d7b28b.jpg' },
      { id: 45, name: 'Robe Pockets',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/5a/54/92/5a549296c06baa91d376bea387241aba.jpg' },
      { id: 46, name: 'Robe sleeveless', price: 7200, imageUrl: 'https://i.pinimg.com/564x/85/c8/e5/85c8e5ee41b85aacc3734dac0184d7a9.jpg' },
      { id: 47, name: 'Robe Olivia mark', price: 7200, imageUrl: 'https://i.pinimg.com/564x/d5/1b/b5/d51bb51ff05fa18a5995a8c82d9256fc.jpg' },
      { id: 48, name: 'Robe jean',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/28/38/ba/2838ba9b1315a1e4dc996c83d362cdcf.jpg' },
    ],
  },
  {
    id: 'combinaisons',
    title: 'Combinaisons',
    products: [
      { id: 49, name: 'Combinaison manche chauve-souris',  price: 8500, imageUrl: 'https://i.pinimg.com/564x/75/87/93/75879347abf27674c45463d56fb04f02.jpg' },
      { id: 50, name: 'Combinaison Denim', price: 8750, imageUrl: 'https://i.pinimg.com/564x/59/f1/ba/59f1ba594938649245a1dfd194388a90.jpg' },
      { id: 51, name: 'Combinaison Fisdy', price: 9000, imageUrl: 'https://i.pinimg.com/564x/a9/88/5d/a9885d84da92f38b666953ec54dd33da.jpg' },
      { id: 52, name: 'Combinaison sexy casual',  price: 9500, imageUrl: 'https://i.pinimg.com/564x/cf/47/a0/cf47a0ce8b44971d59268f3d813032d2.jpg' },
      { id: 53, name: 'Combinaison Casual Solid',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/52/8d/d9/528dd968286cfd656f61b376df5b4631.jpg' },
      { id: 54, name: 'Combinaison ',  price: 7200, imageUrl: 'https://i.pinimg.com/564x/6e/8b/fc/6e8bfc2fe022ffb637fee7464f12a7e9.jpg' },
      { id:55, name: 'Combinaison Jumpsuit', price: 7200, imageUrl: 'https://i.pinimg.com/564x/b5/43/4d/b5434d10a33fcab42ff37ed4310c1a65.jpg' },
      { id: 56, name: 'Combinaison African', price: 7200, imageUrl: 'https://i.pinimg.com/564x/dd/41/ed/dd41edee35cc93e1a51af2c6fea3cd5b.jpg' },
    ],
  },
  {
    id: 'chaussures',
    title: 'Chaussures',
    products: [
      { id: 57, name: 'Botte de combat',  price: 18500, imageUrl: 'https://i.pinimg.com/564x/7e/3a/99/7e3a99465f9fc39ac5d09461dad71520.jpg' },
      { id: 58, name: 'Vulcanize shoes', price: 10750, imageUrl: 'https://i.pinimg.com/564x/69/f9/7a/69f97a9b220b49957a6595c286d15685.jpg' },
      { id: 59, name: 'Shake ', price: 29000, imageUrl: 'https://i.pinimg.com/564x/cd/6a/57/cd6a57b81e932f5e08df05e44219828c.jpg' },
      { id: 61, name: 'chaussure casual',  price: 15500, imageUrl: 'https://i.pinimg.com/564x/03/d2/d8/03d2d804a47ea122272bc690c77accfe.jpg' },
      { id: 62, name: 'Chaussure Americaine',  price: 37200, imageUrl: 'https://i.pinimg.com/564x/6c/18/8c/6c188cfe1a3055c7f3c250b18c78c459.jpg' },
      { id: 63, name: 'Chaussure Sneakers ',  price: 44200, imageUrl: 'https://i.pinimg.com/564x/31/0b/ed/310bedbe26273dd1e221463b15bb71d2.jpg' },
      { id:64, name: 'Basket Street', price: 27200, imageUrl: 'https://i.pinimg.com/564x/73/31/0a/73310af98e0f023bc8ed5a20d0cafc65.jpg' },
      { id: 65, name: 'Modern boots', price: 44200, imageUrl:'https://i.pinimg.com/564x/ee/4f/1e/ee4f1e81252fefc2a2af4f3d1ccf267f.jpg' },
      { id: 66, name: 'Chaussure black', price: 37800, imageUrl: 'https://i.pinimg.com/736x/d8/8b/0f/d88b0f88483d174dcf7d730d352ad2cf.jpg' },
      { id: 67, name: 'Cotton Femal', price: 47200, imageUrl: 'https://i.pinimg.com/564x/01/27/a9/0127a9746e56808039dec6ef9cdc5943.jpg' },
      { id: 68, name: 'Casual sport', price: 55200, imageUrl: 'https://i.pinimg.com/564x/55/37/c9/5537c9c914fc0903c06ec7bd0e019646.jpg' },
      { id: 69, name: 'Chaussure Rainbow', price: 33300, imageUrl: 'https://i.pinimg.com/564x/bb/db/06/bbdb064ccf98eed3dd35044d3491e592.jpg' },
    ],
  },

];
   

function Femme() {
  
  const [indices, setIndices] = useState(
    sections.reduce((acc, section) => {
      acc[section.id] = 0;
      return acc;
    }, {})
  );

  const handlePrev = (sectionId) => {
    setIndices({
      ...indices,
      [sectionId]: Math.max(indices[sectionId] - 4, 0),
    });
  };

  const handleNext = (sectionId, productsLength) => {
    setIndices({
      ...indices,
      [sectionId]: Math.min(indices[sectionId] + 4, productsLength - 4),
    });
  };

  return (
    <div className="outfits container mx-auto py-12">
      <h2 className="page-title text-4xl font-extrabold text-center mb-10 text-gray-800 underline decoration-red-950">Outfits Femme</h2>
      {sections.map(section => (
        <div key={section.id} className="section mb-16">
          <h3 className="section-title text-3xl font-bold text-gray-700 mb-6 text-center underline decoration-blue-500">{section.title}</h3>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md"
              onClick={() => handlePrev(section.id)}
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.slice(indices[section.id], indices[section.id] + 4).map(product => (
                <Link to={`/product-femme/${product.id}`} key={product.id} className="product-card-link">
                  <div className="product-card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center h-80">
                    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
                    <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
                    <p className="text-gray-500 text-center">{product.description}</p>
                    <p className="product-price text-blue-500 font-bold mb-2">{product.price} FCFA</p>
                    <Link to={`/product/${product.id}`} className="mt-auto bg-orange-700 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-300 text-center">
            Voir les détails
          </Link>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md"
              onClick={() => handleNext(section.id, section.products.length)}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Femme;
