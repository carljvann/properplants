import PlantCard from "./PlantCard";

export default function PlantList({ plants, onAddToCart }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-green-800">
        Available Plants
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
