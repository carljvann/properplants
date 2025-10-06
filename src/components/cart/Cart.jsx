import CartItem from "./CartItem";

export default function Cart({ cart, onIncrement, onDecrement }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white border-2 border-green-200 rounded-lg p-6 sticky top-4">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
          <div className="mt-4 pt-4 border-t-2">
            <p className="text-lg font-bold text-green-800">
              Total Items: {totalItems}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
