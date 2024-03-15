function CardGrid({ data }) {
    const numColumns = data.length > 3 ? 'grid-cols-4' : 'grid-cols-3';

    return (
        <div className={`grid gap-4 ${numColumns} justify-center`}>
            {data.map((brand, index) => (
                <div key={index} className="bg-transparent rounded overflow-hidden mb-8">
                    <img src={brand.image} alt={brand.brand} className="w-full h-[80%] border p-4" />
                    <div className=" mb-8">
                        <p className="font-bold text-xl text-gray-300">{brand.brand}</p>
                        <p className="text-sm text-gray-100">New Balance 550 'Postal Pack'</p>
                        <p className="font-bold text-black">R 1600</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;