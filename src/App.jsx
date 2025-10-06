import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./components/plants/PlantList";
import Cart from "./components/cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existingItem = cart.find((item) => item.id === plant.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const incrementQuantity = (plantId) => {
    setCart(
      cart.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (plantId) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-green-800 mb-2">
            🌿 Proper Plants
          </h1>
          <p className="text-gray-600 text-lg">
            Your local nursery for all your landscaping needs
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <PlantList plants={PLANTS} onAddToCart={addToCart} />
          </div>
          <div className="lg:col-span-1">
            <Cart
              cart={cart}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
