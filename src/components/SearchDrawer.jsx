import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allProducts } from "../data/allProduct";

const SearchDrawer = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filtered = allProducts.filter((item) =>
    (item?.title || item?.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg z-50 p-4 overflow-y-auto transition-all duration-300">
      <button
        onClick={onClose}
        className="text-xl float-right text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
      >
        ❌
      </button>
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:placeholder-gray-400"
      />

      { searchTerm.length>0 &&filtered.length > 0 ? (
        filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/products/${item.id}`);
              onClose();
            }}
            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded transition-all"
          >
            <p className="font-medium text-gray-800 dark:text-white">
              {item.title || item.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No matching products.</p>
      )}
    </div>
  );
};

export default SearchDrawer;
