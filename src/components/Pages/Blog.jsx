import React from 'react';
import b1 from "../../assets/b1.avif";
import b2 from "../../assets/b2.avif";
import b3 from "../../assets/b3.avif";
import b4 from "../../assets/b4.avif";
import b5 from "../../assets/b5.avif";
import b6 from "../../assets/b6.avif";

export const BlogData = [
  {
    id: 1,
    image: b1,
    title: "The Evolution of Sustainable Fashion: Trends and Innovations",
    date: "Feb 28, 2022",
    data: "In recent years, sustainable fashion has emerged as a powerful movement within the industry, driven by increasing awareness of environmental ",
  },
  {
    id: 2,
    image: b2,
    title: "Fashion Icons Through the Decades: Timeless Style Lessons",
    date: "Feb 6, 2022",
    data: "Fashion has always been influenced by iconic figures whose style transcends time and leaves a lasting impact on the industry. Let's take a journey",
  },
  {
    id: 3,
    image: b3,
    title: "How to Build a Capsule Wardrobe: Essential Tips for Every Fashionista",
    date: "Mar 15, 2022",
    data: "In a world where less is more, the concept of a capsule wardrobe has gained popularity among fashion enthusiasts. A capsule wardrobe consists of",
  },
  {
    id: 4,
    image: b4,
    title: "Accessorizing 101: Elevate Your Outfits with the Perfect Accessories",
    date: "Mar 13, 2024",
    data: "Accessories are the ultimate style secret, capable of taking any outfit from ordinary to extraordinary. In this guide, we'll explore the art",
  },
  {
    id: 5,
    image: b5,
    title: "Behind the Scenes: The Making of a Fashion Campaign",
    date: "Jan 12, 2022",
    data: "Fashion campaigns are the culmination of a collaborative effort involving various creative professionals who work tirelessly behind the scenes",
  },
  {
    id: 6,
    image: b6,
    title: "Top 10 Trends to Watch Out for in Fashion Week 2024.",
    date: "Apr 8, 2022",
    data: "Fashion Week 2024 has arrived, and with it comes a fresh wave of trends to inspire our wardrobes for the upcoming seasons. From bold color palettes",
  },
];

const Blog = () => {
  return (
    <div className="px-4 py-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BlogData.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto"
          >
            <img
              src={item.image}
              className="h-[200px] w-full object-cover"
              alt={item.title}
            />
            <div className="p-4">
              <h2 className="font-bold text-md mb-1">{item.title}</h2>
              <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-300 mb-2">
                {item.date}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wide">
                {item.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
