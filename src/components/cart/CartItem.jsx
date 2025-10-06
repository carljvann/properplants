export default function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{item.image}</span>
        <span className="font-medium text-sm">{item.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrement(item.id)}
          className="bg-red-500 text-white w-7 h-7 rounded hover:bg-red-600 transition-colors font-bold"
        >
          -
        </button>
        <span className="font-semibold min-w-[2rem] text-center">
          {item.quantity}
        </span>
        <button
          onClick={() => onIncrement(item.id)}
          className="bg-green-500 text-white w-7 h-7 rounded hover:bg-green-600 transition-colors font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
