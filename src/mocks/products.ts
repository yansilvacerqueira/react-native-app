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
    _id: '6372e040f52e37ef85fe2c5e',
    name: 'Pizza quatro queijos',
    description: 'Deliciosa pizza quatro queijos com borda simples',
    imagePath: '1668472896991-quatro-queijos.png',
    price: 40,
    ingredients: [
      {
        name: 'Mussarela',
        icon: '🧀',
        _id: '6372e040f52e37ef85fe2c5f',
      },
      {
        name: 'Parmesão',
        icon: '🧀',
        _id: '6372e040f52e37ef85fe2c60',
      },
      {
        name: 'Gouda',
        icon: '🧀',
        _id: '6372e040f52e37ef85fe2c61',
      },
      {
        name: 'Brie',
        icon: '🧀',
        _id: '6372e040f52e37ef85fe2c62',
      },
    ],
  },
  {
    _id: '6372e276a381106c0f854cb3',
    name: 'Coca cola',
    description: 'Coca cola lata geladinha topzera',
    imagePath: '1668473462705-coca-cola.png',
    price: 7,
    ingredients: [],
  },
];
