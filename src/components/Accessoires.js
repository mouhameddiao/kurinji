import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

const sections = [
  {
    id: 'montres',
    title: 'Montres',
    products: [
      { id: 1, name: 'Montre Classique Festina', price: 15000, imageUrl: 'https://i.pinimg.com/564x/61/ca/b9/61cab91c4d7abb6882c6774799166376.jpg', colors: ['Noir', 'Argent'], options: ['Bracelet cuir', 'Bracelet métal'] },
      { id: 2, name: 'Montre Digitale Reloj', price: 20000, imageUrl: 'https://i.pinimg.com/564x/8b/b6/f5/8bb6f512d59c809676ffc34eaae52d0d.jpg', colors: ['Noir', 'Bleu'], options: ['Étanche', 'Non-étanche'] },
      { id: 3, name: 'Montre Sport SKMEI', price: 18000, imageUrl: 'https://i.pinimg.com/564x/ef/5c/c1/ef5cc1cfd3b15df537a6c5970c8a7f11.jpg', colors: ['Rouge', 'Noir'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 4, name: 'Montre Élégante Deffrun', price: 25000, imageUrl: 'https://i.pinimg.com/564x/f9/ab/81/f9ab8164778001ebd38092bc733ad8d2.jpg', colors: ['Doré', 'Argent'], options: ['Bracelet métal', 'Non-étanche'] },
      { id: 5, name: 'Montre de Luxe Relogio', price: 30000, imageUrl: 'https://i.pinimg.com/564x/8a/b3/b2/8ab3b23104a45983bec22f5bf5551230.jpg', colors: ['Noir', 'Or'], options: ['Bracelet cuir', 'Étanche'] },
      { id: 6, name: 'Montre Analogique BENYAR', price: 14000, imageUrl: 'https://i.pinimg.com/564x/bf/6b/8a/bf6b8a90c49d3676f3a26cae4ddb0c76.jpg', colors: ['Bleu', 'Noir'], options: ['Bracelet métal', 'Non-étanche'] },
      { id: 7, name: 'Montre Enfant Inkasus', price: 12000, imageUrl: 'https://i.pinimg.com/564x/08/54/86/0854869edbcfd296230d14acc8c73d85.jpg', colors: ['Rose', 'Bleu'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 8, name: 'Montre Minimaliste Nixon', price: 17000, imageUrl: 'https://i.pinimg.com/564x/29/57/7c/29577cba5d8f04680eeb6d8c1bd38a70.jpg', colors: ['Argent', 'Noir'], options: ['Bracelet cuir', 'Étanche'] },
      { id: 9, name: 'Montre Vintage Onyx', price: 20000, imageUrl: 'https://i.pinimg.com/564x/07/b4/ce/07b4ce0a767db2001228ce29679634aa.jpg', colors: ['Marron', 'Noir'], options: ['Bracelet cuir', 'Non-étanche'] },
      { id: 10, name: 'Montre Solaire', price: 22000, imageUrl: 'https://i.pinimg.com/564x/e1/20/4a/e1204aaf96fe9caf614e2a0093202160.jpg', colors: ['Vert', 'Noir'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 11, name: 'Montre Tactile LBDH', price: 28000, imageUrl: 'https://i.pinimg.com/564x/02/93/ea/0293ea0cceb8ca7ffd3d6a5f40ab078f.jpg', colors: ['Noir', 'Gris'], options: ['Écran tactile', 'Bracelet cuir'] },
      { id: 12, name: 'Montre Intelligente', price: 35000, imageUrl: 'https://i.pinimg.com/564x/8f/58/0e/8f580eb29c8874034fb0276de2a8cf44.jpg', colors: ['Noir', 'Blanc'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 13, name: 'Montre Casual Stainless', price: 13000, imageUrl: 'https://i.pinimg.com/564x/ac/b0/8d/acb08d49810b98679c2eba9e40b6515d.jpg', colors: ['Marron', 'Noir'], options: ['Bracelet cuir', 'Non-étanche'] },
      { id: 14, name: 'Montre Militaire', price: 16000, imageUrl: 'https://i.pinimg.com/564x/1c/95/fc/1c95fcdac503ced2014cf52f90b7ed50.jpg', colors: ['Vert', 'Noir'], options: ['Bracelet nylon', 'Étanche'] },
      { id: 15, name: 'Montre Montignac', price: 12000, imageUrl: 'https://i.pinimg.com/564x/04/21/0f/04210fe9ec7f16d793a55a41b2541180.jpg', colors: ['Argent', 'Or'], options: ['Chaîne longue', 'Non-étanche'] },
      { id: 16, name: 'Montre Sanda', price: 30000, imageUrl: 'https://i.pinimg.com/564x/3a/1c/5f/3a1c5f1eaa972007181e5c7d716d9c42.jpg', colors: ['Noir', 'Bleu'], options: ['Bracelet métal', 'Étanche'] },
    ],
  },
  {
    id: 'boite_maquillage',
    title: 'Boîtes de Maquillage',
    products: [
      { id: 17, name: 'Boîte Baban', price: 5000, imageUrl: 'https://i.pinimg.com/564x/31/f2/d2/31f2d2028bb33c8247391764835eb712.jpg' },
      { id: 18, name: 'Boîte Professionnelle', price: 12000, imageUrl: 'https://i.pinimg.com/564x/1b/c9/d7/1bc9d7707d760a31c5c24b27fce990ea.jpg' },
      { id: 19, name: 'Boîte de Voyage', price: 9000, imageUrl: 'https://i.pinimg.com/564x/dd/95/7a/dd957ace3c8ba5616c4bd37cd258c38f.jpg' },
      { id: 20, name: 'Boîte Transparente', price: 7000, imageUrl: 'https://i.pinimg.com/564x/e2/e9/ce/e2e9cea48a62142882ee62cd2b609ec3.jpg' },
      { id: 21, name: 'Boîte à Bijoux', price: 8000, imageUrl: 'https://i.pinimg.com/564x/1e/1f/c2/1e1fc2673289941541f33873fc99dd43.jpg' },
      { id: 22, name: 'Boîte Multifonction', price: 11000, imageUrl: 'https://i.pinimg.com/736x/2c/e5/7e/2ce57e3fa0737f195d22c5396e98a06f.jpg' },
      { id: 23, name: 'Boîte Glamour', price: 13000, imageUrl: 'https://img.freepik.com/photos-premium/boite-maquillage-feminine-conception-concept_985323-11671.jpg?w=740' },
      { id: 24, name: 'Boîte en Cuir', price: 15000, imageUrl: 'https://i.pinimg.com/564x/f0/69/02/f069024350e927f1572a9d54d10d9c80.jpg' },
      { id: 25, name: 'Boîte Vintage', price: 10000, imageUrl: 'https://i.pinimg.com/736x/70/1b/72/701b72bfe543efa69c92ac2f28f64ff0.jpg' },
      { id: 26, name: 'Boîte Artistique', price: 16000, imageUrl: 'https://i.pinimg.com/736x/ab/92/e8/ab92e84b031e8ef53148fa76929858cb.jpg' },
      { id: 27, name: 'Boîte Décorative', price: 14000, imageUrl: 'https://i.pinimg.com/564x/20/0f/5c/200f5c9b4fd035abd2a480556c511d09.jpg' },
      { id: 28, name: 'Boîte pour Palettes', price: 11000, imageUrl: 'https://i.pinimg.com/564x/6c/d5/62/6cd5620481f1d7b7b34fbf4947c52334.jpg' },
      { id: 29, name: 'Boîte en Verre', price: 12000, imageUrl: 'https://i.pinimg.com/564x/e5/71/59/e571593ca1736a7514ef4c05a17e5eed.jpg' },
      { id: 30, name: 'Boîte Rotative', price: 13000, imageUrl: 'https://i.pinimg.com/564x/03/51/a9/0351a9f3d724c6165831f53a23d839d2.jpg' },
      { id: 31, name: 'Boîte à Étagères', price: 14000, imageUrl: 'https://i.pinimg.com/564x/63/9c/71/639c71bdc4d4288139916e02945df28a.jpg' },
      { id: 32, name: 'Boîte Pailletée', price: 15000, imageUrl: 'https://i.pinimg.com/564x/84/a0/7d/84a07d1ed23002d6d95ef0a65833a07f.jpg' },
    ],
  },
  {
    id: 'lunettes',
    title: 'Lunettes',
    products: [
      { id: 33, name: 'Lunettes de Soleil', price: 8000, imageUrl: 'https://i.pinimg.com/564x/c3/f2/43/c3f243e727664c10060e08cdcf2eae11.jpg', colors: ['Noir', 'Marron'], options: ['Verres polarisés', 'Verres classiques'] },
      { id: 34, name: 'Lunettes de Vue', price: 12000, imageUrl: 'https://i.pinimg.com/564x/f0/5d/27/f05d274266d9682b8d66dbe9d77575fe.jpg', colors: ['Noir', 'Bleu'], options: ['Monture fine', 'Monture épaisse'] },
      { id: 35, name: 'Lunettes SteamPunk', price: 15000, imageUrl: 'https://i.pinimg.com/564x/92/13/9d/92139d4fd3e93d2d7d8d8aa16ad205d4.jpg', colors: ['Argent', 'Doré'], options: ['Verres polarisés', 'Verres dégradés'] },
      { id: 36, name: 'Lunettes Fashion', price: 9000, imageUrl: 'https://i.pinimg.com/564x/f8/3b/ec/f83bec6a95c613148090c1c0b981b31a.jpg', colors: ['Rose', 'Noir'], options: ['Monture large', 'Monture fine'] },
      { id: 37, name: 'Lunettes tinted', price: 11000, imageUrl: 'https://i.pinimg.com/564x/3d/6e/bb/3d6ebb27fab34dcea3f01e117c1103fe.jpg', colors: ['Marron', 'Noir'], options: ['Verres transparents', 'Verres teintés'] },
      { id: 38, name: 'Lunettes Tendance', price: 9500, imageUrl: 'https://i.pinimg.com/564x/76/8a/b6/768ab66917001cf138fdca56c8e02660.jpg', colors: ['Bleu', 'Vert'], options: ['Verres classiques', 'Verres miroir'] },
      { id: 39, name: 'Lunettes Oversize', price: 13000, imageUrl: 'https://i.pinimg.com/564x/89/ce/d3/89ced34607693d3fbf32426b3529635d.jpg', colors: ['Noir', 'Gris'], options: ['Monture épaisse', 'Monture fine'] },
      { id: 40, name: 'Lunettes Sport monochrome', price: 10000, imageUrl: 'https://i.pinimg.com/564x/27/4f/9a/274f9a30ab3c3b53f09d278a286d3f04.jpg', colors: ['Noir', 'Rouge'], options: ['Verres polarisés', 'Verres miroir'] },
      { id: 41, name: 'Lunettes Ronde', price: 8500, imageUrl: 'https://i.pinimg.com/564x/91/33/93/913393a5d754527f5fdd8b00abad12a2.jpg', colors: ['Argent', 'Noir'], options: ['Verres classiques', 'Verres polarisés'] },
      { id: 42, name: 'Lunettes Cat Eye', price: 15000, imageUrl: 'https://i.pinimg.com/564x/04/42/2c/04422c5df43ab976b468173909030e3c.jpg', colors: ['Noir', 'Rouge'], options: ['Monture épaisse', 'Monture fine'] },
      { id: 43, name: 'Lunettes Slim', price: 9000, imageUrl: 'https://i.pinimg.com/564x/a9/fb/aa/a9fbaaa7792c882e9f3d27796358d690.jpg', colors: ['Noir', 'Doré'], options: ['Verres transparents', 'Verres miroir'] },
      { id: 44, name: 'Lunettes de Luxe Gucci', price: 16000, imageUrl: 'https://i.pinimg.com/564x/7c/e0/e4/7ce0e4008c669d5b1c9de34c0e3508e3.jpg', colors: ['Noir', 'Argent'], options: ['Verres polarisés', 'Verres teintés'] },
      { id: 45, name: 'Lunettes Vintage', price: 12000, imageUrl: 'https://i.pinimg.com/564x/06/73/4d/06734d22861043a77a218dc9aff52a69.jpg', colors: ['Marron', 'Noir'], options: ['Verres classiques', 'Verres dégradés'] },
      { id: 46, name: 'Lunettes Carrées', price: 11000, imageUrl: 'https://i.pinimg.com/564x/84/87/9b/84879b153d8c73a52b26808b04b6bc03.jpg', colors: ['Noir', 'Gris'], options: ['Monture large', 'Monture fine'] },
      { id: 47, name: 'Lunettes Miroir', price: 14000, imageUrl: 'https://i.pinimg.com/564x/4d/12/8a/4d128af864c2da5fc460788e1ed825a5.jpg', colors: ['Argent', 'Bleu'], options: ['Verres miroir', 'Verres polarisés'] },
      { id: 48, name: 'Lunettes Moto', price: 17000, imageUrl: 'https://i.pinimg.com/564x/0f/7a/35/0f7a35f690e82b0a4cc21cff2b5becd1.jpg', colors: ['Noir', 'Jaune'], options: ['Verres polarisés', 'Verres teintés'] },
    ],
  },
  {
    id: 'montres_femme',
    title: 'Montres Femme',
    products: [
      { id: 49, name: 'Montre Bracelet Femme', price: 22000, imageUrl: 'https://i.pinimg.com/564x/0e/d2/9f/0ed29f76d057e8cdc4877d3b189a1d21.jpg', colors: ['Rose Gold', 'Argent'], options: ['Bracelet cuir', 'Bracelet métal'] },
      { id: 50, name: 'Montre Chic', price: 18000, imageUrl: 'https://i.pinimg.com/736x/71/3f/53/713f53020dd4806c18692f9c84b812b1.jpg', colors: ['Noir', 'Doré'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 51, name: 'Montre Design', price: 25000, imageUrl: 'https://i.pinimg.com/564x/5d/98/01/5d9801732361f804414f4786eb47e3c5.jpg', colors: ['Blanc', 'Rose'], options: ['Bracelet cuir', 'Bracelet métal'] },
      { id: 52, name: 'Montre Éclatante', price: 20000, imageUrl: 'https://i.pinimg.com/564x/e6/69/99/e669999287bbbd95a28db3c62993e85a.jpg', colors: ['Argent', 'Noir'], options: ['Bracelet métal', 'Non-étanche'] },
      { id: 53, name: 'Montre Élégance', price: 28000, imageUrl: 'https://i.pinimg.com/564x/ea/93/f4/ea93f47540ae7046b73f2b7ffa776e1d.jpg', colors: ['Doré', 'Rose Gold'], options: ['Bracelet métal', 'Étanche'] },
      { id: 54, name: 'Montre Fashion', price: 17000, imageUrl: 'https://i.pinimg.com/736x/a7/4b/57/a74b57561954b6d30abc17ce6153e018.jpg', colors: ['Noir', 'Argent'], options: ['Bracelet cuir', 'Non-étanche'] },
      { id: 55, name: 'Montre Précieuse', price: 31000, imageUrl: 'https://i.pinimg.com/564x/51/54/83/515483dfcff8df2ab0260694ffafac23.jpg', colors: ['Argent', 'Rose Gold'], options: ['Bracelet métal', 'Étanche'] },
      { id: 56, name: 'Montre Féminine', price: 24000, imageUrl: 'https://i.pinimg.com/564x/8d/7f/65/8d7f6591f8ebe29e1450abe4d071e5af.jpg', colors: ['Noir', 'Doré'], options: ['Bracelet cuir', 'Étanche'] },
      { id: 57, name: 'Montre Séduction', price: 15000, imageUrl: 'https://i.pinimg.com/564x/c0/e0/37/c0e03742ef87102c9da26a8f53268144.jpg', colors: ['Rouge', 'Doré'], options: ['Bracelet métal', 'Non-étanche'] },
      { id: 58, name: 'Montre Glamor', price: 20000, imageUrl: 'https://i.pinimg.com/564x/7e/b0/43/7eb043dd388d531b2eb457803c46c307.jpg', colors: ['Rose Gold', 'Argent'], options: ['Bracelet métal', 'Étanche'] },
      { id: 59, name: 'Montre Charme', price: 18000, imageUrl: 'https://i.pinimg.com/564x/14/5e/68/145e68d36d7e48b064a61fd6851822c4.jpg', colors: ['Noir', 'Argent'], options: ['Bracelet cuir', 'Bracelet métal'] },
      { id: 60, name: 'Montre Luxe', price: 29000, imageUrl: 'https://i.pinimg.com/564x/23/e4/3f/23e43f825320e319340b5be758dda0f2.jpg', colors: ['Doré', 'Noir'], options: ['Bracelet cuir', 'Étanche'] },
      { id: 61, name: 'Montre Cristal', price: 34000, imageUrl: 'https://i.pinimg.com/564x/1d/84/ad/1d84ad6c897e4b45aff92b49c5c3dd05.jpg', colors: ['Argent', 'Doré'], options: ['Bracelet métal', 'Non-étanche'] },
      { id: 62, name: 'Montre Douceur', price: 15000, imageUrl: 'https://i.pinimg.com/564x/d5/62/77/d56277997559cb4c7a2caaa6073f79ba.jpg', colors: ['Rose', 'Blanc'], options: ['Bracelet silicone', 'Étanche'] },
      { id: 63, name: 'Montre Charisma', price: 27000, imageUrl: 'https://i.pinimg.com/564x/c0/e0/37/c0e03742ef87102c9da26a8f53268144.jpg', colors: ['Noir', 'Argent'], options: ['Bracelet cuir', 'Non-étanche'] },
      { id: 64, name: 'Montre Élégance', price: 25000, imageUrl: 'https://i.pinimg.com/564x/de/e5/8f/dee58fcd60de62265d113b63f4c34dff.jpg', colors: ['Noir', 'Doré'], options: ['Bracelet cuir', 'Étanche'] },
    ],
  },
  {
    id: 'boucle_oreilles',
    title: 'Boucles d\'Oreilles',
    products: [
      { id: 65, name: 'Boucles Créoles', price: 7000, imageUrl: 'https://i.pinimg.com/564x/12/46/84/1246842a31562624272022d26c5fc7c7.jpg', colors: ['Or', 'Argent'], options: ['Taille petite', 'Taille grande'] },
      { id: 66, name: 'Boucles Diamant', price: 15000, imageUrl: 'https://i.pinimg.com/564x/f5/90/90/f59090cc23532d3b6684f3922e7f3a91.jpg', colors: ['Blanc', 'Or'], options: ['Serties', 'Non serties'] },
      { id: 67, name: 'Boucles Pendantes', price: 12000, imageUrl: 'https://i.pinimg.com/564x/90/d4/3b/90d43b7f2e94ae777941c49049e8bb67.jpg', colors: ['Noir', 'Argent'], options: ['Longues', 'Courtes'] },
      { id: 68, name: 'Boucles Perles', price: 8000, imageUrl: 'https://i.pinimg.com/564x/84/7f/3c/847f3c26eb6a9b85618173c8203cb0a7.jpg', colors: ['Blanc', 'Rose'], options: ['Perles rondes', 'Perles ovales'] },
      { id: 69, name: 'Boucles Fantaisie', price: 9000, imageUrl: 'https://i.pinimg.com/564x/ef/8f/66/ef8f665d9f8e7bdec8e78b94b2e1bf23.jpg', colors: ['Rouge', 'Noir'], options: ['Longues', 'Courtes'] },
      { id: 70, name: 'Boucles Vintage', price: 11000, imageUrl: 'https://lapetitetoucheglamour.fr/wp-content/uploads/2021/03/Fantasie-Boucles-doreilles-vintage-rondes-marbre-600x750.jpeg', colors: ['Or', 'Argent'], options: ['Taille petite', 'Taille grande'] },
      { id: 71, name: 'Boucles Chic', price: 10000, imageUrl: 'https://i.pinimg.com/564x/e9/d4/f4/e9d4f451ef35a0fb4a4ab04c388b61d4.jpg', colors: ['Doré', 'Argent'], options: ['Serties', 'Non serties'] },
      { id: 72, name: 'Boucles Glamour', price: 13000, imageUrl: 'https://i.pinimg.com/736x/4e/16/36/4e163693b085fc1cbacd77f8d020d396.jpg', colors: ['Or', 'Noir'], options: ['Perles', 'Diamants'] },
      { id: 73, name: 'Boucles Modernes', price: 9000, imageUrl: 'https://i.pinimg.com/564x/9b/e6/d6/9be6d634bba25e4e5c7881be4cd19a1c.jpg', colors: ['Noir', 'Argent'], options: ['Longues', 'Courtes'] },
      { id: 74, name: 'Boucles Romantiques', price: 9500, imageUrl: 'https://i.pinimg.com/564x/27/d0/f1/27d0f15db0412a09fe398b4529c7d73c.jpg', colors: ['Rose', 'Blanc'], options: ['Perles', 'Diamants'] },
      { id: 75, name: 'Boucles Élégantes', price: 15000, imageUrl: 'https://i.pinimg.com/564x/ea/04/30/ea04300e439ba9958da72b3952329775.jpg', colors: ['Argent', 'Or'], options: ['Taille petite', 'Taille grande'] },
      { id: 76, name: 'Boucles Minimalistes', price: 7000, imageUrl: 'https://i.pinimg.com/564x/5b/69/4e/5b694e3ad243a4fd93a237eeed764088.jpg', colors: ['Argent', 'Noir'], options: ['Longues', 'Courtes'] },
      { id: 77, name: 'Boucles Boho', price: 8500, imageUrl: 'https://i.pinimg.com/564x/83/e6/4b/83e64b6ec236d7d4c7efefa3685bf70a.jpg', colors: ['Or', 'Argent'], options: ['Perles', 'Pompons'] },
      { id: 78, name: 'Boucles Majestueuses', price: 14000, imageUrl: 'https://i.pinimg.com/564x/69/ec/ab/69ecabf4af20b81d17b926eff54f460c.jpg', colors: ['Or', 'Noir'], options: ['Taille petite', 'Taille grande'] },
      { id: 79, name: 'Boucles Contemporaines', price: 12000, imageUrl: 'https://i.pinimg.com/564x/57/96/96/5796965b47e1fa2a3460449f580d453b.jpg', colors: ['Argent', 'Noir'], options: ['Serties', 'Non serties'] },
      { id: 80, name: 'Boucles Mystérieuses', price: 11000, imageUrl: 'https://i.pinimg.com/564x/45/93/5c/45935cdb3f295f4f5fd25f745b7e0d38.jpg', colors: ['Or', 'Argent'], options: ['Perles', 'Diamants'] },
    ],
  },
  {
    id: 'anneaux',
    title: 'Anneaux',
    products: [
      { id: 81, name: 'Anneau Classique', price: 5000, imageUrl: 'https://i.pinimg.com/564x/a7/2a/61/a72a6156c8e4548ec844fad9e5f3ee10.jpg', colors: ['Or', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 82, name: 'Anneau Large', price: 6000, imageUrl: 'https://i.pinimg.com/564x/76/c7/cf/76c7cf1a170c2c007b481b19c87a32f6.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 83, name: 'Anneau Double', price: 7000, imageUrl: 'https://i.pinimg.com/564x/42/6b/8b/426b8b12c5c531791b86dd69b0e5f778.jpg', colors: ['Or', 'Noir'], options: ['Taille 56', 'Taille 58'] },
      { id: 84, name: 'Anneau Serti', price: 8000, imageUrl: 'https://i.pinimg.com/564x/ef/83/3e/ef833e6795709101077999ed12b5a25a.jpg', colors: ['Argent', 'Doré'], options: ['Taille 54', 'Taille 56'] },
      { id: 85, name: 'Anneau Fin', price: 4000, imageUrl: 'https://i.pinimg.com/564x/d3/9d/7c/d39d7cbeea42b5ffb36ab22cb399cc8d.jpg', colors: ['Or', 'Argent'], options: ['Taille 52', 'Taille 54'] },
      { id: 86, name: 'Anneau Mat', price: 6000, imageUrl: 'https://i.pinimg.com/564x/06/4b/0f/064b0fcec4e3c6c1a404edfe85a2ab82.jpg', colors: ['Noir', 'Gris'], options: ['Taille 56', 'Taille 58'] },
      { id: 87, name: 'Anneau Triple', price: 9000, imageUrl: 'https://i.pinimg.com/564x/76/ba/c7/76bac7a08fef8a666d6dd09787490ca2.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 88, name: 'Anneau Sculpté', price: 7000, imageUrl: 'https://i.pinimg.com/564x/8f/c2/73/8fc273917236b6ed5c00c55aa3880505.jpg', colors: ['Doré', 'Noir'], options: ['Taille 56', 'Taille 58'] },
      { id: 89, name: 'Anneau Gravé', price: 8000, imageUrl: 'https://i.pinimg.com/564x/2d/6a/11/2d6a11725450bd7952edeec39bbfe6ba.jpg', colors: ['Or', 'Argent'], options: ['Taille 52', 'Taille 54'] },
      { id: 90, name: 'Anneau Ciselé', price: 6000, imageUrl: 'https://i.pinimg.com/564x/fd/b1/00/fdb100419527c5dfd9d4478f62192649.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 91, name: 'Anneau Brillant', price: 12000, imageUrl: 'https://i.pinimg.com/564x/2b/68/e7/2b68e757de2eed21ce874b3b7c6d598b.jpg', colors: ['Argent', 'Doré'], options: ['Taille 54', 'Taille 56'] },
      { id: 92, name: 'Anneau Classy', price: 5000, imageUrl: 'https://i.pinimg.com/564x/0a/e2/a7/0ae2a742b80004c6a353b654e0920683.jpg', colors: ['Or', 'Noir'], options: ['Taille 54', 'Taille 56'] },
      { id: 93, name: 'Anneau Contemporain', price: 8000, imageUrl: 'https://i.pinimg.com/564x/63/3f/6d/633f6d42a7e69657213df93426c22f0a.jpg', colors: ['Argent', 'Gris'], options: ['Taille 56', 'Taille 58'] },
      { id: 94, name: 'Anneau Élégant', price: 9000, imageUrl: 'https://i.pinimg.com/564x/12/a7/5a/12a75a22f533e82d703075fc44a9f869.jpg', colors: ['Or', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 95, name: 'Anneau Mystique', price: 10000, imageUrl: 'https://i.pinimg.com/564x/bb/54/b4/bb54b403e84ae2ba01c4a096976cdf5c.jpg', colors: ['Noir', 'Argent'], options: ['Taille 56', 'Taille 58'] },
      { id: 96, name: 'Anneau Royal', price: 15000, imageUrl: 'https://i.pinimg.com/564x/ca/a9/ff/caa9ffb9ea42690f3a13b548f7107d11.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
    ],
  },
  {
    id: 'bagues_homme',
    title: 'Bagues Homme',
    products: [
      { id: 97, name: 'Bague Acier', price: 12000, imageUrl: 'https://i.pinimg.com/564x/6d/de/df/6ddedf033db00171e6001ff9dd94103b.jpg', colors: ['Argent', 'Noir'], options: ['Taille 58', 'Taille 60'] },
      { id: 98, name: 'Bague Tungstène', price: 15000, imageUrl: 'https://i.pinimg.com/564x/97/cc/a3/97cca37ec2986a34cc9931dceda032d6.jpg', colors: ['Noir', 'Argent'], options: ['Taille 60', 'Taille 62'] },
      { id: 99, name: 'Bague Onyx', price: 14000, imageUrl: 'https://i.pinimg.com/564x/60/2b/b8/602bb8b335d01dcab9bd3ec5b0bdc1a1.jpg', colors: ['Noir', 'Gris'], options: ['Taille 56', 'Taille 58'] },
      { id: 100, name: 'Bague Skull', price: 16000, imageUrl: 'https://i.pinimg.com/564x/30/6a/1d/306a1d6b4a7e7679c5bd3d58848ceb9d.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 101, name: 'Bague Martelée', price: 13000, imageUrl: 'https://i.pinimg.com/564x/be/db/37/bedb374703c09f153c0e48186b1c7c8b.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 102, name: 'Bague Large', price: 10000, imageUrl: 'https://i.pinimg.com/564x/54/e5/76/54e5764d98354d9d8de2dc23acb8ee0e.jpg', colors: ['Argent', 'Noir'], options: ['Taille 60', 'Taille 62'] },
      { id: 103, name: 'Bague Viking', price: 18000, imageUrl: 'https://i.pinimg.com/564x/9a/98/43/9a9843f34daff299563f9597e84d42a4.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 104, name: 'Bague Baroque', price: 12000, imageUrl: 'https://i.pinimg.com/564x/a3/48/cd/a348cd2323a66293ad1be1d80a3c7444.jpg', colors: ['Doré', 'Noir'], options: ['Taille 54', 'Taille 56'] },
      { id: 105, name: 'Bague Fantôme', price: 15000, imageUrl: 'https://i.pinimg.com/564x/d9/87/ca/d987ca4e87e632aa07346004b00e0c6b.jpg', colors: ['Noir', 'Argent'], options: ['Taille 56', 'Taille 58'] },
      { id: 106, name: 'Bague Claddagh', price: 17000, imageUrl: 'https://westwindgifts.ca/image/cache/x6a/0102624018-600x600.jpg', colors: ['Argent', 'Noir'], options: ['Taille 54', 'Taille 56'] },
      { id: 107, name: 'Bague Écaille', price: 13000, imageUrl: 'https://i.pinimg.com/564x/e4/5a/39/e45a39989e93e678572b53e6beac0e95.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 108, name: 'Bague Franc-Maçon', price: 19000, imageUrl: 'https://i.pinimg.com/564x/f7/0a/73/f70a73c273ecfed45450170b524df6f3.jpg', colors: ['Doré', 'Argent'], options: ['Taille 60', 'Taille 62'] },
      { id: 109, name: 'Bague Scorpion', price: 14000, imageUrl: 'https://i.pinimg.com/736x/34/13/c9/3413c94c90161e4de1ea029045b00a66.jpg', colors: ['Noir', 'Argent'], options: ['Taille 58', 'Taille 60'] },
      { id: 110, name: 'Bague Égyptienne', price: 18000, imageUrl: 'https://i.pinimg.com/564x/3a/0d/91/3a0d9118b6e821c6e616a4999e3c6207.jpg', colors: ['Argent', 'Doré'], options: ['Taille 54', 'Taille 56'] },
      { id: 111, name: 'Bague Clous', price: 16000, imageUrl: 'https://i.pinimg.com/564x/11/9c/eb/119ceb4295896370e217e77a58b193f2.jpg', colors: ['Noir', 'Argent'], options: ['Taille 56', 'Taille 58'] },
      { id: 112, name: 'Bague Saint-Michel', price: 20000, imageUrl: 'https://i.pinimg.com/564x/31/28/b5/3128b598b933eec0ff101f6af2717d09.jpg', colors: ['Or', 'Argent'], options: ['Taille 54', 'Taille 56'] },
    ],
  },
  {
    id: 'bagues_femme',
    title: 'Bagues Femme',
    products: [
      { id: 113, name: 'Bague Solitaire', price: 15000, imageUrl: 'https://i.pinimg.com/564x/fe/4a/8f/fe4a8fbef88ac980474ffc5224032241.jpg', colors: ['Or', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 114, name: 'Bague Perle', price: 12000, imageUrl: 'https://i.pinimg.com/564x/3b/f3/2b/3bf32bbfd85684c5c1f34ea19d91f9e4.jpg', colors: ['Blanc', 'Rose'], options: ['Taille 52', 'Taille 54'] },
      { id: 115, name: 'Bague Saphir', price: 16000, imageUrl: 'https://i.pinimg.com/564x/da/38/f4/da38f45ce853c712c7d3627db891fc9a.jpg', colors: ['Bleu', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 116, name: 'Bague Émeraude', price: 20000, imageUrl: 'https://i.pinimg.com/564x/fc/6e/5c/fc6e5c24df2e2f1b740b57103f09f8fc.jpg', colors: ['Vert', 'Or'], options: ['Taille 56', 'Taille 58'] },
      { id: 117, name: 'Bague Diamant', price: 22000, imageUrl: 'https://i.pinimg.com/564x/17/a7/87/17a787129630649e9af1c4d8fbc0e2f7.jpg', colors: ['Blanc', 'Argent'], options: ['Taille 52', 'Taille 54'] },
      { id: 118, name: 'Bague Opale', price: 17000, imageUrl: 'https://i.pinimg.com/564x/81/df/a6/81dfa6b1de52b9711637bd89590ecf9b.jpg', colors: ['Rose', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 119, name: 'Bague Fleur', price: 14000, imageUrl: 'https://i.pinimg.com/564x/63/92/e9/6392e9d4f85d5b951012ff36cdec0204.jpg', colors: ['Blanc', 'Rose'], options: ['Taille 56', 'Taille 58'] },
      { id: 120, name: 'Bague Eternelle', price: 19000, imageUrl: 'https://i.pinimg.com/564x/73/7d/11/737d11ad58c3245812e7305ce07e49a1.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 121, name: 'Bague Royale', price: 25000, imageUrl: 'https://i.pinimg.com/564x/88/bc/3f/88bc3f8cbe38ab570f838322033939cd.jpg', colors: ['Or', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 122, name: 'Bague Amour', price: 12000, imageUrl: 'https://i.pinimg.com/564x/b4/fa/a4/b4faa435814f9927ecc176c0f1d9aa49.jpg', colors: ['Rose', 'Blanc'], options: ['Taille 52', 'Taille 54'] },
      { id: 123, name: 'Bague Charme', price: 13000, imageUrl: 'https://i.pinimg.com/564x/0d/93/dd/0d93ddfdadfa962a7a31b5c1802b75da.jpg', colors: ['Blanc', 'Argent'], options: ['Taille 56', 'Taille 58'] },
      { id: 124, name: 'Bague Élégante', price: 11000, imageUrl: 'https://i.pinimg.com/736x/7e/d9/f0/7ed9f061a3a073995bbf2831402d67de.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 125, name: 'Bague Sublime', price: 16000, imageUrl: 'https://i.pinimg.com/564x/6a/d5/02/6ad502dec5f20587c2141a07d99aebf9.jpg', colors: ['Blanc', 'Argent'], options: ['Taille 54', 'Taille 56'] },
      { id: 126, name: 'Bague Princess', price: 17000, imageUrl: 'https://i.pinimg.com/564x/0a/23/97/0a2397f1f83ebe16dcdaf9b98eae789c.jpg', colors: ['Rose', 'Argent'], options: ['Taille 56', 'Taille 58'] },
      { id: 127, name: 'Bague Élégance', price: 14000, imageUrl: 'https://i.pinimg.com/564x/51/76/82/51768220937139bc3b9867619288d69f.jpg', colors: ['Argent', 'Or'], options: ['Taille 54', 'Taille 56'] },
      { id: 128, name: 'Bague Fleurie', price: 15000, imageUrl: 'https://i.pinimg.com/564x/f8/77/8b/f8778bfc37094364f015b6f9a534349f.jpg', colors: ['Rose', 'Argent'], options: ['Taille 54', 'Taille 56'] },
    ],
  },
  {
    id: 'casquette_homme',
    title: 'Casquettes Homme',
    products: [
      { id: 129, name: 'Casquette Baseball', price: 7000, imageUrl: 'https://i.pinimg.com/564x/a5/0f/e6/a50fe67ca2495b5d5404fd916501bda5.jpg', colors: ['Noir', 'Bleu'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 130, name: 'Casquette Snapback', price: 8000, imageUrl: 'https://i.pinimg.com/564x/5d/7e/2b/5d7e2bb395f8865c1dad04933f957cde.jpg', colors: ['Rouge', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 131, name: 'Casquette Trucker', price: 6000, imageUrl: 'https://i.pinimg.com/564x/8a/9e/b8/8a9eb8e8f6a7f83884833802c8af4b34.jpg', colors: ['Blanc', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 132, name: 'Casquette Vintage', price: 9000, imageUrl: 'https://i.pinimg.com/564x/02/89/00/02890087f3029f8d492802925b2c6afc.jpg', colors: ['Marron', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 133, name: 'Casquette Plate', price: 10000, imageUrl: 'https://i.pinimg.com/564x/6d/d6/f5/6dd6f5d10857afd80323528bbf0b2695.jpg', colors: ['Gris', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 134, name: 'Casquette Sport', price: 11000, imageUrl: 'https://i.pinimg.com/564x/b6/21/49/b62149949f26606e63b4cc2cb70b560d.jpg', colors: ['Bleu', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 135, name: 'Casquette Rétro', price: 12000, imageUrl: 'https://i.pinimg.com/564x/47/4f/27/474f275dabcde5c3c3104ba25d4e539b.jpg', colors: ['Vert', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 136, name: 'Casquette Militaire', price: 8000, imageUrl: 'https://i.pinimg.com/564x/0a/a1/bd/0aa1bd8f1cd8ad134a0f7b8b197ae5ea.jpg', colors: ['Camouflage', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 137, name: 'Casquette Moto', price: 9000, imageUrl: 'https://i.pinimg.com/564x/7f/0a/d1/7f0ad1bf4e0cd245f6ca8dd3780c276e.jpg', colors: ['Noir', 'Rouge'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 138, name: 'Casquette Etsy', price: 11000, imageUrl: 'https://i.pinimg.com/736x/43/fe/04/43fe0403d11451474446460700996fc8.jpg', colors: ['Blanc', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 139, name: 'Casquette Denim', price: 12000, imageUrl: 'https://i.pinimg.com/564x/66/7c/3f/667c3f558fa73f80d5e07419e21296a1.jpg', colors: ['Bleu', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 140, name: 'Casquette Hiver', price: 13000, imageUrl: 'https://i.pinimg.com/564x/d7/74/ea/d774eae28b3858e3d37ae9e712312f44.jpg', colors: ['Noir', 'Gris'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 141, name: 'Casquette Été', price: 8000, imageUrl: 'https://i.pinimg.com/736x/e9/6b/14/e96b14109f1206bbd299e357ff3280ab.jpg', colors: ['Beige', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 142, name: 'Casquette Casual', price: 10000, imageUrl: 'https://i.pinimg.com/736x/fe/37/bc/fe37bcccf50864ed35e863a747ac9651.jpg', colors: ['Bleu', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 143, name: 'Casquette Urbain', price: 15000, imageUrl: 'https://i.pinimg.com/564x/0a/bf/0d/0abf0d18e9c2c6f20568724b6eefa274.jpg', colors: ['Noir', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 144, name: 'Casquette Minimaliste', price: 9000, imageUrl: 'https://i.pinimg.com/564x/0c/39/d3/0c39d34b5ecbaa6b5306cc54bfdfe865.jpg', colors: ['Noir', 'Gris'], options: ['Taille unique', 'Taille ajustable'] },
    ],
  },
  {
    id: 'casquette_femme',
    title: 'Casquettes Femme',
    products: [
      { id: 145, name: 'Casquette Sport Femme', price: 10000, imageUrl: 'https://i.pinimg.com/564x/65/f6/24/65f62487198e1702962a846625a631e8.jpg', colors: ['Rose', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 146, name: 'Casquette Glamour', price: 12000, imageUrl: 'https://i.pinimg.com/564x/c8/24/e0/c824e0af156b8881e1dc575f6094991e.jpg', colors: ['Noir', 'Doré'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 147, name: 'Casquette Chic', price: 11000, imageUrl: 'https://i.pinimg.com/564x/46/e9/89/46e98922a268c89c7789c5754577c08a.jpg', colors: ['Blanc', 'Rose'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 148, name: 'Casquette Classy', price: 13000, imageUrl: 'https://i.pinimg.com/564x/1f/f5/04/1ff504db79fdc0b7b55ae3b5e80e1bef.jpg', colors: ['Noir', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 149, name: 'Casquette Été Femme', price: 9000, imageUrl: 'https://i.pinimg.com/564x/42/21/30/4221301820b8998ad898b8e7c0ec5eb5.jpg', colors: ['Bleu', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 150, name: 'Casquette Élégante', price: 11000, imageUrl: 'https://i.pinimg.com/564x/49/b8/eb/49b8eb11d2cc3fb2db9fd9a3b5ba2383.jpg', colors: ['Noir', 'Doré'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 151, name: 'Casquette Casual Femme', price: 8000, imageUrl: 'https://i.pinimg.com/564x/c5/cf/66/c5cf66b479e52398fd8feda33210adce.jpg', colors: ['Gris', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 152, name: 'Casquette Denim Femme', price: 13000, imageUrl: 'https://i.pinimg.com/564x/0a/5d/17/0a5d17df89361e38af730a16b9121804.jpg', colors: ['Bleu', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 153, name: 'Casquette Vintage Femme', price: 9000, imageUrl: 'https://i.pinimg.com/564x/ea/df/32/eadf321afd8bded31d11cde5cdd3aefb.jpg', colors: ['Rose', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 154, name: 'Casquette Moto Femme', price: 12000, imageUrl: 'https://i.pinimg.com/564x/ee/e9/58/eee958d19522603f6ce84d26643ea3ca.jpg', colors: ['Noir', 'Rouge'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 155, name: 'Casquette Luxe Femme', price: 15000, imageUrl: 'https://i.pinimg.com/564x/58/95/17/58951739fcf788c98ab0f296e11b5ec6.jpg', colors: ['Blanc', 'Doré'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 156, name: 'Casquette Hiver Femme', price: 11000, imageUrl: 'https://i.pinimg.com/564x/b6/21/49/b62149949f26606e63b4cc2cb70b560d.jpg', colors: ['Noir', 'Gris'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 157, name: 'Casquette outdoor ', price: 9000, imageUrl: 'https://i.pinimg.com/564x/00/87/6a/00876a5cc882919ba30e5d1a411069fd.jpg', colors: ['Rose', 'Blanc'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 158, name: 'Casquette Chic Femme', price: 12000, imageUrl: 'https://i.pinimg.com/564x/10/4c/ca/104ccacd74a42f2484e3451ba4aae9f1.jpg', colors: ['Doré', 'Noir'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 159, name: 'Casquette Urban Femme', price: 10000, imageUrl: 'https://i.pinimg.com/736x/dc/9b/7f/dc9b7fa42e22b911a3633a6fa382c287.jpg', colors: ['Noir', 'Gris'], options: ['Taille unique', 'Taille ajustable'] },
      { id: 160, name: 'Casquette Tendance Femme', price: 13000, imageUrl: 'https://i.pinimg.com/564x/62/99/f4/6299f4a430ea3fc0fa4762862d1a66ac.jpg', colors: ['Blanc', 'Doré'], options: ['Taille unique', 'Taille ajustable'] },
    ],
  },
  

];

function Accessoires() {
  const { addToCart } = useContext(CartContext);
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
    <div className="outfits text-black py-16 px-8">
      <h2 className="page-title text-center text-4xl font-extrabold mb-12 underline">Accessoires</h2>
      {sections.map(section => (
        <div key={section.id} className="section mb-16">
          <h3 className="section-title text-2xl font-bold mb-6 underline text-center">{section.title}</h3>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md" onClick={() => handlePrev(section.id)}>
              <FaChevronLeft className="text-white" />
            </button>
            <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.slice(indices[section.id], indices[section.id] + 4).map(product => (
                <Link to={`/product-accessoire/${product.id}`} key={product.id} className="product-card-link">
                  <div className="product-card bg-white text-black rounded-lg shadow-lg p-4 m-4 flex flex-col items-center h-80 transition-transform transform hover:scale-105">
                    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
                    <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
                    <p className="product-price text-blue-500 font-bold mb-2">{product.price} FCFA</p>
                    <Link to={`/product/${product.id}`} className="mt-auto bg-red-950 hover:bg-red-900 text-white py-1 px-3 rounded transition duration-300 text-center">
            Voir les détails
          </Link>
                  </div>
                </Link>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md" onClick={() => handleNext(section.id, section.products.length)}>
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accessoires;
