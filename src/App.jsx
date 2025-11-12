import Hatch from "./components/Hatch";
import hatches from "./data/hatch";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-700">
        🎄 Joulukalenteri 2025 🎁
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {hatches.map((luukku) => (
          <Hatch key={luukku.id} number={luukku.id} content={luukku} />
        ))}
      </div>
    </div>
  );
};

export default App;
