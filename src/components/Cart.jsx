import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  applyTempUpdate,
  removeFromCart,
  updateTempQuantity,
} from "../features/ShopCart/cartSlice";

const Cart = () => {
  const { items: cartItems, tempItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, value) => {
    const quantity = Number(value);
    if (quantity >= 1) {
      dispatch(updateTempQuantity({ id, quantity }));
    }
  };

  const handleApply = (id) => {
    dispatch(applyTempUpdate(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold">Your cart is empty</h3>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-black text-white rounded"
          >
            Back To Home
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Your Cart
          </h2>

          <div className="space-y-6">
            {cartItems.map((item) => {
              const tempItem = tempItems.find((temp) => temp.id === item.id);
              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center border-b pb-4 gap-4"
                >
                  {/* ✅ IMAGE SECTION */}
                  <div className="w-full md:w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* ✅ DETAILS + CONTROLS */}
                  <div className="flex-1 w-full flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-600 text-sm">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        value={tempItem.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        className="w-16 border px-2 py-1 text-center"
                      />
                      <button
                        onClick={() => handleApply(item.id)}
                        className="bg-teal-200 font-bold text-black px-3 py-1 rounded text-sm"
                      >
                        Apply
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="bg-red-200 text-black font-bold px-3 py-1 rounded text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-right mt-8 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
