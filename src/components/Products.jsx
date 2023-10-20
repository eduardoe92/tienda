
const Products = [
    {
        id: 1,
        name: 'Gray Shoe',
        price: 20.00,
        image: `${process.env.PUBLIC_URL}/images/prod_2.png`,
        category: ['shoes', 'men'],
        quantity: 1,
    },
    {
        id: 2,
        name: 'Blue Shoe High Heels',
        price: 28.00,
        discountPrice: 46.00,
        image: `${process.env.PUBLIC_URL}/images/prod_3.png`,
        category: ['shoes', 'women'],
        quantity: 1,
    },
    {
        id: 3,
        name: 'Denim Jacket',
        price: 28.00,
        discountPrice: 46.00,
        image: `${process.env.PUBLIC_URL}/images/model_5.png`,
        category: 'men',
        quantity: 1,
    },
    {
        id: 4,
        name: 'Leather Green Bag',
        price: 28.00,
        discountPrice: 46.00,
        image: `${process.env.PUBLIC_URL}/images/prod_1.png`,
        category: ['women', 'handbags'],
        quantity: 1,
    },
    {
        id: 5,
        name: 'Smooth Cloth',
        price: 28.00,
        discountPrice: 46.00,
        image: `${process.env.PUBLIC_URL}/images/model_1.png`,
        category: 'women',
        quantity: 1,
    },
    {
        id: 6,
        name: 'Yellow Jacket',
        price: 58.00,
        image: `${process.env.PUBLIC_URL}/images/model_7.png`,
        category: 'men',
        quantity: 1,
    },
];

export default Products;
