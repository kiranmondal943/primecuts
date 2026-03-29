export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="bg-primeDark text-white p-12 rounded-xl text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Premium Cuts, Delivered Fresh.</h2>
        <p className="text-lg">Hygienically packed meat and seafood to your doorstep.</p>
        <button className="mt-6 bg-primeRed px-6 py-3 rounded-lg font-bold">Shop Now</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Chicken', 'Beef & Mutton', 'Fresh Fish', 'Ready to Cook'].map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-sm border text-center font-bold text-lg">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
