function CardGrid({ data }) {
    
    const numColumns = data.length > 3 ? 'grid-cols-4' : 'grid-cols-3';

    return (
        <div className={`grid gap-4 ${numColumns} justify-center`}>
            {data.map((brand, index) => (
                <div key={index} className="h-50 rounded overflow-hidden">
                    <img src={brand.image} alt={brand.brand} className="w-full h-[60%] border p-6" />
                    <div className="">
                        <p className="font-bold text-xl text-gray-300">{brand.brand}</p>
                        <p className="text-sm text-gray-100">{brand.name}</p>
                        <p className="font-bold ">{brand.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;