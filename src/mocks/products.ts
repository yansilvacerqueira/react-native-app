export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  icon: string;
  _id: string;
}

export const products = [
  {
    _id: '6372e040f52e37ef85xx353fe2c5e',
    name: 'Sushi',
    description: 'Sushi tradicional com arroz e salmão',
    imagePath: require('../assets/images/sushi.png'),
    price: 5,
    ingredients: [
      {
        name: 'Salmao',
        icon: '🐟',
        _id: '6372e040f52e37ef85fe2c312dd5f',
      },
      {
        name: 'Arroz japones',
        icon: '🍚',
        _id: '6372e040f52e37ef8321x5fe2c60',
      },
    ],
  },
  {
    _id: '6372e040f52e37ef85fe32xqw2c5e',
    name: 'Sashimi',
    description: 'Sashimi de salmão',
    imagePath: require('../assets/images/sashimi.png'),
    price: 10,
    ingredients: [
      {
        name: 'Salmão',
        icon: '🐟',
        _id: '6372e040f52e37ef85fe23212c5f',
      },
    ],
  },
  {
    _id: '6372e040f52e37ef85fe2c312315e',
    name: 'Salmão light',
    description: 'Light com arroz, salmão, cebolinha, gergelim e cream cheese',
    imagePath: require('../assets/images/ligth.png'),
    price: 7,
    ingredients: [
      {
        name: 'Salmão',
        icon: '🐟',
        _id: '6372e040f52ex37ef85fe2c5f',
      },
      {
        name: 'Arroz japones',
        icon: '🍚',
        _id: '6372e040f52e37exadf85fe2c60',
      },
      {
        name: 'Cebolinha',
        icon: '🧅',
        _id: 'sdsxasx3',
      },
      {
        name: 'Gergelim',
        icon: '🌰',
        _id: '6372e040xcc3f52e37ef85fe2c60',
      },
      {
        name: 'Cream cheese',
        icon: '🧀',
        _id: '6372e040f52e37ef85fe2c604445',
      },
    ],
  },
  {
    _id: '6372e276a381xxxxxc106c0f854cb3',
    name: 'Coca cola',
    description: 'Coca cola lata geladinha topzera',
    imagePath: require('../assets/images/coca.png'),
    price: 7,
    ingredients: [],
  },
];
