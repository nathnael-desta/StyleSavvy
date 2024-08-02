const comments = ["Great quality, smooth shopping, quick delivery! StyleSavvy always impresses me.", "Stylish options, user-friendly site, prompt shipping! I love shopping at StyleSavvy.", "Amazing selection, easy website, fast shipping! StyleSavvy is my go-to for stylish finds.", "Fantastic styles, easy navigation, speedy delivery! StyleSavvy is my favorite store.", "Trendy items, seamless experience, fast shipping! StyleSavvy never disappoints."]

const clothes = {
  hoodies: [
    {
      src: "public/assets/hoodies/h1.png",
      name: "Drop Shoulder Hoodie - Earth",
      price: "$59.99"
    },
    {
      src: "@/assets/hoodies/h2.png",
      name: "Drop Shoulder Zip Hoodie - Stone",
      price: "$59.99"
    },
    {
      src: "@/assets/hoodies/h3.png",
      name: "Drop Shoulder Hoodie- Slate",
      price: "$59.99"
    },
    {
      src: "@/assets/hoodies/h4.png",
      name: "Drop Shoulder Hoodie - Sand",
      price: "$59.99"
    },
    {
      src: "@/assets/hoodies/h5.png",
      name: "Cropped Hoodie - Vintage Grey",
      price: "$69.99"
    },
    {
      src: "@/assets/hoodies/h6.png",
      name: "Drop Shoulder Hoodie - Vintage Navy",
      price: "$69.99"
    },
  ],
  jackets: [
    {
      src: "@/assets/jackets/ja1.png",
      name: "Harrington Racer Jacket 2025",
      price: "$356.00"
    },
    {
      src: "@/assets/jackets/ja2.png",
      name: "Ripstop Puffer Jacket 2024",
      price: "$276.00"
    },
    {
      src: "@/assets/jackets/ja3.png",
      name: "Thermal Military Parka 2024",
      price: "$636.00"
    },
    {
      src: "@/assets/jackets/ja4.png",
      name: "Lightweight Corduroy Jacket 2024",
      price: "$180.00"
    },
    {
      src: "@/assets/jackets/ja5.png",
      name: "Midweight Flannel Lumber Jacket 2024",
      price: "$180.00"
    },
    {
      src: "@/assets/jackets/ja6.png",
      name: "Ventile Thermal Field Jacket 2024",
      price: "$796.00"
    }
  ],
  jeans: [
    {
      src: "@/assets/jeans/j1.png",
      name: "BEANS CASUAL",
      price: "$118.00"
    },
    {
      src: "@/assets/jeans/j2.png",
      name: "BEANS TAPERED",
      price: "$118.00"
    },
    {
      src: "@/assets/jeans/j3.png",
      name: "BUCKS",
      price: "$118.00"
    },
    {
      src: "@/assets/jeans/j4.png",
      name: "DARKEST BLUES",
      price: "$118.00"
    },
    {
      src: "@/assets/jeans/j5.png",
      name: "FULTONS",
      price: "$118.00"
    },
    {
      src: "@/assets/jeans/j6.png",
      name: "HYDES COOLMAX",
      price: "$118.00"
    },
  ],
  shoes: [
    {
      src: "@/assets/shoes/sh1.png",
      name: "Nike 'Dunk Low'",
      price: "$115.00"
    },
    {
      src: "@/assets/shoes/sh2.png",
      name: "Air Jordan '4 Retro' GS",
      price: "$160.00"
    },
    {
      src: "@/assets/shoes/sh3.png",
      name: "Air Jordan '12 Retro' M",
      price: "$130.00"
    },
    {
      src: "@/assets/shoes/sh4.png",
      name: "Air Jordan '1 Retro High OG'",
      price: "$180.00"
    },
    {
      src: "@/assets/shoes/sh5.png",
      name: "Nike 'Dunk Low' GS",
      price: "$72.00"
    },
    {
      src: "@/assets/shoes/sh6.png",
      name: "Asics 'Gel-Kayano 14' M ",
      price: "$150.00"
    },
  ],
  shorts: [
    {
      src: "@/assets/shorts/s1.png",
      name: "The Armadas 7'",
      price: "$59.50"
    },
    {
      src: "@/assets/shorts/s2.png",
      name: "The Khakinators 7' Flat Front",
      price: "$54.50"
    },
    {
      src: "@/assets/shorts/s3.png",
      name: "The Dark N' Stormies 4'",
      price: "$59.50"
    },
    {
      src: "@/assets/shorts/s4.png",
      name: "The Fowl Plays 5.5' ",
      price: "$69.50"
    },
    {
      src: "@/assets/shorts/s5.png",
      name: "The On The Horizons 7'The On The Horizons 7'",
      price: "$24.00"
    },
    {
      src: "@/assets/shorts/s6.png",
      name: "The Quests 7' ",
      price: "$34.00"
    },
  ],
  tShirt: [
    {
      src: "@/assets/tShirt/ts1.png",
      name: "Patriot Crew Flag T-Shirt",
      price: "$24.99"
    },
    {
      src: "@/assets/tShirt/ts2.png",
      name: "Long-Sleeve T-Shirt",
      price: "$34.99"
    },
    {
      src: "@/assets/tShirt/ts3.png",
      name: "American Flag T-Shirt",
      price: "$29.99"
    },
    {
      src: "@/assets/tShirt/ts4.png",
      name: "It's A Father Figure T-Shirt",
      price: "$29.99"
    },
    {
      src: "@/assets/tShirt/ts5.png",
      name: "God, Family, Country, & Freedom T-Shirt",
      price: "$29.99"
    },
    {
      src: "@/assets/tShirt/ts6.png",
      name: "Essentials Long-Sleeve T-Shirt",
      price: "$74.99"
    }
  ]
}

const popular = [
  {
    src: "@/assets/hoodies/h1.png",
    name: "Drop Shoulder Hoodie - Earth",
    price: "$59.99"
  },
  {
    src: "@/assets/shorts/ts1.png",
    name: "Patriot Crew Flag T-Shirt",
    price: "$24.99"
  },
  {
    src: "@/assets/shoes/sh1.png",
    name: "Nike 'Dunk Low'",
    price: "$115.00"
  },
  {
    src: "@/assets/hoodies/h2.png",
    name: "Drop Shoulder Zip Hoodie - Stone",
    price: "$59.99"
  },
]

const cart = [
  {
    src: "@/assets/tShirt/ts1.png",
      name: "Patriot Crew Flag T-Shirt",
      price: "$24.99",
    size: "M",
    quantity: 1,
    clothingNo: 1,
    index: 0
  },
  {
    src: "@/assets/shoes/sh1.png",
    name: "Nike 'Dunk Low'",
    price: "$115.00",
    size: "M",
    quantity: 1,
    clothingNo: 5,
    index: 0
  }
];

export default {
  getAllComments() {
    return comments;
  },
  getAllClothes() {
    return clothes;
  },
  getAllPopular() {
    return popular;
  },
  getAllCart() {
    return cart;
  },
  addToCart(item) {
    cart.push(item);
  },
  removeItemByName(name) {
    const index = cart.findIndex(item => item.name === name);
    
    if (index !== -1) {
      cart.splice(index, 1);
    }
  },
  isItemInCart(name) {
    if (cart.findIndex(item => item.name === name) !== -1) {
      return true;
    }
    return false;
  }
}