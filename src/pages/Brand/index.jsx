import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Card, CardBody, Button, Link, CardHeader } from "@nextui-org/react";
import Sidebar from '../../components/sidebar/index';
import brands from '../../assets/brands.json'
import CardGrid from "../../components/cardGrid/index"

function BrandComponent() {
    const location = useLocation();
    const { id } = useParams();
    const brand = location.state.brand;

    console.log("brand :", brand )


    return (
        <>
            <Card className='w-screen h-full flex flex-col justify-center align-center p-4'>
                <h1 className="font-Roboto text-6xl font-bold leading-tight line-clamp-0 text-center my-5 mb-8">{brand.brand} Sneakers</h1>
                <div className='flex justify-center align-center'>
                    <ul className='w-[40%] flex justify-between uppercase font-ui-sans-serif text-gray-500'>
                        <li className="text-white cursor-pointer ">All</li>
                        <li className="hover:text-purple-600 cursor-pointer">Men</li>
                        <li className="hover:text-purple-600 cursor-pointer">Women</li>
                        <li className="hover:text-purple-600 cursor-pointer">Kids</li>
                    </ul>  
                </div>
             <div className='flex'>
                <Card className='bg-transparent w-[30%] mt-12 mr-4 rounded p-1'>
                    <Sidebar />
                </Card>
                <Card className='bg-transparent h-fit w-[100%] mt-12 rounded p-4'>
                    <CardGrid data={brands} />
                </Card>
             </div>   
               
            </Card>
        </>
    );
}

export default BrandComponent;




