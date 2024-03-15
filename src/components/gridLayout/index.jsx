import React from 'react';

function GridComponent({ data }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-center">
            {data.map((item, index) => (
                <div key={index} className="border hover:bg-purple-600 text-white p-2 flex items-center justify-center cursor-pointer">
                    <p className="text-center">{item}</p>
                </div>
            ))}
        </div>
    );
}

function Index() {

    // Sample data
    const gridData = ["3", "4", "5", "6", "7", "8", "9", "10", "11"];

    return (
        <>
            <GridComponent data={gridData} />
        </>
    );
}

export default Index;
