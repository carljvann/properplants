export default function PlantCard({ plant, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow bg-white">
      <div className="text-5xl mb-2">{plant.image}</div>
      <h3 className="text-sm font-semibold mb-3">{plant.name}</h3>
      <button
        onClick={() => onAddToCart(plant)}
        className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
