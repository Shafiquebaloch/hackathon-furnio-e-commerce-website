import React from "react";
import Image from "next/image";  // Import next/image for optimization
import "../Style/product.css";

interface Card {
  name: string;
  age: number;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  {
    name: 'Syltherine',
    price: "Rp 2.500.000",
    age: 30,
    image: "/Images/product1.png",
    description: 'Stylish cafe chair',
  },
  {
    name: 'Jane Smith',
    price: "Rp 2.500.000",
    age: 25,
    image: "/Images/product2.png",
    description: 'A creative designer who loves creating stunning visuals.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image:'/Images/product3.png',
    description: 'A software engineer specializing in backend systems.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image: '/Images/product4.jpg',
    description: 'A software engineer specializing in backend systems.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image: '/Images/product5.png',
    description: 'A software engineer specializing in backend systems.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image: '/Images/product6.png',
    description: 'A software engineer specializing in backend systems.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image: '/Images/product7.jpg',
    description: 'A software engineer specializing in backend systems.',
  },
  {
    name: 'Sam Wilson',
    price: "Rp 2.500.000",
    age: 28,
    image: '/Images/product8.jpeg',
    description: 'A software engineer specializing in backend systems.',
  },
];

const Products: React.FC = () => {
  return (
    <div className="productTitle">
      <div className="product">
        <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
      </div>
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image}
              alt={card.name}  // Use the product name as alt text
              width={250}  // Define the width for optimization
              height={250}  // Define the height for optimization
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-12">
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
