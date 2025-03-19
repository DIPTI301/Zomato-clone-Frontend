const pizzas = [
  {
    name: "Pepper Barbecue Chicken",
    varients: ["small", "medium", "large"],
    prices: [{ small: 250, medium: 380, large: 520 }],
    category: "non-veg",
    image: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    description: "Delicious pepper barbecue chicken on a cheesy crust."
  },
  {
    name: "Non Veg Supreme",
    varients: ["small", "medium", "large"],
    prices: [{ small: 300, medium: 450, large: 600 }],
    category: "non-veg",
    image:"https://th.bing.com/th/id/OIP.4K6JzM2T2ssGZsqPU4lPBgHaE8?w=244&h=180&c=7&r=0&o=5&pid=1.7 ", // ✅ Corrected URL
    description: "Loaded with chicken, sausages, and exotic toppings."
  },
  {
    name: "cheese pizza",
    varients: ["small", "medium", "large"],
    prices: [{ small: 220, medium: 370, large: 500 }],
    category: "veg",
    image: "https://thestayathomechef.com/wp-content/uploads/2023/07/Easy-Cheese-Pizza_Square-1.jpg",
    description: "A delightful mix of fresh veggies and cheese."
  },
  {
    name: "Margherita",
    varients: ["small", "medium", "large"],
    prices: [{ small: 150, medium: 300, large: 350 }],
    category: "veg",
    image: "https://www.dominos.co.in/files/items/Margherita.jpg",
    description: "Classic Margherita with rich tomato and cheese."
  },
  {
    name: "Veg Extravaganza",
    varients: ["small", "medium", "large"],
    prices: [{ small: 270, medium: 430, large: 570 }],
    category: "veg",
    image: "https://www.dominos.co.in/files/items/Veg_Extravaganza.jpg",
    description: "Topped with olives, jalapenos, mushrooms, and cheese."
  },
  {
    name: "Double Cheese Margherita",
    varients: ["small", "medium", "large"],
    prices: [{ small: 320, medium: 480, large: 630 }],
    category: "non-veg",
    image: "https://d2n7tchuu1wmsv.cloudfront.net/uploads/4451/products/1542285768_1477659906_61.jpg", // ✅ Corrected URL
    description: "A meat lover’s delight with loads of chicken toppings."
  }
];

export default pizzas;