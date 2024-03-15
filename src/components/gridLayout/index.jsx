import React from 'react';
import Sidebar from "../sidebar/index"

function GridComponent({ onSizeSelect }) {

    const handleSizeSelect = (size) => {
        onSizeSelect(size);
    };
    const gridData = ["3", "4", "5", "6", "7", "8", "9", "10", "11"];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-center">
            {gridData.map((item, index) => (
                <div key={index} className="border hover:bg-purple-600 text-white p-2 flex items-center justify-center cursor-pointer" onClick={() => handleSizeSelect(item)}>
                    <p className="text-center">{item}</p>
                </div>
            ))}
        </div>
    );
}

function Index({ filteredData }) {

    const [selectedSize, setSelectedSize] = React.useState('');

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };
    const returnedData = selectedSize ? filteredData.filter(item => item.size === selectedSize) : filteredData;

    return (
        <>
            <GridComponent data={returnedData} onSizeSelect={handleSizeSelect} />
           {/*  <Sidebar sizeData={returnedData} />  */}
        </>
    );
}

export default Index;
