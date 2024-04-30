import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Card } from "@nextui-org/react";
import Sidebar from '../../components/sidebar/index';
import CardGrid from "../../components/cardGrid/index";
import brands from '../../assets/brandsneaks.json';


function BrandComponent() {

    const location = useLocation();
    const { id } = useParams();
    const brand = location.state.brand;

    const [category, setCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(brands);

    // Function to filter the brands based on category
    const filterBrands = () => {
        if (category === "All") {
            return brands;
        } else {
            return brands.filter(brand => brand.category === category);
        }
    };

    useEffect(() => {
        const filteredBrands = filterBrands();
        setFilteredData(filteredBrands);
    }, [category]);

    const receiveFilteredData = (data) => {
        setFilteredData(data);
    };

    return (
        <>
            <Card className='w-screen h-full flex flex-col justify-center align-center p-4 rounded'>
                <h1 className="font-Roboto text-6xl font-bold leading-tight line-clamp-0 text-center my-5 mb-8">{brand.brand} Sneakers</h1>
                <div className='flex justify-center align-center'>
                    <ul className='w-[40%] flex justify-between uppercase font-ui-sans-serif text-gray-500'>
                        <li className={`font-serif cursor-pointer ${category === "All" ? "text-white" : "hover:text-purple-600"}`} onClick={() => setCategory("All")}>All</li>
                        <li className={`font-serif cursor-pointer ${category === "Men" ? "text-white" : "hover:text-purple-600"}`} onClick={() => setCategory("Men")}>Men</li>
                        <li className={`font-serif cursor-pointer ${category === "Women" ? "text-white" : "hover:text-purple-600"}`} onClick={() => setCategory("Women")}>Women</li>
                        <li className={`font-serif cursor-pointer ${category === "Kids" ? "text-white" : "hover:text-purple-600"}`} onClick={() => setCategory("Kids")}>Kids</li>
                    </ul>
                </div>
                <div className='flex'>
                    <Card className='bg-transparent w-[30%] mt-12 mr-4 rounded p-1'>
                        <Sidebar data={filterBrands()} sendFilteredData={receiveFilteredData} />
                    </Card>
                    <Card className='bg-transparent h-fit w-[100%] mt-12 rounded p-4'>
                        <CardGrid data={filteredData} />
                    </Card>
                </div>
            </Card>
        </>
    );
}

export default BrandComponent;
